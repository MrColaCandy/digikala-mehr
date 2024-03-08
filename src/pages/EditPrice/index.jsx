import Layout from "@components/Layout"
import PriceForm from "@components/PriceFrom";
import { requestEditHelp } from "@services/http"
import { useNavigate, useParams } from "react-router-dom"
const EditPrice = () => {

    const navigate = useNavigate();

    const {projectId,helpId}=useParams();
    async function handleSubmit(e)
    {
      e.preventDefault()
      const value=e.target["price"].value.trim();

      if(!projectId)
      {
        navigate("/")
        return;
      }
      try {
          
        await requestEditHelp({helpId,projectId,price:value})
        navigate("/profile?status=edited")
      } catch (error) {
          console.log("Failed to update project " +helpId+ ". com:EditPriceForm. error: "+error.message);
         
      }
     
    }
  return (
    <Layout>
        <PriceForm onSubmit={handleSubmit}/>
    </Layout>
  )
}

export default EditPrice