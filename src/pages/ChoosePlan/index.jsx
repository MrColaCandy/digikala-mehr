import Container from "../../components/Container"
import NavBar from "../../components/NavBar"
import Slider from "../../components/Slider"
import ChoosePlanCard from "./ChoosePlanCard"

import "./style.css"
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
      <Slider slideWidth={576} slideHeight={388}>
      <ChoosePlanCard/>
      <ChoosePlanCard/>
      <ChoosePlanCard/>
      </Slider>
      <button className="choosePlan__button">
      انتخاب 
      </button>
    </Container>
  )
}

export default ChoosePlan