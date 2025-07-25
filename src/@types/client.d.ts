type Client = {
  id: number;
  name: string;
  salary: number;
  companyValuation: number;
};

type PaginatedClientsResponse = {
  currentPage: number;
  totalPages: number;
  clients: Client[];
};

type NewClient = Omit<Client, "id">;