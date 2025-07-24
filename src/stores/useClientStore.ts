import { create } from 'zustand';
import type { Client, NewClient } from '../types/clientTypes';
import { api } from '../services/api';

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
}

export const useClientStore = create<ClientState>((set, get) => ({
  clients: [],
  perPage: 8,
  currentPage: 1,
  totalPages: 1,

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

      set({
        clients: lastPageResponse.data.clients,
        totalPages: newTotalPages,
        currentPage: newTotalPages,
      });
    } catch (error) {
      console.error('Erro ao adicionar cliente:', error);
    }
  },

  updateClient: (updatedClient) =>
    set((state) => ({
      clients: state.clients.map((client) =>
        client.id === updatedClient.id ? updatedClient : client
      ),
    })),

  deleteClient: async (id: number) => {
    try {
      await api.delete(`/users/${id}`);
      await get().fetchClients();
    } catch (error) {
      console.error('Erro ao deletar cliente:', error);
    }
  },

  fetchClients: async () => {
    const { currentPage, perPage, setClients, setTotalPages, setCurrentPage } = get();

    try {
      const response = await api.get(`/users?page=${currentPage}&limit=${perPage}`);
      const data = response.data;

      setClients(data.clients);
      setTotalPages(data.totalPages);

      if (currentPage > data.totalPages) {
        setCurrentPage(data.totalPages);
      }
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
    }
  },
}));
