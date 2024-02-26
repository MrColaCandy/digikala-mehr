import { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import './style.css';


const Slider = ({ viewPortWidth = 800, slideWidth = 390, slideHeight = 450, scrollBehavior = "smooth", children = null, gap }) => {
    const containerRef = useRef(null);
    const previousButton = useRef(null);
    const nextButton = useRef(null);
    const [space, setSpace] = useState(gap);
    useEffect(() => {
        if (children === null) return;
        if (!containerRef.current) return;
        containerRef.current.addEventListener("scroll", () => {
            handleButtonsVisibility(containerRef, space, nextButton, previousButton);
        })
        const observer = new ResizeObserver(() => {
            if (document.body.clientWidth <= 390) {
                setSpace(20);
            }
            else {
                setSpace(gap);
            }
        })
        observer.observe(document.body);

        containerRef.current.addEventListener("wheel",()=>{
            return false
        })
    }, []);
    useEffect(() => {
        if (!children) return;
        if (!containerRef.current) return;
        handleButtonsVisibility(containerRef, space, nextButton, previousButton);
    }, [children])
    return (
        <div className='slider' style={{ "--view-port-width": `${viewPortWidth}px`, "--slides-gap": `${space}px`, "--scroll-behavior": `${scrollBehavior}`, "--slide-height": `${slideHeight}px`, "--slide-width": `${slideWidth}px` }} >
            <div className={`slider__view`} >
                <div id="slider-container" className={`slider__container`} ref={containerRef}>
                  {
                    children
                  }
                </div>
            </div>
            <button ref={nextButton} className={`slider__nextButton`} onClick={() => {
                if (!children) return;
                const slide = containerRef.current.querySelector("#slide");

                  containerRef.current.scrollTo(containerRef.current.scrollLeft-slide.getBoundingClientRect().width,0)

            }}>
                <FaChevronLeft size={"20px"} />
            </button>
            <button ref={previousButton} className={`slider__previousButton`} onClick={() => {
                if (!children) return;
                const slide = containerRef.current.querySelector("#slide");
                containerRef.current.scrollTo(containerRef.current.scrollLeft+slide.getBoundingClientRect().width,0)


            }}>
                <FaChevronRight size={"20px"} />
            </button>
        </div>
    );
}




export default Slider;



function handleButtonsVisibility(containerRef, space, nextButton, previousButton) {
    const atEnd = containerRef.current.scrollWidth <= Math.ceil(Math.abs(containerRef.current.scrollLeft - containerRef.current.offsetWidth - space));
    const atStart = containerRef.current.scrollLeft > -1;
    nextButton.current.style.display = atEnd ? "none" : "flex";
    previousButton.current.style.display = atStart ? "none" : "flex";
}

