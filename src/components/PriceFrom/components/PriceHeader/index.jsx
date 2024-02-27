import "./style.css"
import { useProject } from "@components/hooks/useProject";
import { BASE_URL } from "@configs/BASE_URL.js"
import { parse } from "cookie";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
const PriceHeader = () => {
  const { getAllProjects,activeProject } = useProject();
  const [project,setProject]=useState(null)
  const navigate=useNavigate();
  async function getProjectOnLoad()
  {
    try {
      const projects= await getAllProjects()
      if(location.pathname=="/choose-price")
      {
        const id=parse(document.cookie).projectId 
        const project= projects.find(p=>p.id==id)
        setProject({title:project.topic,logo:project.institute.logo});
      }
      else
      {
        setProject({title:activeProject.project.topic,logo:activeProject.project.institute.logo})
      }
    } catch (error) {
      console.log(error);
    }
  }
 useEffect(()=>{
   const abortController=new AbortController()
   getProjectOnLoad();
   abortController.abort();
 },[])

 function handleBackClick()
 {
    if(location.pathname=="/choose-price")
    {
      navigate("/choose-plan")
    }
    else
    {
      navigate("/profile")
    }
 }
  return (
    <div className="priceForm__header">
      <button onClick={handleBackClick} className="priceForm__backButton">بازگشت</button>
      <div className="priceForm__phase">
        <div className="priceForm__currentPhase">مرحله 3 از 3</div>
        <h1 className="priceForm__headerTitle">
          مبلغ <span className="priceForm__headerTextGreen">کمک ات </span>رو انتخاب
          کن.
        </h1>
        <div className="priceForm__headerSubtitle">
          <span>این مبلغ ماهیانه از حقوقت صرف پروژه انتخابی‌ت میشه.</span>
        </div>
        <div className="priceForm__currentProject">
          <span>{project?.title} </span>
          <img className="priceForm__currentProjectImage"  src={BASE_URL+ project?.logo} />
        </div>
      </div>
    </div>
  )
}

export default PriceHeader