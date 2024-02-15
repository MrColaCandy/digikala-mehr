import { FaChevronLeft } from "react-icons/fa";
import "./style.css"
import { useEffect, useState } from "react";
function TextBox({ title, width = 360, text = null, maxLines = 3, lineLength = 15, showFullText, setShowFullText = () => { }, button = null }) {

    const [length,setLength]=useState(lineLength);
    useEffect(()=>{
        const observe=new ResizeObserver(()=>{

            if(window.innerWidth<=390)
            {
                setLength(12);
            }
            else
            {
                setLength(lineLength)
            }
        })
        observe.observe(document.body)
    },[])
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
            <div className={`textBox__header${!showFullText?"":"--truncated"}`}>{title}</div>
            <div className="textBox" style={{ "--text-width": `${width}px` }}>

                <div className={showFullText ? `textBox__text` : `textBox__text--truncated`}>
                    {showFullText ? text : getTruncatedText()}
                </div>
                {
                    !button &&
                    <div onClick={toggleText} className={`textBox__button`}>
                        <div>{showFullText ? "بستن" : "بیشتر بدانید"}</div>
                        <FaChevronLeft size={"10px"} />
                    </div>
                }
                {
                    button &&
                    <>
                        {
                            button
                        }
                    </>
                }

            </div>
        </>
    );
}

export default TextBox