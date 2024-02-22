import Button from "@components/Button"
import "./style.css"
import { CgArrowsExchangeV } from "react-icons/cg";
import { requestCancelProject, requestUpdateProject,requestCancelProjectConfirm } from "@components/requests";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { useAuth } from "@components/hooks/useAuth";
const EditPlanModal = ({ setModal, selected, setSelected, substitute, setSubstitute, title, variant = "change" }) => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate=useNavigate();
    const {token,updateUserData,getHistory}=useAuth()
    async function getHistoryByProjectId()
    {
        try {
            const history=await getHistory(selected.id);
           return history;
        } catch (error) {
             console.log(error.message);  
        }
    }
 
    function handleCancelClick() {
        if (isLoading) return;
        setSubstitute(null)
        setModal(null);
        document.body.style.overflow="auto"
    }
    async function handleActionClick() {
        setIsLoading(true);
        if (variant === "change") {
            try {
              const history= await getHistoryByProjectId();
                await requestUpdateProject({token:token,newProject:substitute.id,oldProject:history.id,price:history.price});
                await requestCancelProjectConfirm({token:token,newProject:substitute.id,oldProject:history.id,price:history.price})
                await updateUserData(token);
                setSelected(substitute);
                setSubstitute(null);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
                setModal(null);
                document.body.style.overflow="auto"
            }
        }
        else {
            try {
                const {data}= await requestCancelProject({token:token,project:selected});
                console.log({"delete":data});
                await updateUserData(token)
                setSubstitute(null);
                setSelected(null);
                navigate("/profile");
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
                setModal(null);
                document.body.style.overflow="auto"
            }
        }
    }
    return (
        <div className="editPlanModal">
            <div className="editPlanModal__frame">
                {
                    substitute &&
                    <CgArrowsExchangeV className="editPlanModal__icon" />
                }
                <div className={"editPlanModal__title" + "--" + variant}>{title}</div>
                <div className="editPlanModal__wrapper">
                    <div className="editPlanModal__textGreen">پروژه فعلی</div>
                    <div className="editPlanModal__row">
                        <img src={`http://127.0.0.1:8000/${selected?.institute?.logo}`} className="editPlanModal__Logo" />
                        <div className="editPlanModal__col">
                            <div className="editPlanModal__ProjectTitle">{selected?.topic }</div>
                            <div className="editPlanModal__ProjectEmployer">{selected?.institute?.name}</div>
                        </div>
                    </div>
                </div>
                {
                    substitute &&
                    <div className="editPlanModal__wrapper">
                        <div className="editPlanModal__textGreen">پروژه جایگزین</div>
                        <div className="editPlanModal__row">
                            <img src={`http://127.0.0.1:8000/${substitute?.institute?.logo}`} className="editPlanModal__Logo" />
                            <div className="editPlanModal__col">
                                <div className="editPlanModal__ProjectTitle">{substitute?.topic}</div>
                                <div className="editPlanModal__ProjectEmployer">{substitute?.institute?.name }</div>
                            </div>
                        </div>

                    </div>
                }
                <div className="editPlanModal__buttons">
                    <Button isLoading={isLoading}
                        variant={"outlined"}
                        text={variant === "remove" ? "می‌خواهم پروژه را حذف کنم" : "می‌خواهم پروژه را تغییر دهم"}
                        onClick={handleActionClick}
                        width={380}
                        color={variant === "remove" ? "#E84242" : "#00B189"}
                    />
                    <Button
                        variant={"filled"}
                        text="لغو"
                        onClick={handleCancelClick}
                        width={380}

                    />
                </div>
            </div>
        </div>
    )
}

export default EditPlanModal