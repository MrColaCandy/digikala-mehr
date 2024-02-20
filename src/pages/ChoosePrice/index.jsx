import Layout from "@components/Layout"
import ChoosePriceHeader from "./components/ChoosePriceHeader";
import ChoosePriceForm from "./components/ChoosePriceForm";
import {useAuth} from "@components/hooks/useAuth"

const ChoosePrice = () => {
  const {user}=useAuth();
  return (
    <Layout>
      <ChoosePriceHeader user={user}/>
      <ChoosePriceForm/>
    </Layout>
  );
};

export default ChoosePrice;
