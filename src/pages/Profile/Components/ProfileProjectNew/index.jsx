import "./style.css"
import usePersianNumberConverter from "@components/hooks/usePersianNumberConverter";
function ProfileProjectNew({project}) {
    const {convert,addCommas}=usePersianNumberConverter();
    return (
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
                    project ? convert(addCommas(project.cost)) : 0
                }
                تومان
            </p>
            <div className="profileProject__editButtons">
                <a href="#" className="profileProject__editButton">ویرایش</a>
                <span>|</span>
                <a href="#" className="profileProject__editButton">لغو</a>
            </div>
        </div>
    </div>
    )
}


export default ProfileProjectNew;

