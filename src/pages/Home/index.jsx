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

  

  useEffect(() => {
    Promise.all([requestProjectsStats(), requestAllProjects()]).then(
      ([statsRes, projects]) => {
        setStats(statsRes);
        setProjects(projects);
      }
    );
  }, []);

  function handleStartButtonClick() {
    

    navigate('/choose-plan')
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
}

export default Home;
