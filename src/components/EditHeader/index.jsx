import "./style.css"
import { useNavigate } from "react-router-dom"
import { FiEdit } from "react-icons/fi";
const EditHeader = ({ setModal,selected}) => {
    const navigate = useNavigate()
    function handleBackButtonClick() {
        navigate("/profile")
    }
    function handleCancelClick() {
        setModal("remove");
    }
    return (
        <div className="editHeader">
            <div className="editHeader__wrapper">
                <div onClick={handleBackButtonClick} className="editHeader__textGreen">بازگشت</div>
                <div className="editHeader__wrapper">
                    <FiEdit />
                    <div className="editHeader__textBold">ویرایش پروژه انتخابی</div>
                </div>
            </div>
            {
                selected &&
                <div onClick={handleCancelClick} className="editHeader__textRed">لغو عضویت در پروژه</div>
            }
        </div>
    )
}

export default EditHeader