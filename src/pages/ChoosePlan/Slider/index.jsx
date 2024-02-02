import { useState, useRef, useEffect } from 'react';
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import './style.css';

const Slider = ({ children }) => {
    const containerRef = useRef(null);
    const previousButtonRef = useRef(null);
    const nextButtonRef = useRef(null);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [slideWidth,setSlideWidth]=useState(null);
    const [slideHeight,setSlideHeight]=useState(null);
    

    useEffect(() => {
        if (!containerRef.current)return; 
            const style= containerRef.current.querySelector("#slide").currentStyle || window.getComputedStyle(containerRef.current.querySelector("#slide"));
            setSlideWidth(style.width);
            setSlideHeight(style.height);
            setScrollLeft(containerRef.current.scrollLeft);
            window.addEventListener("resize",()=>{
                const style= containerRef.current.querySelector("#slide").currentStyle || window.getComputedStyle(containerRef.current.querySelector("#slide"));
                setSlideWidth(style.width);
                setSlideHeight(style.height);
                setScrollLeft(0);
                containerRef.current.scrollLeft=0;
                
            })
        
        nextButtonRef.current.style.display="none";
        const offset=50;
        containerRef.current.onscroll = function() {
            
            
            if((containerRef.current.scrollWidth+containerRef.current.scrollLeft)-offset<=parseInt(style.width.replace("px","")))
            {
                previousButtonRef.current.style.display="none";
            }
            else
            {
                previousButtonRef.current.style.display="flex";
            }
            if((containerRef.current.scrollLeft)== 0)
            {
                nextButtonRef.current.style.display="none";
            }
            else{
                nextButtonRef.current.style.display="flex";
            }
        };
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
            <div className="slider__view" style={{ "--slide-width": `${slideWidth}`, "--slide-height": `${slideHeight}` }}>
                <div className="slider__container" ref={el => containerRef.current = el}>
                    {children}
                </div>
            </div>
            <button ref={el => previousButtonRef.current = el} className='slider__previousButton' onClick={() => handleScroll(parseInt(-slideWidth.replace("px","")))}>
                <FaChevronLeft size={"10px"} />
            </button>
            <button ref={el => nextButtonRef.current = el} className='slider__nextButton' onClick={() => handleScroll(parseInt(slideWidth.replace("px","")))}>
                <FaChevronRight size={"10px"} />
            </button>
        </div>
    );
};

export default Slider;
