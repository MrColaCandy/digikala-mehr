import {useState, useEffect, useRef} from 'react';
import {FaRegUser, FaSortDown} from 'react-icons/fa';
import {IoExitOutline} from "react-icons/io5";
import {PiClipboardTextThin} from "react-icons/pi";
import Toman from "@assets/icons/Toman.svg"
import './DropDown.css';


const DropDown = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    let menuRef = useRef()
    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setDropdownOpen(false)
            }
        }
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler)
        }
    }, []);
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    let dropdownClassName = isDropdownOpen ? "dropdown-container open" : "dropdown-container";

    return (
        <>
            <div className="drop-container" ref={menuRef}>
                <div className="user-icon" onClick={toggleDropdown}>
                    <FaRegUser size="20" className="FaRegUserStyle"/>
                    <FaSortDown  size="16" className="FaSortDownStyle"/>
                </div>
                <div className={dropdownClassName}>
                    <div className="main-dropdown">
                        <ul>
                            <li className="dropdown-li">
                                <div className='img-user'><img src="" alt=""/></div>
                                <div className="account-id"><a href="#"><span>User Name</span></a><p>جمع نیکوکاری های
                                    شما</p><span>00 <img src={Toman} alt="تومان"/></span>
                                </div>
                            </li>
                            <div className="last-donate">
                                <div>
                                    <PiClipboardTextThin className="dropdown-icons"/>
                                </div>
                                <div className="last-donate-description">
                                    <li className="dropdown-li">
                                        <div><a href="#">کمک های پیشین من</a></div>
                                    </li>
                                </div>
                            </div>
                            <div className="exit">
                                <IoExitOutline className="dropdown-icons"/>
                                <div className="exit-description">
                                    <li className="dropdown-li"><a href="#">خروج</a></li>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DropDown;
