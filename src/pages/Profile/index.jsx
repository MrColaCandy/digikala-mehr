import ProfileAndStatus from "./components/ProfileAndStatus";
import TnxActiveProject from "./components/TnxActiveProject"
import TnxKnowMore from "./components/TnxKnowMore"
import TnxSuccessfulJoin from "./Components/TnxSuccessfulJoin"
import PaymentHistory from "./components/PaymentHistory";
import "./style.css"
import Layout from "@components/Layout";

function Profile() {
  return (
    <Layout>
      <main className="main-profile">
        <ProfileAndStatus />
        <TnxActiveProject />
        <TnxKnowMore />
        <TnxSuccessfulJoin />
        <PaymentHistory />
        <p className="chooseProjectText">اینجا می‌تونی از بین پروژه‌های مختلف یکیو برای شروع انتخاب کنی</p>
      </main>
    </Layout>

  );
}

export default Profile;
