import { useDeleteModalStore, useAlertStore, useClientStore } from "@/stores"
import { X } from "lucide-react"
import { Button } from "../Button"

const DeleteModal = () => {
  const { isOpen, clientId, clientName, closeDeleteModal } = useDeleteModalStore()
  const { showAlert } = useAlertStore()
  const deleteClient = useClientStore((state) => state.deleteClient)

  if (!isOpen || clientId === null || !clientName) return null

  const handleDelete = async () => {
    if (clientId) {
      try {
        await deleteClient(clientId)
        showAlert(`Cliente excluído com sucesso!`, "success")
        closeDeleteModal()
      } catch (error) {
        showAlert("Erro ao excluir cliente", "error")
        console.error(error)
      } finally {
        closeDeleteModal()
      }
    }
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={closeDeleteModal}
    >
      <div className="bg-white w-[400px] p-6 rounded shadow" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Excluir cliente:</h2>
          <button onClick={closeDeleteModal}>
            <X className="cursor-pointer hover:text-orange-600" />
          </button>
        </div>

        <p className="mb-6">
          Você está prestes a excluir o cliente: <strong>{clientName}</strong>
        </p>

        <Button onClick={handleDelete} variant="filled" label="Excluir cliente" />
      </div>
    </div>
  )
}

export { DeleteModal }
