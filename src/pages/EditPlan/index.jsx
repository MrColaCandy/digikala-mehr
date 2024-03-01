import {  useEffect, useState } from "react";

import { requestActiveProject,  requestAllProjects } from '@services/http';
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
    const [substitute, setSubstitute] = useState(null);
    const [modal, setModal] = useState(null);

    const [activeProject, setActiveProject] = useState();
    const [allProjects, setAllProjects] = useState();
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(false)
    useEffect(() => {
        setLoading(true)
        Promise.all([
          requestActiveProject(),
          requestAllProjects(),
        ]).then((responses) => {
          const [ap, allProjects] = responses;
          setActiveProject(ap)
          setAllProjects(allProjects);
       
    
        })
        .catch(() => {
          setError(true)
        })
        .finally(() => {
          setLoading(false)
        })  
      }, []);
    function handleCardButtonClick(project) {
        setModal("change");
        document.body.style.overflow = "hidden"
        setSubstitute(project);
    }

    if(error)
    {
        return <div>Error</div>
    }
    
    if(isLoading)
    {
        return <div>Loading...</div>
    }
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
                    substitute={substitute}
                    activeProject={activeProject} />

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
                                allProjects?.map((project) => {
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