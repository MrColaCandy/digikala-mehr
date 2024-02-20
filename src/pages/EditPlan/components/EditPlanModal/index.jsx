import Button from "@components/Button"
import "./style.css"
import { CgArrowsExchangeV } from "react-icons/cg";
import { cancelProject, updateProject } from "../../request";
import { useState } from "react";
import {useNavigate} from "react-router-dom"

const EditPlanModal = ({ setModal, selected, setSelected, substitute, setSubstitute, user, setUser, title, variant = "change" }) => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate=useNavigate();
    function handleCancelClick() {
        if (isLoading) return;
        setSubstitute(null)
        setModal(null);
        document.body.style.overflow="auto"
    }
    async function handleChangeClick() {
        if (!user) return;
        setIsLoading(true);
        if (variant === "change") {
            try {
                const newUser = await updateProject(user, selected, substitute);
                setUser(newUser);
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
                const newUser = await cancelProject(user, selected);
                setUser(newUser);
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
                        <img src={selected?.employerLogo} className="editPlanModal__Logo" />
                        <div className="editPlanModal__col">
                            <div className="editPlanModal__ProjectTitle">{selected?.title}</div>
                            <div className="editPlanModal__ProjectEmployer">{selected?.employerName}</div>
                        </div>
                    </div>
                </div>
                {
                    substitute &&
                    <div className="editPlanModal__wrapper">
                        <div className="editPlanModal__textGreen">پروژه جایگزین</div>
                        <div className="editPlanModal__row">
                            <img src={substitute?.employerLogo} className="editPlanModal__Logo" />
                            <div className="editPlanModal__col">
                                <div className="editPlanModal__ProjectTitle">{substitute?.title}</div>
                                <div className="editPlanModal__ProjectEmployer">{substitute?.employerName}</div>
                            </div>
                        </div>

                    </div>
                }
                <div className="editPlanModal__buttons">
                    <Button isLoading={isLoading}
                        variant={"outlined"}
                        text={variant === "remove" ? "می‌خواهم پروژه را حذف کنم" : "می‌خواهم پروژه را تغییر دهم"}
                        onClick={handleChangeClick}
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