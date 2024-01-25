import { createContext,useContext } from "react";
export const context = createContext({
    user: null,
    isLoggedIn:false,
    token:"",
    setIsLoggedIn:()=>{},
    setUser: () => {},
    logout:()=>{},
    sendOTPCode: () => {},
    confirmOTPCode: () => {},
  });


  // Custom hook to easily access the authentication context in components
export const useAuth = () => {
    return useContext(context);
};