import "./style.css"
import { useNavigate } from "react-router-dom"
import { useProject } from "@components/hooks/useProject";
import { useEffect, useState } from "react";
import { parse } from "cookie";
const ChoosePriceHeader = () => {
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
    <div className="choosePrice__header">
      <div className="choosePrice__phase">
        <p className="choosePrice__currentPhase">مرحله 3 از 3</p>
        <h1 className="choosePrice__headerTitle">
          مبلغ <span className="choosePrice__headerTextGreen">کمک ات </span>رو انتخاب
          کن.
        </h1>
        <p className="choosePrice__headerSubtitle">
          این مبلغ قراره ماهیانه از حقوقت کم و صرف کمک به
          <div>
            <span className="choosePrice__headerSubtitleBold" > {" "+title+" "} </span>
              بشه.     
            <a onClick={handleBackButtonClick} className="choosePrice__headerLink">تغییر پروژه </a>
          </div>
        </p>
      </div>
    </div>
  )
}

export default ChoosePriceHeader