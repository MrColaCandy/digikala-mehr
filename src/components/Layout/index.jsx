import Header from "@components/Header"
import Container from "@components/Container"
import {useNavigate} from "react-router-dom"
import { useAuth } from "@components/hooks/useAuth"
import { useEffect } from "react"
const Layout = ({ children }) => {
    const {token}=useAuth();
    const navigate=useNavigate();
    useEffect(()=>{
     if(!token)
     {
       navigate("/login");
     }
    },[token])
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