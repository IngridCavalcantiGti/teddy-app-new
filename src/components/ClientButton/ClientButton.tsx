import { useClientModalStore } from '../../stores/useClientModalStore';

const ClientButton = () => (
  <div className="my-6 font-bold">
    <button
      className="w-full border-[2px] border-orange-500 text-orange-500 py-2 rounded"
      onClick={() => useClientModalStore.getState().openModal('create')}
    >
      Criar cliente
    </button>
  </div>
);


export default ClientButton;