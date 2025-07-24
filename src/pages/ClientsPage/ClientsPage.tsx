import { useEffect } from "react";

import ClientButton from "../../components/ClientButton/ClientButton";
import ClientGrid from "../../components/ClientGrid/ClientGrid";
import ClientsHeader from "../../components/ClientsHeader/ClientsHeader";
import Pagination from "../../components/Pagination/Pagination";
import ClientModal from '../../components/ClientModal/ClientModal';
import DeleteModal from '../../components/DeleteModal/DeleteModal';
import { useClientStore } from "../../stores/useClientStore";

const ClientsPage = () => {
  const {
    clients,
    perPage,
    setPerPage,
    currentPage,
    setCurrentPage,
    totalPages,
    fetchClients,
  } = useClientStore();

  useEffect(() => {
    fetchClients();
  }, [perPage, currentPage]);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="flex-1 w-full">
        <div className="max-w-screen-xl mx-auto">
          <ClientsHeader
            totalClients={clients.length}
            perPage={perPage}
            onChangePerPage={(newPerPage) => setPerPage(newPerPage)}
          />

          <div className="w-full px-4">
            
              <ClientGrid clients={clients} />
          
          </div>
          <ClientButton />
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </div>
      </div>
      <ClientModal />
      <DeleteModal />
    </div>
  );
};

export default ClientsPage;

