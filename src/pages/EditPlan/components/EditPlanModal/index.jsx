import Button from "@components/Button"
import { CgArrowsExchangeV } from "react-icons/cg";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useProject } from "@components/hooks/useProject";
import { useAuth } from "@components/hooks/useAuth";
import { BASE_URL } from "@configs/BASE_URL";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { serialize } from "cookie";
import "./style.css"
const EditPlanModal = ({ setModal, substitute, setSubstitute, title, variant = "change" }) => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { cancelProject,updateProject,activeProject,setActiveProject } = useProject()
    const { token } = useAuth()
    const [animation, setAnimation] = useState(false);
   
    function handleCancelClick() {
        if (isLoading) return;
        setSubstitute(null)
        setModal(null);
        document.body.style.overflow = "auto"
    }
    async function handleActionClick() {
        setIsLoading(true);
        setAnimation(true);
        if (variant === "change") {
            setTimeout(async () => {
                await changeProjects();
                setSubstitute(null);
                setAnimation(false);
            }, 800);
        }
        else {
            setTimeout(async () => {
                await removeProject();
                document.cookie= serialize("projectId","");
                document.cookie= serialize("editing","");
                setAnimation(false);
            }, 800);
        }
    }
    return (
        <div className="editPlanModal" >
            <div className="editPlanModal__menu">
                {
                    substitute &&

                    <CgArrowsExchangeV className={animation ? "editPlanModal__icon" : "editPlanModal__icon--rotate"} />

                }
                <div className={"editPlanModal__title" + "--" + variant + "Project"}>{title}</div>
                <div className="editPlanModal__projects">
                    <div className={variant==="remove"?"editPlanModal__project--removeProject":"editPlanModal__project"} style={{ "--order": animation && substitute ? 1 : 0,"--opacity":animation?0:1 }}>
                        <div className="editPlanModal__textGreen">پروژه فعلی</div>
                        <div className="editPlanModal__row">
                            <img src={`${BASE_URL}${activeProject?.project?.institute?.logo}`} className="editPlanModal__Logo" />
                            <div className="editPlanModal__col">
                                <div className="editPlanModal__ProjectTitle">{activeProject?.project?.topic}</div>
                                <div className="editPlanModal__ProjectEmployer">{activeProject?.project?.institute?.name}</div>
                            </div>
                        </div>
                    </div>
                    {
                        substitute &&

                        <div className="editPlanModal__project" style={{ "--order": animation && substitute ? 0 : 1 }}>
                            <div className="editPlanModal__textGreen">پروژه جایگزین</div>
                            <div className="editPlanModal__row">
                                <img src={`${BASE_URL}${substitute?.institute?.logo}`} className="editPlanModal__Logo" />
                                <div className="editPlanModal__col">
                                    <div className="editPlanModal__ProjectTitle">{substitute?.topic}</div>
                                    <div className="editPlanModal__ProjectEmployer">{substitute?.institute?.name}</div>
                                </div>
                            </div>

                        </div>

                    }
                    {
                        !substitute &&
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

    async function removeProject() {
        try {
            
            await cancelProject(activeProject?.id);
            setSubstitute(null);
            setActiveProject(false);
            document.cookie = serialize("newProject", "delete");
            navigate("/profile");
        } catch (error) {
            console.log("error failed to cancel project. com:EditPlanModal. error: " + error.message);
        } finally {
            setIsLoading(false);
            setModal(null);
            document.body.style.overflow = "auto";
        }
    }

    async function changeProjects() {
        try {
          
            await updateProject({ token: token, newProject: substitute.id, oldProject:activeProject?.id, price:activeProject?.price });
            setSubstitute(null);
            document.cookie = serialize("newProject", "edit");
            navigate("/profile");
        } catch (error) {
            console.log("Failed to exchange projects. com:EditPlanModal. error: " + error.message);
        } finally {
            setIsLoading(false);
            setModal(null);
            document.body.style.overflow = "auto";
        }
    }
}

export default EditPlanModal