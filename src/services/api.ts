import axios from "axios"

export const api = axios.create({
  baseURL: "https://boasorte.teddybackoffice.com.br",
})

api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
)
