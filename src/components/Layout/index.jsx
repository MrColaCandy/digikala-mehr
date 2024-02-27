import Header from "@components/Header"
import Container from "@components/Container"
import { useProject } from "../hooks/useProject"
import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom"
import {useLocation} from "react-router-dom"
import { parse } from "cookie";
const Layout = ({ children }) => {
    const { setUser, getUser,activeProject } = useProject();
    const { logout, setIsLoggedIn, token } = useAuth()
    const navigate = useNavigate();
    const location=useLocation();
    async function getUserOnLoad() {
        if (!token || token == "") {
            logout();
            return;
        }
        try {
            
            const user = await getUser();
            setUser(user);
            setIsLoggedIn(true);
        } catch (error) {
            logout();
            navigate("/");
            
        }
    }
    useEffect(() => {
        const abortController= new AbortController();
        getUserOnLoad();
        return ()=>abortController.abort();
    }, [])

    useEffect(()=>{
        console.log({location:location.pathname,activeProject:activeProject});
        if(location.pathname=="/choose-plan" && activeProject)
        {
            navigate("/profile")
        }
        if(location.pathname=="/choose-price" && parse(document.cookie).projectId==="null")
        {
            navigate("/choose-plan")
        }
        if(location.pathname=="/edit-plan" && !activeProject)
        {
            navigate("/profile")
        }
        if(location.pathname=="/edit-price" && (parse(document.cookie).editing==="null" || !activeProject))
        {
            navigate("/profile")
        }
    },[location])

    return (
        <>
            <Header />
            <Container>
                {
                    children
                }
            </Container>
        </>
    )
}

export default Layout
