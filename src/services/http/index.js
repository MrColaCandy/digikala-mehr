import axios from "axios";
import { BASE_URL } from "@configs/end-points";
import { parse } from 'cookie';
const httpServiceInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  timeoutErrorMessage: "لطفاً اتصال اینترنت خود را برسی کنید.",
});

function takeOutDataResponseInterceptor({ data }) {
  return data
}

function withTokenRequestInterceptor(config) {
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

httpServiceInstance.interceptors.request.use(withTokenRequestInterceptor)
httpServiceInstance.interceptors.response.use(takeOutDataResponseInterceptor)

export * from './requests';

export default httpServiceInstance;
