import { useLocation } from "react-router-dom";
import { useClientModalStore, useClientStore } from "@/stores";

const ClientButton = () => {
  const location = useLocation();
  const isSelectedPage = location.pathname.includes("selecionados");
  const clearSelected = useClientStore((state) => state.clearSelected);

  const handleClick = () => {
    if (isSelectedPage) {
      clearSelected();
    } else {
      useClientModalStore.getState().openModal("create");
    }
  };

  return (
    <div className="my-6 font-bold">
      <button
        className="w-full border-[2px] border-orange-500 text-orange-500 py-2 rounded"
        onClick={handleClick}
      >
        {isSelectedPage ? "Limpar clientes selecionados" : "Criar cliente"}
      </button>
    </div>
  );
};

export { ClientButton };
