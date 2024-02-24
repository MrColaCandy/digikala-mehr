import organLogo from '@assets/decorations/organLogo.svg'
import { useProject } from '@components/hooks/useProject';
import {useNavigate} from "react-router-dom"
import "./style.css"
function ProfileProjectExpired ({project}){
    const navigate=useNavigate()
    const {extendProject}=useProject();
    async function handleExtendContributionClick()
    {
         try {
            await extendProject({id:project.history_id})
            navigate("/profile")
         } catch (error) {
            console.log("Failed to extend project. id: "+project.history_id+". com:ProfileProjectExpired. error: "+error.message);
         } 
    }
    return(
        <div className="profileProjectExpired">
            <div className="profileProjectExpired__info">
                
                    <img src={organLogo} className="profileProjectExpired__infoLogo" alt="employer-logo" />
                    <div className="profileProjectExpired__infoText">
                        <span className="profileProjectExpired__infoTitle">
                            {project?.topic}
                        </span>
                        <span className="profileProjectExpired__infoEmployer">{project?.institute?.name}</span>
                    </div>
                
                <p className="profileProjectExpired__box">دوره به پایان رسید</p>
            </div>
            <button onClick={handleExtendContributionClick} className="profileProjectExpired__button">تمدید مشارکت</button>
    </div>
    )
}


export default ProfileProjectExpired ;

