import organLogo from '@assets/decorations/organLogo.svg'
import "./style.css"

function ProfileProjectExpired (){
    return(
        <div className="profileProjectExpired">
            <div className="profileProjectExpired__info">
                
                    <img src={organLogo} className="profileProjectExpired__infoLogo" alt="employer-logo" />
                    <div className="profileProjectExpired__infoText">
                        <span className="profileProjectExpired__infoTitle">تهیه مخزن آب برای حیات وحش
                            گناباد</span>
                        <span className="profileProjectExpired__infoEmployer">انجمن نذر طبیعت</span>
                    </div>
                
                <p className="profileProjectExpired__box">دوره به پایان رسید</p>
            </div>
            <button className="profileProjectExpired__button">تمدید مشارکت</button>
    </div>
    )
}


export default ProfileProjectExpired ;

