import Layout from "@components/Layout";
import HistoryList from "./components/HistoryList"
import { useProject } from "@components/hooks/useProject";
import { useEffect, useState } from "react";


const History = () => {
  const { getHistories } = useProject();
  const [histories, setHistories] = useState([])
  async function getHistoriesOnLoad() {
    try {
      const histories = await getHistories();
      setHistories(histories)
    } catch (error) {
      setHistories([]);
    }
  }

  useEffect(() => { 
    getHistoriesOnLoad() 
  }, [])
  return (
    <Layout>
      <HistoryList data={histories} itemsPerPage={5} />
    </Layout>
  )
}

export default History