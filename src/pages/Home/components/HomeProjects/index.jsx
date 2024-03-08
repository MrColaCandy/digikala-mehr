import { FaChevronLeft } from "react-icons/fa6";
import Slider from "@components/Slider";
import Slide from "@components/Slide";
import './style.css'


function HomeProjects({ onStartButtonClick,projects,isLoading }) {

  return (
    <section className="homeProjects">
      <section className="homeProjects__header">
        <h3 className="homeProjects__title">حالا چه پروژه‌هایی؟</h3>
        <h4 className="homeProjects__description">پروژه‌هایی که تو این فاز منتظر کمک شما هستن</h4>
      </section>
      <Slider isLoading={isLoading}  slideWidth={390} slideHeight={450} viewPortWidth={1250} gap={40}>
        {
          projects?.map((project) => {
            return <Slide
              key={project.id}
              project={project}
              variant="home"
              
            />

          })
        }
      </Slider>
      <button onClick={onStartButtonClick} className="homeProjects__button">
        <span>برای شروع کلیک کن</span>
        <FaChevronLeft className="homeProjects__icon" />
      </button>
    </section>
  )
}

export default HomeProjects;