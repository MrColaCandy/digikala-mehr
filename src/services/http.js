import axios from "axios";
import { BASE_URL } from "@configs/BASE_URL";
const AxiosHttp = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    timeoutErrorMessage:"لطفاً اتصال اینترنت خود را برسی کنید."
});

export default AxiosHttp;