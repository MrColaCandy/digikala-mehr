import Button from "@components/Button"
import "./style.css"
import { CgArrowsExchangeV } from "react-icons/cg";
import { requestCancelProject, requestUpdateProject } from "../../request";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { useAuth } from "@components/hooks/useAuth";
import roshanLogo from "@assets/decorations/roshan-logo.png"
const EditPlanModal = ({ setModal, selected, setSelected, substitute, setSubstitute, title, variant = "change" }) => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate=useNavigate();
    const {token,updateUser}=useAuth()
    
    function handleCancelClick() {
        if (isLoading) return;
        setSubstitute(null)
        setModal(null);
        document.body.style.overflow="auto"
    }
    async function handleActionClick() {
        console.log(selected,substitute);
        setIsLoading(true);
        if (variant === "change") {
            try {
                await requestUpdateProject({token:token,newProject:substitute,oldProject:selected,price:200000});
                await updateUser(token);
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
                await requestCancelProject({token:token,project:selected});
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
    const topics=[
        "کتابخانه",
        "ورزشگاه",
        "استخر شنای بانوان",
        "آزمایشگاه زبان",
        "مجموعه تفریحی",
    ]
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
                        <img src={/*selected?.institute?.logo*/  roshanLogo} className="editPlanModal__Logo" />
                        <div className="editPlanModal__col">
                            <div className="editPlanModal__ProjectTitle">{selected?.topic || topics[selected?.id%topics.length]}</div>
                            <div className="editPlanModal__ProjectEmployer">{selected?.institute?.name || "موسسه صبح روشن"}</div>
                        </div>
                    </div>
                </div>
                {
                    substitute &&
                    <div className="editPlanModal__wrapper">
                        <div className="editPlanModal__textGreen">پروژه جایگزین</div>
                        <div className="editPlanModal__row">
                            <img src={/*substitute?.institute?.logo*/  roshanLogo} className="editPlanModal__Logo" />
                            <div className="editPlanModal__col">
                                <div className="editPlanModal__ProjectTitle">{substitute?.topic || topics[substitute?.id%topics.length]}</div>
                                <div className="editPlanModal__ProjectEmployer">{substitute?.institute?.name || "موسسه صبح روشن"}</div>
                            </div>
                        </div>

                    </div>
                }
                <div className="editPlanModal__buttons">
                    <Button isLoading={isLoading}
                        variant={"outlined"}
                        text={variant === "remove" ? "می‌خواهم پروژه را حذف کنم" : "می‌خواهم پروژه را تغییر دهم"}
                        onClick={handleActionClick}
                        width="380px"
                        color={variant === "remove" ? "#E84242" : "#00B189"}
                    />
                    <Button
                        variant={"filled"}
                        text="لغو"
                        onClick={handleCancelClick}
                        width="380px"

                    />
                </div>
            </div>
        </div>
    )
}

export default EditPlanModal