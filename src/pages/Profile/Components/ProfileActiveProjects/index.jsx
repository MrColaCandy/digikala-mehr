import ProfileProject from "../ProfileProject"
import ProfileProjectExpired from "../ProfileProjectExpired"
import ProfileNoProject from "../ProfileNoProject"
import './style.css'
import {useAuth} from "@components/hooks/useAuth"



function ProfileActiveProjects() {
    const {userProjects}=useAuth();
    return (


        <section className="profileActiveProjects">
            <section className="profileActiveProjects__header">
                <i className="profileActiveProjects__icon"></i>
                <span className="profileActiveProjects__title">پروژه‌ی فعال شما</span>
            </section>
            {
                userProjects?.length===0 &&
                <ProfileNoProject/>
            }
            {
                userProjects
                ?.map(project=>
                <ProfileProject
                project={project}
                 key={project.id}
                />)
            }
            {
                   userProjects?.filter(project=>project.expiration>=project.total_months)
                   ?.map(project=>
                   <ProfileProjectExpired
                   project={project}
                    key={project.id}
                   />)
            }
           
        </section >
    )
}


export default ProfileActiveProjects;