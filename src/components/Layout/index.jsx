import Header from "@components/Header"
import Container from "@components/Container"
import { useEffect } from "react"
import { useProject } from "../hooks/useProject"
import { useAuth } from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"
const Layout = ({ children }) => {
    const { updateUserData } = useProject()
    const { token, logout, setIsLoggedIn } = useAuth();
    const navigate = useNavigate()
    useEffect(() => {
        async function getUser() {
            try {
                await updateUserData(token);
                setIsLoggedIn(true)
            } catch (error) {
                logout();
                navigate("/");
            }
        }
        getUser();
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