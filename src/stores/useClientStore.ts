import { create } from 'zustand';
import type { Client, NewClient } from '../types/clientTypes';

interface ClientState {
  clients: Client[];
  perPage: number;
  currentPage: number;
  totalPages: number;
  setClients: (clients: Client[]) => void;
  setPerPage: (page: number) => void;
  setCurrentPage: (page: number) => void;
  setTotalPages: (total: number) => void;
  addClient: (client: NewClient) => void;
  updateClient: (client: Client) => void;
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

  addClient: (client) => {
    const state = get();
    const newClient: Client = { ...client, id: Date.now() };
    const updatedClients = [...state.clients, newClient];
    const newTotalPages = Math.ceil(updatedClients.length / state.perPage);

    set({
      clients: updatedClients,
      totalPages: newTotalPages,
      currentPage: newTotalPages,
    });
  },

  updateClient: (updatedClient) =>
    set((state) => ({
      clients: state.clients.map((client) =>
        client.id === updatedClient.id ? updatedClient : client
      ),
    })),
}));
