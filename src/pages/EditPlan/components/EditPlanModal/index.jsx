import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { CgArrowsExchangeV } from "react-icons/cg";
import { IoMdInformationCircleOutline } from "react-icons/io";

import Button from "@components/Button"
import {requestCancelHelp,requestEditHelp} from"@services/http"
import { BASE_URL } from "@configs/end-points";

import "./style.css"
const EditPlanModal = ({ setModal,  project, setProject, title, variant = "change", activeHelp }) => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [animation, setAnimation] = useState(false);
   
    function handleCancelClick() {
        if (isLoading) return;
        setProject(null)
        setModal(null);
        document.body.style.overflow = "auto"
    }
    async function handleActionClick() {
        setIsLoading(true);
        setAnimation(true);
        if (variant === "change") {
            setTimeout(async () => {
                await changeProjects();
                setProject(null);
                setAnimation(false);
            }, 800);
        }
        else {
            setTimeout(async () => {
                await removeProject();
                setAnimation(false);
            }, 800);
        }
    }
    async function removeProject() {
        try {
            
            await requestCancelHelp({id:activeHelp?.id});
            setProject(null);
            navigate("/profile");
        } catch (error) {
            console.log("error failed to cancel project. com:EditPlanModal. error: " + JSON.stringify(error));
        } finally {
            setIsLoading(false);
            setModal(null);
            document.body.style.overflow = "auto";
        }
    }

    async function changeProjects() {
        try {
          
            await requestEditHelp({ helpId:activeHelp?.id,projectId: project?.id, price:activeHelp?.price });
            setProject(null);
            navigate("/profile?status=edited");
        } catch (error) {
            console.log("Failed to exchange projects. com:EditPlanModal. error: " + error.message);
        } finally {
            setIsLoading(false);
            setModal(null);
            document.body.style.overflow = "auto";
        }
    }
    return (
        <div className="editPlanModal" >
            <div className="editPlanModal__menu">
                {
                    project &&

                    <CgArrowsExchangeV className={animation ? "editPlanModal__icon" : "editPlanModal__icon--rotate"} />

                }
                <div className={"editPlanModal__title" + "--" + variant + "Project"}>{title}</div>
                <div className="editPlanModal__projects">
                    <div className={variant==="remove"?"editPlanModal__project--removeProject":"editPlanModal__project"} style={{ "--order": animation && project ? 1 : 0,"--opacity":animation?0:1 }}>
                        <div className="editPlanModal__textGreen">پروژه فعلی</div>
                        <div className="editPlanModal__row">
                            <img src={`${BASE_URL}/${activeHelp?.project?.institute?.logo}`} className="editPlanModal__Logo" />
                            <div className="editPlanModal__col">
                                <div className="editPlanModal__ProjectTitle">{activeHelp?.project?.topic}</div>
                                <div className="editPlanModal__ProjectEmployer">{activeHelp?.project?.institute?.name}</div>
                            </div>
                        </div>
                    </div>
                    {
                        project &&

                        <div className="editPlanModal__project" style={{ "--order": animation && project ? 0 : 1 }}>
                            <div className="editPlanModal__textGreen">پروژه جایگزین</div>
                            <div className="editPlanModal__row">
                                <img src={`${BASE_URL}/${project?.institute?.logo}`} className="editPlanModal__Logo" />
                                <div className="editPlanModal__col">
                                    <div className="editPlanModal__ProjectTitle">{project?.topic}</div>
                                    <div className="editPlanModal__ProjectEmployer">{project?.institute?.name}</div>
                                </div>
                            </div>

                        </div>

                    }
                    {
                        !project &&
                        <div className="editPlanModal__message" style={{ "--order": 1 }}>
                            <div className="editPlanModal__row">
                                <IoMdInformationCircleOutline className="editPlanModal__messageIcon" />
                                <p className="editPlanModal__messageText">
                                    با لغو اشتراک دیگر مبلغ ماهیانه از حقوق شما کسر نمی‌شود.
                                </p>
                            </div>

                        </div>
                    }
                </div>
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