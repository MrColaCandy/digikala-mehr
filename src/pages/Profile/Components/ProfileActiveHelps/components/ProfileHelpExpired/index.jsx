import { useNavigate } from "react-router-dom";
import organLogo from "@assets/decorations/organLogo.svg";
import {requestHelpExtend} from "@services/http"
import "./style.css";

function ProfileHelpExpired({ activeProject }) {
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
          ". com:ProfileHelpExpired. error: " +
          error.message
      );
    }
  }
  return (
    <div className="profileHelpExpired">
      <div className="profileHelpExpired__info">
        <img
          src={organLogo}
          className="profileHelpExpired__infoLogo"
          alt="employer-logo"
        />
        <div className="profileHelpExpired__infoText">
          <span className="profileHelpExpired__infoTitle">
            {activeProject?.project?.topic}
          </span>
          <span className="profileHelpExpired__infoEmployer">
            {activeProject?.project?.institute?.name}
          </span>
        </div>

        <p className="profileHelpExpired__box">دوره به پایان رسید</p>
      </div>
      <button
        onClick={handleExtendContributionClick}
        className="profileHelpExpired__button"
      >
        تمدید مشارکت
      </button>
    </div>
  );
}

export default ProfileHelpExpired;
