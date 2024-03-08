import Layout from "@components/Layout";
import HistoryList from "./components/HistoryList"
import { useEffect, useState } from "react";
import {requestHistories} from "@services/http"

const History = () => {
  const [histories,setHistories]=useState([])
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(false);
  useEffect(() => {
    fetchHistories();
  }, []);
  if(loading)
  {
    return <div>Loading</div>
  }
  if(error)
  {
    return <div>Error</div>;
  }
  return (
    <Layout>
      <HistoryList histories={histories}  itemsPerPage={5} />
    </Layout>
  )
  async function fetchHistories() {
    try {
      const histories = await requestHistories();
      setHistories(histories);
    } catch (error) {
      setHistories([]);
      setError(true);
    } finally {
      setLoading(false);
    }
  }
}

export default History