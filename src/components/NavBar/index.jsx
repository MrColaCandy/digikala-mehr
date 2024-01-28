import { BsBoxArrowInLeft } from "react-icons/bs";
import Fillinside_digimehr_logo_i from '@assets/decorations/Fillinside_digimehr_logo_i.svg'
import Digikala_Mehr_Brandingasa from '@assets/decorations/Digikala_Mehr_Brandingasa.svg'
import './style.css'

function NavBar (){
    return (
        <nav className="navBar">
        <div className=" digiMehrLogoTitleWrapper">
          <div className="digiMehrLogoWrapper__wrapperLogo">
            <img className="digiMehrLogoWrapper__insideLogo" src={Fillinside_digimehr_logo_i}
              alt="digiLogo"/>
          </div>
          <img className="digiMehrLogoWrapper__titleName" src={Digikala_Mehr_Brandingasa}
            alt="digiTitleName"/>
        </div>
  
        <button className="signInProfileBtn">
          <BsBoxArrowInLeft className="signInProfileBtn__signInIcon" />
          <span className="signInProfileBtn__text">پروفایل I ثبت نام</span>
        </button>
      </nav>
    )
}


export default NavBar ;