import { useEffect, useState } from "react";
import axios from "axios";

import ClientButton from "../../components/ClientButton/ClientButton";
import ClientGrid from "../../components/ClientGrid/ClientGrid";
import ClientsHeader from "../../components/ClientsHeader/ClientsHeader";
import Pagination from "../../components/Pagination/Pagination";

const ClientsPage = () => {
    const [clients, setClients] = useState([]);
    const [perPage, setPerPage] = useState(16);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
   

    useEffect(() => {
        axios
            .get(`https://boasorte.teddybackoffice.com.br/users?page=${currentPage}&limit=${perPage}`)
            .then((res) => {
                console.log(res.data);
                setClients(res.data.clients);
                setTotalPages(res.data.totalPages);
            })
            .catch((err) => {
                console.error("Erro ao buscar clientes:", err);
            });
    }, [perPage, currentPage]);

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
        </div>
    );
};

export default ClientsPage;
