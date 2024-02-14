import { BsQuestionSquare } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa6";
import './style.css'

function FAQSection (){
    return (
        <section className="FAQ">
        <header className="FAQ__header">
            <div className="FAQ__iconWrapper">
            <BsQuestionSquare className="FAQ__icon"/>
            </div>
          <h3 className="FAQ__title">سوالات متداول</h3>
        </header>
        <section className="FAQ__questionsWrapper">
          <div className="FAQ__questionItem">
            <div className="FAQ__questionPart">
              <span className="FAQ__questionText">
                مبالغ جمع شده صرف چه پروژه هایی خواهند شد؟ و چطور از این کارهای خیرخواهانه با خبر بشم؟
              </span>
              <FaChevronDown className="FAQ__questionIconDown" />
            </div>
            <p className="FAQ__answerText"></p>
          </div>
          <div className="FAQ__questionItem">
            <div className="FAQ__questionPart">
              <span className="FAQ__questionText">
                آیا محدودیتی در تعیین مبلغ ماهانه وجود داره؟
              </span>
              <FaChevronDown className="FAQ__questionIconDown" />
            </div>
            <p className="FAQ__answerText"></p>
          </div>
          <div className="FAQ__questionItem">
            <div className="FAQ__questionPart">
              <span className="FAQ__questionText">
                در صورتی که از پرداخت این مبلغ منصرف بشم چطور می تونم لغوش کنم؟
              </span>
              <FaChevronDown className="FAQ__questionIconDown" />
            </div>
            <p className="FAQ__answerText"></p>
          </div>
          <div className="FAQ__questionItem">
            <div className="FAQ__questionPart">
              <span className="FAQ__questionText">
                چطور می تونیم مبلغ و یا حوزه انتخابی رو تغییر بدم؟
              </span>
              <FaChevronDown className="FAQ__questionIconDown" />
            </div>
            <p className="FAQ__answerText"></p>
          </div>
          <div className="FAQ__questionItem">
            <div className="FAQ__questionPart">
              <span className="FAQ__questionText">
                مبالغ جمع آوری شده هر چند وقت یکبار صرف امور خیرخواهانه خواهد شد؟
              </span>
              <FaChevronDown className="FAQ__questionIconDown" />
            </div>
            <p className="FAQ__answerText"></p>
          </div>
          <div className="FAQ__questionItem">
            <div className="FAQ__questionPart">
              <span className="FAQ__questionText">
                مهلت مشارکت در این طرح تا کی هست؟
              </span>
              <FaChevronDown className="FAQ__questionIconDown" />
            </div>
            <p className="FAQ__answerText"></p>
          </div>
        </section>
      </section>
    )
}


export default FAQSection ;