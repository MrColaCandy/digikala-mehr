import ProfileProject from "../ProfileProject"
import ProfileProjectNew from "../ProfileProjectNew"
import ProfileProjectExpired from "../ProfileProjectExpired"
import './style.css'
import ProfileNoProject from "../ProfileNoProject"


function ProfileActiveProjects() {
    return (


        <section className="profileActiveProjects">
            <section className="profileActiveProjects__header">
                <i className="profileActiveProjects__icon"></i>
                <span className="profileActiveProjects__title">پروژه‌ی فعال شما</span>
            </section>
            <ProfileProject />
            <ProfileProjectNew />
            <ProfileProjectExpired />
            <ProfileNoProject />
        </section >
    )
}


export default ProfileActiveProjects;