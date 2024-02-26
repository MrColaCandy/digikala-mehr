import Layout from "@components/Layout";
import Slider from "@components/Slider"
import EditHeader from "@components/EditHeader";
import EditPlanUserProjects from "./components/EditPlanUserProjects"
import EditPlanUserProject from "./components/EditPlanUserProject"
import { useProject } from "@components/hooks/useProject"
import Button from "@components/Button"
import { useEffect, useState } from "react";
import Card from "@components/Card"
import "./style.css"
import { useNavigate } from "react-router-dom"
import EditPlanModal from "./components/EditPlanModal";
const EditPlan = () => {
    const [projects, setProjects] = useState([])
    const [activeProject, setActiveProject] = useState(null)
    const { getAllProjects, getActiveProject } = useProject()
    const navigate = useNavigate();
    const [substitute, setSubstitute] = useState(null);
    const [modal, setModal] = useState(null);
    function handleCardButtonClick(project) {
        setModal("change");
        document.body.style.overflow = "hidden"
        setSubstitute(project);
    }

    async function getActiveProjectOnLoad() {
        try {
            const activeProject = await getActiveProject();
            setActiveProject(activeProject)
        } catch (error) {
            setActiveProject(null);
            navigate("/");
        }
    }
    async function getAllProjectsOnLoad() {
        try {
            const projects = await getAllProjects();
            setProjects(projects)
        } catch (error) {
            setProjects(null);
            navigate("/");
        }
    }
    useEffect(() => {
        getActiveProjectOnLoad()
        getAllProjectsOnLoad();
    }, [])
    return (
        <>
            {
                modal &&
                <EditPlanModal
                    setModal={setModal}
                    variant={modal}
                    title={modal === "remove" ? "آیا مایل به حذف پروژه‌تان هستید؟" : "آیا مایل به تغییر پروژه‌تان هستید؟"}
                    selected={activeProject}
                    setSubstitute={setSubstitute}
                    substitute={substitute} />

            }

            <Layout>
                <EditHeader activeProject={activeProject} setModal={setModal} />
                <EditPlanUserProjects>
                    <EditPlanUserProject activeProject={activeProject} />
                </EditPlanUserProjects>
                {activeProject &&
                    <>
                        <div className="editPlan__sliderHeader">
                            <h3 className="editPlan__sliderTitle">دیگر پروژه‌های موجود</h3>
                            <div className="editPlan__sliderSubtitle"  >شما می‌توانید پروژه فعال‌تان را اینجا تغییر دهید.</div>
                        </div>
                        <Slider slideWidth={390} slideHeight={450} viewPortWidth={1280} gap={40}>
                            {
                                projects?.filter(p => !p.taken)?.map((project) => {
                                    return <Card

                                        key={project.id}
                                        project={project}
                                        cardButton={
                                            <Button width={380} text={"تغییر به این پروژه"} onClick={() => {
                                                handleCardButtonClick(project)
                                            }} />
                                        }
                                    />
                                })
                            }
                        </Slider>
                    </>
                }
            </Layout>
        </>
    )
}

export default EditPlan