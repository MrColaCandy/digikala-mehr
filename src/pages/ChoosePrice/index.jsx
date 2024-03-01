import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Layout from "@components/Layout";
import PriceForm from "@components/PriceFrom";
import { getSingleProject, requestAddProject } from "@services/http";

import "./style.css";

const ChoosePrice = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState();

  useEffect(() => {
    getSingleProject(projectId).then((data) => {
      console.log({ data });
      setProject(data);
    });
  }, [projectId]);

  async function handleSubmit(e) {
    const { target: { price: { value: rawPrice } = {} } = {} } = e;

    const value = rawPrice.trim();
    if (!value || value === "") {
      return;
    }

    await requestAddProject({ projectId: project.id, price: value });
    navigate(`/profile?status=joined&projectId=${project.id}&projectName=${project.topic}&price=${value}`);
  }

  if (!project) {
    return null;
  }

  return (
    <Layout>
      <PriceForm project={project} onSubmit={handleSubmit} />
    </Layout>
  );
};

export default ChoosePrice;
