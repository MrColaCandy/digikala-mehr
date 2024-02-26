import Layout from "@components/Layout"
import PriceForm from "@components/PriceFrom";
import { useProject } from "@components/hooks/useProject";
import { parse, serialize } from "cookie";
import {  useState } from "react";
import { useNavigate } from "react-router-dom"
const ChoosePrice = () => {
  const { addProject,setActiveProject,getActiveProject  } = useProject()
  const navigate = useNavigate()
  const [projectId] = useState(parse(document.cookie).projectId || null)
   
 

  async function handleSubmit(e) {

    const value = e.target["price"].value.trim();
    if (!value || value === "") return;

    try {
      await addProject({ id: projectId, price: value })
      const project= await getActiveProject();
      setActiveProject(project)
      document.cookie = serialize("newProject", "create");
      navigate("/profile")
    } catch (error) {
      console.log("Failed to add project. com:ChoosePrice. id: " + projectId + ". error: " + error.message);
      navigate("/")
    }

  }
  return (
    <Layout>
      <PriceForm onSubmit={handleSubmit} />
    </Layout>
  );
};

export default ChoosePrice;
