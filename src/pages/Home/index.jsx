import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "@components/Layout";
import { requestProjectsStats, requestAllProjects } from "@services/http";



import HomeBanner from "./components/HomeBanner";
import HomeAbout from "./components/HomeAbout";
import HomeVideo from "./components/HomeVideo";
import HomeInfo from "./components/HomeInfo";
import HomeProjects from "./components/HomeProjects";
import HomeFAQ from "./components/HomeFAQ";

import "./style.css";


function Home() {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        await fetchStats();
        await fetchAllProjects();
      } catch (error) {
          setError(true);
      }finally{
        setLoading(false);
      }
    };
    fetchData();
  }, []);

 
  if(loading)
  {
    return <div>Loading</div>
  }
  if(error)
  {
    return <div>Error</div>
  }

  return (
    <Layout>
      <HomeBanner />
      <HomeVideo onStartButtonClick={handleStartButtonClick} />
      <section className="home__backgroundGreen">
        <HomeInfo info={stats} />
        <HomeProjects
          projects={projects}
          onStartButtonClick={handleStartButtonClick}
        />
        <HomeAbout />
      </section>
      <HomeFAQ />
    </Layout>
  );

  async function fetchAllProjects() {
    try {
      const projects = await requestAllProjects();
      setProjects(projects);
    } catch (error) {
      setProjects([]);
      setError(true);
    }
  }

  async function fetchStats() {
    try {
      const statsRes = await requestProjectsStats();
      setStats(statsRes);
    } catch (error) {
      setStats(null);
      setError(true);
    }
  }

 

  function handleStartButtonClick() {
    navigate("/choose-plan")
  }

}

export default Home;
