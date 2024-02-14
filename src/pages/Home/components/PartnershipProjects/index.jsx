import { FaChevronLeft } from "react-icons/fa6";
import './style.css'
import ProjectSlider from "@components/ProjectSlider";

function PartnershipProjects() {
  return (
    <section className="partnershipProjects">
      <section className="partnershipProjects__header">
        <h3 className="partnershipProjects__title">حالا چه پروژه‌هایی؟</h3>
        <h4 className="partnershipProjects__bodyText">پروژه‌هایی که تو این فاز منتظر کمک شما هستن</h4>
      </section>
      <ProjectSlider/>
      <button className="partnershipProjects__button">
        <span>برای شروع کلیک کن</span>
        <FaChevronLeft className="partnershipProjects__icon" />
      </button>
    </section>
  )
}

export default PartnershipProjects;