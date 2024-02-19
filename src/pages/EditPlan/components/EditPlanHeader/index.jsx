import "./style.css"
import { useNavigate } from "react-router-dom"
import { FiEdit } from "react-icons/fi";
const EditPlanHeader = ({ setModal,selected}) => {
    const navigate = useNavigate()
    function handleBackButtonClick() {
        navigate("/profile")
    }
    function handleCancelClick() {
        setModal("remove");
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
            {
                selected &&
                <div onClick={handleCancelClick} className="editPlanHeader__textRed">لغو عضویت در پروژه</div>
            }
        </div>
    )
}

export default EditPlanHeader