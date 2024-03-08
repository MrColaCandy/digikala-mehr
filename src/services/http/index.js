import axios from "axios";
import { BASE_URL } from "@configs/end-points";
import { parse } from 'cookie';
const httpServiceInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  timeoutErrorMessage: "لطفاً اتصال اینترنت خود را برسی کنید.",
});

function responseInterceptor(response) {
  if (response?.data) {
    return response.data;
  } else {
    return Promise.reject(response);
  }
}

function tokenInterceptor(config) {
  const { withToken = false, ...otherConfig } = config;

  if(!withToken) {
    return otherConfig
  }

  const { token } = parse(document?.cookie ?? '') ?? {}

  return {
    ...otherConfig,
    headers: {
      ...(otherConfig.headers ?? {}),
      Authorization: token
    }
  }
}

httpServiceInstance.interceptors.request.use(tokenInterceptor)
httpServiceInstance.interceptors.response.use(responseInterceptor)

export * from './requests';

export default httpServiceInstance;
