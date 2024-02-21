import AxiosHttp from "@services/http";


export function requestAllProjects() {
    return AxiosHttp("/allProjects/");
}

