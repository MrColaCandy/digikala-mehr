import HomeBanner from "./components/HomeBanner";
import HomeAbout from "./components/HomeAbout";
import Layout from "@components/Layout";
import HomeVideo from "./components/HomeVideo";
import HomeInfo from "./components/HomeInfo";
import HomeProjects from "./components/HomeProjects";
import HomeFAQ from "./components/HomeFAQ";
import { useNavigate } from "react-router-dom"
import { useProject } from "@components/hooks/useProject"


import "./style.css"
import { useEffect, useState } from "react";
import { useAuth } from "@components/hooks/useAuth";
function Home() {

  const { getStats, getAllProjects,setActiveProject,getAllProject,activeProject,getActiveProject } = useProject()
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [projects, setProjects] = useState([]);
  const { isLoggedIn } = useAuth();
  async function getStatsOnLoad() {
    try {
      const stats = await getStats();
      setStats(stats);
    } catch (error) {
      setStats(null);
    }
  }

  async function getAllProjectsOnLoad() {
    try {
      const projects = await getAllProjects();
      setProjects(projects);
      
    } catch (error) {
      setProjects([]);
    }
  }
async function getActiveProjectOnLoad()
{
  try {
     const active= await getActiveProject()
     setActiveProject(active)
  } catch (error) {
    setActiveProject(null)
  }
}

  useEffect(() => {
    getActiveProjectOnLoad();
    getStatsOnLoad();
    getAllProjectsOnLoad()
  }, [])



  function handleStartButtonClick() {
    if (isLoggedIn) {
      if(activeProject)
      {
         navigate("/profile")
      }
      else
      {
        navigate("choose-plan")
      }
    }
    else {
      navigate("/login")
    }
  }
  return (
    <Layout>
      <HomeBanner />
      <HomeVideo onStartButtonClick={handleStartButtonClick} />
      <section className="home__backgroundGreen">
        <HomeInfo info={stats} />
        <HomeProjects projects={projects} onStartButtonClick={handleStartButtonClick} />
        <HomeAbout />
      </section>
      <HomeFAQ />
    </Layout>
  );
}

export default Home;
