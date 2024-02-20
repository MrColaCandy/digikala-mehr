import { FaChevronLeft } from "react-icons/fa6";
import usePersianNumberConverter from "@components/hooks/usePersianNumberConverter";
import { useAuth } from "@components/hooks/useAuth"
import "./style.css"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
const EditPlanProject = ({ index, project, selected, setSelected }) => {
    const navigate = useNavigate()
    const { user, setUser } = useAuth()
    function handleEditPriceClick() {
        setUser({ ...user, editing: project })
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/edit-price")
    }
    const { convert, addCommas } = usePersianNumberConverter();
    useEffect(() => {
        if (index === 0) {
            setSelected(project)
        }
    }, [index])
    function handleProjectClick() {

        setSelected(project);
    }
    return (
        <div onClick={handleProjectClick} className={`editPlanProject${selected?.id === project?.id ? "--selected" : ""}`}>
            <div className="editPlanProject__header">

                <img src={project?.employerLogo} className="editPlanProject__employerLogo" />
                <div className="editPlanProject__col">
                    <div className="editPlanProject__employerName">{project?.employerName}</div>
                    <div className="editPlanProject__projectTitle">{project?.title}</div>
                </div>
                <div className={`editPlanProject__price${selected?.id === project?.id ? "--selected" : ""}`}>
                    ماهیانه
                    مبلغ
                    {" " + project ? convert(addCommas(project.price)) : 0 + " "}
                    تومان
                </div>
            </div>
            <div className="editPlanProject__description">
                <div className="editPlanProject__text">
                    {
                        project?.description
                    }
                </div>
                <div  className="editPlanProject__textGreen">
                    <div className="editPlanProject__editPrice"  onClick={handleEditPriceClick}>
                        <span>برای تغییر مبلغ پرداختی ماهیانه اینجا کلید کنید</span>
                        <FaChevronLeft size={12} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditPlanProject