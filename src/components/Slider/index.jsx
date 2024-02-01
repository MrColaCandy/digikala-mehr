import { useState, useRef, useEffect } from 'react';
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import './style.css';

const Slider = ({ children, slideWidth = 576, slideHeight = 388 }) => {
    const containerRef = useRef(null);
    const previousButtonRef = useRef(null);
    const nextButtonRef = useRef(null);
    const [scrollLeft, setScrollLeft] = useState(0);
    useEffect(() => {
        if (containerRef.current) {
            setScrollLeft(containerRef.current.scrollLeft);
        }
        nextButtonRef.current.style.display="none";
        containerRef.current.onscroll = function() {
            if((containerRef.current.offsetWidth-containerRef.current.scrollLeft)==containerRef.current.scrollWidth)
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
            <div className="slider__view" style={{ "--slide-width": `${slideWidth}px`, "--slide-height": `${slideHeight}px` }}>
                <div className="slider__container" ref={el => containerRef.current = el}>
                    {children}
                </div>
            </div>
            <button ref={el => previousButtonRef.current = el} className='slider__previousButton' onClick={() => handleScroll(-576)}>
                <FaChevronLeft size={"10px"} />
            </button>
            <button ref={el => nextButtonRef.current = el} className='slider__nextButton' onClick={() => handleScroll(576)}>
                <FaChevronRight size={"10px"} />
            </button>
        </div>
    );
};

export default Slider;
