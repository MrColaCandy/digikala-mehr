import { useEffect, useState } from "react"
import Layout from "@components/Layout"
import ChoosePlanCard from "./components/ChoosePlanCard"
import projectsData from "./data/projects.json"
import ChoosePlaneHeader from "./components/choosePlanHeader"
import "./style.css"
import Slider from "@components/Slider"



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
      <Slider slidesInView={3.2} gap={32} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide}>
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
      </Slider>
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