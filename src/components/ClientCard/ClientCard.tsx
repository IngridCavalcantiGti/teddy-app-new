import { Trash2, Plus, Pencil, Minus } from 'lucide-react';
import { useClientModalStore } from '../../stores/useClientModalStore';
import { useDeleteModalStore } from '../../stores/useDeleteModalStore';
import { useClientStore } from '../../stores/useClientStore';
import { useLocation } from 'react-router-dom';

interface Props {
  id: number
  name: string;
  salary: number;
  companyValuation: number;
}

const formatCurrency = (value: number): string => {
  return `R$ ${value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

const ClientCard = ({ id, name, salary, companyValuation }: Props) => {
  const { openModal } = useClientModalStore();
  const { openDeleteModal } = useDeleteModalStore();
  const location = useLocation();
  const isSelectedPage = location.pathname.includes('selecionados');


  const {
    addToSelected,
    removeFromSelected,
    isSelected,
    clients
  } = useClientStore();

  const selected = isSelected(id);

  const handleToggle = () => {
    const client = clients.find((c) => c.id === id);
    if (!client) return;

    if (selected) {
      removeFromSelected(id);
    } else {
      addToSelected(client);
    }
  };

  const handleEdit = () => {
    openModal('edit', {
      id,
      name,
      salary,
      companyValuation,
    });
  };

  return (
    <div className="bg-white rounded-[4px] shadow-[0_0_4px_rgba(0,0,0,0.1)] w-full min-w-[250px]
        min-h-[138px] flex flex-col justify-between px-4 py-2 overflow-hidden break-words mt-4">
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <strong className="text-sm break-words max-w-full mb-3">{name}</strong>
        <p className="text-sm break-words max-w-full">Salário: {formatCurrency(salary)}</p>
        <p className="text-sm break-words max-w-full">Empresa: {formatCurrency(companyValuation)}</p>
      </div>

      <div
        className={`mt-2 mb-2 ${isSelectedPage
            ? 'flex justify-end pr-4 text-red-500' 
            : 'flex justify-around gap-20'
          }`}
      >
        <button onClick={handleToggle} title={selected ? "Remover dos selecionados" : "Adicionar aos selecionados"}>
          {selected ? <Minus /> : <Plus />}
        </button>
        {!isSelectedPage && (
          <>
            <button onClick={handleEdit}>
              <Pencil className="w-4 h-4 cursor-pointer" />
            </button>
            <button onClick={() => openDeleteModal(id, name)}>
              <Trash2 className="w-5 h-5 text-red-500 cursor-pointer" />
            </button>
          </>
        )}

      </div>
    </div>
  );
};

export default ClientCard;
