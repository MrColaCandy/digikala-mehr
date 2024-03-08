import usePersian from "@components/hooks/usePersian";
import { BASE_URL } from "@configs/end-points";

import {useNavigate} from "react-router-dom"

import "./style.css"
function ProfileHelp({ activeHelp }) {
    
    const { convert, addCommas } = usePersian()

    const navigate =useNavigate();
    function handleEditClick()
    {
        navigate(`/edit-plan/${activeHelp.project.id}/${activeHelp.id}`);
    }
  
   
 
    return (
        <div className="profileHelp">
            <div className="profileHelp__wrapper">
                <div className="profileHelp__info">
                    <img src={`${BASE_URL}/${activeHelp?.project?.institute?.logo}`} className="profileHelp__infoLogo" alt="employer-logo" />
                    <div className="profileHelp__infoText">
                        <span className="profileHelp__infoTitle">{activeHelp?.project?.topic}</span>
                        <span className="profileHelp__infoEmployer">{activeHelp?.project?.institute?.name}</span>
                    </div>
                </div>
                <div className="profileHelp__edit">
                    <p className="profileHelp__price" >ماهیانه
                        <span>{activeHelp ? convert(addCommas(activeHelp?.price)) : 0}</span>
                        تومان
                    </p>
                    <div onClick={handleEditClick} className="profileHelp__editButtons">
                        <div   className="profileHelp__editButton">ویرایش</div>
                        <span>|</span>
                        <div  className="profileHelp__editButton">لغو</div>
                    </div>
                </div>
            </div>
            {
                activeHelp?.totalMonth > 0 &&
                <>
                    <div className="profileHelp__wrapper">
                        <div className="profileHelp__finance">
                            <span className="profileHelp__financeTextBold">{convert(activeHelp?.totalMonth)}</span>
                            <span className="profileHelp__financeText">تعداد ماه‌هایی که فعال بودید</span>
                        </div>
                        <div className="profileHelp__finance">
                            <span className="profileHelp__financeTextBold">{activeHelp? convert(addCommas(activeHelp?.totalMonth)):convert("0")} ریال</span>
                            <span className="profileHelp__financeText">مبلغی که تاکنون شریک شدید</span>
                        </div>
                    </div>
                </>
            }
        </div>

    )
}


export default ProfileHelp;

