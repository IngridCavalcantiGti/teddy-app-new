import { User } from "lucide-react";
import ClientButton from "../../components/ClientButton/ClientButton";
import ClientsGrid from "../../components/ClientGrid/ClientGrid";
import { useClientStore } from "../../stores/useClientStore";

const SelectedClientsPage = () => {
    const selectedClients = useClientStore((state) => state.selectedClients);

    const hasSelected = selectedClients.length > 0;

    return (
        <div className="min-h-screen bg-gray-100 flex">
            <div className="flex-1 w-full">
                <div className="w-full">
                    {hasSelected ? (
                        <>
                            <span className="text-[22px] ml-4">
                                <strong>Clientes selecionados:</strong>
                            </span>
                            <div className="px-4">
                                <ClientsGrid clients={selectedClients} />
                                <ClientButton />
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-col justify-center items-center h-[300px] text-gray-500  mx-4 rounded-md ">
                            <User className="w-12 h-12 text-orange-400 mb-4" />
                            <p className="text-lg text-center px-4">
                                Você ainda não selecionou nenhum cliente.<br />
                                Selecione um para visualizá-lo aqui.
                            </p>
                        </div>

                    )}
                </div>
            </div>
        </div>
    );
};

export default SelectedClientsPage;

