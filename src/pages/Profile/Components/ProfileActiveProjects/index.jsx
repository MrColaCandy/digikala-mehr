import ProfileProject from "../ProfileProject"
import ProfileProjectExpired from "../ProfileProjectExpired"
import ProfileNoProject from "../ProfileNoProject"
import './style.css'
import { useProject } from "@components/hooks/useProject"




function ProfileActiveProjects() {
    const { activeProject } = useProject();
  
    
   
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
                activeProject?.expiration <=activeProject?.totalMonth &&
                <ProfileProjectExpired
                    project={activeProject}
                />
            }
          
            {
               activeProject &&
               <ProfileProject project={activeProject} />
            }

        </section >
    )
}


export default ProfileActiveProjects;