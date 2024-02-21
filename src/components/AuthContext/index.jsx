import { useEffect, useState } from "react"
import { parse, serialize } from "cookie";
import { authContext } from "../contexts/authContext";
import { requestCode, requestCodeValidation, requestUser } from "./requests"





function AuthContext({ children }) {
    const [userData, setUserData] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(parse(document.cookie).token || null)
    const [isLoading, setIsLoading] = useState(false);



    useEffect(() => {
        setIsLoading(true);
        async function getUserOnRefresh() {
            try {
                await getUserData(token);
            } catch (error) {
                logout()
                throw new Error(error.message);
            } finally {
                setIsLoading(false);
            }
        }

        getUserOnRefresh();

    }, [])


    async function updateUserData(token) {
        setIsLoading(true);
        try {
             await getUserData(token);
        } catch (error) {
            throw new Error(error.message);
        } finally {
            setIsLoading(false);
        }
    }
    async function getOTPCode(phone) {
        setIsLoading(true);
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
        finally {
            setIsLoading(false);
        }
    }


    async function validateOTPCode(code) {
        setIsLoading(true);
        try {
            const { data } = await requestCodeValidation(code);
            if (data === "incorrect Otp") {
                throw new Error("کد معتبر نیست!")
            }
            
            document.cookie = serialize("token", data.token);
            setToken(data.token);
            getUserData(data.token);

        } catch (error) {
            
            throw new Error(error.message);
        }
        finally {
            setIsLoading(false);
        }
    }
    async function getUserData(token) {
        setIsLoading(true);
        try {
            const { data } = await requestUser(token);
            if (data?.detail === "اطلاعات برای اعتبارسنجی ارسال نشده است." || data?.detail === "توکن داده شده برای هیچ نوع توکنی معتبر نمی‌باشد") {
                throw new Error("توکن معتبر نیست!")
            }
            setUserData(data);
            setIsLoggedIn(true);
        } catch (error) {
            logout()
            throw new Error(error.message);
        }
        finally {
            setIsLoading(false);
        }
    }
    function logout() {
        if (!isLoggedIn) return;
        setToken(null);
        setIsLoggedIn(false);
        setUserData(null);
        document.cookie = serialize("token", "", { expires: new Date(0) });
    }
    // Provide the authentication context value to the components in the tree
    return (
        <authContext.Provider value=
            {{
                userData,
                setUserData,
                getUserData,
                token,
                setToken,
                isLoggedIn,
                setIsLoggedIn,
                logout,
                getOTPCode,
                validateOTPCode,
                isLoading,
                updateUserData
            }}>
            {children}
        </authContext.Provider>
    );
}

export default AuthContext;