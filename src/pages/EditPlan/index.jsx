import Layout from "@components/Layout";
import Slider from "@components/Slider"
import EditHeader from "@components/EditHeader";
import EditPlanUserProjects from "./components/EditPlanUserProjects"
import EditPlanUserProject from "./components/EditPlanUserProject"
import { useAuth } from "@components/hooks/useAuth"
import Button from "@components/Button"
import { useState } from "react";
import Card from "@components/Card"
import "./style.css"
import EditPlanModal from "./components/EditPlanModal";
const EditPlan = () => {
    const { userData ,setUserData,projects,isLoading,userProjects } = useAuth()
    const [selected, setSelected] = useState(null);
    const [substitute, setSubstitute] = useState(null);
    const [modal,setModal]=useState(false);
    function handleCardButtonClick(project) {
        setModal("change");
        document.body.style.overflow="hidden"
        setSubstitute(project);
    }

    
    return (
        <>
            {
                modal &&
                <EditPlanModal
                setModal={setModal}
                variant={modal} 
                title={modal==="remove"?"آیا مایل به حذف پروژه‌تان هستید؟":"آیا مایل به تغییر پروژه‌تان هستید؟"}
                setUser={setUserData} 
                user={userData} 
                setSelected={setSelected} 
                setSubstitute={setSubstitute} 
                selected={selected} substitute={substitute} />

            }
           
            <Layout>
                <EditHeader selected={selected} setModal={setModal} />
                <EditPlanUserProjects>
                    {
                        userProjects?.map((project,index) => {
                
                            return <EditPlanUserProject index={index} selected={selected} setSelected={setSelected} key={project.id} project={project} />
                        })
                    }
                </EditPlanUserProjects>
                {selected &&
                    <>
                        <div className="editPlan__sliderHeader">
                            <h3 className="editPlan__sliderTitle">دیگر پروژه‌های موجود</h3>
                            <div className="editPlan__sliderSubtitle"  >شما می‌توانید پروژه فعال‌تان را اینجا تغییر دهید.</div>
                        </div>
                        <Slider isLoading={isLoading} slideWidth={390} slideHeight={450} viewPortWidth={1280} gap={40}>
                            {
                                projects.filter(p=>!p.taken)?.map((project) => {
                                    return <Card
                                      
                                        key={project.id}
                                        project={project}
                                        cardButton={
                                            <Button width={300} text={"تعویض کنید"} onClick={() => {
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