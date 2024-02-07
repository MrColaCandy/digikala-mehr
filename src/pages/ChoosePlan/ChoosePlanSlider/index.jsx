import { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import './style.css';



const ChoosePlaneSlider = ({ children, setCurrentProject, gap, variant, currentSlide, setCurrentSlide }) => {
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
    function isInView(element) {
        return element.getBoundingClientRect().right <= window.innerWidth;
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
            containerRef.current.scrollLeft=0;
        })
        previousButton.current.style.display = "none";
        containerRef.current.addEventListener("scroll", () => {
            const atEnd = (containerRef.current.scrollWidth + containerRef.current.scrollLeft - containerRef.current.getBoundingClientRect().width) < 20;
            const atStart = containerRef.current.scrollLeft > -1;
            nextButton.current.style.display = atEnd ? "none" : "flex"
            previousButton.current.style.display = atStart ? "none" : "flex";
        })
        containerRef.current.addEventListener("scrollend", () => {
            const slides = containerRef.current.querySelectorAll("#slide");
            for (let index = 0; index < slides.length; index++) {
                const slide = slides[index];
                if (isInView(slide)) {
                    setCurrentProject(slide.dataset.project);
                    setCurrentSlide(index)
                    break;
                }
            }
        })
    }, []);
    useEffect(() => {

        const slides = [...containerRef.current.querySelectorAll("#slide")];
        slides[currentSlide].scrollIntoView(true, { block: "center" })

    }, [currentSlide])
    return (
        <div className='slider'>
            <div className={`slider__view--${variant}`} style={{ "--slide-width": `${width}px`, "--slide-height": `${height}px`, "--slides-gap": `${gap}px` }}>
                <div id="slider-container" className={`slider__container--${variant}`} ref={el => containerRef.current = el}>
                    {children}
                </div>
            </div>
            <button ref={el => nextButton.current = el} className={`slider__nextButton--${variant}`} onClick={() => {
                setCurrentSlide(prevSlide => prevSlide + 1);


            }}>
                <FaChevronLeft size={"20px"} />
            </button>
            <button ref={el => previousButton.current = el} className={`slider__previousButton--${variant}`} onClick={() => {
                setCurrentSlide(prevSlide => prevSlide - 1);

            }}>
                <FaChevronRight size={"20px"} />
            </button>
        </div>
    );
};

export default ChoosePlaneSlider;



