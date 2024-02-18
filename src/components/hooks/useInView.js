import React from 'react'



function inView(el) {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;


    const inView = (elemTop >= 0) && (elemBottom <= window.innerHeight);

    return inView;
}



