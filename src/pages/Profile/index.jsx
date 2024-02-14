import NavBar from "@components/NavBar";
import ProfileAndStatus from "./components/ProfileAndStatus";
import TnxActiveProject from "./components/TnxActiveProject"
import TnxKnowMore from "./components/TnxKnowMore"
import TnxSuccesfullJoin from "./components/TnxSuccesfullJoin"
import PaymentHistory from "./components/PaymentHistory";
import ProjectSlider from "@components/ProjectSlider"
import "./style.css"

function Profile() {
  return (
    <div className="container-profile">
      <NavBar />
      <main className="main-profile">
        <ProfileAndStatus />
        <TnxActiveProject />
        <TnxKnowMore />
        <TnxSuccesfullJoin />
        <PaymentHistory />
        <p class="chooseProjectText">اینجا می‌تونی از بین پروژه‌های مختلف یکیو برای شروع انتخاب کنی</p>
        <ProjectSlider />
      </main>
    </div >
  );
}

export default Profile;
