import ProfileProject from "../ProfileProject"
import ProfileProjectExpired from "../ProfileProjectExpired"
import ProfileNoProject from "../ProfileNoProject"
import './style.css'
import { useProject } from "@components/hooks/useProject"
import { useEffect, useState } from "react"




function ProfileActiveProjects() {
    const { getActiveProject,getPayments,isProjectExpired } = useProject();
    const [activeProject,setActiveProject]=useState(null);
    const [payments,setPayments]=useState(0)
    const [isExpired,setIsExpired]=useState(false);
    async function getPaymentsOnLoad()
    {
        try {
            const payments=await getPayments()
            setPayments(payments);
          } catch (error) {
           setPayments(0);
          }
    }
    async function getActiveProjectOnLoad()
    {
        try {
            const activeProject=await getActiveProject()
            setActiveProject(activeProject);
          } catch (error) {
           setActiveProject(null);
          }
    }
    async function getIsProjectExpiredLoad()
    {
        try {
            const isExpired=await isProjectExpired()
            setIsExpired(isExpired);
          } catch (error) {
            setIsExpired(false);
          }
    }
    useEffect(()=>{
      getActiveProjectOnLoad();
      getPaymentsOnLoad()
      getIsProjectExpiredLoad();
    },[])
   
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