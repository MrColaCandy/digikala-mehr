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



function Profile() {

  const navigate = useNavigate();
  const { userData, userProjects, projects } = useProject();


  function handleChooseProjectClick(project) {
    document.cookie = serialize("projectId", project.id);
    navigate("/choose-price");

  }



  return (
    <Layout>
      <ProfileUserAvatar data={userData} />
      <hr className="profile__hr"/>
      <ProfileActiveProjects />
      <ProfileMessage data={userData} />
      {
        userProjects?.length > 0 &&
        <ProfileHistory data={userData} />
      }
      {
        userProjects?.filter(p=>p.state==="next")?.length === 0 &&
        <>
          <p className="profile__sliderTitle">اینجا می‌تونی از بین پروژه‌های مختلف یکیو برای شروع انتخاب کنی</p>
          <Slider slideWidth={390} slideHeight={450} viewPortWidth={1280} gap={40}>
            {
              projects?.filter(p => !p.taken)?.map((project) => {
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
