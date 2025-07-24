import PlusIcon from '../../assets/plus 1.svg';
import EditIcon from '../../assets/plus 2.svg';
import TrashIcon from '../../assets/plus 3.svg';

interface Props {
    name: string;
    salary: string;
    company: string;
}

const ClientCard = ({ name, salary, company }: Props) => {
    return (
        <div
            className="bg-white rounded-[4px] shadow-[0_0_4px_rgba(0,0,0,0.1)] w-[285px] h-[138px] flex flex-col items-center justify-center text-center gap-[6px] px-4 py-2"
        >
            <strong>{name}</strong>
            <p className="text-sm">Salário: {salary}</p>
            <p className="text-sm">Empresa: {company}</p>

            <div className="flex justify-center gap-25 mt-3">
                <button>
                    <img src={PlusIcon} alt="Adicionar" className="w-5 h-5" />
                </button>
                <button>
                    <img src={EditIcon} alt="Editar" className="w-5 h-5" />
                </button>
                <button>
                    <img src={TrashIcon} alt="Excluir" className="w-5 h-5" />
                </button>
            </div>

        </div>
    );
};

export default ClientCard;
