import { FaChevronLeft } from "react-icons/fa6";
import usePersian from "@components/hooks/usePersian";
import "./style.css"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "@configs/end-points";



const EditPlanUserProject = ({activeHelp}) => {
    const { convert, addCommas } = usePersian();

    const navigate = useNavigate()
    function handleEditPriceClick() {
      
        navigate(`/edit-price/${activeHelp.project.id}/${activeHelp.id}`)
    }

    return (
        <div data-history={activeHelp?.id}  className="editPlanUserProject">
            <div className="editPlanUserProject__header">

                <img src={`${BASE_URL}${activeHelp?.project?.institute?.logo}`} className="editPlanUserProject__employerLogo" />
                <div className="editPlanUserProject__col">
                    <div className="editPlanUserProject__employerName">{activeHelp?.project?.institute?.name || ". . ."}</div>
                    <div className="editPlanUserProject__projectTitle">{activeHelp?.project?.topic}</div>
                </div>
                <div className={`editPlanUserProject__price`}>
                    ماهیانه
                    مبلغ
                    <span>{activeHelp ? convert(addCommas(activeHelp?.price)) : 0 }</span>
                    تومان
                </div>
            </div>
            <div className="editPlanUserProject__description">
                <div className="editPlanUserProject__text">
                    {
                        activeHelp?.project?.description
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