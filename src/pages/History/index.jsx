import Layout from "@components/Layout";
import HistoryList from "./components/HistoryList"


const History = () => {

  return (
    <Layout>
      <HistoryList  itemsPerPage={5} />
    </Layout>
  )
}

export default History