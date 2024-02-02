import NavBar from "@components/NavBar"
import Slider from "./Slider"
import ChoosePlanCard from "./ChoosePlanCard"
import projectsData from "./data/projects.json"
import "./style.css"
import Container from "@components/Container"
const ChoosePlan = () => {
  return (

    <Container>
      <NavBar />
      <section className="choosePlan">
        <div className="choosePlan__header">
          <div className="choosePlan__currentPhase">مرحله ۲ از ۳</div>
          <div className="choosePlan__headerTextGreen">از اینکه تصمیم گرفتی با ما همراه باشی ازت ممنونیم.</div>
          <div className="choosePlan__headerText">حالا تو این مرحله باید انتخاب کنی کمک‌ات صرف چه <span className="choosePlane_TextGreen">کار خیری</span> بشه.</div>
        </div>
      </section>
      <Slider>
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
      </Slider>
      <button className="choosePlan__button">
        انتخاب
      </button>
    </Container>

  )
}

export default ChoosePlan