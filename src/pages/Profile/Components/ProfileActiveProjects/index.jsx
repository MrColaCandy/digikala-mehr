import ProfileProject from "../ProfileProject"
import ProfileProjectExpired from "../ProfileProjectExpired"
import ProfileNoProject from "../ProfileNoProject"
import './style.css'
import { useProject } from "@components/hooks/useProject"




function ProfileActiveProjects() {
    const {payments,activeProject,isExpired} = useProject();
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
                isExpired &&
                <ProfileProjectExpired
                    activeProject={activeProject}
                    
                />
            }
            {
               activeProject &&
               <ProfileProject activeProject={activeProject} payments={payments} />
            }

        </section >
    )
}


export default ProfileActiveProjects;