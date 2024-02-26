import organLogo from '@assets/decorations/organLogo.svg'
import { useProject } from '@components/hooks/useProject';
import {useNavigate} from "react-router-dom"
import "./style.css"
function ProfileProjectExpired ({activeProject}){
    const navigate=useNavigate()
    const {extendProject}=useProject();
    async function handleExtendContributionClick()
    {
         try {
            await extendProject({id:activeProject?.id})
            navigate("/profile")
         } catch (error) {
            navigate("/")
            console.log("Failed to extend activeProject. id: "+activeProject?.id+". com:ProfileProjectExpired. error: "+error.message);
         } 
    }
    return(
        <div className="profileProjectExpired">
            <div className="profileProjectExpired__info">
                
                    <img src={organLogo} className="profileProjectExpired__infoLogo" alt="employer-logo" />
                    <div className="profileProjectExpired__infoText">
                        <span className="profileProjectExpired__infoTitle">
                            {activeProject?.project?.topic}
                        </span>
                        <span className="profileProjectExpired__infoEmployer">{activeProject?.project?.institute?.name}</span>
                    </div>
                
                <p className="profileProjectExpired__box">دوره به پایان رسید</p>
            </div>
            <button onClick={handleExtendContributionClick} className="profileProjectExpired__button">تمدید مشارکت</button>
    </div>
    )
}


export default ProfileProjectExpired ;

