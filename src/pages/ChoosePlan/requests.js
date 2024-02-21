import AxiosHttp from "@services/http";


export function requestAllProjects() {
    return AxiosHttp("/allProjects/");
}

export function requestAddProject(project,token)
{
 
   return AxiosHttp.post("/addHelp/",{projectId:project.id},{headers:{"Authorization":token}})
}