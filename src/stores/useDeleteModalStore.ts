import { create } from 'zustand';

interface DeleteModalState {
  isOpen: boolean;
  clientId: number | null;
  clientName: string | null;
  openDeleteModal: (id: number, name: string) => void;
  closeDeleteModal: () => void;
}

export const useDeleteModalStore = create<DeleteModalState>((set) => ({
  isOpen: false,
  clientId: null,
  clientName: '',
  openDeleteModal: (id: number, name: string) =>
    set({ isOpen: true, clientId: id, clientName: name }),
  closeDeleteModal: () =>
    set({ isOpen: false, clientId: null, clientName: null }),
}));
