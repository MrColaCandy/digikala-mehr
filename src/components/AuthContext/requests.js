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
