import { FaChevronLeft } from "react-icons/fa";
import "./style.css"
function ChoosePlanTextBox({ text, maxLines = 3, lineLength = 15, showFullText, setShowFullText = () => { } }) {


    const toggleText = () => {
        setShowFullText(!showFullText);
    };

    const getTruncatedText = () => {
        const words = text.split(' ');
        const truncatedWords = words.slice(0, maxLines * lineLength); // Adjust this factor for better truncation
        return truncatedWords.join(' ') + "...";
    };

    return (
        <div className={`choosePlanTextBox`}>
            <div className={showFullText ? `choosePlanTextBox__text` : `choosePlanTextBox__text--truncated`}>
                {showFullText ? text : getTruncatedText()}
            </div>
            <div onClick={toggleText} className={`choosePlanTextBox__button`}>
                <div>{showFullText ? "بستن" : "بیشتر بدانید"}</div>
                <FaChevronLeft size={"10px"} />
            </div>

        </div>
    );
}

export default ChoosePlanTextBox