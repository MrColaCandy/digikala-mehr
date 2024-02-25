import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import "./style.css"
import ScrollingText from "@components/ScrollingText";
const Question = ({ questionText, answerText }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const questionRef = useRef(null);

    function handleCloseClick() {
        setShowAnswer(!showAnswer);
        setTimeout(() => {
            questionRef.current.scrollIntoView(true);
        }, 1);
    }
    const [textScroll, setTextScroll] = useState(false)
    useEffect(() => {
        if (document.body.clientWidth <= 700) {
            setTextScroll(true);
        }
        else {
            setTextScroll(false);
        }
    }, [document.body.clientWidth])
    return (
        <div className="question">
            <div ref={el => questionRef.current = el}  className="question__ref"></div>
            <div  className={`question--${showAnswer ? "answer" : "noAnswer"}`}>
                <div  onClick={handleCloseClick} className="question__text">
                    <ScrollingText start={ showAnswer&&textScroll} text={questionText} />
                    <FaChevronDown className="question__icon" />
                </div>
                <div  onClick={handleCloseClick} className={`question__answer--${showAnswer ? "show" : "hide"}`}>
                    {answerText}
                </div>
            </div>

        </div>
    )
}

export default Question