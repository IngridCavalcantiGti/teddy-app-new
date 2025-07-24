import { useDeleteModalStore } from '../../stores/useDeleteModalStore';
import { useAlertStore } from '../../stores/useAlertStore';
import { X } from 'lucide-react';

const DeleteModal = () => {
    const { isOpen, clientName, closeDeleteModal } = useDeleteModalStore();
     const { showAlert } = useAlertStore();

    if (!isOpen) return null;

    const handleDelete = () => {
        showAlert(`Cliente ${clientName} excluído com sucesso!`, 'success');
        closeDeleteModal();
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white w-[400px] p-6 rounded shadow">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Excluir cliente:</h2>
                    <button onClick={closeDeleteModal}><X className='cursor-pointer hover:text-orange-600 ' /></button>
                </div>

                <p className="mb-6">
                    Você está prestes a excluir o cliente: <strong>{clientName}</strong>
                </p>

                <button
                    onClick={handleDelete}
                    className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white w-full py-2 rounded font-semibold"
                >
                    Excluir cliente
                </button>
            </div>
        </div>
    );
};

export default DeleteModal;
