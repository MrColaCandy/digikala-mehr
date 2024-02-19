import "./style.css"
import {useNavigate} from "react-router-dom";
const EditPriceHeader = ({user,setUser}) => {
    const navigate =useNavigate();
    function handleBackButtonClick()
    {
      navigate("/edit-plan")
      setUser({...user,currentProject:null})
    }
  return (
    <div className="editPrice__header">
    <div className="editPrice__phase">
      <p className="editPrice__currentPhase">مرحله 3 از 3</p>
      <h1 className="editPrice__headerTitle">
        مبلغ <span className="editPrice__headerTextGreen">کمک ات </span>رو انتخاب
        کن.
      </h1>
      <p className="editPrice__headerSubtitle">
         این مبلغ قراره ماهیانه از حقوقت کم و صرف کمک به 
        { " "+user?.editing?.title +" " } 
        بشه.
        <a onClick={handleBackButtonClick} className="editPrice__headerLink">تغییر پروژه </a>
      </p>
    </div>
  </div>
  )
}

export default EditPriceHeader