import Layout from "@components/Layout";
import HistoryList from "./components/HistoryList"
import {useAuth} from "@components/hooks/useAuth";


const History = () => {
  const {userProjects}=useAuth();
  return (
    <Layout>
      <HistoryList data={userProjects || []} itemsPerPage={4}/>
    </Layout>
  )
}

export default History