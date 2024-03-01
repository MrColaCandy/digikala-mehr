import { FaChevronLeft } from "react-icons/fa6";
import usePersian from "@components/hooks/usePersian";
import "./style.css"
import { useNavigate } from "react-router-dom"
import { serialize } from "cookie";
import { BASE_URL } from "@configs/end-points";


const EditPlanUserProject = ({activeProject}) => {
    const { convert, addCommas } = usePersian();

    const navigate = useNavigate()
    function handleEditPriceClick() {
        document.cookie=serialize("editing",JSON.stringify({projectId:activeProject?.project.id,historyId:activeProject?.id}))
        navigate("/edit-price")
    }

    return (
        <div data-history={activeProject?.id}  className="editPlanUserProject">
            <div className="editPlanUserProject__header">

                <img src={`${BASE_URL}${activeProject?.project?.institute?.logo}`} className="editPlanUserProject__employerLogo" />
                <div className="editPlanUserProject__col">
                    <div className="editPlanUserProject__employerName">{activeProject?.project?.institute?.name || ". . ."}</div>
                    <div className="editPlanUserProject__projectTitle">{activeProject?.project?.topic}</div>
                </div>
                <div className={`editPlanUserProject__price`}>
                    ماهیانه
                    مبلغ
                    <span>{activeProject ? convert(addCommas(activeProject?.price)) : 0 }</span>
                    تومان
                </div>
            </div>
            <div className="editPlanUserProject__description">
                <div className="editPlanUserProject__text">
                    {
                        activeProject?.project?.description
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