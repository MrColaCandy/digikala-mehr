import axios from "axios";

const AxiosHttp = axios.create({
    baseURL: '',
    timeout: 5000,
});
export default AxiosHttp;