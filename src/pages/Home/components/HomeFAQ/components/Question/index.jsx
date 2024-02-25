import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import "./style.css"
import ScrollingText from "@components/ScrollingText";
const Question = ({ questionText, answerText }) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const answerRef = useRef(null);

    function handleCloseClick() {
        setShowAnswer(!showAnswer);
        setTimeout(() => {
            const y = answerRef.current.getBoundingClientRect().top + window.scrollY - 200;
            window.scroll({
                top: y,
                behavior: 'smooth'
            });
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
        <>
            <div ref={el => answerRef.current = el} className={`question--${showAnswer ? "answer" : "noAnswer"}`}>
                <div onClick={handleCloseClick} className="question__text">
                    <ScrollingText start={showAnswer && textScroll} text={questionText} />
                    <FaChevronDown className="question__icon" />
                </div>
                <div onClick={handleCloseClick} className={`question__answer--${showAnswer ? "show" : "hide"}`}>
                    {answerText}
                </div>
            </div>

        </>
    )
}

export default Question