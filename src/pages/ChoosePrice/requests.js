import AxiosHttp from "@services/http"
export function requestAddProject({projectId,price},token)
{
 
   return AxiosHttp.post("/addHelp/",{projectId:projectId,price:Number(price)},{headers:{"Authorization":token}})
}