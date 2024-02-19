import Layout from "@components/Layout"
import EditPlanHeader from "./components/EditPlanHeader"
import EditPriceHeader from "./components/EditPriceHeader"
import {useAuth} from "@components/hooks/useAuth";
import EditPriceForm from "./components/EditPriceForm";
const EditPrice = () => {
    const {user,setUser}=useAuth();
  return (
    <Layout>
        <EditPlanHeader/>
        <EditPriceHeader user={user} setUser={setUser}/>
        <EditPriceForm/>
    </Layout>
  )
}

export default EditPrice