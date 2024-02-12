import {  useState } from 'react';
import ChoosePlanTextBox from "../ChoosePlanTextBox"
import "./style.css"
import ChoosePlanButton from '../ChoosePlanButton';
const ChoosePlanCard = ({id,title,subtitle,bodyText,image,subtitleImage}) => {
    const subtitleImageUrl = new URL(subtitleImage, import.meta.url)
    const ImageUrl = new URL(image, import.meta.url)
    const [showFullText, setShowFullText] = useState(false);
   
    return (
        <section id='slide' data-project={id} className={`choosePlanCard`}>
            {
                !showFullText &&
                <div className={`choosePlanCard__image`} style={{ "--card-image": `url('${ImageUrl}')` }} >
                    
                        
                    <div className="choosePlanCard__imageHeader">{title}</div>
                    
                    <div className="choosePlanCard__logo">
                        <img src={subtitleImageUrl} className="choosePlanCard__logoImage" />
                        <div className="choosePlanCard__logoTitle">{subtitle}</div>
                    </div>
                </div>
            }
            <div className={`choosePlaneCard__header`}>{title}</div>
            <ChoosePlanTextBox  setShowFullText={setShowFullText} showFullText={showFullText} text={bodyText} />
            <ChoosePlanButton projectId={id} />
            
        </section>
    )
}

export default ChoosePlanCard