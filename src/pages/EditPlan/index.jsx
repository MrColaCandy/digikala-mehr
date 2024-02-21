import Layout from "@components/Layout";
import Slider from "@components/Slider"
import EditHeader from "@components/EditHeader";
import EditPlanProjects from "./components/EditPlanProjects"
import EditPlanProject from "./components/EditPlanProject"
import { useAuth } from "@components/hooks/useAuth"
import Button from "@components/Button"
import { useState,useEffect } from "react";
import { requestAllProjects } from "../requests";
import Card from "@components/Card"
import "./style.css"
import EditPlanModal from "./components/EditPlanModal";
const EditPlan = () => {
    const { userData ,setUserData } = useAuth()
    const [projects, setProjects] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [selected, setSelected] = useState(null);
    const [substitute, setSubstitute] = useState(null);
    const [modal,setModal]=useState(false);
    function handleCardButtonClick(project) {
        setModal("change");
        document.body.style.overflow="hidden"
        setSubstitute(project);
    }

    useEffect(() => {
        async function getProjects() {
          setIsLoading(true);
         
            try {
              const {data} = await requestAllProjects();
              setProjects([...data]);
            } catch (error) {
              setProjects(null);
            }
            finally{
              setIsLoading(false);
            }
          
        }
        getProjects();
      }, [])
   
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
                <EditPlanProjects>
                    {
                        userData?.help_history?.map((project,index) => {
                
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