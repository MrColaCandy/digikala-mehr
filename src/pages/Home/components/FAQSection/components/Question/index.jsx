import { FaChevronDown } from "react-icons/fa6";
import "./style.css"
import { useState } from "react";
const Question = ({text}) => {
    const [showAnswer,setShowAnswer]=useState(false);

    function handleQuestionIconClick()
    {
        setShowAnswer(!showAnswer);
    }

    return (
        <div className="FAQ__questionItem">
            <div className="FAQ__questionPart">
                <span className="FAQ__questionText">
                    مبالغ جمع شده صرف چه پروژه هایی خواهند شد؟ و چطور از این کارهای خیرخواهانه با خبر بشم؟
                </span>
                <p className="FAQ__answerText"></p>
                <FaChevronDown onClick={handleQuestionIconClick} className="FAQ__questionIconDown" />
            </div>
            
        </div>
    )
}

export default Question