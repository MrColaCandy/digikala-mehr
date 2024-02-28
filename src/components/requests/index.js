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
export function requestAddProject({ projectId, price, token }) {

    return AxiosHttp.post("addHelp/", { projectId: parseInt(projectId), price: parseInt(price) }, { headers: { "Authorization": token } })
}

export function requestUpdateProject({ token, oldProject, newProject, price }) {
    return AxiosHttp.put("updateHelp/", { helpId: parseInt(oldProject), projectId: parseInt(newProject), price: parseInt(price) }, {
        headers: {
            "Authorization": token
        }
    })
}

export function requestCancelProject({ id, token }) {
    return AxiosHttp.get(`deleteHelp/${id}/`, {
            headers: {
                "Authorization": token
            }
        })
        
    
}
export function requestConfirmCancelProject({ id, token }) {
    return AxiosHttp.delete(`deleteHelp/${id}/`, {
            headers: {
                "Authorization": token
            }
        })
    
}
export function requestProjectLifeSpan(token) {
    return AxiosHttp(`getTotalMonthsExpiration/`, {
        headers: {
            "Authorization": token
        }
    });
}
export function requestStats() {
    return Promise.all([
        AxiosHttp(`charityHelpsStatistics/`),
        AxiosHttp("totalHelps/")
    ])
}
export function requestProjectExtend({ token, id }) {
    return AxiosHttp.post(`extendHelp/`, { helpId: id }, {
        headers: {
            "Authorization": token
        }
    });
}
export function requestActiveProject({ token }) {
    return AxiosHttp.get(`getActiveHelps`, {
        headers: {
            "Authorization": token
        }
    });
}
export function requestHistories({ token }) {
    return AxiosHttp.get(`getUserHelpHistory/`, {
        headers: {
            "Authorization": token
        }
    });
}