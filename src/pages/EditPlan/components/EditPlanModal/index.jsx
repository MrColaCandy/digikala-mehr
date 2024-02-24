import Button from "@components/Button"
import { CgArrowsExchangeV } from "react-icons/cg";
import { requestUpdateProject } from "@components/requests";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { useProject } from "@components/hooks/useProject";
import { useAuth } from "@components/hooks/useAuth";
import { BASE_URL } from "@configs/BASE_URL";
import "./style.css"
import { serialize } from "cookie";
const EditPlanModal = ({ setModal, selected, setSelected, substitute, setSubstitute, title, variant = "change" }) => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate=useNavigate();
    const {updateUserData,cancelProject}=useProject()
    const {token}=useAuth()
    
 
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
                await requestUpdateProject({token:token,newProject:substitute.id,oldProject:selected.history_id,price:selected.price});
                await updateUserData(token);
                setSelected(substitute);
                setSubstitute(null);
                document.cookie=serialize("newProject","edit");
                navigate("/profile")
            } catch (error) {
                console.log("Failed to exchange projects. com:EditPlanModal. error: "+error.message);
            } finally {
                setIsLoading(false);
                setModal(null);
                document.body.style.overflow="auto"
            }
        }
        else {
            try {
                await cancelProject(selected);
                await updateUserData(token)
                setSubstitute(null);
                setSelected(null);
                document.cookie=serialize("newProject","delete");
                navigate("/profile");
            } catch (error) {
                console.log("error failed to cancel project. com:EditPlanModal. error: "+error.message);
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
                        <img src={`${BASE_URL}${selected?.institute?.logo}`} className="editPlanModal__Logo" />
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
                            <img src={`${BASE_URL}${substitute?.institute?.logo}`} className="editPlanModal__Logo" />
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
                        width={370}
                        color={variant === "remove" ? "#E84242" : "#00B189"}
                    />
                    <Button
                        variant={"filled"}
                        text="لغو"
                        onClick={handleCancelClick}
                        width={370}

                    />
                </div>
            </div>
        </div>
    )
}

export default EditPlanModal