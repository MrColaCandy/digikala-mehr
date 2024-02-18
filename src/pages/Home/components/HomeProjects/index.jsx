import { FaChevronLeft } from "react-icons/fa6";
import Slider from "@components/Slider";
import Card from "@components/Card";
import './style.css'

import { useAuth } from "../../../../components/hooks/useAuth";




function HomeProjects({onStartButtonClick}) {
  const{availableProjects}=useAuth()

  return (
    <section className="homeProjects">
      <section className="homeProjects__header">
        <h3 className="homeProjects__title">حالا چه پروژه‌هایی؟</h3>
        <h4 className="homeProjects__description">پروژه‌هایی که تو این فاز منتظر کمک شما هستن</h4>
      </section>
      <Slider slideWidth={390} slideHeight={450} viewPortWidth={1250} gap={40}>
        {
          
          availableProjects.map((project)=>{
            return <Card
            key={project.id} 
            id={project.id}
            description={project.description}
            title={project.title}
            employerLogo={project.employerLogo}
            employerName={project.employerName}
            image={project.image}
            textBoxVariant={1}
            />

          })
        }
      </Slider>
      <button onClick={onStartButtonClick}  className="homeProjects__button">
        <span>برای شروع کلیک کن</span>
        <FaChevronLeft className="homeProjects__icon" />
      </button>
    </section>
  )
}

export default HomeProjects;