import { FaChevronLeft } from "react-icons/fa6";
import './style.css'

import Slider from "@components/Slider";
import Card from "@components/Card";
import projectsData from "../../data/projects.json"


function PartnershipProjects() {


  return (
    <section className="partnershipProjects">
      <section className="partnershipProjects__header">
        <h3 className="partnershipProjects__title">حالا چه پروژه‌هایی؟</h3>
        <h4 className="partnershipProjects__bodyText">پروژه‌هایی که تو این فاز منتظر کمک شما هستن</h4>
      </section>
      <Slider slideWidth={390} slideHeight={450} viewPortWidth={1250} gap={40}>
        {
          projectsData.map((project)=>{
            return <Card
            className={"home__card"}
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
      <button className="partnershipProjects__button">
        <span>برای شروع کلیک کن</span>
        <FaChevronLeft className="partnershipProjects__icon" />
      </button>
    </section>
  )
}

export default PartnershipProjects;