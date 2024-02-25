import { BsQuestionSquare } from "react-icons/bs";
import './style.css'
import Question from "./components/Question";
import { questions } from "./data";
function HomeFAQ (){
    return (
        <section className="homeFAQ">
        <header className="homeFAQ__header">
            <div className="homeFAQ__iconWrapper">
            <BsQuestionSquare className="homeFAQ__icon"/>
            </div>
          <h3 className="homeFAQ__title">سوالات متداول</h3>
        </header>
        <section className="homeFAQ__questionsWrapper">
          {
            questions.map((q)=>{
              return <Question key={q.id} questionText={q.questionText} answerText={q.answerText}/>
            })
          }
        </section>
      </section>
    )
}


export default HomeFAQ ;