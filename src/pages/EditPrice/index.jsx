import Layout from "@components/Layout"
import EditHeader from "@components/EditHeader"
import EditPriceHeader from "./components/EditPriceHeader"
import {useAuth} from "@components/hooks/useAuth";
import EditPriceForm from "./components/EditPriceForm";
const EditPrice = () => {
    const {user,setUser}=useAuth();
  return (
    <Layout>
        <EditHeader/>
        <EditPriceHeader user={user} setUser={setUser}/>
        <EditPriceForm/>
    </Layout>
  )
}

export default EditPrice