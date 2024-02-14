
import ProfileSection from '../ProfileSection';
import ProjectStatusActive from "./../ProjectStatusActive"
import ProjectStatusActiveSuccessful from "./../ProjectStatusActiveSuccessful"
import ProjectStatusExpired from "./../ProjectStatusExpired"
import ProjectStatusNeedChoose from "./../ProjectStatusNeedChoose"
import './style.css'


function ProfileAndStatus (){
    return (
        <section className="profileSection">
            <ProfileSection/>
            <hr className="innerBorder" />
            <section className="partnerStatusProject">
            <section className="partnerStatusProject__headerStatus">
                <i className="partnerStatusProject__dispalyIconStatus partnerStatusProject__dispalyIconStatus--active"></i>
                <span className="partnerStatusProject__titleStatus">پروژه‌ی فعال شما</span>
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