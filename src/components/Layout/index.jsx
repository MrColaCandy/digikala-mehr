import Header from "@components/Header"
import Container from "@components/Container"
import { useProject } from "../hooks/useProject"
import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom"

const Layout = ({ children }) => {
    const { setUser, getUser } = useProject();
    const { logout, setIsLoggedIn, token } = useAuth()
    const navigate = useNavigate();
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
