import ProfileActiveProjects from "./Components/ProfileActiveProjects";

import Layout from "@components/Layout";
import ProfileContributionMessage from "./Components/ProfileContributionMessage";
import ProfileNewProjectMessage from "./Components/ProfileNewProjectMessage";
import ProfileUserAvatar from "./Components/ProfileUserAvatar";
import HorizontalLine from "../../components/HorizontalLine";
import ProfileHistory from "./Components/ProfileHistory";
import Slider from "@components/Slider"
import { projects } from "../../../api/data";
import Card from "@components/Card";
import Button from "@components/Button";
import "./style.css"
const fakeUser={
  name:"سارا",
  currentProject:{
    title:"مخزن آب برای حیات وحش گناباد",
    timeSpan:6,
    price:200000,
  }
}
function Profile() {
  return (
    <Layout>
       <ProfileUserAvatar/>
       <HorizontalLine space={16} width={1194}/>
        <ProfileActiveProjects />
         <ProfileContributionMessage user={fakeUser} total={{contribution:67,fund:94}}/>
         <ProfileNewProjectMessage user={fakeUser}/>
        <ProfileHistory />
        <p className="profile__sliderTitle">اینجا می‌تونی از بین پروژه‌های مختلف یکیو برای شروع انتخاب کنی</p>
        <Slider slideWidth={390} slideHeight={450} viewPortWidth={390 * 3.5} gap={40}>
        {
          projects.map((project)=>{
            return <Card
            className={"home__card"}
            key={project.id} 
            id={project.id}
            description={project.description}
            title={project.title}
            employerLogo={project.employerLogo}
            employerName={project.employerName}
            image={project.image}
            textBoxVariant={0}
            cardButton={
               <Button onClick={()=>{}} variant="outlined" text={"انتخاب کنید"}/>
            }
            />

          })
        }
      </Slider>
    </Layout>

  );
}

export default Profile;
