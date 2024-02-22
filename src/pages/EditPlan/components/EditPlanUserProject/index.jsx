import { FaChevronLeft } from "react-icons/fa6";
import usePersian from "@components/hooks/usePersian";
import "./style.css"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { serialize } from "cookie";
import roshanLogo from "@assets/decorations/roshan-logo.png"
const EditPlanUserProject = ({ index, project, selected, setSelected }) => {
    const { convert, addCommas } = usePersian();

    const navigate = useNavigate()
    function handleEditPriceClick() {
        document.cookie=serialize("project_editing",JSON.stringify({projectId:project.id,historyId:project.history_id}))
        navigate("/edit-price")
    }
    useEffect(() => {
        if (index === 0) {
            setSelected(project)
        }
    }, [index])
    function handleProjectClick() {
        setSelected(project);
    }
    return (
        <div data-history={project?.history_id} onClick={handleProjectClick} className={`editPlanProject${selected?.id == project?.id ? "--selected" : ""}`}>
            <div className="editPlanProject__header">

                <img src={`http://127.0.0.1:8000/${project?.institute?.logo}` || roshanLogo } className="editPlanProject__employerLogo" />
                <div className="editPlanProject__col">
                    <div className="editPlanProject__employerName">{project?.institute?.name || ". . ."}</div>
                    <div className="editPlanProject__projectTitle">{project?.topic}</div>
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

export default EditPlanUserProject