import { useNavigate,NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { FaRegUser, FaSortDown } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import { CiViewList } from "react-icons/ci";

import Toman from "@assets/icons/Toman.svg";
import avatarPlaceHolder from "@assets/decorations/user-image-placeHolder.png";
import usePersian from "@components/hooks/usePersian";
import { BASE_URL } from "@configs/end-points";
import { useAuthContext } from "@contexts/auth";

import "./style.css";


const DropDown = () => {
  const { convert, addCommas } = usePersian();
  const { logout,user } = useAuthContext();
  const navigate = useNavigate();
  function handleLogoutClick(event) {
    event.preventDefault()
    logout();
    navigate("/");
  }
  
  const [open, setOpen] = useState(false);
  let menuRef = useRef();

  

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
  const toggleDropdown = () => {
    setOpen(!open);
  };

  let dropdownClassName = open
    ? "dropdown-container open"
    : "dropdown-container";
  function handleHistoryClick() {
    navigate("/history");
  }
 
  return (
    <div className="drop-container" ref={menuRef}>
      <div
        className={`${open ? "user-icon--open" : "user-icon"}`}
        onClick={toggleDropdown}
      >
        <FaRegUser size="20" className="FaRegUserStyle" />
        <FaSortDown size="16" className="FaSortDownStyle" />
      </div>
      <div className={dropdownClassName}>
        <div className="main-dropdown">
          <ul>
            <li className="dropdown-li">
              <img
                className="img-user"
                width={40}
                height={40}
                src={
                  user
                    ? `${BASE_URL}/${user?.profilePhoto}`
                    : avatarPlaceHolder
                }
                alt="avatar"
              />
              <div className="account-id">
                <NavLink to={"/profile"}>{user?.firstName}</NavLink>
                <p>جمع نیکوکاری های شما</p>
                <span>
                  {
                    convert(addCommas(user?.totalPrice))
                  }
                  <img src={Toman} alt="تومان" />
                </span>
              </div>
            </li>
            <div className="last-donate">
              <div>
                <CiViewList className="dropdown-icon" />
              </div>
              <div
                onClick={handleHistoryClick}
                className="last-donate-description"
              >
                <li className="dropdown-li">
                  <div>
                    <a href="#">کمک های پیشین من</a>
                  </div>
                </li>
              </div>
            </div>
            <div className="exit">
              <IoExitOutline className="dropdown-icon" />
              <div className="exit-description">
                <li className="dropdown-li">
                  <a onClick={handleLogoutClick}>
                    خروج
                  </a>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
