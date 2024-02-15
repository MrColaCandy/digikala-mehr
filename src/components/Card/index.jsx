import { useState } from 'react';
import TextBox from '@components/TextBox';

import "./style.css"
function Card({ width = 360, height = 400, id, title, description, image, employerLogo, employerName, textBoxVariant=0, className = "", cardButton }) {
    const [showFullText, setShowFullText] = useState(false);
    const imageURL=new URL(image,import.meta.url);
    return (
        <section id='slide' data-project={id} className={`card ${className}`} style={{ "--card-width": width + "px", "--card-height": height + "px" }}>
            {
                !showFullText &&
                <div className='card__image' style={{"--card-image":`url('${imageURL}')`}}>
                    <div className="card__logo">
                        <img src={employerLogo} className="card__employerLogo" />
                        <div className="card__logoTitle">{employerName}</div>
                    </div>
                </div>

            }
            <TextBox
                width={width}
                title={title}
                setShowFullText={setShowFullText}
                showFullText={showFullText}
                text={description}
                variant={textBoxVariant}
            />
            {
                cardButton &&
                cardButton
            }
        </section>)
}

export default Card