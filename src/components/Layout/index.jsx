import Header from "@components/Header"
import Container from "@components/Container"
import { useEffect } from "react"
import { useProject } from "../hooks/useProject"
import { useAuth } from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { parse } from "cookie"
const Layout = ({ children }) => {
    const { getUser, activeProject } = useProject()
    const { token, logout, setIsLoggedIn, isLoggedIn } = useAuth();
    const navigate = useNavigate()
    const location = useLocation();
    useEffect(() => {
        if (!token || token == "") {
            logout();
            return;
        }
        async function getUserOnRefresh() {
            try {
                await getUser(token);
                setIsLoggedIn(true)
            } catch (error) {
                logout();
                navigate("/");
            }
        }
        getUserOnRefresh();
    }, [])

    useEffect(() => {
        console.log(activeProject);
            if (location.pathname == "/choose-price" && (!parse(document.cookie).projectId || activeProject)) {
                navigate("/choose-plan")
            }
            if (location.pathname == "/choose-plan" && activeProject) {
                navigate("/profile")
            }
            if (location.pathname == "/edit-price" && (!parse(document.cookie).editing)) {
                navigate("/choose-plan")
            }
        
        if(!isLoggedIn)
        {if (location.pathname == "/choose-price" ||
            location.pathname == "/choose-plan" ||
            location.pathname == "/edit-plan" ||
            location.pathname == "/edit-price") {
            
                navigate("/");
            
        }
        }
    }, [location])
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