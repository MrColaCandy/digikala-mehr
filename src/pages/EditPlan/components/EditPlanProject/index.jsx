import { FaChevronLeft } from "react-icons/fa6";
import usePersianNumberConverter from "@components/hooks/usePersianNumberConverter";

import "./style.css"
import { useEffect } from "react";
const EditPlanProject = ({ index,project,selected,setSelected }) => {
    
    const { convert, addCommas } = usePersianNumberConverter();
    useEffect(()=>{
        if(index===0)
        {
            setSelected(project)
        }
    },[index])
    function handleProjectClick()
    {
        
        setSelected(project);
    }
    return (
        <div onClick={handleProjectClick} className={`editPlanProject${selected?.id===project?.id?"--selected":""}`}>
            <div className="editPlanProject__header">

                <img src={project?.employerLogo} className="editPlanProject__employerLogo" />
                <div className="editPlanProject__col">
                    <div className="editPlanProject__employerName">{project?.employerName}</div>
                    <div className="editPlanProject__projectTitle">{project?.title}</div>
                </div>
                <div className={`editPlanProject__cost${selected?.id===project?.id?"--selected":""}`}>
                    ماهیانه
                    مبلغ
                    {project ? convert(addCommas(project.cost)) : 0}
                    تومان
                </div>
            </div>
            <div className="editPlanProject__description">
            <div className="editPlanProject__text">
                {
                    project?.description
                }
            </div>
            <div className="editPlanProject__textGreen">
                <span>برای تغییر مبلغ پرداختی ماهیانه اینجا کلید کنید</span>
                <FaChevronLeft />
            </div>
            </div>
        </div>
    )
}

export default EditPlanProject