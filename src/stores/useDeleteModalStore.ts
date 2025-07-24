import { create } from 'zustand';

interface DeleteModalState {
  isOpen: boolean;
  clientName: string | null;
  openDeleteModal: (clientName: string) => void;
  closeDeleteModal: () => void;
}

export const useDeleteModalStore = create<DeleteModalState>((set) => ({
  isOpen: false,
  clientName: null,
  openDeleteModal: (clientName) => set({ isOpen: true, clientName }),
  closeDeleteModal: () => set({ isOpen: false, clientName: null }),
}));
