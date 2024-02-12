import organLogo from '@assets/decorations/organLogo.svg'
import "./style.css"

function ProjectStatusExpired (){
    return(
        <section class="partnerStatusProject__expiredStatus">
        <div class="expiredProjectWrapper">
            <section class="expiredProject__projectData">
                <section class="expiredProject__projectOrganData">
                    <img src={organLogo} class="expiredProject__oraganLogoImage" alt="organLogoImg" />
                    <section class="expiredProject__dataTexts">
                        <span class="expiredProject__expiredProjectName">تهیه مخزن آب برای حیات وحش
                            گناباد</span>
                        <span class="expiredProject__expiredOraganName">انجمن نذر طبیعت</span>
                    </section>
                </section>
                <p class="expiredProject__displayExpiredStatusBox">دوره به پایان رسید</p>
            </section>
            <button class="expiredStatusProject__continuationPartnerShipBtn">تمدید مشارکت</button>
        </div>
    </section>
    )
}


export default ProjectStatusExpired ;

