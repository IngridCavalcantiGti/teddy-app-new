import { useEffect } from "react"
import { useClientModalStore, useClientStore } from "@/stores"
import {
  ClientGrid,
  ClientsHeader,
  Pagination,
  ClientModal,
  DeleteModal,
  Button,
} from "@/components"
import { Users } from "lucide-react"

export const ClientsPage = () => {
  const {
    clients,
    perPage,
    setPerPage,
    currentPage,
    setCurrentPage,
    totalPages,
    fetchClients,
    isLoading,
  } = useClientStore()

  useEffect(() => {
    useClientStore.getState().setIsLoading(true)
    fetchClients()
  }, [perPage, currentPage, fetchClients])

  const handleClick = () => {
    useClientModalStore.getState().openModal("create")
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="flex-1 w-full">
        <div className="mx-auto">
          <ClientsHeader
            totalClients={clients.length}
            perPage={perPage}
            onChangePerPage={(newPerPage) => setPerPage(newPerPage)}
          />

          {isLoading ? (
            <div className="flex justify-center items-center h-[300px] text-gray-500">
              Carregando...
            </div>
          ) : clients.length > 0 ? (
            <>
              <div className="w-full px-4">
                <ClientGrid clients={clients} />
              </div>
              <Button label="Criar cliente" onClick={handleClick} className="my-6" />
              <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
              />
            </>
          ) : (
            <div className="flex flex-col justify-center items-center h-[300px] text-gray-500 mx-4 mt-6 rounded-md">
              <Users className="w-12 h-12 text-orange-400 mb-4" />
              <p className="text-lg text-center px-4">
                Nenhum cliente cadastrado no momento.
                <br />
                Clique em “Criar cliente” para começar.
              </p>
              <Button label="Criar cliente" onClick={handleClick} className="my-6" />
            </div>
          )}
        </div>
      </div>
      <ClientModal />
      <DeleteModal />
    </div>
  )
}
