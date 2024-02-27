import Layout from "@components/Layout";
import HistoryList from "./components/HistoryList"
import { useProject } from "@components/hooks/useProject";


const History = () => {
  const { histories } = useProject();
  return (
    <Layout>
      <HistoryList data={histories} itemsPerPage={5} />
    </Layout>
  )
}

export default History