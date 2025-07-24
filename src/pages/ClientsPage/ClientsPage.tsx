import { useEffect } from "react";
import axios from "axios";

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
    setClients,
    perPage,
    setPerPage,
    currentPage,
    setCurrentPage,
    totalPages,
    setTotalPages
  } = useClientStore();

  useEffect(() => {
    axios
      .get(`https://boasorte.teddybackoffice.com.br/users?page=${currentPage}&limit=${perPage}`)
      .then((response) => {
        setClients(response.data.clients);
        setTotalPages(response.data.totalPages);
      })
      .catch((err) => {
        console.error("Erro ao buscar clientes:", err);
      });
  }, [perPage, currentPage, setClients, setTotalPages]);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="flex-1 w-full">
        <div className="max-w-screen-xl mx-auto">
          <ClientsHeader
            totalClients={clients.length}
            perPage={perPage}
            onChangePerPage={setPerPage}
          />
          <ClientGrid clients={clients} />
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
