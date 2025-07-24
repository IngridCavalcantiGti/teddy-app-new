import { useEffect, useState } from "react";
import axios from "axios";

import ClientButton from "../../components/ClientButton/ClientButton";
import ClientGrid from "../../components/ClientGrid/ClientGrid";
import ClientsHeader from "../../components/ClientsHeader/ClientsHeader";
import Pagination from "../../components/Pagination/Pagination";

const ClientsPage = () => {
    const [clients, setClients] = useState([]);
    const [perPage, setPerPage] = useState(16);
    const [totalClients, setTotalClients] = useState(0);

    useEffect(() => {
        axios
            .get(`https://boasorte.teddybackoffice.com.br/users?page=1&limit=${perPage}`)
            .then((res) => {
                setClients(res.data.clients);
                setTotalClients(res.data.total || res.data.clients.length);
            })
            .catch((err) => {
                console.error("Erro ao buscar clientes:", err);
            });
    }, [perPage]);

    return (
        <div className="min-h-screen bg-gray-100 flex">
            <div className="flex-1 w-full">
                <div className="max-w-screen-xl mx-auto">

                    <ClientsHeader
                        totalClients={totalClients}
                        perPage={perPage}
                        onChangePerPage={setPerPage}
                    />
                    <ClientGrid clients={clients} />
                    <ClientButton />
                    <Pagination />
                </div>
            </div>
        </div>
    );
};

export default ClientsPage;
