import "./style.css"
import { useNavigate } from "react-router-dom"
import { FiEdit } from "react-icons/fi";
const EditPlanHeader = () => {
    const navigate = useNavigate()
    function handleBackButtonClick() {
        navigate("/profile")
    }
    
    return (
        <div className="editPlanHeader">
            <div className="editPlanHeader__wrapper">
                <div onClick={handleBackButtonClick} className="editPlanHeader__textGreen">بازگشت</div>
                <div className="editPlanHeader__wrapper">
                    <FiEdit />
                    <div className="editPlanHeader__textBold">ویرایش پروژه انتخابی</div>
                </div>
            </div>
        </div>
    )
}

export default EditPlanHeader