import axios from 'axios';

const apiClient = axios.create({baseURL: "http://localhost:3060"});

const fetchProviderToken = (credentials) => {
  apiClient.defaults.headers.common = { "Accept": `application/json`};
  return apiClient.post("/providers/login", credentials);
}

const fetchAdminToken = (credentials) => {
  apiClient.defaults.headers.common = { "Accept": `application/json`};
  return apiClient.post("/auth/login", credentials);
}

export { fetchProviderToken };
export default apiClient;