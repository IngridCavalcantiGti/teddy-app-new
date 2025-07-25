import { useEffect } from "react";

import ClientButton from "../../components/ClientButton/ClientButton";
import ClientGrid from "../../components/ClientGrid/ClientGrid";
import ClientsHeader from "../../components/ClientsHeader/ClientsHeader";
import Pagination from "../../components/Pagination/Pagination";
import ClientModal from '../../components/ClientModal/ClientModal';
import DeleteModal from '../../components/DeleteModal/DeleteModal';
import { useClientStore } from "../../stores/useClientStore";
import { Users } from "lucide-react";


const ClientsPage = () => {
  const {
    clients,
    perPage,
    setPerPage,
    currentPage,
    setCurrentPage,
    totalPages,
    fetchClients,
     isLoading,
  } = useClientStore();

  useEffect(() => {
    useClientStore.getState().setIsLoading(true);
    fetchClients();
  }, [perPage, currentPage]);



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
              <ClientButton />
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
                Nenhum cliente cadastrado no momento.<br />
                Clique em “Criar cliente” para começar.
              </p>
            </div>
          )}


        </div>
      </div>
      <ClientModal />
      <DeleteModal />
    </div>
  );
};

export default ClientsPage;

