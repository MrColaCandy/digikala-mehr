import "./style.css"
import { useNavigate } from "react-router-dom"
import { useProject } from "@components/hooks/useProject";
import { useEffect, useState } from "react";
import { parse } from "cookie";
const PriceHeader = () => {
  const { getProject } = useProject();

  const [title, setTitle] = useState("");
  const { navigate } = useNavigate()
  useEffect(() => {
    async function getTitle() {
      try {
        const project = await getProject(parse(document.cookie).projectId);
        setTitle(project.topic)
      } catch (error) {
        console.log(error.message);
      }
    }
    getTitle()
  }, [])

  function handleBackButtonClick() {
    navigate("/choose-plan")
  }
  return (
    <div className="priceForm__header">
      <div className="priceForm__phase">
        <p className="priceForm__currentPhase">مرحله 3 از 3</p>
        <h1 className="priceForm__headerTitle">
          مبلغ <span className="priceForm__headerTextGreen">کمک ات </span>رو انتخاب
          کن.
        </h1>
        <div className="priceForm__headerSubtitle">
          این مبلغ قراره ماهیانه از حقوقت کم و صرف کمک به
          <div>
            <span className="priceForm__headerSubtitleBold" > {" "+title+" "} </span>
              بشه.     
            <a onClick={handleBackButtonClick} className="priceForm__headerLink">تغییر پروژه </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PriceHeader