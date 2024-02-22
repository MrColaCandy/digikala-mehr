import Layout from "@components/Layout";
import { useAuth } from "@components/hooks/useAuth";
import Slider from "@components/Slider"
import ProfileActiveProjects from "./Components/ProfileActiveProjects";
import ProfileUserAvatar from "./Components/ProfileUserAvatar";
import HorizontalLine from "../../components/HorizontalLine";
import ProfileHistory from "./Components/ProfileHistory";
import { useNavigate } from "react-router-dom"
import Card from "@components/Card";
import Button from "@components/Button";
import ProfileMessage from "./Components/ProfileMessage";
import "./style.css"
import { useEffect, useState } from "react";
import { serialize } from "cookie";
import { requestAllProjects } from "@components/requests";


function Profile() {
  const navigate = useNavigate();
  const { userData } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  function handleChooseProjectClick(project) {
    document.cookie = serialize("project", project.id);
    navigate("/choose-price");

  }

  useEffect(() => {
    async function getProjects() {
      setIsLoading(true);

      try {
        const { data } = await requestAllProjects();
        console.log(data);
        setProjects([...data]);
      } catch (error) {
        setProjects(null);
      }
      finally {
        setIsLoading(false);
      }

    }
    getProjects();
  }, [])

  return (
    <Layout>
      <ProfileUserAvatar data={userData} />
      <HorizontalLine space={16} width={1194} />
      <ProfileActiveProjects data={userData} />
      {
        userData?.help_history?.length > 0 &&
        <ProfileMessage data={userData} />
      }
      {
        userData?.help_history?.length > 0 &&
        <ProfileHistory data={userData} />
      }

      <p className="profile__sliderTitle">اینجا می‌تونی از بین پروژه‌های مختلف یکیو برای شروع انتخاب کنی</p>
      <Slider isLoading={isLoading} slideWidth={390} slideHeight={450} viewPortWidth={390 * 3.5} gap={40}>
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
    </Layout>

  );
}

export default Profile;
