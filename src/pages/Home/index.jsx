import HomeBanner from "./components/HomeBanner";
import HomeAbout from "./components/HomeAbout";
import Layout from "@components/Layout";
import HomeVideo from "./components/HomeVideo";
import HomeInfo from "./components/HomeInfo";
import HomeProjects from "./components/HomeProjects";
import HomeFAQ from "./components/HomeFAQ";
import {useNavigate} from "react-router-dom"
import {useAuth} from "@components/hooks/useAuth"
import "./style.css"
import { serialize } from "cookie";
import { useEffect, useState } from "react";
import { requestInfo,requestAllProjects } from "@components/requests";

function Home() {
  const [info,setInfo]=useState(null);
  const {isLoggedIn }=useAuth()
  const navigate=useNavigate();
  const [projects, setProjects] = useState([]);
  const [isLoading,setIsLoading]=useState(false);
  
  useEffect(()=>{
    async function getInfo()
    {
      try {
        const {data}= await requestInfo();
        setInfo(data);
      } catch (error) {
        setInfo(null)
        console.log(error);
      }
    }
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
    getInfo();
   
  },[])
  function handleStartButtonClick()
  {
     if(!isLoggedIn)
     {
      navigate("/login");
      document.cookie=serialize("nextPage","/choose-plan")
      return;
     }
     navigate("/choose-plan")
  }
  return (
    <Layout>
      <HomeBanner />
      <HomeVideo onStartButtonClick={handleStartButtonClick}/>
      <section className="home__backgroundGreen">
        <HomeInfo info={info} />
        <HomeProjects isLoading={isLoading} projects={projects} onStartButtonClick={handleStartButtonClick} />
        <HomeAbout />
      </section>
      <HomeFAQ />
    </Layout>
  );
}

export default Home;
