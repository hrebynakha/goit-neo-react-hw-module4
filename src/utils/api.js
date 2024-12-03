import axios from "axios";
const api = axios.create({
  baseURL: import.meta.env.VITE_IMAGE_API_ENDPOINT,
});

api.defaults.headers.common["Authorization"] =
  "Client-ID " + import.meta.env.VITE_IMAGE_API_KEY;

export default api;
