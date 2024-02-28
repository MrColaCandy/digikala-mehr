import { useState } from "react"
import { parse, serialize } from "cookie";
import { authContext } from "../contexts/authContext";
import { requestCode, requestCodeValidation } from "@components/requests"







function AuthContext({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(parse(document.cookie).token || null)
    
  
    async function getOTPCode(phone) {
        
        try {
            const { data } = await requestCode(phone);
            return data.otp
        } catch (error) {

            throw error.response? error.response.status : 12002;
        }
        
    }


    async function validateOTPCode(code) {
        
        try {
            const { data } = await requestCodeValidation(code);
            document.cookie = serialize("token", data.token);
            return data.token;
        } catch (error) {
             throw error.response? error.response.status : 12002;
        }
        
    }
   
    function logout() {
        if (!isLoggedIn) return;
        setToken(null);
        setIsLoggedIn(false);
        document.cookie = serialize("token", "", { expires: new Date(0) });
        document.cookie=serialize("editing","");
        document.cookie=serialize("projectId","");
    }
    // Provide the authentication context value to the components in the tree
    return (
        <authContext.Provider value=
            {{
               
                token,
                setToken,
                isLoggedIn,
                setIsLoggedIn,
                logout,
                getOTPCode,
                validateOTPCode,
                
            }}>
            {children}
        </authContext.Provider>
    );
}

export default AuthContext;