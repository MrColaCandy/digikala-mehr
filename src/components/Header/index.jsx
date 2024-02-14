import { BsBoxArrowInLeft } from "react-icons/bs";
import FillInside_digiMehr_logo_i from "@assets/decorations/FillInside_digiMehr_logo_i.svg";
import Digikala_Mehr_Branding from "@assets/decorations/Digikala_Mehr_Branding.svg";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@components/AuthContext/context";
import DropDown from "@components/DropDown";

function Header() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  function handleSignInButtonClick() {
    navigate("/login");
  }

  function getLoginButton() {
    return !isLoggedIn ? (
      <button onClick={handleSignInButtonClick} className="signInProfileBtn">
        <BsBoxArrowInLeft className="signInProfileBtn__signInIcon" />
        <span className="signInProfileBtn__text">پروفایل I ثبت نام</span>
      </button>
    ) : (
      <DropDown />
    );
  }
  return (
    <nav className="header">
      <div className=" digiMehrLogoTitleWrapper">
        <div className="digiMehrLogoWrapper__wrapperLogo">
          <img
            className="digiMehrLogoWrapper__insideLogo"
            src={FillInside_digiMehr_logo_i}
            alt="digiLogo"
          />
        </div>
        <img
          className="digiMehrLogoWrapper__titleName"
          src={Digikala_Mehr_Branding}
          alt="digiTitleName"
        />
      </div>

      {getLoginButton()}
    </nav>
  );
}

export default Header;
