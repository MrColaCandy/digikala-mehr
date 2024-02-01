import { useState } from 'react';
import cardImage from "@assets/decorations/Choose-plan-card-image.jpg"
import logo from "@assets/decorations/roshan-logo.png"
import ChoosePlanTextBox from "../ChoosePlanTextBox"
import "./style.css"

const ChoosePlanCard = () => {
    const [showFullText, setShowFullText] = useState(false);
    return (
        <section className="choosePlanCard">
            {
                !showFullText &&
                <div className="choosePlanCard__image" style={{ "--card-image": `url('${cardImage}')` }} >
                    <div className="choosePlanCard__imageHeader">تهیه ابزار توانبخشی برای کودکان دارای اتیسم</div>
                    <div className="choosePlanCard__logo">
                        <img src={logo} className="choosePlanCard__logoImage" />
                        <div className="choosePlanCard__logoTitle">موسسه صبح روشن</div>
                    </div>
                </div>
            }
            <ChoosePlanTextBox setShowFullText={setShowFullText} showFullText={showFullText} text={"موسسه مردم‌نهاد مهرگیتی از سال 1384 با هدف تلاش برای ساختن ایرانی عاری از تبعیض و فقر فرهنگی شروع به مدرسه‌سازی و فعالیت آموزشی در مناطق کمتر برخوردار کرده است.عدم دسترسی به تجهیزات و امکانات آموزشی با کیفیت از جمله مشکلاتی است که در مناطق کم برخوردار وجود دارد. با اهدای کتاب و تجهیز کتابخانه های مناطق کم برخوردار  سهمی در ارتقای سطح فرهنگ، آگاهی، دانش و خلاقیت دانش‌آموزان و دانشجویان این مناطق داشته باشید. پیش از این موسسه نذر طبیعت با کمک­های مردمی چندین آبشخور و مخزن آب به منطقه حفاظت شده اهدا کرده است. امسال نیز با پیگیری های صورت گرفته متوجه شدیم مشکلات متعددی در راه حفاظت از حیات وحش این منطقه وجود دارد و محیط بانان در این منطقه ی با ارزش به وسیله تانکر، آبرسانی می­ کنند. کمبود مخزن ذخیره آب و یا فرسوده بودن برخی از آنها، مشکلاتی را به وجود آورده است. به همین دلیل در گام اول می­خواهیم با همراهی شما 5 مخزن آب 5 هزار لیتری به منطقه حفاظت شده هنگام گناباد اهدا کنیم."} />

            <div className="choosePlanCard__currentSlide">۲ از ۵</div>
        </section>
    )
}

export default ChoosePlanCard