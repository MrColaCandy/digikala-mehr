import Layout from "@components/Layout";
import HistoryList from "./components/HistoryList"
import {useAuth} from "@components/hooks/useAuth";


const History = () => {
  const {user}=useAuth();
  return (
    <Layout>
      <HistoryList data={user.history || []} itemsPerPage={4}/>
    </Layout>
  )
}

export default History