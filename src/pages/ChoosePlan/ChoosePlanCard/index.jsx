import {  useState } from 'react';
import ChoosePlanTextBox from "../ChoosePlanTextBox"
import "./style.css"
import { useMedia } from '../hooks/useMedia';
import { variants } from '../Variants';
import ChoosePlanButton from '../ChoosePlanButton';
const ChoosePlanCard = ({title,subtitle,bodyText,image,subtitleImage,currentSlide=1,totalSlides=5,variant}) => {
    const subtitleImageUrl = new URL(subtitleImage, import.meta.url)
    const ImageUrl = new URL(image, import.meta.url)
    const [showFullText, setShowFullText] = useState(false);
    const currentWidth= useMedia()
    return (
        <section id='slide' className={`choosePlanCard--${variant}`}>
            {
                !showFullText &&
                <div className={`choosePlanCard__image--${variant}`} style={{ "--card-image": `url('${ImageUrl}')` }} >
                    {
                        variant!==variants.Style3 &&
                        <div className="choosePlanCard__imageHeader">{title}</div>
                    }
                    <div className="choosePlanCard__logo">
                        <img src={subtitleImageUrl} className="choosePlanCard__logoImage" />
                        <div className="choosePlanCard__logoTitle">{subtitle}</div>
                    </div>
                </div>
            }
            {
                showFullText && variant!==variants.Style3 && 
                <div className={`choosePlaneCard__header--${variant}`}>{title}</div>
            }
            {
                variant===variants.Style3 &&
                <div className={`choosePlaneCard__header--${variant}`}>{title}</div>
            }
            <ChoosePlanTextBox variant={variant} setShowFullText={setShowFullText} showFullText={showFullText} text={bodyText} />
            {
                !showFullText && currentWidth >= 390 && variant===variants.Style1 &&
                <div className="choosePlanCard__currentSlide">{currentSlide} از {totalSlides}</div>
            }
            {
                variant!=variants.Style1 &&
                <ChoosePlanButton variant={variant}/>
            }
        </section>
    )
}

export default ChoosePlanCard