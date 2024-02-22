import Layout from "@components/Layout"
import ChoosePlaneHeader from "./components/choosePlanHeader"
import "./style.css"
import Slider from "@components/Slider"
import Card from "@components/Card"
import Button from "@components/Button"
import { useNavigate } from "react-router-dom"
import { serialize } from "cookie"
import { useAuth } from "@components/hooks/useAuth"


const ChoosePlan = () => {


  const{projects,isLoading}=useAuth();
  const navigate = useNavigate();

 
  async function handleCardButtonClick(project) {
    document.cookie = serialize("projectId", JSON.stringify(project.id));
    navigate("/choose-price");

  }
  return (
    <Layout>
      <ChoosePlaneHeader />
      <Slider isLoading={isLoading} slideHeight={450} slideWidth={360} viewPortWidth={360 * 2.5} gap={40} >
        {
          projects?.map((project) => {
            return <Card
              key={project.id}
              project={project}
              cardButton={
                <Button isLoading={isLoading} text={"انتخاب کنید"} onClick={() => {
                  handleCardButtonClick(project)
                }} />
              }
            />
          })
        }
      </Slider>
    </Layout>
  )
}

export default ChoosePlan