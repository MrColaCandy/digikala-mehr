import Layout from "@components/Layout";
import { useProject } from "@components/hooks/useProject";
import Slider from "@components/Slider"
import ProfileActiveProjects from "./Components/ProfileActiveProjects";
import ProfileUserAvatar from "./Components/ProfileUserAvatar";
import ProfileHistory from "./Components/ProfileHistory";
import { useNavigate } from "react-router-dom"
import Card from "@components/Card";
import Button from "@components/Button";
import ProfileMessage from "./Components/ProfileMessage";
import "./style.css"
import { serialize } from "cookie";
import { useEffect } from "react";




function Profile() {

  const navigate = useNavigate();
  const { setStats,getStats, setHistories, getHistories, histories, activeProject, projects, setProjects, getAllProjects, getActiveProject, setActiveProject } = useProject();
  function handleChooseProjectClick(project) {
    document.cookie = serialize("projectId", project.id);
    navigate("/choose-price");

  }
  async function getAllProjectsOnLoad() {
    try {
      const projects = await getAllProjects();
      if(activeProject)
      {
        setProjects(projects?.filter(p=>p.id!=activeProject?.project?.id))
      }
      else
      {
        setProjects(projects)
      }
    } catch (error) {
      setProjects([])
      
    }
  }
  async function getActiveProjectOnLoad() {
    try {
      const active = await getActiveProject()
      setActiveProject(active)
    } catch (error) {
      setActiveProject(null)
    }
  }
  async function getHistoriesOnLoad() {

    try {
      const histories = await getHistories();
      console.log(histories);
      setHistories(histories)
    } catch (error) {
      setHistories([])
    }
  }
  async function getStatsOnLoad() {
    try {
      const stats = await getStats();
      setStats(stats);
    } catch (error) {
      setStats(null);
    }
  }
  useEffect(() => {
    
  }, [])
  useEffect(() => {
    const abortController = new AbortController()
    getActiveProjectOnLoad();
    getAllProjectsOnLoad();
    getHistoriesOnLoad()
    getStatsOnLoad()
    return () => abortController.abort();
  }, [])
  return (
    <Layout>
      <ProfileUserAvatar  />
      <hr className="profile__hr" />
      <ProfileActiveProjects />
      <ProfileMessage  />
      {
        histories?.length > 0 &&
        <ProfileHistory />
      }
      {
        !activeProject &&
        <>
          <p className="profile__sliderTitle">اینجا می‌تونی از بین پروژه‌های مختلف یکیو برای شروع انتخاب کنی</p>
          <Slider slideWidth={390} slideHeight={450} viewPortWidth={1280} gap={40}>
            {
              projects?.map((project) => {
                return <Card
                  key={project.id}
                  project={project}
                  cardButton={
                    <Button onClick={() => { handleChooseProjectClick(project) }} variant="outlined" text={"انتخاب کنید"} />
                  }
                />

              })
            }
          </Slider>
        </>
      }
    </Layout>

  );
}


export default Profile;
