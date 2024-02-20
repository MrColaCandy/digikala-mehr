import Layout from "@components/Layout"
import ChoosePlaneHeader from "./components/choosePlanHeader"
import "./style.css"
import Slider from "@components/Slider"
import Card from "@components/Card"
import Button from "@components/Button"
import { useAuth } from "@components/hooks/useAuth"
import {useNavigate} from "react-router-dom"
import { useEffect, useState } from "react"
import { getAvailableProjects } from "./request"


const ChoosePlan = () => {
  const {user,setUser}=useAuth()
  const [projects,setProjects]=useState([])
  const [isLoading,setIsLoading]=useState(false);
  const navigate=useNavigate();

  useEffect(()=>{
    if(!user)return;
    setIsLoading(true);
    async function getProjects()
    {
      try {
       const available= await getAvailableProjects(user)
       setProjects(available);
      } catch (error) {
        setProjects([]);
      }finally{
        setIsLoading(false)
      }
    } 
    getProjects()
  },[user])
  function handleCardButtonClick(project){
  
    navigate("/choose-price")
    setUser({...user,currentProject:project});
    localStorage.setItem("user",JSON.stringify(user));
    
  }
  return (
    <Layout>
      <ChoosePlaneHeader />
      <Slider isLoading={isLoading} slideHeight={450} slideWidth={360}  viewPortWidth={360 * 2.5}  gap={40} >
        {
          projects?.map((project)=>{
            return <Card
            width={360}
            height={448}
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            employerName={project.employerName}
            image={project.image}
            employerLogo={project.employerLogo}
            cardButton={
              <Button text={"انتخاب کنید"} onClick={()=>{
                handleCardButtonClick(project)
              }}/>
            }
             />
          })
        }
      </Slider>
    </Layout>
  )
}

export default ChoosePlan