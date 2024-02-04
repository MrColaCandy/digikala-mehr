import { useAuth } from "@components/AuthContext/context"
import "./style.css"

const ChoosePlanButton = ({projectId,variant}) => {
    const {user,setUser}=useAuth();
    function handleChoosePlanClickButton()
    {
       //to do: go to choose price page
       setUser({...user,currentProject:projectId})
    }
    return (
        <button onClick={handleChoosePlanClickButton} className={`choosePlan__button--${variant}`}>
            انتخاب
        </button>
    )
}

export default ChoosePlanButton