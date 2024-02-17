import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import "./style.css"
const Question = ({ questionText,answerText }) => {
    const [showAnswer, setShowAnswer] = useState(false);

    function handleQuestionIconClick() {
        setShowAnswer(!showAnswer);

    }

    return (
        <>
            <div className={`question--${showAnswer ? "answer" : "noAnswer"}`}>
                    <div onClick={handleQuestionIconClick}  className="question__text">
                        {questionText}
                        <FaChevronDown  className="question__icon" />
                    </div>
                    <div  className={`question__answer--${showAnswer ? "show" : "hide"}`}>
                       {answerText}
                    </div>
            </div>

        </>
    )
}

export default Question