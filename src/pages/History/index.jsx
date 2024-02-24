import Layout from "@components/Layout";
import HistoryList from "./components/HistoryList"
import {useProject} from "@components/hooks/useProject";


const History = () => {
  const {userProjects}=useProject();
  return (
    <Layout>
      <HistoryList data={userProjects} itemsPerPage={5}/>
    </Layout>
  )
}

export default History