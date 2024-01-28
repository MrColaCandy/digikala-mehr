import { BsPerson } from "react-icons/bs";
import { BsClipboard2Check } from "react-icons/bs";
import { FaMoneyBill } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import './style.css'

function PresentationSection() {
  return (
    <section className="presentation">
      <section className="presentation__videoSection">
        <header className="presentation__header">
          <p className="presentation__title">
            قراره با قدم های کوچک ما اتفاقات بزرگی رخ بده.
          </p>
          <p className="presentation__description">
            تهیه مخزن آب 5 هزار لیتری به منطقه حفاظت شده هنگام گناباد
          </p>
          <section className="presentation__sliderIndicators">
            <i className="presentation__sliderDots"></i>
            <i className="presentation__sliderDots"></i>

            <i className="presentation__sliderDots presentation__sliderDots--big"></i>
            <i className="presentation__sliderDots presentation__sliderDots--ellipse"></i>
          </section>
        </header>
        <video className="presentation__video" controls>
          <source src="./assets/Video/interstellar.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="presentation__startPlanSection">
        <p className="presentation__startPlanText">با <span className="presentation__startPlanText--boldText">بخش کوچکی از
          حقوقمون</span> به صورت ماهانه به <span className="presentation__startPlanText--greenText">پروژه‌ی خیرخواهانه
          </span> موردعلاقه‌مون.</p>

        <div className="presentation__startPlanItems">

          <div className="firstRow">
            <div className="presentation__startPlanItem">
              <div className="presentation__startPlanItemIconWrapper presentation__startPlanItemIconWrapper--login">
                <BsPerson className="  presentation__startPlanItemIcon--login" />
              </div>
              <span className="presentation__startPlanItemText">وارد شو</span>
            </div>
            <div className="presentation__startPlanItem">
              <div className="presentation__startPlanItemIconWrapper presentation__startPlanItemIconWrapper--project">
              <BsClipboard2Check className="presentation__startPlanItemIcon--project" />
              </div>
              <span className="presentation__startPlanItemText">پروژه‌تو انتخاب کن</span>
            </div>
          </div>

          <div className="secondRow">
            <div className="presentation__startPlanItem">
              <div className="presentation__startPlanItemIconWrapper presentation__startPlanItemIconWrapper--money">
              <FaMoneyBill className="presentation__startPlanItemIcon--money" />
              </div>
              <span className="presentation__startPlanItemText">مبلغ رو تعیین کن</span>
            </div>
            <div className="presentation__startPlanItem">
              <div className="presentation__startPlanItemIconWrapper presentation__startPlanItemIconWrapper--withUs">
              <FaRegCircleCheck className="presentation__startPlanItemIcon--withUs" />
              </div>
              <span className="presentation__startPlanItemText">بقیه‌ش با ما</span>
            </div>
          </div>

        </div>
        <button className="presentation__startPlanBtn">
          <span>برای شروع کلیک کن</span>
          <FaChevronLeft className="presentation__startPlanBtnIcon" />
        </button>
      </section>
    </section>
  )
}


export default PresentationSection;