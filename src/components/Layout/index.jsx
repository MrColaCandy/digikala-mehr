import Header from "@components/Header"
import Container from "@components/Container"
import { useProject } from "../hooks/useProject"
import { useEffect } from "react";
const Layout = ({ children }) => {
   const {setUser,getUser}=useProject();
   async function getUserOnLoad()
   {
    try {
        const user=await getUser();
        setUser(user);
    } catch (error) {
        setUser(null);
    }
   }
   useEffect(()=>{
   getUserOnLoad();
   },[])


   
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