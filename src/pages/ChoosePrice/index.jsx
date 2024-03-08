import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Layout from "@components/Layout";
import PriceForm from "@components/PriceFrom";
import { requestProject, requestCreateHelp } from "@services/http";

import "./style.css";

const ChoosePrice = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState();

  useEffect(() => {
    requestProject({projectId}).then((data) => {
      setProject(data);
    });
  }, [projectId]);

  async function handleSubmit(e) {
    const rawValue=e.target["price"].value;

    const value = rawValue.trim();
    if (!value || value === "") {
      return;
    }

    await requestCreateHelp({ projectId: project.id, price: value });
    navigate(`/profile?status=created`);
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
