import  usePersian  from "@components/hooks/usePersian"
import { useProject } from "@components/hooks/useProject"
import { useEffect, useState } from "react"


const NoNewProjectMessage = ({userData}) => {

    const { convert } = usePersian()
    const {getStats}=useProject();
    const [stats,setStats]=useState(null)
  
    async function getStatsOnLoad()
    {
       try {
         const stats=await getStats();
         setStats(stats);
       } catch (error) {
          setStats(null);
       }
    }
    useEffect(()=>{
      getStatsOnLoad()
    },[])
  return (
    <section className="profileMessage">
        <h3 className="profileMessage__title">سلام {userData?.user?.firstName}، می‌دونستی...</h3>
        <p className="profileMessage__text">
            تا حالا <span className="profileMessage__textBold">{convert(stats?.invalvedPercent)}%</span> بچه‌ها تو این طرح شرکت
            کردن به لطف شما هر ماه <span className="profileMessage__textBold"> بیش از {convert(parseInt(stats?.totalPrice)/1000000)} میلیون تومان </span>
            برای پروژه‌های مختلف کمک جمع
            میشه.
        </p>
    </section>
  )
}

export default NoNewProjectMessage