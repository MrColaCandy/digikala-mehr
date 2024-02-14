import { useEffect, useState } from "react"
import Layout from "@components/Layout"
import ChoosePlaneSlider from "./components/ChoosePlanSlider"
import ChoosePlanCard from "./components/ChoosePlanCard"
import projectsData from "./data/projects.json"
import ChoosePlaneHeader from "./components/choosePlanHeader"
import "./style.css"



const ChoosePlan = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMediaMatches,setIsMediaMatches]=useState(window.matchMedia("(max-width: 390px)").matches);
  useEffect(()=>{
   window.addEventListener("resize",()=>{
    setIsMediaMatches(window.matchMedia("(max-width: 390px)").matches)
   })
  },[])
  return (
    <Layout>
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
    </Layout>
  )
}

export default ChoosePlan