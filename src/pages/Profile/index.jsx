import { serialize } from "cookie";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import Layout from "@components/Layout";
import Slider from "@components/Slider";
import Card from "@components/Card";
import Button from "@components/Button";
import { useAuthContext } from "@contexts/auth/context";
import { requestActiveProject, requestTotalHelps,  requestAllProjects, requestHistories } from '@services/http';

import ProfileActiveProjects from "./Components/ProfileActiveProjects";
import ProfileUserAvatar from "./Components/ProfileUserAvatar";
import ProfileHistory from "./Components/ProfileHistory";
import ProfileMessage from "./Components/ProfileMessage";

import "./style.css";

function Profile() {
  const navigate = useNavigate();
  const {user}=useAuthContext();
  const [activeProject, setActiveProject] = useState();
  const [allProjects, setAllProjects] = useState();
  const [histories, setHistories] = useState();
  const [stats, setStats] = useState();
  const [isLoading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false)

  const [searchParams] = useSearchParams()

  const queryParams = {
    status: searchParams.get('status'),
    projectId: searchParams.get('projectId'),
    price: searchParams.get('price'),
    projectName: searchParams.get('projectName')
  }

  function handleChooseProjectClick(project) {
    document.cookie = serialize("projectId", project.id);
    navigate("/choose-price");
  }

  useEffect(() => {
    setLoading(true)
    Promise.all([
      requestActiveProject(),
      requestAllProjects(),
      requestHistories(),
      requestTotalHelps()
    ]).then((responses) => {
      const [ap, allProjects, history, statsResponse] = responses;
      setActiveProject(ap)
      setAllProjects(allProjects);
      setHistories(history)
      setStats(statsResponse)
    })
    .catch(() => {
      setHasError(true)
    })
    .finally(() => {
      setLoading(false)
    })  
  }, []);

  

  if(isLoading) {
    return <p>Loading</p>
  }

  if(hasError || !allProjects) {
    return null
  }

  return (
    <Layout>
      <ProfileUserAvatar user={user} />
      <hr className="profile__hr" />
      <ProfileActiveProjects stats={stats} />
      <ProfileMessage {...queryParams} stats={stats} activeProject={activeProject} />
      {histories?.length > 0 && <ProfileHistory histories={histories} />}
      {!activeProject && (
        <>
          <p className="profile__sliderTitle">
            اینجا می‌تونی از بین پروژه‌های مختلف یکیو برای شروع انتخاب کنی
          </p>
          <Slider
            slideWidth={390}
            slideHeight={450}
            viewPortWidth={1280}
            gap={40}
          >
            {allProjects?.map((project) => {
              return (
                <Card
                  key={project.id}
                  project={project}
                  cardButton={
                    <Button
                      onClick={() => {
                        handleChooseProjectClick(project);
                      }}
                      variant="outlined"
                      text={"انتخاب کنید"}
                    />
                  }
                />
              );
            })}
          </Slider>
        </>
      )}
    </Layout>
  );
}

export default Profile;
