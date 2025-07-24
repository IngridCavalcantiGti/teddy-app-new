import { create } from 'zustand';

interface ClientData {
  id?: number;
  name: string;
  salary: number;
  companyValuation: number;
}

interface ClientModalState {
  isOpen: boolean;
  mode: 'create' | 'edit';
  client: ClientData | null;
  openModal: (mode: 'create' | 'edit', client?: ClientData | null) => void;
  closeModal: () => void;
}

export const useClientModalStore = create<ClientModalState>((set) => ({
  isOpen: false,
  mode: 'create',
  client: null,
  openModal: (mode, client = null) => set({ isOpen: true, mode, client }),
  closeModal: () => set({ isOpen: false, client: null }),
}));
