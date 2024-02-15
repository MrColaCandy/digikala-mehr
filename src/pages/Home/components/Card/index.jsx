import { useState } from 'react';
import TextBox from '../TextBox';
import Button from '../Button';
import "./style.css"
function Card({width=360,height=400,id,title,description,image,employerLogo,employerName}) {
    const [showFullText, setShowFullText] = useState(false);

    return (
        <section id='slide' data-project={id} className="card" style={{"--card-width":width+"px","--card-height":height+"px"}}>
            {
                !showFullText &&
                <div className='card__imageWrapper'>
                    <img src={image} className="card__image" />
                    <div className='card__imageContent'>
                        <div className="card__logo">
                            <img src={employerLogo} className="card__logoImage" />
                            <div className="card__logoTitle">{employerName}</div>
                        </div>
                    </div>
                </div>

            }
            <TextBox 
            width={width}
            title={title}
            setShowFullText={setShowFullText} 
            showFullText={showFullText} 
            text={description} 
            button={<Button text={showFullText?"بستن":"بیشتر بدانید"} onClick={()=>setShowFullText(!showFullText)}/>}
            />
            
        </section>)
}

export default Card