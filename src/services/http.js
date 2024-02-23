import axios from "axios";
const AxiosHttp = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    timeout: 5000,
    timeoutErrorMessage:"لطفا اتصال اینترنت خود را برسی کنید."
});

export default AxiosHttp;