import { createContext } from "react";
export const authContext = createContext({
    userData: null,
    isLoggedIn:false,
    token:"",
    setIsLoggedIn:()=>{},
    setUserData: () => {},
    logout:()=>{},
    getOTPCode: () => {},
    confirmOTPCode: () => {},
  });


