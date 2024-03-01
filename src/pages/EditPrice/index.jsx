import Layout from "@components/Layout"
import PriceForm from "@components/PriceFrom";
import { requestUpdateProject } from "@services/http"
import { parse, serialize } from "cookie";
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "@contexts/auth";
const EditPrice = () => {

    const navigate = useNavigate();
    const {token}=useAuthContext()
    async function handleSubmit(e)
    {
      const value=e.target["price"].value.trim();
      e.preventDefault()
      const editing=JSON.parse(parse(document.cookie).editing)
      if(!editing)
      {
        navigate("/")
        return;
      }
      try {
          
          await requestUpdateProject({oldProject:editing.historyId,newProject:editing.projectId,price:value,token:token})

          document.cookie=serialize("newProject","edit");
          navigate("/profile")
      } catch (error) {
          console.log("Failed to update project " +editing.historyId+ ". com:EditPriceForm. error: "+error.message);
         
      }
     
    }
  return (
    <Layout>
        <PriceForm onSubmit={handleSubmit}/>
    </Layout>
  )
}

export default EditPrice