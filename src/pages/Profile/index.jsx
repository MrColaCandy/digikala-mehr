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
import { useEffect, useState } from "react";



function Profile() {

  const navigate = useNavigate();
  const { getUser, getAllProjects, getHistories } = useProject();

  const [userData, setUserData] = useState(null);
  const [projects, setProjects] = useState([])
  const [histories, setHistories] = useState([])
  function handleChooseProjectClick(project) {
    document.cookie = serialize("projectId", project.id);
    navigate("/choose-price");

  }
  async function getHistoriesOnLoad() {
    try {
      const histories = await getHistories();
      setHistories(histories)
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
  async function getUserOnLoad() {
    try {
      const user = await getUser();
      setUserData(user);
    } catch (error) {
      console.log(error);

    }
  }
  useEffect(() => {
    getHistoriesOnLoad()
    getUserOnLoad()
    getAllProjectsOnLoad()
  }, [])


  return (
    <Layout>
      <ProfileUserAvatar userData={userData} />
      <hr className="profile__hr" />
      <ProfileActiveProjects />
      <ProfileMessage userData={userData} />
      {
        histories?.length > 0 &&
        <ProfileHistory histories={histories} />
      }
      {
        histories?.length === 0 &&
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
