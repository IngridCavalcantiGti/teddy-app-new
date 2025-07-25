import { create } from "zustand"

interface AlertState {
  message: string
  type: "success" | "error"
  isVisible: boolean
  showAlert: (message: string, type?: "success" | "error") => void
  hideAlert: () => void
}

export const useAlertStore = create<AlertState>((set) => ({
  message: "",
  type: "success",
  isVisible: false,
  showAlert: (message, type = "success") => {
    set({ message, type, isVisible: true })
    setTimeout(() => set({ isVisible: false }), 3000)
  },
  hideAlert: () => set({ isVisible: false }),
}))
