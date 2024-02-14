import organLogo from '@assets/decorations/organLogo.svg'
import "./style.css"

function ProjectStatusExpired (){
    return(
        <section className="partnerStatusProject__expiredStatus">
        <div className="expiredProjectWrapper">
            <section className="expiredProject__projectData">
                <section className="expiredProject__projectOrganData">
                    <img src={organLogo} className="expiredProject__oraganLogoImage" alt="organLogoImg" />
                    <section className="expiredProject__dataTexts">
                        <span className="expiredProject__expiredProjectName">تهیه مخزن آب برای حیات وحش
                            گناباد</span>
                        <span className="expiredProject__expiredOraganName">انجمن نذر طبیعت</span>
                    </section>
                </section>
                <p className="expiredProject__displayExpiredStatusBox">دوره به پایان رسید</p>
            </section>
            <button className="expiredStatusProject__continuationPartnerShipBtn">تمدید مشارکت</button>
        </div>
    </section>
    )
}


export default ProjectStatusExpired ;

