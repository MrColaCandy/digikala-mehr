import usePersian from "@components/hooks/usePersian";
import "./style.css"
import {useNavigate} from "react-router-dom"
import { useEffect, useState } from "react";
import {useAuth} from "@components/hooks/useAuth"
import { BASE_URL } from "../../../../configs/BASE_URL";
function ProfileProject({ project }) {
    
    const {userProjects}=useAuth();
    const { convert, addCommas } = usePersian()
    const navigate =useNavigate();
    function handleEditClick()
    {
        navigate("/edit-plan");
    }

    const [payments,setPayments]=useState(0);
    useEffect(()=>{
     if(!project|| !userProjects)return;
     
       const payments=userProjects.filter(p=>p.id==project.id).filter(p=>p.state==="success").length;
       setPayments(payments)

    },[project,userProjects])
 
    return (
        <div className="profileProject">
            <div className="profileProject__wrapper">
                <div className="profileProject__info">
                    <img src={`${BASE_URL}${project?.institute?.logo}`} className="profileProject__infoLogo" alt="employer-logo" />
                    <div className="profileProject__infoText">
                        <span className="profileProject__infoTitle">{project?.topic}</span>
                        <span className="profileProject__infoEmployer">{project?.institute?.name}</span>
                    </div>
                </div>
                <div className="profileProject__edit">
                    <p className="profileProject__price" >ماهیانه
                        <span>{project ? convert(addCommas(project?.price)) : 0}</span>
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
                payments >= 1 &&
                <>
                    <div className="profileProject__wrapper">
                        <div className="profileProject__finance">
                            <span className="profileProject__financeTextBold">{payments}</span>
                            <span className="profileProject__financeText">تعداد ماه‌هایی که فعال بودید</span>
                        </div>
                        {payments}
                        <div className="profileProject__finance">
                            <span className="profileProject__financeTextBold">{project? convert(addCommas(project.price * payments)):convert("0")} ریال</span>
                            <span className="profileProject__financeText">مبلغی که تاکنون شریک شدید</span>
                        </div>
                    </div>
                </>
            }
        </div>

    )
}


export default ProfileProject;

