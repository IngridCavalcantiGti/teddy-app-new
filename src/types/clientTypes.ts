export type Client = {
  id: number;
  name: string;
  salary: number;
  companyValuation: number;
};

export type NewClient = Omit<Client, 'id'>;
