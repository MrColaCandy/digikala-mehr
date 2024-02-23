import { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import './style.css';
import Loader from "@components/Loader"


const Slider = ({ isLoading = false, viewPortWidth = 800, slideWidth = 390, slideHeight = 450, scrollBehavior = "smooth", children = null, gap }) => {
    const containerRef = useRef(null);
    const previousButton = useRef(null);
    const nextButton = useRef(null);
    const [currentScroll, setCurrentScroll] = useState(0);
    const [space, setSpace] = useState(gap);
    const [slides,setSlides]=useState([]);
    useEffect(() => {
        if(!containerRef)return;
        containerRef.current.scrollTo(currentScroll, 0)
    }, [currentScroll])
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
    }, []);
    useEffect(() => {
        if (!children) return;
        if (!containerRef.current) return;
        handleButtonsVisibility(containerRef, space, nextButton, previousButton);
        setSlides([...containerRef.current.querySelectorAll("#slide")].length)
        if(children.length<=3)
        {
            containerRef.current.style.justifyContent="center"
        }
        else
        {
            containerRef.current.style.justifyContent="flex-start"
        }
    }, [children])
    return (
        <div className='slider' style={{ "--view-port-width": `${viewPortWidth}px`, "--slides-gap": `${space}px`, "--scroll-behavior": `${scrollBehavior}`, "--slide-height": `${slideHeight}px`, "--slide-width": `${slideWidth}px` }} >
            <div className={`slider__view`} >
                <div id="slider-container" className={`slider__container`} ref={containerRef}>
                    {
                        isLoading &&
                        <div className='slider__isLoading'><Loader color="white" scale={2} /></div>
                    }
                    {
                        children && children?.length>=0 && !isLoading &&
                        children
                    }
                    {
                        slides<=0 && !isLoading && !children && children?.length<=0 &&
                        <div className='slider__isLoading'>در حال حاضر پروژه ای برای انتخاب  وجود ندارد.</div>
                    }
                </div>
            </div>
            <button ref={nextButton} className={`slider__nextButton`} onClick={() => {
                if (!children) return;
                const slide = containerRef.current.querySelector("#slide");
                setCurrentScroll(prev => prev - slide.getBoundingClientRect().width);


            }}>
                <FaChevronLeft size={"20px"} />
            </button>
            <button ref={previousButton} className={`slider__previousButton`} onClick={() => {
                if (!children) return;
                const slide = containerRef.current.querySelector("#slide");
                setCurrentScroll(prev => prev + slide.getBoundingClientRect().width);


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

