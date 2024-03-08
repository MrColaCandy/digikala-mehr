import { useState } from 'react';

import { BASE_URL } from '@configs/end-points';
import "./style.css"
import Button from '../Button';
function Slide({ project, variant = "home" ,onClick=()=>{}}) {
    const [fullText, setFullText] = useState(false);
    const toggleFullText = () => {
        setFullText(!fullText)
    }
    const imageURL = new URL(BASE_URL + project?.logo, import.meta.url);
    return (
        <div id='slide' data-project={project?.id} className="slide">



            {
                !fullText &&
                <div className='slide__image' style={{ "--image-url": `url('${imageURL}')` }}>
                    <div className="slide__logo">
                        <img width={55} height={55} src={BASE_URL + project?.institute.logo} className="slide__employerLogo" />
                        <div className="slide__logoTitle">{project?.institute.name}</div>
                    </div>
                </div>
            }

            <div className='slide__title'>{project?.topic}</div>
            <div className="slide__description" style={{ "--line-count": fullText ? 15 : 3 }}>
                {project?.description}
            </div>
            
            {
                variant != "home" &&
                <>
                    <button className='slide__more' onClick={toggleFullText}> {fullText ? "بستن" : "بیشتر بدانید"}</button>
                    <Button width={500} onClick={onClick} variant='outlined' text={variant!="edit" ? "انتخاب کنید" : "تغییر دهید"} />


                </>

            }
            
            {
                variant === "home" &&
                <Button width={500}  onClick={toggleFullText} variant='outlined' text={fullText ? "بستن" : "بیشتر بدنید"} />
            }



        </div>)
}

export default Slide