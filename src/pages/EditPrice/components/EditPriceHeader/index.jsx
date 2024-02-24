import {useNavigate} from "react-router-dom";
import { useProject } from "@components/hooks/useProject";
import { useEffect,useState } from "react";
import "./style.css"
import { parse } from "cookie";
const EditPriceHeader = ({user,setUser}) => {
  const [title, setTitle] = useState("");
  const { getProject } = useProject();
    const navigate =useNavigate();
    useEffect(() => {
      async function getTitle() {
        const id=parse(document.cookie).projectId;
        try {
          
          const project = await getProject(id);
          setTitle(project.topic)
        } catch (error) {
          console.log("Failed to get project by id: "+id+". com:EditPriceHeader. error: "+error.message);
        }
      }
      getTitle()
    }, [])
    function handleBackButtonClick()
    {
      navigate("/edit-plan")
      setUser({...user,currentProject:null})
    }

  return (
    <div className="editPrice__header">
    <div className="editPrice__phase">
      <p className="editPrice__currentPhase">مرحله 3 از 3</p>
      <h1 className="editPrice__headerTitle">
        مبلغ <span className="editPrice__headerTextGreen">کمک ات </span>رو انتخاب
        کن.
      </h1>
      <p className="editPrice__headerSubtitle">
         این مبلغ قراره ماهیانه از حقوقت کم و صرف کمک به 
        <span className="editPrice__textBold">{ " "+title +" " } </span>
        بشه.
        <a onClick={handleBackButtonClick} className="editPrice__headerLink">تغییر پروژه </a>
      </p>
    </div>
  </div>
  )
}

export default EditPriceHeader