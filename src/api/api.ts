import axios, { AxiosInstance } from "axios";
import { parseCookies } from "nookies";

const cookies = parseCookies();
const accessToken = cookies['access_token'];

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    headers: {
        Authorization: `Bearer ${accessToken}`,
    }
}) as AxiosInstance;

export default api;