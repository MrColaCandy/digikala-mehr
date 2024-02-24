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
            console.log(data);
            if (data === "No user") {
                throw new Error("404")
            }
            console.log("OTP code sended successfully. Code:" + data.otp);
            return data.otp
        } catch (error) {

            throw new Error(error.message);
        }
        
    }


    async function validateOTPCode(code) {
        
        try {
            const { data } = await requestCodeValidation(code);
            document.cookie = serialize("token", data.token);
            setToken(data.token);
            console.log(data.token);
            setIsLoggedIn(true);
            return data.token;
        } catch (error) {

            console.log("Failed to validate OTP Code. com:AuthContext. error: "+error.message);
        }
        
    }
   
    function logout() {
        if (!isLoggedIn) return;
        setToken(null);
        setIsLoggedIn(false);
        document.cookie = serialize("token", "", { expires: new Date(0) });
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