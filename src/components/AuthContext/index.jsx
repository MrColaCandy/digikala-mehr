import { useEffect, useState } from "react"
import { parse, serialize } from "cookie";
import { authContext } from "../contexts/authContext";
import { getCode, validateCode, validateToken } from "./request"
import userData from "@components/data/user.json"



function AuthContext({ children }) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user") || null));
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(parse(document.cookie).token || null)
    const [isLoading, setIsLoading] = useState(false);
    const [destination, setDestination] = useState("/");


    useEffect(() => {
        setIsLoading(true);
        async function postToken() {
            try {
                await validateToken(token);
                setIsLoggedIn(true)
            } catch (error) {
                logout();
            }
            finally {
                setIsLoading(false);
            }
        }
        postToken();
    }, [])


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
        finally {
            setIsLoading(false);
        }
    }


    async function confirmOTPCode(phone, code) {
        setIsLoading(true);
        try {
            const token = await validateCode(phone, code);
            setToken(token);
            document.cookie = serialize("token", token);
            setUser(JSON.parse(localStorage.getItem("user")) || userData)
            setIsLoggedIn(true);
            return token;
        } catch (error) {
            console.log("Failed to validate code . Error", error.message)
            throw error;
        }
        finally {
            setIsLoading(false);
        }
    }
    function logout() {
        if (!isLoggedIn) return;
        setToken(null);
        setIsLoggedIn(false);
        setDestination("/");
        document.cookie = serialize("token", "", { expires: new Date(0) });
    }
    // Provide the authentication context value to the components in the tree
    return (
        <authContext.Provider value=
            {{
                user,
                setUser,
                token,
                setToken,
                isLoggedIn,
                setIsLoggedIn,
                logout,
                sendOTPCode,
                confirmOTPCode,
                isLoading,
                destination,
                setDestination
            }}>
            {children}
        </authContext.Provider>
    );
}

export default AuthContext;