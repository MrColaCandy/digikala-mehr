import { useState, useRef, useEffect } from 'react';
import { FaChevronLeft,FaChevronRight  } from "react-icons/fa6";
import './style.css';
import { variants } from '../Variants';


const ChoosePlaneSlider = ({ children,gap,currentSlide=1,setCurrentSlide=()=>{},variant}) => {
    const containerRef = useRef(null);
    const previousButton = useRef(null);
    const nextButton = useRef(null);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [slideWidth,setSlideWidth]=useState(null);
    const [slideHeight,setSlideHeight]=useState(null);
    const [totalSlides,setTotalSlides]=useState(0);
    function getSlideRect()
    {
        return  containerRef.current.querySelector("#slide").getBoundingClientRect(); 
    }
    function handleButtonsVisibilities()
    {   
        nextButton.current.style.display=currentSlide===totalSlides ?"none":"flex";
        previousButton.current.style.display=currentSlide===1?"none":"flex";
    }
    function updateSlideDimensions() {
        const {width,height} = getSlideRect()
        setSlideWidth(width);
        setSlideHeight(height);
    }
    useEffect(()=>{
     handleButtonsVisibilities()
    },[currentSlide])

    useEffect(() => {
        if (!containerRef.current)return;
            setTotalSlides(containerRef.current.querySelectorAll("#slide").length)
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
                setCurrentSlide(1)
            })
            containerRef.current.onscroll=()=>{
                if((containerRef.current.scrollWidth+containerRef.current.scrollLeft-containerRef.current.getBoundingClientRect().width)<20)
                {
                    nextButton.current.style.display="none";
                }
                else{
                    nextButton.current.style.display="flex";
                }
            }
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
            <div className={`slider__view--${variant}`} style={{ "--slide-width": `${slideWidth}px`, "--slide-height": `${slideHeight}px`,"--slides-gap":`${gap}px` }}>
                <div className={`slider__container--${variant}`} ref={el => containerRef.current = el}>
                    {children}
                </div>
            </div>
            <button ref={el => nextButton.current = el} className={`slider__nextButton--${variant}`} onClick={() => {
                
                handleScroll((-slideWidth-gap)+(variant===variants.Style3? 30:0))
                setCurrentSlide(currentSlide+1)
                
            }}>
                <FaChevronLeft size={"20px"} />
            </button>
            <button ref={el => previousButton.current = el} className={`slider__previousButton--${variant}`} onClick={() => {
                handleScroll((slideWidth+gap)-(variant===variants.Style3? 30:0))
                setCurrentSlide(currentSlide-1)
                
                }}>
                <FaChevronRight size={"20px"} />
            </button>
        </div>
    );
};

export default ChoosePlaneSlider;



