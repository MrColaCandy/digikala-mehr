import Layout from "@components/Layout"
import PriceForm from "@components/PriceFrom";
import { useProject } from "@components/hooks/useProject";
import { parse, serialize } from "cookie";
import { useNavigate } from "react-router-dom"
import "./style.css"
const ChoosePrice = () => {
  const { addProject,setActiveProject} = useProject()
  const navigate = useNavigate()
   
  

  async function handleSubmit(e) {
    
    const value = e.target["price"].value.trim();
    if (!value || value === "") return;
    const id=parse(document.cookie).projectId ;
    try {
      await addProject({ id: id, price: value })
      setActiveProject(true)
      document.cookie = serialize("newProject", "create");
      navigate("/profile")
    } catch (error) {
      console.log("Failed to add project. com:ChoosePrice. id: " + id + ". error: " + error);
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
