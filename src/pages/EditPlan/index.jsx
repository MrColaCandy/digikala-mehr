import { useEffect, useState } from "react";

import { requestActiveHelp, requestAvailableProjects } from '@services/http';
import Layout from "@components/Layout";
import Slider from "@components/Slider"
import EditHeader from "@components/EditHeader";
import Button from "@components/Button"
import Card from "@components/Card"


import EditPlanUserProjects from "./components/EditPlanUserProjects"
import EditPlanUserProject from "./components/EditPlanUserProject"

import "./style.css"

import EditPlanModal from "./components/EditPlanModal";
const EditPlan = () => {
    const [project, setProject] = useState(null);
    const [modal, setModal] = useState(null);

    const [activeHelp, setActiveHelp] = useState();
    const [availableProjects, setAvailableProjects] = useState();
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                await fetchActiveHelp();
                await fetchAvailableProjects();
            } catch (error) {
                setError(true);
            }
            finally {
                setError(false);
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    function handleCardButtonClick(project) {
        setModal("change");
        document.body.style.overflow = "hidden"
        setProject(project);
    }

   
    if (isLoading) {
        return <div>Loading</div>
    }
    if (error) {
        return <div>Error</div>
    }

    return (
        <>
            {
                modal &&
                <EditPlanModal
                    setModal={setModal}
                    variant={modal}
                    title={modal === "remove" ? "آیا مایل به حذف پروژه‌تان هستید؟" : "آیا مایل به تغییر پروژه‌تان هستید؟"}
                    setProject={setProject}
                    project={project}
                    activeHelp={activeHelp} />

            }

            <Layout>
                <EditHeader activeHelp={activeHelp} setModal={setModal} />
                <EditPlanUserProjects>
                    <EditPlanUserProject activeHelp={activeHelp} />
                </EditPlanUserProjects>
                {activeHelp &&
                    <>
                        <div className="editPlan__sliderHeader">
                            <h3 className="editPlan__sliderTitle">دیگر پروژه‌های موجود</h3>
                            <div className="editPlan__sliderSubtitle"  >شما می‌توانید پروژه فعال‌تان را اینجا تغییر دهید.</div>
                        </div>
                        <Slider slideWidth={390} slideHeight={450} viewPortWidth={1280} gap={40}>
                            {
                                availableProjects?.map((project) => {
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

    async function fetchAvailableProjects() {
        try {
            const availableProjects = await requestAvailableProjects();
            setAvailableProjects(availableProjects);
        } catch (error) {
            setAvailableProjects([]);
            setError(true);
        }
    }

    async function fetchActiveHelp() {
        try {
            const activeHelp = await requestActiveHelp();
            setActiveHelp(activeHelp);
        } catch (error) {
            setActiveHelp(null);
        }
    }
}

export default EditPlan