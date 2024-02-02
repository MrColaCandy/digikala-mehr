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
const ChoosePlan = () => {
  const [currentSlide,setCurrentSlide]=useState(1);
  const currentWidth=useMedia();
  return (
    <Container>
      <NavBar />
      <ChoosePlaneHeader />
      <ChoosePlaneSlider totalSlides={projectsData.length} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide}>
        {
          projectsData.map((project, index, array) => {
            return <ChoosePlanCard
              key={project.id}
              currentSlide={index + 1}
              totalSlides={array.length}
              image={project.image}
              subtitleImage={project.subtitleImage}
              title={project.title}
              bodyText={project.description}
              subtitle={project.subtitle} />
          })
        }
      </ChoosePlaneSlider>
      {
        currentWidth <=390 &&
        <div className="choosePlan__slidesPaginationMobile">
           {currentSlide}
           از
          {projectsData.length}
        </div>
      }
      <ChoosePlanButton />
    </Container>
  )
}

export default ChoosePlan