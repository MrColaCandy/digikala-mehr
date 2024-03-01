import usePersian from "@components/hooks/usePersian";
import { BASE_URL } from "@configs/end-points";

import {useNavigate} from "react-router-dom"

import "./style.css"
function ProfileProject({  activeProject }) {
    
    const { convert, addCommas } = usePersian()

    const navigate =useNavigate();
    function handleEditClick()
    {
        navigate("/edit-plan");
    }
  
   
 
    return (
        <div className="profileProject">
            <div className="profileProject__wrapper">
                <div className="profileProject__info">
                    <img src={`${BASE_URL}${activeProject?.project?.institute?.logo}`} className="profileProject__infoLogo" alt="employer-logo" />
                    <div className="profileProject__infoText">
                        <span className="profileProject__infoTitle">{activeProject?.project?.topic}</span>
                        <span className="profileProject__infoEmployer">{activeProject?.project?.institute?.name}</span>
                    </div>
                </div>
                <div className="profileProject__edit">
                    <p className="profileProject__price" >ماهیانه
                        <span>{activeProject ? convert(addCommas(activeProject?.price)) : 0}</span>
                        تومان
                    </p>
                    <div onClick={handleEditClick} className="profileProject__editButtons">
                        <div   className="profileProject__editButton">ویرایش</div>
                        <span>|</span>
                        <div  className="profileProject__editButton">لغو</div>
                    </div>
                </div>
            </div>
            {
                activeProject?.totalMonth > 0 &&
                <>
                    <div className="profileProject__wrapper">
                        <div className="profileProject__finance">
                            <span className="profileProject__financeTextBold">{convert(activeProject?.totalMonth)}</span>
                            <span className="profileProject__financeText">تعداد ماه‌هایی که فعال بودید</span>
                        </div>
                        <div className="profileProject__finance">
                            <span className="profileProject__financeTextBold">{activeProject? convert(addCommas(activeProject?.totalMonth)):convert("0")} ریال</span>
                            <span className="profileProject__financeText">مبلغی که تاکنون شریک شدید</span>
                        </div>
                    </div>
                </>
            }
        </div>

    )
}


export default ProfileProject;

