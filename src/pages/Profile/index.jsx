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
import { parse, serialize } from "cookie";
import { useEffect, useState } from "react";



function Profile() {

  const navigate = useNavigate();
  const { user, getAllProjects, histories, setHistories, getHistories,activeProject } = useProject();


  const [projects, setProjects] = useState([])
  function handleChooseProjectClick(project) {
    document.cookie = serialize("projectId", project.id);
    navigate("/choose-price");

  }
  async function getHistoriesOnLoad() {
    try {
      const histories = await getHistories();
      console.log(histories);
      setHistories(histories)
      document.cookie = serialize("histories", JSON.stringify(histories));
    } catch (error) {
      setHistories([])
      console.log(error);

    }
  }
  async function getAllProjectsOnLoad() {
    try {
      const projects = await getAllProjects();
      setProjects(projects)
    } catch (error) {
      setProjects([])
      console.log(error);

    }
  }
  function isHistoryNew() {
    try {
      const prevHistory = JSON.parse(parse(document.cookie).histories);
      for (let index = 0; index < prevHistory.length; index++) {
  
        if (prevHistory[index].id != histories[index].id) {

          return true;
        }
      }
      return false;
    } catch (error) {
      return true;  
    }
}
  
useEffect(() => {
  getAllProjectsOnLoad()
  if(!isHistoryNew())return;
  getHistoriesOnLoad()
}, [])


return (
  <Layout>
    <ProfileUserAvatar userData={user} />
    <hr className="profile__hr" />
    <ProfileActiveProjects />
    <ProfileMessage userData={user} />
    {
      histories?.length > 0 &&
      <ProfileHistory histories={histories} />
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
