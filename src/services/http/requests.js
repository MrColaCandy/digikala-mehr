import http from "@services/http";
import * as endPoints from "@configs/end-points"

function getAuthenticationConfig() {
  return {
    withToken: true,
  };
}

export function requestCode(phone) {
  return http.post(endPoints.phoneLogin, { phone });
}

export function requestCodeValidation(code, phoneNumber) {
  return http.post(endPoints.otpLogin, { otp: code, phone: phoneNumber });
}

export function requestUser() {
  return http.get(endPoints.userDetails, getAuthenticationConfig());
}

export function requestAllProjects() {
  return http(endPoints.allProjects, getAuthenticationConfig());
}
export function requestAvailableProjects() {
  return http(endPoints.availableProjects, getAuthenticationConfig());
}
export function requestProject({projectId}) {
  return http.get(`${endPoints.allProjects}/${projectId}`, getAuthenticationConfig())
}

export function requestCreateHelp({ projectId, price }) {
  const payload = { projectId: Number(projectId), price: Number(price) };
  return http.post(endPoints.createHelp, payload, getAuthenticationConfig());
}

export function requestEditHelp({  helpId,  projectId, price }) {
  const payload = {
    projectId: parseInt(projectId),
    price: parseInt(price),
  };

  return http.put(`${endPoints.helps}/${helpId}/edit/`, payload, getAuthenticationConfig());
}

export function requestCancelHelp({ id }) {
  return http.delete(`${endPoints.helps}/${id}/delete/`, getAuthenticationConfig());
}



export function requestUserStats() {
  return http.get(endPoints.userStats);
}
export function requestProjectsStats()
{
  return http.get(endPoints.projectsStats);
}
export function requestHelpExtend({ id }) {
  const payload = { helpId: id };

  return http.post(`${endPoints.helps}/${id}/extend`, payload, getAuthenticationConfig());
}
export function requestActiveHelp() {
  return http.get(endPoints.activeHelp, getAuthenticationConfig())
}
export function requestHistories() {
  return http.get(endPoints.helps, getAuthenticationConfig());
}
