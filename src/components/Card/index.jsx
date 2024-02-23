import { useState } from 'react';
import TextBox from '@components/TextBox';
import { BASE_URL } from '@configs/BASE_URL';
import "./style.css"
function Card({  project, textBoxVariant=0, className = "", cardButton }) {
    const [showFullText, setShowFullText] = useState(false);
    const imageURL=new URL(BASE_URL+project?.logo,import.meta.url);
    return (
        <section id='slide' data-project={project?.id} className={`card ${className}`}>
            {
                !showFullText &&
                <div className='card__image' style={{"--card-image":`url('${imageURL}')`}}>
                    <div className="card__logo">
                        <img width={55} height={55} src={BASE_URL+project?.institute.logo} className="card__employerLogo" />
                        <div className="card__logoTitle">{project?.institute.name}</div>
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