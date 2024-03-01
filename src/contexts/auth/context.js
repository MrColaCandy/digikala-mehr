import { createContext, useContext } from "react";
export const AuthContext = createContext({
  userData: null,
  isLoggedIn: false,
  token: "",
  setIsLoggedIn: () => {},
  setUserData: () => {},
  logout: () => {},
  getOTPCode: () => {},
  confirmOTPCode: () => {},
});

export function useAuthContext() {
    return useContext(AuthContext)
}
