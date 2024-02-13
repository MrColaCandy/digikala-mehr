import { useState } from 'react';
import ChoosePlanTextBox from "../ChoosePlanTextBox"
import "./style.css"
import ChoosePlanButton from '../ChoosePlanButton';
const ChoosePlanCard = ({ id, title, subtitle, bodyText, image, subtitleImage }) => {
    
    
    const [showFullText, setShowFullText] = useState(false);

    return (
        <section id='slide' data-project={id} className={`choosePlanCard`}>
            {
                !showFullText &&
                <div className='choosePlanCard__imageWrapper'>
                    <img src={image} className="choosePlanCard__image" />
                    <div className='choosePlanCard__imageContent'>
                        <div className="choosePlanCard__imageHeader">{title}</div>
                        <div className="choosePlanCard__logo">
                            <img src={subtitleImage} className="choosePlanCard__logoImage" />
                            <div className="choosePlanCard__logoTitle">{subtitle}</div>
                        </div>
                    </div>
                </div>

            }
            <div className={`choosePlaneCard__header`}>{title}</div>
            <ChoosePlanTextBox setShowFullText={setShowFullText} showFullText={showFullText} text={bodyText} />
            <ChoosePlanButton projectId={id} />

        </section>
    )
}

export default ChoosePlanCard