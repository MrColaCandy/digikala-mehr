export const BASE_URL ="http://127.0.0.1:8000";



//auth
export const otpLogin = `${BASE_URL}/auth/login/`;
export const phoneLogin = `${BASE_URL}/auth/otp/`;

// stats
export const userStats = `${BASE_URL}/analytics/users/`;
export const projectsStats = `${BASE_URL}/analytics/projects/`;

//user data
export const availableProjects = `${BASE_URL}/me/projects/`;
export const userDetails = `${BASE_URL}/me/details/`;
export const activeHelp = `${BASE_URL}/me/helps/active`;
export const createHelp = `${BASE_URL}/me/helps/create`;
export const helps = `${BASE_URL}/me/helps`;

//all projects
export const allProjects = `${BASE_URL}/projects`;