import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import Layout from "@components/Layout";
import Slider from "@components/Slider";
import Card from "@components/Card";
import Button from "@components/Button";
import { useAuthContext } from "@contexts/auth";
import { requestProjectsStats } from "@services/http";
import { requestActiveHelp, requestAllProjects, requestHistories } from '@services/http';

import ProfileActiveHelps from "./Components/ProfileActiveHelps";
import ProfileUserAvatar from "./Components/ProfileUserAvatar";
import ProfileHistory from "./Components/ProfileHistory";
import ProfileMessage from "./Components/ProfileMessage";

import "./style.css";

function Profile() {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const [activeHelp, setActiveHelp] = useState();
  const [allProjects, setAllProjects] = useState();
  const [histories, setHistories] = useState();
  const [stats, setStats] = useState();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false)

  const [params] = useSearchParams()



  function handleChooseProjectClick(project) {
    navigate(`/choose-price/${project.id}`);
  }

  useEffect(() => {
    const fetchData = async () => {

      setLoading(true)
      try {
        await fetchActiveHelp();
        await fetchAllProjects();
        await fetchHistories();
        await fetchStats();
      } catch (error) {
        setError(true);

      } finally {
        setLoading(false);
      }

    };

    fetchData();
  }, []);



  if (isLoading) {
    return <div>Loading</div>
  }

  if (error) {
    return <div>Error</div>
  }

  return (
    <Layout>
      <ProfileUserAvatar user={user} />
      <hr className="profile__hr" />
      <ProfileActiveHelps stats={stats} activeHelp={activeHelp} />
      <ProfileMessage user={user} status={params?.get("status")} stats={stats} activeHelp={activeHelp} />
      {histories?.length > 0 && <ProfileHistory histories={histories} />}
      {!activeHelp && (
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

  async function fetchStats() {
    try {
      const stats = await requestProjectsStats();
      setStats(stats);
    } catch (error) {
      setStats(null);
      setError(true);
    }
  }

  async function fetchHistories() {
    try {
      const histories = await requestHistories();
      setHistories(histories);
    } catch (error) {
      setHistories([]);
    }
  }

  async function fetchAllProjects() {
    try {
      const allProjects = await requestAllProjects();
      setAllProjects(allProjects);
    } catch (error) {
      setAllProjects([]);
      setError(true);
    }
  }

  async function fetchActiveHelp() {
    try {
      const activeHelp = await requestActiveHelp();
      setActiveHelp(activeHelp);

    } catch (error) {
      setActiveHelp(null)
      
    }
  }
}

export default Profile;
