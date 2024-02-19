import usePersianNumberConverter from "@components/hooks/usePersianNumberConverter";
import "./style.css"
import {useNavigate} from "react-router-dom"
function ProfileProject({ project }) {
    const { convert, addCommas } = usePersianNumberConverter()
    const navigate =useNavigate();
    function handleEditClick()
    {
        navigate("/edit-plan");
    }
    return (
        <div className="profileProject">
            <div className="profileProject__wrapper">
                <div className="profileProject__info">
                    <img src={project?.employerLogo} className="profileProject__infoLogo" alt="employer-logo" />
                    <div className="profileProject__infoText">
                        <span className="profileProject__infoTitle">{project?.title}</span>
                        <span className="profileProject__infoEmployer">{project?.employerName}</span>
                    </div>
                </div>
                <div className="profileProject__edit">
                    <p className="profileProject__price">ماهیانه
                        {
                            project ? convert(addCommas(project.price)) : 0
                        }
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
                project?.age >= 1 &&
                <>
                    <div className="profileProject__wrapper">
                        <div className="profileProject__finance">
                            <span className="profileProject__financeTextBold">{project ? convert(project.age) : 0}</span>
                            <span className="profileProject__financeText">تعداد ماه‌هایی که فعال بودید</span>
                        </div>

                        <div className="profileProject__finance">
                            <span className="profileProject__financeTextBold">{project? convert(addCommas(project.price)):0} ریال</span>
                            <span className="profileProject__financeText">مبلغی که تاکنون شریک شدید</span>
                        </div>
                    </div>
                </>
            }
        </div>

    )
}


export default ProfileProject;

