import { BsPerson } from "react-icons/bs";
import { BsClipboard2Check } from "react-icons/bs";
import { FaMoneyBill } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import './style.css'

function HomeVideo({onStartButtonClick}) {
    return (
        <section className="homeVideo">
            <section className="homeVideo__video">
                <header className="homeVideo__header">
                    <p className="homeVideo__title">
                        قراره با قدم های کوچک ما اتفاقات بزرگی رخ بده.
                    </p>
                    <p className="homeVideo__description">
                        تهیه مخزن آب 5 هزار لیتری به منطقه حفاظت شده هنگام گناباد
                    </p>
                    <section className="homeVideo__sliderIndicators">
                        <i className="homeVideo__sliderDots"></i>
                        <i className="homeVideo__sliderDots"></i>

                        <i className="homeVideo__sliderDots homeVideo__bigDotes"></i>
                        <i className="homeVideo__sliderDots homeVideo__DotsEllipse"></i>
                    </section>
                </header>
                <video className="homeVideo__video" controls>
                    <source src="./assets/Video/interstellar.mp4" type="video/mp4" />
                </video>
            </section>

            <section className="homeVideo__startPlan">
                <p className="homeVideo__text">با <span className="homeVideo__boldText">بخش کوچکی از
                    حقوقمون</span> به صورت ماهانه به <span className="homeVideo__greenText">پروژه‌ی خیرخواهانه
                    </span> موردعلاقه‌مون.</p>

                <div className="homeVideo__startPlanItems">
                    <div className="homeVideo__startPlanItem">
                        <BsPerson className="homeVideo__loginIcon" />
                        وارد شو
                    </div>
                    <div className="homeVideo__startPlanItem">
                        <BsClipboard2Check className="homeVideo__projectIcon"   />
                        پروژه‌تو انتخاب کن
                    </div>
                    <div className="homeVideo__startPlanItem">
                        <FaMoneyBill  className="homeVideo__moneyIcon" />

                        مبلغ رو تعیین کن
                    </div>
                    <div className="homeVideo__startPlanItem">
                        <FaRegCircleCheck   className="homeVideo__withUsIcon"/>

                        بقیه‌ش با ما
                    </div>
                </div>


                <button onClick={onStartButtonClick} className="homeVideo__startPlanBtn">
                    <span>برای شروع کلیک کن</span>
                    <FaChevronLeft className="homeVideo__startPlanBtnIcon" />
                </button>
            </section>
        </section>
    )
}


export default HomeVideo;