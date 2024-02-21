import ProfileProject from "../ProfileProject"
import ProfileProjectExpired from "../ProfileProjectExpired"
import ProfileNoProject from "../ProfileNoProject"
import './style.css'




function ProfileActiveProjects({user}) {
    
    return (


        <section className="profileActiveProjects">
            <section className="profileActiveProjects__header">
                <i className="profileActiveProjects__icon"></i>
                <span className="profileActiveProjects__title">پروژه‌ی فعال شما</span>
            </section>
            {
                user?.help_history?.length===0 &&
                <ProfileNoProject/>
            }
            {
                user?.help_history
                ?.map(project=>
                <ProfileProject
                project={project}
                 key={project.id}
                />)
            }
            {
                   user?.help_history?.filter(project=>project.Expiration===project.total_months)
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