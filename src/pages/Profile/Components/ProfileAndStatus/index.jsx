
import ProfileSection from '../ProfileSection';
import ProjectStatusActive from "./../ProjectStatusActive"
import ProjectStatusActiveSuccessful from "./../ProjectStatusActiveSuccessful"
import ProjectStatusExpired from "./../ProjectStatusExpired"
import ProjectStatusNeedChoose from "./../ProjectStatusNeedChoose"
import './style.css'


function ProfileAndStatus (){
    return (
        <section class="profileSection">
            <ProfileSection/>
            <hr class="innerBorder" />
            <section class="partnerStatusProject">
            <section class="partnerStatusProject__headerStatus">
                <i class="partnerStatusProject__dispalyIconStatus partnerStatusProject__dispalyIconStatus--active"></i>
                <span class="partnerStatusProject__titleStatus">پروژه‌ی فعال شما</span>
            </section>
            <ProjectStatusActive />
            <ProjectStatusActiveSuccessful />
            <ProjectStatusExpired />
            <ProjectStatusNeedChoose />
        </section>
        </section >
    )
}


export default ProfileAndStatus ;