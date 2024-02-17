import ProfileProject from "../ProfileProject"
import ProfileProjectNew from "../ProfileProjectNew"
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
                user?.projects.length===0 &&
                <ProfileNoProject/>
            }
            {
                user?.projects.filter(project=>project.age===0)
                .map(project=>
                <ProfileProjectNew 
                project={project}
                 key={project.id}
                />)
            }
            {
                user?.projects.filter(project=>project.age!==0).sort((a,b)=>a.age-b.age)
                .map(project=>
                <ProfileProject
                project={project}
                 key={project.id}
                />)
            }
            {
                   user?.projects.filter(project=>project.state==="expired").sort((a,b)=>a.age-b.age)
                   .map(project=>
                   <ProfileProjectExpired
                   project={project}
                    key={project.id}
                   />)
            }
           
        </section >
    )
}


export default ProfileActiveProjects;