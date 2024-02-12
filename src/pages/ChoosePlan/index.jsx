import NavBar from "@components/NavBar"
import Container from "@components/Container"
import ChoosePlaneSlider from "./ChoosePlanSlider"
import ChoosePlanCard from "./ChoosePlanCard"
import projectsData from "./data/projects.json"
import ChoosePlaneHeader from "./choosePlanHeader"

import "./style.css"
import { useEffect, useState } from "react"



const ChoosePlan = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMediaMatches,setIsMediaMatches]=useState(window.matchMedia("(max-width: 390px)").matches);
  useEffect(()=>{
   window.addEventListener("resize",()=>{
    setIsMediaMatches(window.matchMedia("(max-width: 390px)").matches)
   })
  },[])
  return (
    <Container>
      <NavBar />
      <ChoosePlaneHeader />
      <ChoosePlaneSlider gap={32} totalSlides={projectsData.length} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide}>
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
            />
          })
        }
      </ChoosePlaneSlider>
      {
        isMediaMatches &&
        <div className="choosePlan__slidesPaginationMobile">
          {currentSlide + 1}
          از
          {projectsData.length}
        </div>
      }
    </Container>
  )
}

export default ChoosePlan