import "./style.css"

const ChoosePlanButton = ({variant}) => {
    return (
        <button className={`choosePlan__button--${variant}`}>
            انتخاب
        </button>
    )
}

export default ChoosePlanButton