
import Layout from "@components/Layout"


import ChoosePlaneHeader from "./components/choosePlanHeader"
import "./style.css"
import Slider from "@components/Slider"
import Card from "@components/Card"
import { projects } from "../../../api/data";
import Button from "@components/Button"
import { useAuth } from "@components/AuthContext/context"

const ChoosePlan = () => {
  const {user,setUser}=useAuth()
  function handleCardButtonClick(id){
    setUser({...user,currentProject:id});
  }
  return (
    <Layout>
      <ChoosePlaneHeader />
      <Slider slideHeight={450} slideWidth={360}  viewPortWidth={360 * 2.5}  gap={40} >
        {
          projects.map((project)=>{
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
                handleCardButtonClick(project.id)
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