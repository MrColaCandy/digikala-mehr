import { useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import "./style.css"

const Question = ({ questionText, answerText }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const questionRef = useRef(null);

    function handleCloseClick() {
        
        setShowAnswer(!showAnswer);
        setTimeout(() => {
            questionRef.current.scrollIntoView(true);
        }, 1);
    }


    return (
        <div className="question">
            <div ref={questionRef} className="question__ref"></div>
            <div  className={`question${showAnswer ? "--withAnswer" : "--withoutAnswer"}`}>
                <div  onClick={handleCloseClick} className="question__questionText">
                    {
                        questionText
                    }
                    {
                       !showAnswer &&
                        <FaChevronDown className="question__icon" />
                    }
                </div>
                <div  onClick={handleCloseClick} className={`question__answerText${showAnswer ? "--show" : "--hide"}`}>
                    {answerText}
                </div>
            </div>

        </div>
    )
}

export default Question