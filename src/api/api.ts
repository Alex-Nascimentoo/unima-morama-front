import axios from "axios";
import 'dotenv/config'
import { parseCookies } from "nookies";

export function apiRequest() {
    const cookies = parseCookies();
    const accessToken = cookies["access_token"];

    const api = axios.create(
    {
        baseURL: import.meta.env.VITE_APP_BASE_URL,
        headers: {
            authorization: `Bearer ${accessToken}`,
        }
    })
    
    return api;
}