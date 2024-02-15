import { FaChevronLeft } from "react-icons/fa6";
import './style.css'

import Slider from "@components/Slider";
import Card from "../Card";
import projectsData from "../../data/projects.json"
import { useState } from "react";
function PartnershipProjects() {
  const [currentSlide,setCurrentSlide]=useState(0);
  return (
    <section className="partnershipProjects">
      <section className="partnershipProjects__header">
        <h3 className="partnershipProjects__title">حالا چه پروژه‌هایی؟</h3>
        <h4 className="partnershipProjects__bodyText">پروژه‌هایی که تو این فاز منتظر کمک شما هستن</h4>
      </section>
      <Slider viewPortWidth={1231} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} gap={40}>
        {
          projectsData.map((project)=>{
            return <Card
            width={389}
            height={448}
            key={project.id} 
            id={project.id}
            description={project.description}
            title={project.title}
            employerLogo={project.employerLogo}
            employerName={project.employerName}
            image={project.image}

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