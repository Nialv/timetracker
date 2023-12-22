import axios, { AxiosInstance } from "axios";
import Cookies from "js-cookie";

const API_URL = import.meta.env.VITE_API_URL;

const timeTrackerApiInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${Cookies.get("token")}`,
    "Content-Type": "application/json",
  },
});

export default timeTrackerApiInstance;
