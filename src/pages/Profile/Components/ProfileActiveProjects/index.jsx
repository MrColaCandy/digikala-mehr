import ProfileProject from "../ProfileProject"
import ProfileProjectExpired from "../ProfileProjectExpired"
import ProfileNoProject from "../ProfileNoProject"
import './style.css'





function ProfileActiveProjects({activeProject}) {

    return (


        <section className="profileActiveProjects">
            <section className="profileActiveProjects__header">
                <i className="profileActiveProjects__icon"></i>
                <span className="profileActiveProjects__title">پروژه‌ی فعال شما</span>
            </section>
            {
                !activeProject &&
                <ProfileNoProject />
            }
            {
                activeProject.state==="expired" &&
                <ProfileProjectExpired
                    activeProject={activeProject}
                    
                />
            }
            {
               activeProject &&
               <ProfileProject activeProject={activeProject}  />
            }

        </section >
    )
}


export default ProfileActiveProjects;