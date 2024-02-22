import AxiosHttp from "@services/http";


export function requestCode(phone) {
    return AxiosHttp.post("/phoneLogin/", { phone },)
}

export function requestCodeValidation(code) {
    return AxiosHttp.post("/otpLogin/", code);
}

export function requestUser(token) {
    return AxiosHttp.get("/userDetails/", {
        headers: {
            "Authorization": `${token}`
        }
    });
}
export function requestInfo()
{
 return AxiosHttp("/totalHelps/")
}

export function requestAllProjects() {
    return AxiosHttp("/allProjects/");
}
export function requestAddProject(project,token)
{
 
   return AxiosHttp.post("/addHelp/",{projectId:project.id},{headers:{"Authorization":token}})
}

export function requestUpdateProject({ token, oldProject, newProject }) {
    return AxiosHttp.put("/updateHelp/", { helpId: parseInt(oldProject.id), projectId: parseInt(newProject.id),price:parseInt(newProject.price) }, {
        headers: {
            "Authorization": token
        }
    })
}

export function requestCancelProject({project,token}) {
    return AxiosHttp.delete(`/deleteHelp/${project.id}`, {
        headers: {
            "Authorization": token
        }
    })
}

