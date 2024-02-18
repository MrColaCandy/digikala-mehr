import { useEffect, useState } from "react"
import { parse,serialize } from "cookie";
import { authContext } from "../contexts/authContext";
import { getCode,validateCode, validateToken } from "./request"
import { fakeUser, projects } from "../../data/data";



function AuthContext({ children }) {
    const [user,setUser]=useState(JSON.parse(localStorage.getItem("user")|| null));
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const [token,setToken]=useState(parse(document.cookie).token || null)
    const [isLoading,setIsLoading]=useState(false);
    const [destination,setDestination]=useState("/");
    const [availableProjects,setAvailableProjects]=useState(JSON.parse(localStorage.getItem("availableProjects")||null)||null)
    function getAvailableProjects(){
        const copy=projects;
        if(!user)
        {
            return copy;
        }
        const ids=user.copy.map(p=>p.id);
        for (let index = 0; index < copy.length; index++) {
            const p = copy[index];
            if(ids.includes(p.id))
            {
                copy.splice(index,1);
            }
            
        }
        return copy;
        
    }
    useEffect(()=>{
      if(!token){
        logout()
        return;
      }
      async function postToken()
      {
        setIsLoading(true);
        try {
            const isTokenValid=await validateToken(token);
            setIsLoggedIn(isTokenValid);
            setUser(JSON.parse(localStorage.getItem("user")));
            localStorage.setItem("availableProjects",JSON.stringify(getAvailableProjects()));
            setAvailableProjects(getAvailableProjects());
            console.log(user.projects);
            console.log(availableProjects);
        } catch (error) {
            logout();
        }
        finally{
            setIsLoading(false);
        }
      }
      postToken();
    },[])
   
    async function sendOTPCode(phone) {
        setIsLoading(true);
        try {
            const code = await getCode(phone);
            console.log("OTP code sended successfully. Code: " + code);
            return code;
        } catch (error) {
            console.log("Failed to send OTP code!. Error: ", error.message)
            throw error;
        }
        finally{
            setIsLoading(false);
        }
    }


    async function confirmOTPCode(phone, code) {
        setIsLoading(true);
        try {
            const token= await validateCode(phone, code);
            console.log("This code is valid.");
            setToken(token);
            document.cookie=serialize("token",token);
            setUser({
                ...fakeUser,
                token:token
            })
            localStorage.setItem("user",JSON.stringify(fakeUser));
            setIsLoggedIn(true);
            setAvailableProjects(projects);
            localStorage.setItem("availableProjects",JSON.stringify(projects));
            return token;
        } catch (error) {
            console.log("Failed to validate code . Error", error.message)
            throw error;
        }
        finally{
            setIsLoading(false);
        }
    }
    function logout()
    {
        setUser(null);
        setToken(null);
        document.cookie = serialize("token", "", { expires: new Date(0) });
        setIsLoggedIn(false);
        localStorage.setItem("user",null);
        setDestination("/");
        setAvailableProjects(projects);
        localStorage.setItem("availableProjects",JSON.stringify(projects))

    }
    // Provide the authentication context value to the components in the tree
    return (
        <authContext.Provider value={{ user,setUser,token,setToken,isLoggedIn,setIsLoggedIn,logout, sendOTPCode, confirmOTPCode,isLoading,destination,setDestination,availableProjects,setAvailableProjects }}>
            {children}
        </authContext.Provider>
    );
}

export default AuthContext;