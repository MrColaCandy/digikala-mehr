import HomeBanner from "./components/HomeBanner";
import HomeAbout from "./components/HomeAbout";
import Layout from "@components/Layout";
import HomeVideo from "./components/HomeVideo";
import HomeInfo from "./components/HomeInfo";
import HomeProjects from "./components/HomeProjects";
import HomeFAQ from "./components/HomeFAQ";
import { useNavigate } from "react-router-dom"
import { useProject } from "@components/hooks/useProject"
import { serialize } from "cookie";
import { useAuth } from "@components/hooks/useAuth";

import "./style.css"
import { useEffect } from "react";
function Home() {

  const { projects, userProjects,stats } = useProject()
  const {isLoggedIn}=useAuth();
  const navigate = useNavigate();

useEffect(()=>{
  console.log({stats});
},[])
 
  function handleStartButtonClick() {
    const payments = userProjects?.filter(p => p.state === "next").length;

    if (!isLoggedIn) {
      navigate("/login");
      if (payments == 0) {
        document.cookie = serialize("nextPage", "/choose-plan")
      }
    }
    else
    {
      if (payments == 0) {
        navigate("/choose-plan");
      }
      else
      {
        navigate("/profile")
      }
    }
  }
  return (
    <Layout>
      <HomeBanner />
      <HomeVideo onStartButtonClick={handleStartButtonClick} />
      <section className="home__backgroundGreen">
        <HomeInfo info={stats} />
        <HomeProjects projects={projects?.filter(p => !p.taken)} onStartButtonClick={handleStartButtonClick} />
        <HomeAbout />
      </section>
      <HomeFAQ />
    </Layout>
  );
}

export default Home;
