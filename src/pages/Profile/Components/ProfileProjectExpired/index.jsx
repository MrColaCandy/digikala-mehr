import { useNavigate } from "react-router-dom";
import organLogo from "@assets/decorations/organLogo.svg";
import {requestHelpExtend} from "@services/http"
import "./style.css";

function ProfileProjectExpired({ activeProject }) {
  const navigate = useNavigate();

  async function handleExtendContributionClick() {
    try {
      await requestHelpExtend();
      navigate("/profile");
    } catch (error) {
      navigate("/");
      console.log(
        "Failed to extend activeProject. id: " +
          activeProject?.id +
          ". com:ProfileProjectExpired. error: " +
          error.message
      );
    }
  }
  return (
    <div className="profileProjectExpired">
      <div className="profileProjectExpired__info">
        <img
          src={organLogo}
          className="profileProjectExpired__infoLogo"
          alt="employer-logo"
        />
        <div className="profileProjectExpired__infoText">
          <span className="profileProjectExpired__infoTitle">
            {activeProject?.project?.topic}
          </span>
          <span className="profileProjectExpired__infoEmployer">
            {activeProject?.project?.institute?.name}
          </span>
        </div>

        <p className="profileProjectExpired__box">دوره به پایان رسید</p>
      </div>
      <button
        onClick={handleExtendContributionClick}
        className="profileProjectExpired__button"
      >
        تمدید مشارکت
      </button>
    </div>
  );
}

export default ProfileProjectExpired;
