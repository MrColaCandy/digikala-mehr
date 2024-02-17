import { createContext } from "react";
export const authContext = createContext({
    user: null,
    isLoggedIn:false,
    token:"",
    setIsLoggedIn:()=>{},
    setUser: () => {},
    logout:()=>{},
    sendOTPCode: () => {},
    confirmOTPCode: () => {},
  });


