import { useEffect, useState } from "react";
import Button from "@components/Button"
import { FaChevronLeft } from "react-icons/fa";
import "./style.css"
function TextBox({ className = "", title, text = null, maxLines = 3, lineLength = 15, showFullText, setShowFullText = () => { }, variant = 0 }) {

    const [length, setLength] = useState(lineLength);
    useEffect(() => {
        const observe = new ResizeObserver(() => {

            if (window.innerWidth <= 390) {
                setLength(12);
            }
            else {
                setLength(lineLength)
            }
        })
        observe.observe(document.body)
    }, [])
    const toggleText = () => {
        setShowFullText(!showFullText);
    };

    const getTruncatedText = () => {
        if (!text) return;
        const words = text.split(' ');
        const truncatedWords = words.slice(0, maxLines * length);
        return truncatedWords.join(' ') + "...";
    };

    return (
        <>

            <div className="textBox" >

                <div className={showFullText ? `textBox__text` : `textBox__text--truncated`}>
                    <div className={`textBox__header${!showFullText ? "" : "--truncated"} ${className}`}>{title}</div>
                    {showFullText ? text : getTruncatedText()}
                </div>
                {
                    variant === 0 &&
                    <div onClick={toggleText} className={`textBox__button${!showFullText ? "--truncated" : ""}`}>
                        <div>{showFullText ? "بستن" : "بیشتر بدانید"}</div>
                        <FaChevronLeft size={"10px"} />
                    </div>
                }
                {
                    variant === 1 &&
                    <Button className="textBox_button" text={showFullText ? "بستن" : "بیشتر بدانید"} onClick={() => setShowFullText(!showFullText)} />
                }
            </div>
        </>
    );
}

export default TextBox