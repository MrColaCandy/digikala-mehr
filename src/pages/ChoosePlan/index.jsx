import Layout from "@components/Layout"
import "./style.css"
import Slider from "@components/Slider"
import Card from "@components/Card"
import Button from "@components/Button"
import { useNavigate } from "react-router-dom"
import { serialize } from "cookie"
import { useEffect, useState } from "react"
import { useProject } from "@components/hooks/useProject"

const ChoosePlan = () => {
  const { getAllProjects} = useProject();
  const [projects,setProjects]=useState([]);
  const navigate = useNavigate();
 
  async function getAllProjectsOnLoad()
  {
    try {
      const projects= await getAllProjects();
      setProjects(projects);
    } catch (error) {
      setProjects([]);
      navigate("/")
    }
  }
 
  useEffect(()=>{
    getAllProjectsOnLoad();
  },[])

  async function handleCardButtonClick(project) {
    document.cookie = serialize("projectId", JSON.stringify(project.id));
    navigate("/choose-price");

  }
  return (
    <Layout>
        <section className="choosePlan">
            <div className="choosePlan__header">
                <div className="choosePlan__currentPhase">مرحله ۲ از ۳</div>
                <div className="choosePlan__headerTextGreen">از اینکه تصمیم گرفتی با ما همراه باشی ازت ممنونیم.</div>
                <div className="choosePlan__headerText">حالا تو این مرحله باید انتخاب کنی کمک‌ات صرف چه <span className="choosePlane_TextGreen">کار خیری</span> بشه.</div>
            </div>
        </section>
      <Slider  slideHeight={420} slideWidth={360} viewPortWidth={390 * 2.5} gap={40} >
        {
          projects?.map((project) => {
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