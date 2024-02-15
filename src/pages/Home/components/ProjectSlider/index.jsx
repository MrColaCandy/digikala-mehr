import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import organizationLogo from '@assets/decorations/organizationLogo.jpg'
import projectHeader from '@assets/decorations/projectHeader.png'
import './style.css'



function ProjectSlider() {
  return (
    <section className="partnershipBlock__projectsSliderBtnsWrapper">
      <section className="partnershipBlock__projectsSliderWrapper">

        <div className="nextSlideIconWrapper">
          <FaAngleLeft className="nextSlideIcon" />
        </div>

        <div className="perviousSlideIconWrapper">
          <FaAngleRight className="perviousSlideIcon" />
        </div>
        <section className="projectsSliderItem">
          <section className="projectsSliderItem__Header">
            <div className="projectsSliderItem__OrganizationData">
              <img src={organizationLogo} className="projectsSliderItem__OrganizationLogo"
                alt="organizationLogo" />
              <p className="projectsSliderItem__OrganizationName">موسسه صبح روشن</p>
            </div>
            <img src={projectHeader}
              className="projectsSliderItem__OrganizationBanner" alt="projectBanner" />
          </section>
          <article className="projectsSliderItem__Data">
            <h3 className="projectsSliderItem__Title">تهیه ابزار توانبخشی برای کودکان دارای اتیسم</h3>
            <p className="projectsSliderItem__Description">
              استان پهناور خراسان رضوی با داشتن ده­ها منطقه حفاظت شده، پارک ملی و پناهگاه حیات وحش دارای تنوع بی
              نظیری از گونه های مختلف حیات وحش است؛ اما متاسفانه محیط زیست این استان به دلیل خشکسالی­های پی در پی
              آسیب زیادی دیده است.
              پیش از این موسسه نذر طبیعت با کمک­های مردمی چندین آبشخور و مخزن آب به منطقه حفاظت شده اهدا کرده است.
              امسال نیز با پیگیری های صورت گرفته متوجه شدیم مشکلات متعددی در راه حفاظت از حیات وحش این منطقه وجود
              دارد و محیط بانان در این منطقه ی با ارزش به وسیله تانکر، آبرسانی می­ کنند. کمبود مخزن ذخیره آب و یا
              فرسوده بودن برخی از آنها، مشکلاتی را به وجود آورده است. به همین دلیل در گام اول می­خواهیم با همراهی
              شما 5 مخزن آب 5 هزار لیتری به منطقه حفاظت شده هنگام گناباد اهدا کنیم.
            </p>
          </article>

          <section className="projectsSliderItem__BtnWrapper">
            <button className="projectsSliderItem__BtnMoreLearn">بیشتر بدانید</button>
          </section>

        </section>
        <section className="projectsSliderItem">
          <section className="projectsSliderItem__Header">
            <div className="projectsSliderItem__OrganizationData">
              <img src={organizationLogo} className="projectsSliderItem__OrganizationLogo"
                alt="organizationLogo" />
              <p className="projectsSliderItem__OrganizationName">موسسه صبح روشن</p>
            </div>
            <img src={projectHeader}
              className="projectsSliderItem__OrganizationBanner" alt="projectBanner" />
          </section>
          <article className="projectsSliderItem__Data">
            <h3 className="projectsSliderItem__Title">تهیه ابزار توانبخشی برای کودکان دارای اتیسم</h3>
            <p className="projectsSliderItem__Description">
              استان پهناور خراسان رضوی با داشتن ده­ها منطقه حفاظت شده، پارک ملی و پناهگاه حیات وحش دارای تنوع بی
              نظیری از گونه های مختلف حیات وحش است؛ اما متاسفانه محیط زیست این استان به دلیل خشکسالی­های پی در پی
              آسیب زیادی دیده است.
              پیش از این موسسه نذر طبیعت با کمک­های مردمی چندین آبشخور و مخزن آب به منطقه حفاظت شده اهدا کرده است.
              امسال نیز با پیگیری های صورت گرفته متوجه شدیم مشکلات متعددی در راه حفاظت از حیات وحش این منطقه وجود
              دارد و محیط بانان در این منطقه ی با ارزش به وسیله تانکر، آبرسانی می­ کنند. کمبود مخزن ذخیره آب و یا
              فرسوده بودن برخی از آنها، مشکلاتی را به وجود آورده است. به همین دلیل در گام اول می­خواهیم با همراهی
              شما 5 مخزن آب 5 هزار لیتری به منطقه حفاظت شده هنگام گناباد اهدا کنیم.
            </p>
          </article>

          <section className="projectsSliderItem__BtnWrapper">
            <button className="projectsSliderItem__BtnMoreLearn">بیشتر بدانید</button>
          </section>

        </section>
        <section className="projectsSliderItem">
          <section className="projectsSliderItem__Header">
            <div className="projectsSliderItem__OrganizationData">
              <img src={organizationLogo} className="projectsSliderItem__OrganizationLogo"
                alt="organizationLogo" />
              <p className="projectsSliderItem__OrganizationName">موسسه صبح روشن</p>
            </div>
            <img src={projectHeader}
              className="projectsSliderItem__OrganizationBanner" alt="projectBanner" />
          </section>
          <article className="projectsSliderItem__Data">
            <h3 className="projectsSliderItem__Title">تهیه ابزار توانبخشی برای کودکان دارای اتیسم</h3>
            <p className="projectsSliderItem__Description">
              استان پهناور خراسان رضوی با داشتن ده­ها منطقه حفاظت شده، پارک ملی و پناهگاه حیات وحش دارای تنوع بی
              نظیری از گونه های مختلف حیات وحش است؛ اما متاسفانه محیط زیست این استان به دلیل خشکسالی­های پی در پی
              آسیب زیادی دیده است.
              پیش از این موسسه نذر طبیعت با کمک­های مردمی چندین آبشخور و مخزن آب به منطقه حفاظت شده اهدا کرده است.
              امسال نیز با پیگیری های صورت گرفته متوجه شدیم مشکلات متعددی در راه حفاظت از حیات وحش این منطقه وجود
              دارد و محیط بانان در این منطقه ی با ارزش به وسیله تانکر، آبرسانی می­ کنند. کمبود مخزن ذخیره آب و یا
              فرسوده بودن برخی از آنها، مشکلاتی را به وجود آورده است. به همین دلیل در گام اول می­خواهیم با همراهی
              شما 5 مخزن آب 5 هزار لیتری به منطقه حفاظت شده هنگام گناباد اهدا کنیم.
            </p>
          </article>

          <section className="projectsSliderItem__BtnWrapper">
            <button className="projectsSliderItem__BtnMoreLearn">بیشتر بدانید</button>
          </section>

        </section>
        <section className="projectsSliderItem">
          <section className="projectsSliderItem__Header">
            <div className="projectsSliderItem__OrganizationData">
              <img src={organizationLogo} className="projectsSliderItem__OrganizationLogo"
                alt="organizationLogo" />
              <p className="projectsSliderItem__OrganizationName">موسسه صبح روشن</p>
            </div>
            <img src={projectHeader}
              className="projectsSliderItem__OrganizationBanner" alt="projectBanner" />
          </section>
          <article className="projectsSliderItem__Data">
            <h3 className="projectsSliderItem__Title">تهیه ابزار توانبخشی برای کودکان دارای اتیسم</h3>
            <p className="projectsSliderItem__Description">
              استان پهناور خراسان رضوی با داشتن ده­ها منطقه حفاظت شده، پارک ملی و پناهگاه حیات وحش دارای تنوع بی
              نظیری از گونه های مختلف حیات وحش است؛ اما متاسفانه محیط زیست این استان به دلیل خشکسالی­های پی در پی
              آسیب زیادی دیده است.
              پیش از این موسسه نذر طبیعت با کمک­های مردمی چندین آبشخور و مخزن آب به منطقه حفاظت شده اهدا کرده است.
              امسال نیز با پیگیری های صورت گرفته متوجه شدیم مشکلات متعددی در راه حفاظت از حیات وحش این منطقه وجود
              دارد و محیط بانان در این منطقه ی با ارزش به وسیله تانکر، آبرسانی می­ کنند. کمبود مخزن ذخیره آب و یا
              فرسوده بودن برخی از آنها، مشکلاتی را به وجود آورده است. به همین دلیل در گام اول می­خواهیم با همراهی
              شما 5 مخزن آب 5 هزار لیتری به منطقه حفاظت شده هنگام گناباد اهدا کنیم.
            </p>
          </article>

          <section className="projectsSliderItem__BtnWrapper">
            <button className="projectsSliderItem__BtnMoreLearn">بیشتر بدانید</button>
          </section>

        </section>
        <section className="projectsSliderItem">
          <section className="projectsSliderItem__Header">
            <div className="projectsSliderItem__OrganizationData">
              <img src={organizationLogo} className="projectsSliderItem__OrganizationLogo"
                alt="organizationLogo" />
              <p className="projectsSliderItem__OrganizationName">موسسه صبح روشن</p>
            </div>
            <img src={projectHeader}
              className="projectsSliderItem__OrganizationBanner" alt="projectBanner" />
          </section>
          <article className="projectsSliderItem__Data">
            <h3 className="projectsSliderItem__Title">تهیه ابزار توانبخشی برای کودکان دارای اتیسم</h3>
            <p className="projectsSliderItem__Description">
              استان پهناور خراسان رضوی با داشتن ده­ها منطقه حفاظت شده، پارک ملی و پناهگاه حیات وحش دارای تنوع بی
              نظیری از گونه های مختلف حیات وحش است؛ اما متاسفانه محیط زیست این استان به دلیل خشکسالی­های پی در پی
              آسیب زیادی دیده است.
              پیش از این موسسه نذر طبیعت با کمک­های مردمی چندین آبشخور و مخزن آب به منطقه حفاظت شده اهدا کرده است.
              امسال نیز با پیگیری های صورت گرفته متوجه شدیم مشکلات متعددی در راه حفاظت از حیات وحش این منطقه وجود
              دارد و محیط بانان در این منطقه ی با ارزش به وسیله تانکر، آبرسانی می­ کنند. کمبود مخزن ذخیره آب و یا
              فرسوده بودن برخی از آنها، مشکلاتی را به وجود آورده است. به همین دلیل در گام اول می­خواهیم با همراهی
              شما 5 مخزن آب 5 هزار لیتری به منطقه حفاظت شده هنگام گناباد اهدا کنیم.
            </p>
          </article>

          <section className="projectsSliderItem__BtnWrapper">
            <button className="projectsSliderItem__BtnMoreLearn">بیشتر بدانید</button>
          </section>
        </section>
      </section>
    </section>
  )
}


export default ProjectSlider;
