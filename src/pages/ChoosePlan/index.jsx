import Layout from "@components/Layout"
import ChoosePlaneHeader from "./components/choosePlanHeader"
import "./style.css"
import Slider from "@components/Slider"
import Card from "@components/Card"
import Button from "@components/Button"
import { useNavigate } from "react-router-dom"
import { serialize } from "cookie"
import { useEffect } from "react"
import { useProject } from "@components/hooks/useProject"

const ChoosePlan = () => {
  const { projects, userProjects } = useProject();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userProjects) return;
    if (userProjects.length > 0) {
      navigate("/");
    }
  }, [userProjects])

  async function handleCardButtonClick(project) {
    document.cookie = serialize("projectId", JSON.stringify(project.id));
    navigate("/choose-price");

  }
  return (
    <Layout>
      <ChoosePlaneHeader />
      <Slider  slideHeight={420} slideWidth={360} viewPortWidth={390 * 2.5} gap={40} >
        {
          projects?.filter(p => !p.taken)?.map((project) => {
            return <Card
              key={project.id}
              project={project}
              cardButton={
                <Button width={350}  text={"انتخاب کنید"} onClick={() => {
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