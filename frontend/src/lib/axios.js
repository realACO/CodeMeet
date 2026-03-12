import axios from "axios";
import { VITE_API_URL } from "../.env";
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, //browser wills end the cookies to server auto matically with every single request
});

export default axiosInstance;
