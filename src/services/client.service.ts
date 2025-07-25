import { api } from "./api";

const CLIENT_DOMAIN = "users";

const get = (
  page: number,
  limit: number
): Promise<PaginatedClientsResponse> => {
  return api.get(`${CLIENT_DOMAIN}?page=${page}&limit=${limit}`);
};

const create = (client: NewClient): Promise<Client> => {
  return api.post(CLIENT_DOMAIN, client);
};

const update = (client: Client): Promise<Client> => {
  return api.patch(`${CLIENT_DOMAIN}/${client.id}`, client);
};

const destroy = (id: number): Promise<Client> => {
  return api.delete(`${CLIENT_DOMAIN}/${id}`);
};

const ClientService = {
  get,
  create,
  update,
  destroy,
};

export { ClientService };