import { create } from 'zustand';
import type { Client, NewClient } from '@/types/clientTypes';
import { api } from '@/services/api';

interface ClientState {
  clients: Client[];
  perPage: number;
  currentPage: number;
  totalPages: number;
  setClients: (clients: Client[]) => void;
  setPerPage: (page: number) => void;
  setCurrentPage: (page: number) => void;
  setTotalPages: (total: number) => void;
  addClient: (client: NewClient) => Promise<void>;
  updateClient: (client: Client) => void;
  deleteClient: (id: number) => Promise<void>;
  fetchClients: () => Promise<void>;
   username: string;
  setUsername: (name: string) => void;
    selectedClients: Client[];
  addToSelected: (client: Client) => void;
  removeFromSelected: (id: number) => void;
  isSelected: (id: number) => boolean;
  clearSelected: () => void;
  isLoading: boolean;
setIsLoading: (loading: boolean) => void;


}

export const useClientStore = create<ClientState>((set, get) => ({
  clients: [],
  perPage: 8,
  currentPage: 1,
  totalPages: 1,
  username: '',
    selectedClients: [],
    isLoading: false,
setIsLoading: (loading) => set({ isLoading: loading }),


  addToSelected: (client) =>
    set((state) => ({
      selectedClients: [...state.selectedClients, client],
    })),

  removeFromSelected: (id) =>
    set((state) => ({
      selectedClients: state.selectedClients.filter((c) => c.id !== id),
    })),

  isSelected: (id) => get().selectedClients.some((c) => c.id === id),

  clearSelected: () => set({ selectedClients: [] }),

  setUsername: (name: string) => set({ username: name }),

  setClients: (clients) => set({ clients }),

  setPerPage: (newPerPage) => {
    const { clients, currentPage } = get();
    const newTotalPages = Math.ceil(clients.length / newPerPage);
    const updatedPage = currentPage > newTotalPages ? newTotalPages : currentPage;

    set({
      perPage: newPerPage,
      currentPage: updatedPage,
      totalPages: newTotalPages,
    });
  },

  setCurrentPage: (page) => set({ currentPage: page }),
  setTotalPages: (total) => set({ totalPages: total }),

  addClient: async (client) => {
    try {
      await api.post('/users', client);

     
      const responseAll = await api.get('/users');
      const newTotalPages = responseAll.data.totalPages;

      const lastPageResponse = await api.get(`/users?page=${newTotalPages}&limit=${get().perPage}`);

      set((state) => ({
        clients: state.currentPage === newTotalPages ? lastPageResponse.data.clients : state.clients,
        totalPages: newTotalPages,
      }));
    } catch (error) {
      console.error('Erro ao adicionar cliente:', error);
    }
  },

updateClient: async (updatedClient) => {
  try {
    const response = await api.patch(`/users/${updatedClient.id}`, {
      name: updatedClient.name,
      salary: updatedClient.salary,
      companyValuation: updatedClient.companyValuation,
    });

    set((state) => ({
      clients: state.clients.map((client) =>
        client.id === updatedClient.id ? response.data : client
      ),
    }));
  } catch (error) {
    console.error('Erro ao atualizar cliente:', error);
  }
},


  deleteClient: async (id: number) => {
    try {
      await api.delete(`/users/${id}`);
      await get().fetchClients();
    } catch (error) {
      console.error('Erro ao deletar cliente:', error);
    }
  },

fetchClients: async () => {
  const {
    currentPage,
    perPage,
    setClients,
    setTotalPages,
    setCurrentPage,
    setIsLoading
  } = get();

  try {
    setIsLoading(true);

    const response = await api.get(`/users?page=${currentPage}&limit=${perPage}`);
    const data = response.data;

    setClients(data.clients);
    setTotalPages(data.totalPages);

    if (currentPage > data.totalPages) {
      setCurrentPage(data.totalPages);
    }
  } catch (error) {
    console.error("Erro ao buscar clientes:", error);
  } finally {
    setIsLoading(false); 
  }
},

}));
