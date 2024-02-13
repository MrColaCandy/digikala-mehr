import { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import './style.css';



const ChoosePlaneSlider = ({ scrollBehavior = "smooth", children, gap, currentSlide, setCurrentSlide }) => {
    const containerRef = useRef(null);
    const previousButton = useRef(null);
    const nextButton = useRef(null);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);



    function updateSlideDimensions() {
        const { width, height } = containerRef.current.querySelector("#slide").getBoundingClientRect()
        setWidth(width);
        setHeight(height);
    }


    useEffect(() => {
        if (!containerRef.current) return;
        updateSlideDimensions();
        const resizeObserver = new ResizeObserver(() => {
            updateSlideDimensions();
        })
        resizeObserver.observe(containerRef.current.querySelector("#slide"));
        window.addEventListener("resize", () => {
            updateSlideDimensions();
        })
        previousButton.current.style.display = "none";
      
        containerRef.current.addEventListener("scroll", () => {
            const atEnd = (containerRef.current.scrollWidth + containerRef.current.scrollLeft - containerRef.current.getBoundingClientRect().width) < 20;
            const atStart = containerRef.current.scrollLeft > -1;
            nextButton.current.style.display = atEnd ? "none" : "flex"
            previousButton.current.style.display = atStart ? "none" : "flex"
         
        })

        containerRef.current.addEventListener("scrollend", () => {
            const slides=[...containerRef.current.querySelectorAll("#slide")];
            const slidesLength=slides.length;
            const scrollPercentage = Math.abs(Math.ceil(100 * containerRef.current.scrollLeft / (containerRef.current.scrollWidth-containerRef.current.clientWidth))); 
            const currentIndex = Math.floor(scrollPercentage / (100 / slidesLength));
            setCurrentSlide(currentIndex)

        })
    }, []);
    useEffect(() => {
        const slides = containerRef.current.querySelectorAll("#slide")
        slides[currentSlide]?.scrollIntoView({ inline: "center", block: "center" })

    }, [currentSlide])
    return (
        <div className='slider'>
            <div className={`slider__view`} style={{ "--slide-width": `${width}px`, "--slide-height": `${height}px`, "--slides-gap": `${gap}px`, "--scroll-behavior": `${scrollBehavior}` }}>
                <div id="slider-container" className={`slider__container`} ref={containerRef}>
                    {children}
                </div>
            </div>
            <button ref={nextButton} className={`slider__nextButton`} onClick={() => {

                setCurrentSlide(prevSlide => prevSlide + 1);

            }}>
                <FaChevronLeft size={"20px"} />
            </button>
            <button ref={previousButton} className={`slider__previousButton`} onClick={() => {

                setCurrentSlide(prevSlide => prevSlide - 1);

            }}>
                <FaChevronRight size={"20px"} />
            </button>
        </div>
    );
}




export default ChoosePlaneSlider;



