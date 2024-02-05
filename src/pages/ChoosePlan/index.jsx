import NavBar from "@components/NavBar"
import Container from "@components/Container"
import ChoosePlaneSlider from "./ChoosePlanSlider"
import ChoosePlanCard from "./ChoosePlanCard"
import projectsData from "./data/projects.json"
import ChoosePlaneHeader from "./choosePlanHeader"
import ChoosePlanButton from "./ChoosePlanButton"
import "./style.css"
import { useState } from "react"
import { useMedia } from "./hooks/useMedia"
import { variants } from "./Variants"

const ChoosePlan = () => {
  const variant=variants.Style3; // change this to switch to other variants 
  const [currentSlide,setCurrentSlide]=useState(1);
  const [currentProject,setCurrentProject]=useState(null);
  const currentWidth=useMedia();
  return (
    <Container>
      <NavBar />
      <ChoosePlaneHeader />
      <ChoosePlaneSlider setCurrentProject={setCurrentProject} gap={50} variant={variant} totalSlides={projectsData.length} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide}>
        {
          projectsData.map((project, index, array) => {
            return <ChoosePlanCard
              id={project.id}
              key={project.id}
              currentSlide={index + 1}
              totalSlides={array.length}
              image={project.image}
              subtitleImage={project.subtitleImage}
              title={project.title}
              bodyText={project.description}
              subtitle={project.subtitle}
              variant={variant} />
          })
        }
      </ChoosePlaneSlider>
      {
        currentWidth <=390 && variant!==variants.Style3 &&
        <div className="choosePlan__slidesPaginationMobile">
           {currentSlide}
           از
          {projectsData.length}
        </div>
      }
      {
        variant===variants.Style1 &&
        <ChoosePlanButton projectId={currentProject} variant={variant} />
      }
    </Container>
  )
}

export default ChoosePlan