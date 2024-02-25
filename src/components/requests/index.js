import AxiosHttp from "@services/http";


export function requestCode(phone) {
    return AxiosHttp.post("phoneLogin/", { phone },)
}

export function requestCodeValidation(code) {
    return AxiosHttp.post("otpLogin/", code);
}

export function requestUser(token) {
    return AxiosHttp.get("userDetails/", {
        headers: {
            "Authorization": `${token}`
        }
    });
}


export function requestAllProjects(token) {
    return AxiosHttp("allProjects/", {
        headers: {
            "Authorization": token
        }
    });
}
export function requestAddProject({projectId,price,token})
{
 
   return AxiosHttp.post("addHelp/",{projectId:parseInt(projectId),price:parseInt(price)},{headers:{"Authorization":token}})
}

export function requestUpdateProject({ token, oldProject, newProject,price }) {
    return AxiosHttp.put("updateHelp/", { helpId: parseInt(oldProject), projectId: parseInt(newProject),price:parseInt(price) }, {
        headers: {
            "Authorization": token
        }
    })
}

export function requestCancelProject({project,token}) {
    return AxiosHttp.get(`deleteHelp/${project.history_id}/`,{
        headers: {
            "Authorization": token
        }
    })
}
export function requestCancelProjectConfirm({project,token}) {
    return AxiosHttp.delete(`deleteHelp/${project.history_id}/`,{
        headers: {
            "Authorization": token
        }
    })
}
export function requestProjectLifeSpan(token)
{
    return AxiosHttp(`getTotalMonthsExpiration/`,{
        headers: {
            "Authorization": token
        }
    });
}
export function requestStats(token)
{
    return Promise.all([
        AxiosHttp(`charityHelpsStatistics/`,{
            headers: {
                "Authorization": token
            }
        }),
        AxiosHttp("totalHelps/",{
            headers: {
                "Authorization": token
            }
        })
    ])
}
export function requestProjectExtend({token,id})
{
    return AxiosHttp.post(`extendHelp/`,{helpId:id},{
        headers: {
            "Authorization": token
        }
    });
}
export function requestActiveProject({token,id})
{
    return AxiosHttp.post(`extendHelp/`,{helpId:id},{
        headers: {
            "Authorization": token
        }
    });
}