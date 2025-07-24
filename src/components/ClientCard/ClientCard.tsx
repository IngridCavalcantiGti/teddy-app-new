import { Trash2, Plus, Pencil } from 'lucide-react';
import { useClientModalStore } from '../../stores/useClientModalStore';
import { useDeleteModalStore } from '../../stores/useDeleteModalStore';

interface Props {
    name: string;
    salary: string;
    company: string;
}

const ClientCard = ({ name, salary, company }: Props) => {
    const { openModal } = useClientModalStore();
    const { openDeleteModal } = useDeleteModalStore();

    const handleEdit = () => {
        openModal('edit', {
            name,
            salary: Number(salary),
            companyValuation: Number(company),
        });
    };

    return (
        <div className="bg-white rounded-[4px] shadow-[0_0_4px_rgba(0,0,0,0.1)] w-[285px] h-[138px] flex flex-col items-center justify-center text-center gap-[6px] px-4 py-2 overflow-hidden break-words">
            <strong className="text-sm break-words max-w-full">{name}</strong>
            <p className="text-sm break-words max-w-full">Salário: {salary}</p>
            <p className="text-sm break-words max-w-full">Empresa: {company}</p>

            <div className="flex justify-center gap-25 mt-3">
                <button>
                    <Plus className="w-5 h-5 cursor-pointer" />
                </button>
                <button onClick={handleEdit}>
                    <Pencil className="w-4 h-4 cursor-pointer" />
                </button>
                <button onClick={() => openDeleteModal(name)}>
                    <Trash2 className="w-5 h-5 text-red-500 cursor-pointer" />
                </button>
            </div>
        </div>
    );
};

export default ClientCard;
