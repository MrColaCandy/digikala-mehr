import organLogo from '@assets/decorations/organLogo.svg'
import "./style.css"

function ProfileProjectExpired (project){
    function handleExpandContributionClick()
    {

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
            <button onClick={handleExpandContributionClick} className="profileProjectExpired__button">تمدید مشارکت</button>
    </div>
    )
}


export default ProfileProjectExpired ;

