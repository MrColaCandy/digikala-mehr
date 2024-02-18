import { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import './style.css';



const Slider = ({ viewPortWidth = 800,slideWidth=390,slideHeight=450, scrollBehavior = "smooth", children = null, gap }) => {
    const containerRef = useRef(null);
    const previousButton = useRef(null);
    const nextButton = useRef(null);
    const [currentScroll, setCurrentScroll] = useState(0);



   

    useEffect(() => {
        containerRef.current.scrollTo(currentScroll, 0)
    }, [currentScroll])
    useEffect(() => {
        if (children === null) return;
        if (!containerRef.current) return;
        containerRef.current.addEventListener("scroll", () => {
            handleButtonsVisibility(containerRef, gap, nextButton, previousButton);

        })
    }, []);
    useEffect(()=>{
        if(!children)return;
        if (!containerRef.current) return;
        handleButtonsVisibility(containerRef, gap, nextButton, previousButton);

    },[children])
    return (
        <div className='slider' style={{ "--view-port-width": `${viewPortWidth}px`, "--slides-gap": `${gap}px`, "--scroll-behavior": `${scrollBehavior}`, "--slide-height": `${slideHeight}px`,"--slide-width":`${slideWidth}px` }} >
            <div className={`slider__view`} >
                <div id="slider-container" className={`slider__container`} ref={containerRef}>
                    {
                        children?.length<=0 &&
                        <div className='slider__noProject'>درحال حاضر پروژه ای برای انتخاب وجود ندارد.</div>
                    }
                    {
                        children
                    }
                </div>
            </div>
            <button ref={nextButton} className={`slider__nextButton`} onClick={() => {
                if (!children) return;
                const slide = containerRef.current.querySelector("#slide");
                setCurrentScroll(prev => prev - slide.getBoundingClientRect().width - gap);


            }}>
                <FaChevronLeft size={"20px"} />
            </button>
            <button ref={previousButton} className={`slider__previousButton`} onClick={() => {
                if (!children) return;
                const slide = containerRef.current.querySelector("#slide");
                setCurrentScroll(prev => prev + slide.getBoundingClientRect().width + gap);


            }}>
                <FaChevronRight size={"20px"} />
            </button>
        </div>
    );
}




export default Slider;



function handleButtonsVisibility(containerRef, gap, nextButton, previousButton) {
    const atEnd = containerRef.current.scrollWidth <= Math.ceil(Math.abs(containerRef.current.scrollLeft - containerRef.current.offsetWidth - gap));
    const atStart = containerRef.current.scrollLeft > -1;
    nextButton.current.style.display = atEnd ? "none" : "flex";
    previousButton.current.style.display = atStart ? "none" : "flex";
}

