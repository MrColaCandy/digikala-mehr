import { BsBoxArrowInLeft } from "react-icons/bs";
import FillInside_digiMehr_logo_i from "@assets/decorations/FillInside_digiMehr_logo_i.svg";
import Digikala_Mehr_Branding from "@assets/decorations/Digikala_Mehr_Branding.svg";
import "./style.css";
import { useNavigate } from "react-router-dom";
import DropDown from "@components/DropDown";
import { useEffect, useState } from "react";
import { useAuthContext } from "@contexts/auth";

function Header() {
  const { isLoggedIn } = useAuthContext();
  const navigate = useNavigate();
  function handleSignInButtonClick() {
    navigate("/login");
  }

  function handleLogoClick() {
    navigate("/")
  }
  const [stick, setStick] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {

      if (70 < window.scrollY) {
        setStick(true);
      }
      else {
        setStick(false)
      }
    })
  }, [])

  return (
    <header className={`${stick ? "header stick" : "header"}`}>
      <section className="header__content">
        <div onClick={handleLogoClick} className=" digiMehrLogoTitleWrapper">
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
        <div className="header__button">
          {
            isLoggedIn &&
            <DropDown />
          }
          {
            !isLoggedIn &&
            <button onClick={handleSignInButtonClick} className="signInProfileBtn">
              <BsBoxArrowInLeft className="signInProfileBtn__signInIcon" />
              <span className="signInProfileBtn__text">پروفایل I ثبت نام</span>
            </button>
          }
        </div>
      </section>
    </header>
  );
}

export default Header;


