import { createContext, useContext } from "react";
export const AuthContext = createContext({
  token: "",
  logout: () => { },
  login: () => { },
  user: {},
  setUser: () => { },
});

export function useAuthContext() {
  return useContext(AuthContext)
}
