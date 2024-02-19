import "./style.css"
import {useNavigate} from "react-router-dom"
const ChoosePriceHeader = ({user}) => {
  const{navigate}=useNavigate()
  function handleBackButtonClick()
  {
    navigate("/choose-plan")
  }
  return (
    <div className="choosePrice__header">
    <div className="choosePrice__phase">
      <p className="choosePrice__currentPhase">مرحله 3 از 3</p>
      <h1 className="choosePrice__headerTitle">
        مبلغ <span className="choosePrice__headerTextGreen">کمک ات </span>رو انتخاب
        کن.
      </h1>
      <p className="choosePrice__headerSubtitle">
        این مبلغ قراره ماهیانه از حقوقت کم و صرف کمک به 
        {" "+user?.currentProject?.title+ " "}
        <a  onClick={handleBackButtonClick}className="choosePrice__headerLink">تغییر پروژه</a>
      </p>
    </div>
  </div>
  )
}

export default ChoosePriceHeader