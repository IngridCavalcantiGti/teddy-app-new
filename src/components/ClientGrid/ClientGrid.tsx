import { ClientCard } from "@/components";
import type { Client } from "@/types/clientTypes";

interface ClientsGridProps {
  clients: Client[];
}

const ClientGrid = ({ clients }: ClientsGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 justify-items-center mt-2">
      {clients.map((client) => (
        <ClientCard
          key={client.id}
          id={client.id}
          name={client.name}
          salary={client.salary}
          companyValuation={client.companyValuation}
        />
      ))}
    </div>
  );
};

export { ClientGrid };
