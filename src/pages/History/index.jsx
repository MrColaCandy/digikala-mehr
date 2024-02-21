import Layout from "@components/Layout";
import HistoryList from "./components/HistoryList"
import {useAuth} from "@components/hooks/useAuth";


const History = () => {
  const {userData}=useAuth();
  return (
    <Layout>
      <HistoryList data={userData?.help_history || []} itemsPerPage={4}/>
    </Layout>
  )
}

export default History