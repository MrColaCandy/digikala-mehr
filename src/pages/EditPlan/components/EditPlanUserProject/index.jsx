import { FaChevronLeft } from "react-icons/fa6";
import usePersian from "@components/hooks/usePersian";
import "./style.css"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { serialize } from "cookie";
import roshanLogo from "@assets/decorations/roshan-logo.png"
import { BASE_URL } from "../../../../configs/BASE_URL";
const EditPlanUserProject = ({ index, project, setSelected }) => {
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
        <div data-history={project?.history_id} onClick={handleProjectClick} className="editPlanUserProject">
            <div className="editPlanUserProject__header">

                <img src={`${BASE_URL}${project?.institute?.logo}` || roshanLogo } className="editPlanUserProject__employerLogo" />
                <div className="editPlanUserProject__col">
                    <div className="editPlanUserProject__employerName">{project?.institute?.name || ". . ."}</div>
                    <div className="editPlanUserProject__projectTitle">{project?.topic}</div>
                </div>
                <div className={`editPlanUserProject__price`}>
                    ماهیانه
                    مبلغ
                    <span>{project ? convert(addCommas(project?.price)) : 0 }</span>
                    تومان
                </div>
            </div>
            <div className="editPlanUserProject__description">
                <div className="editPlanUserProject__text">
                    {
                        project?.description
                    }
                </div>
                <div  className="editPlanUserProject__textGreen">
                    <div className="editPlanUserProject__editPrice"  onClick={handleEditPriceClick}>
                        <span>برای تغییر مبلغ کلید کنید</span>
                        <FaChevronLeft size={12} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditPlanUserProject