import Header from "@components/Header"
import Container from "@components/Container"
import { useProject } from "../hooks/useProject"
import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom"

const Layout = ({ children }) => {
    const { setUser, getUser } = useProject();
    const { logout, setIsLoggedIn } = useAuth()
    const navigate = useNavigate();
    async function getUserOnLoad() {
        try {
            const user = await getUser();
            setUser(user);
            setIsLoggedIn(true);
        } catch (error) {
            logout();
            setUser(null);
            navigate("/");
            
        }
    }
    useEffect(() => {
        getUserOnLoad();
    }, [])



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
