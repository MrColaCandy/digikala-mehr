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


function Profile() {
  const navigate = useNavigate();
  const { user, setUser,availableProjects} = useAuth();
  function handleChooseProjectClick(project) {
    navigate("/choose-price");
    setUser({ ...user, currentProject: project })
    localStorage.setItem("user",JSON.stringify(user));

  }
 

  return (
    <Layout>
      <ProfileUserAvatar user={user} />
      <HorizontalLine space={16} width={1194} />
      <ProfileActiveProjects user={user} />
      {
        user?.projects.length > 0 &&
        <>
          <ProfileMessage user={user}/>
          <ProfileHistory user={user} />
        </>
      }
      
      <p className="profile__sliderTitle">اینجا می‌تونی از بین پروژه‌های مختلف یکیو برای شروع انتخاب کنی</p>
      <Slider slideWidth={390} slideHeight={450} viewPortWidth={390 * 3.5} gap={40}>
        {
          availableProjects.map((project) => {
            return <Card
              key={project.id}
              id={project.id}
              description={project.description}
              title={project.title}
              employerLogo={project.employerLogo}
              employerName={project.employerName}
              image={project.image}
              textBoxVariant={0}
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
