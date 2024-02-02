import { useState, useRef, useEffect } from 'react';
import { FaChevronLeft,FaChevronRight  } from "react-icons/fa6";
import './style.css';

const ChoosePlaneSlider = ({ children,currentSlide=1,setCurrentSlide=()=>{}}) => {
    const DEAD_ZONE = 25; 
    const containerRef = useRef(null);
    const previousButtonRef = useRef(null);
    const nextButtonRef = useRef(null);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [slideWidth,setSlideWidth]=useState(null);
    const [slideHeight,setSlideHeight]=useState(null);

    function getSlideRect()
    {
        return  containerRef.current.querySelector("#slide").getBoundingClientRect(); 
    }
    
    function updateSlideDimensions() {
        const {width,height} = getSlideRect()
        setSlideWidth(width);
        setSlideHeight(height);
    }
    function setButtonsVisibility(nextButtonRef, containerRef, previousButtonRef) {
        const {width} = getSlideRect()
        nextButtonRef.current.style.display = "none";
        containerRef.current.onscroll = function () {
    
            previousButtonRef.current.style.display = (containerRef.current.scrollWidth + containerRef.current.scrollLeft) - DEAD_ZONE <= width? "none" : "flex";
            nextButtonRef.current.style.display = containerRef.current.scrollLeft === 0 ? "none" : "flex";
        };
    }

    useEffect(() => {
        if (!containerRef.current)return;
            
            updateSlideDimensions();
            const resizeObserver=new ResizeObserver(()=>{
                updateSlideDimensions();
            })
            resizeObserver.observe(containerRef.current.querySelector("#slide"));
            setScrollLeft(containerRef.current.scrollLeft);
            window.addEventListener("resize",()=>{
                updateSlideDimensions();
                setScrollLeft(0);
                containerRef.current.scrollLeft=0;
            })
        setButtonsVisibility(nextButtonRef, containerRef, previousButtonRef);
    }, []);
    const handleScroll = (scrollOffset) => {
        const newScrollLeft = scrollLeft + scrollOffset;
    
        if (!containerRef.current) return;
        containerRef.current.scroll({
            left: newScrollLeft,
            behavior: 'smooth',
        });
        setScrollLeft(newScrollLeft);
    };

    return (
        <div className='slider'>
            <div className="slider__view" style={{ "--slide-width": `${slideWidth}px`, "--slide-height": `${slideHeight}px` }}>
                <div className="slider__container" ref={el => containerRef.current = el}>
                    {children}
                </div>
            </div>
            <button ref={el => previousButtonRef.current = el} className='slider__previousButton' onClick={() => {
                handleScroll(-slideWidth)
                setCurrentSlide(currentSlide+1)
            }}>
                <FaChevronLeft size={"20px"} />
            </button>
            <button ref={el => nextButtonRef.current = el} className='slider__nextButton' onClick={() => {
                handleScroll(slideWidth)
                setCurrentSlide(currentSlide-1)
                }}>
                <FaChevronRight size={"20px"} />
            </button>
        </div>
    );
};

export default ChoosePlaneSlider;



