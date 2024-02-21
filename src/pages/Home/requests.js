import AxiosHttp from "@services/http";
export function requestInfo()
{
 return AxiosHttp("/totalHelps/")
}