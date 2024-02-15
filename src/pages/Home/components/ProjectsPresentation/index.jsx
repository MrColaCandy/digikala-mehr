import { BsPerson } from "react-icons/bs";
import { BsClipboard2Check } from "react-icons/bs";
import { FaMoneyBill } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import './style.css'

function ProjectsPresentation() {
    return (
        <section className="projectsPresentation">
            <section className="projectsPresentation__video">
                <header className="projectsPresentation__header">
                    <p className="projectsPresentation__title">
                        قراره با قدم های کوچک ما اتفاقات بزرگی رخ بده.
                    </p>
                    <p className="projectsPresentation__description">
                        تهیه مخزن آب 5 هزار لیتری به منطقه حفاظت شده هنگام گناباد
                    </p>
                    <section className="projectsPresentation__sliderIndicators">
                        <i className="projectsPresentation__sliderDots"></i>
                        <i className="projectsPresentation__sliderDots"></i>

                        <i className="projectsPresentation__sliderDots projectsPresentation__bigDotes"></i>
                        <i className="projectsPresentation__sliderDots projectsPresentation__DotsEllipse"></i>
                    </section>
                </header>
                <video className="projectsPresentation__video" controls>
                    <source src="./assets/Video/interstellar.mp4" type="video/mp4" />
                </video>
            </section>

            <section className="projectsPresentation__startPlan">
                <p className="projectsPresentation__text">با <span className="projectsPresentation__boldText">بخش کوچکی از
                    حقوقمون</span> به صورت ماهانه به <span className="projectsPresentation__greenText">پروژه‌ی خیرخواهانه
                    </span> موردعلاقه‌مون.</p>

                <div className="projectsPresentation__startPlanItems">
                    <div className="projectsPresentation__startPlanItem">
                        <BsPerson className="projectsPresentation__loginIcon" />
                        وارد شو
                    </div>
                    <div className="projectsPresentation__startPlanItem">
                        <BsClipboard2Check className="projectsPresentation__projectIcon"   />
                        پروژه‌تو انتخاب کن
                    </div>
                    <div className="projectsPresentation__startPlanItem">
                        <FaMoneyBill  className="projectsPresentation__moneyIcon" />

                        مبلغ رو تعیین کن
                    </div>
                    <div className="projectsPresentation__startPlanItem">
                        <FaRegCircleCheck   className="projectsPresentation__withUsIcon"/>

                        بقیه‌ش با ما
                    </div>
                </div>


                <button className="projectsPresentation__startPlanBtn">
                    <span>برای شروع کلیک کن</span>
                    <FaChevronLeft className="projectsPresentation__startPlanBtnIcon" />
                </button>
            </section>
        </section>
    )
}


export default ProjectsPresentation;