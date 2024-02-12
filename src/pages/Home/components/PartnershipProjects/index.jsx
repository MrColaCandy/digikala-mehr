import { FaChevronLeft } from "react-icons/fa6";
import './style.css'
import ProjectSlider from "@components/ProjectSlider";

function PartnershipProjects() {
  return (
    <section className="partnershipBlock__projects">
      <section className="partnershipBlock__projectsHeader">
        <h3 className="partnershipBlock__projectsTitle">حالا چه پروژه‌هایی؟</h3>
        <h4 className="partnershipBlock__projectsDescription">پروژه‌هایی که تو این فاز منتظر کمک شما هستن</h4>
      </section>
      <ProjectSlider/>
      <button className="partnershipBlock__startProjectBtn">
        <span>برای شروع کلیک کن</span>
        <FaChevronLeft className="partnershipBlock__startProjectBtnIcon" />
      </button>
    </section>
  )
}

export default PartnershipProjects;