import { useState,useEffect } from "react";

export const useMedia = () => {
    const [currentWidth,setCurrentWidth]=useState(window.innerWidth);

    useEffect(()=>{
        window.addEventListener('resize', () => {
            setCurrentWidth(window.innerWidth);
        })
    },[])

    return currentWidth;
}

