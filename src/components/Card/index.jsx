import { useState } from 'react';
import TextBox from '@components/TextBox';

import "./style.css"
function Card({  project, textBoxVariant=0, className = "", cardButton }) {
    const [showFullText, setShowFullText] = useState(false);
    const imageURL=new URL(project?.image,import.meta.url);
    return (
        <section id='slide' data-project={project?.id} className={`card ${className}`}>
            {
                !showFullText &&
                <div className='card__image' style={{"--card-image":`url('${imageURL}')`}}>
                    <div className="card__logo">
                        <img src={project?.employerLogo} className="card__employerLogo" />
                        <div className="card__logoTitle">{project?.employerLogo}</div>
                    </div>
                </div>

            }
            <TextBox
                title={project?.topic}
                setShowFullText={setShowFullText}
                showFullText={showFullText}
                text={project.description}
                variant={textBoxVariant}
            />
            {
                cardButton &&
                cardButton
            }
        </section>)
}

export default Card