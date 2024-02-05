import { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import './style.css';



const ChoosePlaneSlider = ({ children, setCurrentProject, gap, currentSlide=1, setCurrentSlide = () => { }, variant }) => {
    const containerRef = useRef(null);
    const previousButton = useRef(null);
    const nextButton = useRef(null);
    const [slideWidth, setSlideWidth] = useState(null);
    const [slideHeight, setSlideHeight] = useState(null);
    const [index,setIndex]=useState(0);
    function updateSlideDimensions() {
        const { width, height } = containerRef.current.querySelector("#slide").getBoundingClientRect()
        setSlideWidth(width);
        setSlideHeight(height);
    }


    useEffect(() => {
        if (!containerRef.current) return;
        previousButton.current.style.display = "none";
        updateSlideDimensions();
        const resizeObserver = new ResizeObserver(() => {
            updateSlideDimensions();
        })
        resizeObserver.observe(containerRef.current.querySelector("#slide"));
        window.addEventListener("resize", () => {
            updateSlideDimensions();
        })
        containerRef.current.onscroll = () => {
            const atEnd = (containerRef.current.scrollWidth + containerRef.current.scrollLeft - containerRef.current.getBoundingClientRect().width) < 20;
            const atStart = containerRef.current.scrollLeft > -1;
            nextButton.current.style.display = atEnd ? "none" : "flex"
            previousButton.current.style.display = atStart ? "none" : "flex";
            
            
            const slides=containerRef.current.children;
            for (let i = 0; i < slides.length; i++) {
                let slide = slides[i];
                if (isScrolledIntoView(slide)) {

                    let currentSlideNumber = i + 1;
                    setCurrentSlide(currentSlideNumber);
                    setCurrentProject(slide.dataset.project);
                  
                }
            }
        }
    }, []);
    useEffect(()=>{
        const slides=[...containerRef.current.children];
        slides[index].scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        })
        console.log(slides[index]);
    },[index])
    return (
        <div className='slider'>
            <div className={`slider__view--${variant}`} style={{ "--slide-width": `${slideWidth}px`, "--slide-height": `${slideHeight}px`, "--slides-gap": `${gap}px` }}>
                <div className={`slider__container--${variant}`} ref={el => containerRef.current = el}>
                    {children}
                </div>
            </div>
            <button ref={el => nextButton.current = el} className={`slider__nextButton--${variant}`} onClick={() => {

                setCurrentSlide(currentSlide + 1)
                setIndex(prevIndex => prevIndex+1);
            }}>
                <FaChevronLeft size={"20px"} />
            </button>
            <button ref={el => previousButton.current = el} className={`slider__previousButton--${variant}`} onClick={() => {

                setCurrentSlide(currentSlide - 1)
                setIndex(prevIndex => prevIndex-1);
                
                
            }}>
                <FaChevronRight size={"20px"} />
            </button>
        </div>
    );
};
function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    return isVisible;
}
export default ChoosePlaneSlider;



