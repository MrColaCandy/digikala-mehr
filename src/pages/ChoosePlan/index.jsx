import Layout from "@components/Layout"
import ChoosePlaneHeader from "./components/choosePlanHeader"
import "./style.css"
import Slider from "@components/Slider"
import Card from "@components/Card"
import Button from "@components/Button"
import { useAuth } from "@components/hooks/useAuth"
import {useNavigate} from "react-router-dom"

const ChoosePlan = () => {
  const {user,setUser,availableProjects}=useAuth()
  const navigate=useNavigate();
  function handleCardButtonClick(project){
    navigate("/choose-price")
    setUser({...user,currentProject:project});
    localStorage.setItem("user",JSON.stringify(user));
    
  }
  return (
    <Layout>
      <ChoosePlaneHeader />
      <Slider slideHeight={450} slideWidth={360}  viewPortWidth={360 * 2.5}  gap={40} >
        {
          availableProjects?.map((project)=>{
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