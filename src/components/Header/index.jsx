import { BsBoxArrowInLeft } from "react-icons/bs";
import FillInside_digiMehr_logo_i from "@assets/decorations/FillInside_digiMehr_logo_i.svg";
import Digikala_Mehr_Branding from "@assets/decorations/Digikala_Mehr_Branding.svg";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import DropDown from "@components/DropDown";
import Loader from "../Loader";
import { useEffect, useRef, useState } from "react";

function Header() {
  const { isLoggedIn, isLoading } = useAuth();
  const navigate = useNavigate();
  function handleSignInButtonClick() {
    navigate("/login");
  }

  function handleLogoClick() {
    navigate("/")

  }
  const headerRef = useRef(null);
  const [stick,setStick]=useState(true);
  useEffect(() => {
  console.log(headerRef.current);
  if(!headerRef)return;
  window.addEventListener("scroll",()=>{
    console.log(headerRef.current.clientHeight,window.scrollY);
    if(headerRef.current.clientHeight <=window.scrollY)
    {
      setStick(true);
    }
    else
    {
      setStick(false)
    }
  })
  }, [headerRef])
  function getLoginButton() {
    if (!isLoggedIn && !isLoading) {
      return (
        <button onClick={handleSignInButtonClick} className="signInProfileBtn">
          <BsBoxArrowInLeft className="signInProfileBtn__signInIcon" />
          <span className="signInProfileBtn__text">پروفایل I ثبت نام</span>
        </button>
      )
    }
    if (isLoading) {
      return (
        <button onClick={handleSignInButtonClick} className="signInProfileBtn">
          <Loader scale={0.3} />
        </button>
      )
    }

    if (isLoggedIn && !isLoading) {
      return (
        <DropDown />
      )
    }
  }
  return (
    <header ref={headerRef} className={`${stick?"header stick":"header"}`}>
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
      {
        getLoginButton()
      }

    </section>
    </header>
  );
}

export default Header;


