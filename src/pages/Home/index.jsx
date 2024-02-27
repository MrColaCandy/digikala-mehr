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

  const { getStats, projects, activeProject, getAllProjects, setProjects } = useProject()
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);

  const { isLoggedIn } = useAuth();
  async function getStatsOnLoad() {
    try {
      const stats = await getStats();
      setStats(stats);
    } catch (error) {
      setStats(null);
    }
  }


  useEffect(() => {
    const abortController = new AbortController()
    getStatsOnLoad();
    return () => abortController.abort();
  }, [])
  async function getAllProjectsOnLoad() {
    try {
      const projects = await getAllProjects();
      setProjects(projects)
    } catch (error) {
      setProjects([])
      console.log(error);
    }
  }

  useEffect(() => {
    const abortController = new AbortController();
    getAllProjectsOnLoad();
    return () => abortController.abort();
  }, [])
  function handleStartButtonClick() {
    if (isLoggedIn) {
      if (activeProject) {
        navigate("/profile")
      }
      else {
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
