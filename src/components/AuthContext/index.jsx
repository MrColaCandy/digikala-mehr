import { useEffect, useState } from "react"
import { parse, serialize } from "cookie";
import { authContext } from "../contexts/authContext";
import { requestCode, requestCodeValidation, requestUser } from "@components/requests"
import { requestAllProjects } from "../requests";





function AuthContext({ children }) {
    const [userData, setUserData] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(parse(document.cookie).token || null)
    const [isLoading, setIsLoading] = useState(false);
    const [projects, setProject] = useState([])
    const [userProjects,setUserProjects]=useState([]);
    
    async function getHistory(projectId)
    {
        try {
             const user=await requestUser(token);
             const histories=user.data.help_history;
             const history=histories.find(h=>h.project_id==projectId);
             return history;
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(()=>{
        async function getUserProjects() {
            setIsLoading(true);
            if (token) {
                try {
                    const all = await requestAllProjects();
                    const user = await requestUser(token);
                    const histories=user.data.help_history;
                    const ids = histories.map(history => history.project_id)
                    const taken = all.data.filter(project => ids.includes(project.id)).map(project=>
                        {
                            return {
                                ...project,
                                ...histories.find(h=>h.project_id==project.id)
                            }
                        })
                    setUserProjects(taken);

                } catch (error) {
                    console.log(error.message);
                } finally {
                    setIsLoading(false)
                }


            }
            else {
                setUserProjects([])
            }
        }
        getUserProjects();
    },[useState])
    useEffect(() => {
        async function getProjects() {
            setIsLoading(true);
            if (token) {
                try {
                    const all = await requestAllProjects();
                    const user = await requestUser(token);
                    const ids = user.data.help_history.map(history => history.project_id)
                    const available = all.data.filter(project => !ids.includes(project.id))
                    setProject(available);

                } catch (error) {
                    console.log(error.message);
                } finally {
                    setIsLoading(false)
                }


            }
            else {
                try {
                    const all = await requestAllProjects();
                    setProject(all.data);

                } catch (error) {
                    console.log(error.message);
                } finally {
                    setIsLoading(false)
                }
            }
        }
        getProjects();
    }, [userData])
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
                updateUserData,
                projects,
                userProjects,
                getHistory
                
            }}>
            {children}
        </authContext.Provider>
    );
}

export default AuthContext;