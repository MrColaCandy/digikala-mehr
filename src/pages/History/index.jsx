import Layout from "@components/Layout";
import HistoryList from "./components/HistoryList"
import { useEffect, useState } from "react";
import {requestHistories} from "@services/http"

const History = () => {
  const [histories,setHistories]=useState([])
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(false);
  useEffect(() => {
    setLoading(true)
    requestHistories()
    .then(setHistories(histories))
    .catch(setError(true))
    .finally(setLoading(false));
  }, []);
  if(loading)
  {
    return <div>Loading . . .</div>
  }
  if(error)
  {
    return null;
  }
  return (
    <Layout>
      <HistoryList histories={histories}  itemsPerPage={5} />
    </Layout>
  )
}

export default History