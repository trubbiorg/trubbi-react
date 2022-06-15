import axios from 'axios';

const apiClient = axios.create({baseURL: "http://localhost:3060"});
export default apiClient;