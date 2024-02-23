import usePersian from "@components/hooks/usePersian";
import "./style.css"
import {useNavigate} from "react-router-dom"
import { useEffect, useState } from "react";
function ProfileProject({ project }) {
    
    const { convert, addCommas } = usePersian()
    const navigate =useNavigate();
    function handleEditClick()
    {
        navigate("/edit-plan");
    }

    const [age,setAge]=useState(0);
    useEffect(()=>{
     if(!project)return;
     const diff= monthDiff(new Date(project.date),new Date(Date.now()));
     setAge(diff);

    },[project])
 
    return (
        <div className="profileProject">
            <div className="profileProject__wrapper">
                <div className="profileProject__info">
                    <img src={`http://127.0.0.1:8000/${project?.institute?.logo}`} className="profileProject__infoLogo" alt="employer-logo" />
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
                age >= 1 &&
                <>
                    <div className="profileProject__wrapper">
                        <div className="profileProject__finance">
                            <span className="profileProject__financeTextBold">{age}</span>
                            <span className="profileProject__financeText">تعداد ماه‌هایی که فعال بودید</span>
                        </div>

                        <div className="profileProject__finance">
                            <span className="profileProject__financeTextBold">{project? convert(addCommas(project.price * age)):"0"} ریال</span>
                            <span className="profileProject__financeText">مبلغی که تاکنون شریک شدید</span>
                        </div>
                    </div>
                </>
            }
        </div>

    )
}


export default ProfileProject;

function monthDiff(d1, d2) {
    let months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}