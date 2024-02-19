import Layout from "@components/Layout";
import Slider from "@components/Slider"
import EditPlanHeader from "./components/EditPlanHeader";
import EditPlanProjects from "./components/EditPlanProjects";
import { useAuth } from "@components/hooks/useAuth"
import Button from "@components/Button"
import EditPlanProject from "./components/EditPlanProject";
import { useState, useEffect } from "react";
import { getAvailableProjects } from "./request";
import Card from "@components/Card"
import "./style.css"
import EditPlanModal from "./components/EditPlanModal";
const EditPlan = () => {
    const { user, setUser } = useAuth()
    const [projects, setProjects] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [selected, setSelected] = useState(null);
    const [substitute, setSubstitute] = useState(null);
    const [modal,setModal]=useState(false);
    function handleCardButtonClick(project) {
        setModal("change");
        setSubstitute(project);
    }
    useEffect(() => {
        if (!user) return;
        setIsLoading(true);
        async function getProjects() {
            try {
                const available = await getAvailableProjects(user)
                setProjects(available);
            } catch (error) {
                setProjects([]);
            } finally {
                setIsLoading(false)
            }
        }
        getProjects()
    }, [user,selected])
    return (
        <>
            {
                modal &&
                <EditPlanModal
                setModal={setModal}
                variant={modal} 
                title={modal==="remove"?"آیا مایل به حذف پروژه‌تان هستید؟":"آیا مایل به تغییر پروژه‌تان هستید؟"}
                setUser={setUser} 
                user={user} 
                setSelected={setSelected} 
                setSubstitute={setSubstitute} 
                selected={selected} substitute={substitute} />

            }
           
            <Layout>
                <EditPlanHeader selected={selected} setModal={setModal} />
                <EditPlanProjects>
                    {
                        user?.projects.map((project,index) => {
                
                            return <EditPlanProject index={index} selected={selected} setSelected={setSelected} key={project.id} project={project} />
                        })
                    }
                </EditPlanProjects>
                {selected &&
                    <>
                        <div className="editPlan__sliderHeader">
                            <h3 className="editPlan__sliderTitle">دیگر پروژه‌های موجود</h3>
                            <div className="editPlan__sliderSubtitle"  >شما می‌توانید پروژه فعال‌تان را اینجا تغییر دهید.</div>
                        </div>
                        <Slider isLoading={isLoading} slideWidth={390} slideHeight={450} viewPortWidth={1250} gap={40}>
                            {
                                projects?.map((project) => {
                                    return <Card
                                        width={360}
                                        height={448}
                                        key={project.id}
                                        id={project.id}
                                        title={project.title}
                                        description={project.description}
                                        employerName={project.employerName}
                                        image={project.image}
                                        employerLogo={project.employerLogo}
                                        cardButton={
                                            <Button text={"انتخاب کنید"} onClick={() => {
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