import { useEffect, useState } from "react"
import { parse,serialize } from "cookie";
import { context } from "./context";
import { getCode,validateCode, validateToken } from "./request"

// Define the AuthContext component, which will provide the authentication context


// mocking user data from response
const fakeUser={
    name:"Mahmood",
    lastName:"khodadady",
    phone:"09930151706",
    currentProject:null
}
function AuthContext({ children }) {
    const [user,setUser]=useState(null);
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const [token,setToken]=useState(parse(document.cookie).token || null)
 
    useEffect(()=>{
      async function postToken()
      {
        try {
            const isValid=await validateToken(token);
            setIsLoggedIn(isValid);
            setUser({
                name:"Mahmood",
                lastName:"Khodadady",
                email:"MahmoodKhodadady10@gmail.com",
                token:token,
                
            })
            setIsLoggedIn(true);
        } catch (error) {
            logout();
            console.log("Token is not valid!");
        }
      }
      postToken();
    },[])
   
    async function sendOTPCode(phone) {
        try {
            const code = await getCode(phone);
            console.log("OTP code sended successfully. Code: " + code);
            return code;
        } catch (error) {
            console.log("Failed to send OTP code!. Error: ", error.message)
            throw error;
        }
    }


    async function confirmOTPCode(phone, code) {
        try {
            const token= await validateCode(phone, code);
            console.log("This code is valid.");
            setToken(token);
            document.cookie=serialize("token",token);
            setUser(fakeUser)
            setIsLoggedIn(true);
            return token;
        } catch (error) {
            console.log("Failed to validate code . Error", error.message)
            throw error;
        }
    }
    function logout()
    {
        setUser(null);
        setToken(null);
        document.cookie = serialize("token", "", { expires: new Date(0) });
        setIsLoggedIn(false);

    }
    // Provide the authentication context value to the components in the tree
    return (
        <context.Provider value={{ user,setUser,token,setToken,isLoggedIn,setIsLoggedIn,logout, sendOTPCode, confirmOTPCode }}>
            {children}
        </context.Provider>
    );
}

export default AuthContext;