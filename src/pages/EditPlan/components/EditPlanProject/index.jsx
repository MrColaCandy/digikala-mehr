import { FaChevronLeft } from "react-icons/fa6";
import usePersian from "@components/hooks/usePersian";
import "./style.css"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { serialize } from "cookie";
import roshanLogo from "@assets/decorations/roshan-logo.png"
const EditPlanProject = ({ index, project, selected, setSelected }) => {
    const navigate = useNavigate()
    function handleEditPriceClick() {
        document.cookie=serialize("project-editing",project.id)
        navigate("/edit-price")
    }
    const { convert, addCommas } = usePersian();
    useEffect(() => {
        if (index === 0) {
            setSelected(project)
        }
    }, [index])
    function handleProjectClick() {

        setSelected(project);
    }
    const topics=[
        "کتابخانه",
        "ورزشگاه",
        "استخر شنای بانوان",
        "آزمایشگاه زبان",
        "مجموعه تفریحی",
    ]
    
   
    return (
        <div onClick={handleProjectClick} className={`editPlanProject${selected?.id == project?.id ? "--selected" : ""}`}>
            <div className="editPlanProject__header">

                <img src={project?.institute?.logo || roshanLogo } className="editPlanProject__employerLogo" />
                <div className="editPlanProject__col">
                    <div className="editPlanProject__employerName">{project?.institute?.name || "موسسه صبح روشن"}</div>
                    <div className="editPlanProject__projectTitle">{project?.topic || topics[project.id%topics.length] }</div>
                </div>
                <div className={`editPlanProject__price${selected?.id === project?.id ? "--selected" : ""}`}>
                    ماهیانه
                    مبلغ
                    {" " + project ? convert(addCommas(project?.price)) : 0 + " "}
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