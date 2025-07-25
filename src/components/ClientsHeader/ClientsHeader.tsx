interface ClientsHeaderProps {
  totalClients: number
  perPage: number
  onChangePerPage: (value: number) => void
}

const ClientsHeader = ({ totalClients, perPage, onChangePerPage }: ClientsHeaderProps) => {
  return (
    <div className="flex items-center justify-between w-full">
      <span className="text-[18px] ml-4">
        <strong>{totalClients}</strong> clientes encontrados:
      </span>

      <label className="text-[18px] flex items-center gap-2 mr-5">
        Clientes por página:
        <select
          className="border border-gray-300 rounded px-2 py-1 text-sm"
          value={perPage}
          onChange={(e) => onChangePerPage(Number(e.target.value))}
        >
          <option value={8}>8</option>
          <option value={16}>16</option>
          <option value={32}>32</option>
          <option value={48}>48</option>
        </select>
      </label>
    </div>
  )
}

export { ClientsHeader }
