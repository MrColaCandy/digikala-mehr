import { BsQuestionSquare } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa6";
import './style.css'
<FaChevronDown />

function FAQSection (){
    return (
        <section className="FAQBlock">
        <header className="FAQBlock__header">
            <div className="FAQBlock__iconWrapper">
            <BsQuestionSquare className="FAQBlock__icon"/>
            </div>
          <h3 className="FAQBlock__title">سوالات متداول</h3>
        </header>
        <section className="FAQBlock__questionsWrapper">
          <div className="FAQBlock__questionItem">
            <div className="FAQBlock__questionPart">
              <span className="FAQBlock__questionText">
                مبالغ جمع شده صرف چه پروژه هایی خواهند شد؟ و چطور از این کارهای خیرخواهانه با خبر بشم؟
              </span>
              <FaChevronDown className="FAQBlock__questionIconDown" />
            </div>
            <p className="FAQBlock__answerText"></p>
          </div>
          <div className="FAQBlock__questionItem">
            <div className="FAQBlock__questionPart">
              <span className="FAQBlock__questionText">
                آیا محدودیتی در تعیین مبلغ ماهانه وجود داره؟
              </span>
              <FaChevronDown className="FAQBlock__questionIconDown" />
            </div>
            <p className="FAQBlock__answerText"></p>
          </div>
          <div className="FAQBlock__questionItem">
            <div className="FAQBlock__questionPart">
              <span className="FAQBlock__questionText">
                 در صورتی که از پرداخت این مبلغ منصرف بشم چطور می تونم لغوش کنم؟
              </span>
              <FaChevronDown className="FAQBlock__questionIconDown" />
            </div>
            <p className="FAQBlock__answerText"></p>
          </div>
          <div className="FAQBlock__questionItem">
            <div className="FAQBlock__questionPart">
              <span className="FAQBlock__questionText">
                 چطور می تونیم مبلغ و یا حوزه انتخابی رو تغییر بدم؟
              </span>
              <FaChevronDown className="FAQBlock__questionIconDown" />
            </div>
            <p className="FAQBlock__answerText"></p>
          </div>
          <div className="FAQBlock__questionItem">
            <div className="FAQBlock__questionPart">
              <span className="FAQBlock__questionText">
                مبالغ جمع آوری شده هر چند وقت یکبار صرف امور خیرخواهانه خواهد شد؟
              </span>
              <FaChevronDown className="FAQBlock__questionIconDown" />
            </div>
            <p className="FAQBlock__answerText"></p>
          </div>
          <div className="FAQBlock__questionItem">
            <div className="FAQBlock__questionPart">
              <span className="FAQBlock__questionText">
                مهلت مشارکت در این طرح تا کی هست؟
              </span>
              <FaChevronDown className="FAQBlock__questionIconDown" />
            </div>
            <p className="FAQBlock__answerText"></p>
          </div>
        </section>
      </section>
    )
}


export default FAQSection ;