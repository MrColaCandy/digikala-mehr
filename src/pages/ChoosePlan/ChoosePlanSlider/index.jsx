import { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import './style.css';
import { useMedia } from '../hooks/useMedia';


const ChoosePlaneSlider = ({ children, setCurrentProject, gap, index, setIndex, variant }) => {
    const containerRef = useRef(null);
    const previousButton = useRef(null);
    const nextButton = useRef(null);
    const [slideWidth, setSlideWidth] = useState(null);
    const [slideHeight, setSlideHeight] = useState(null);
    const currentWidth=useMedia();
    function isScrolledIntoView(el) {
        const rect = el.getBoundingClientRect();
        const elemLeft = rect.left;
        const elemRight = rect.right;
        var isVisible = (elemLeft >= 0) && (elemRight <= currentWidth);
        return isVisible;
    }
    function updateSlideDimensions() {
        const { width, height } = containerRef.current.querySelector("#slide").getBoundingClientRect()
        setSlideWidth(width);
        setSlideHeight(height);
    }


    useEffect(() => {
        updateSlideDimensions();
        const resizeObserver = new ResizeObserver(() => {
            updateSlideDimensions();
        })
        resizeObserver.observe(containerRef.current.querySelector("#slide"));
        window.addEventListener("resize", () => {
            updateSlideDimensions();
        })
    }, [])
    useEffect(() => {
        if (!containerRef.current) return;
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
               if (isScrolledIntoView(slide)) {
                   setIndex(index)
                   setCurrentProject(index+1);
                   break;
               }

           }
        })
    }, []);
    useEffect(() => {
       
        const slides = [...containerRef.current.querySelectorAll("#slide")];
        slides[index].scrollIntoView(true)

    }, [index])
    return (
        <div className='slider'>
            <div className={`slider__view--${variant}`} style={{ "--slide-width": `${slideWidth}px`, "--slide-height": `${slideHeight}px`, "--slides-gap": `${gap}px` }}>
                <div className={`slider__container--${variant}`} ref={el => containerRef.current = el}>
                    {children}
                </div>
            </div>
            <button ref={el => nextButton.current = el} className={`slider__nextButton--${variant}`} onClick={() => {
                setIndex(prevIndex => prevIndex + 1);
                

            }}>
                <FaChevronLeft size={"20px"} />
            </button>
            <button ref={el => previousButton.current = el} className={`slider__previousButton--${variant}`} onClick={() => {
                setIndex(prevIndex => prevIndex - 1);
              
            }}>
                <FaChevronRight size={"20px"} />
            </button>
        </div>
    );
};

export default ChoosePlaneSlider;



