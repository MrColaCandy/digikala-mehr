import { Link, generatePath } from "react-router-dom";
import { useEffect, useState } from "react";

import Layout from "@components/Layout";
import Slider from "@components/Slider";
import Card from "@components/Card";
import Button from "@components/Button";
import { requestAllProjects } from "@services/http";

import "./style.css";

const ChoosePlan = () => {
  const [projects, setProjects] = useState([]);

  async function getAllProjectsOnLoad() {
    try {
      const projects = await requestAllProjects();
      setProjects(projects);
    } catch (error) {
      setProjects([]);
      console.log(error);
    }
  }

  useEffect(() => {
    getAllProjectsOnLoad();
  }, []);

  return (
    <Layout>
      <section className="choosePlan">
        <div className="choosePlan__header">
          <div className="choosePlan__currentPhase">مرحله ۲ از ۳</div>
          <div className="choosePlan__headerTextGreen">
            از اینکه تصمیم گرفتی با ما همراه باشی ازت ممنونیم.
          </div>
          <div className="choosePlan__headerText">
            حالا تو این مرحله باید انتخاب کنی کمک‌ات صرف چه{" "}
            <span className="choosePlane_TextGreen">کار خیری</span> بشه.
          </div>
        </div>
      </section>
      <Slider
        slideHeight={420}
        slideWidth={360}
        viewPortWidth={390 * 2.5}
        gap={40}
      >
        {projects?.map((project) => {
          return (
            <Card
              key={project.id}
              project={project}
              cardButton={
                <Button
                  as={Link}
                  to={generatePath("/choose-price/:projectId", {
                    projectId: project.id,
                  })}
                  width={350}
                  text={"انتخاب کنید"}
                />
              }
            />
          );
        })}
      </Slider>
    </Layout>
  );
};

export default ChoosePlan;
