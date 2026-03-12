import axios from "axios";
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, //browser wills end the cookies to server auto matically with every single request
});

export default axiosInstance;
