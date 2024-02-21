import AxiosHttp from "@services/http"


export function requestUpdateProject({ token, oldProject, newProject,price }) {
    return AxiosHttp.put("/updateHelp/", { helpId: parseInt(oldProject.id), projectId: parseInt(newProject.id),price:parseInt(price) }, {
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




export function requestAllProjects() {
    return AxiosHttp("/allProjects/");
}