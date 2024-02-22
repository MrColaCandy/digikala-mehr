import {useState, useEffect, useRef} from 'react';
import {FaRegUser, FaSortDown} from 'react-icons/fa';
import {IoExitOutline} from "react-icons/io5";
import {PiClipboardTextThin} from "react-icons/pi";
import Toman from "@assets/icons/Toman.svg"
import { useAuth } from '../hooks/useAuth';
import './style.css';
import {useNavigate} from "react-router-dom"
import avatarPlaceHolder from "@assets/decorations/user-image-placeHolder.png"
import { serialize } from 'cookie';
import usePersian from "@components/hooks/usePersian"
const DropDown = () => {
    const {convert,addCommas}=usePersian()
    const {logout, userData}=useAuth();
    useEffect(()=>{
        console.log(userData);
    },[])
    const navigate=useNavigate();
    function handleLogoutClick(){
        logout();
        navigate("/")
        window.location.reload();
    }
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
    function handleUsernameClick()
    {
        navigate("/profile")
    }
    function handleHistoryClick()
    {
        const address=window.location.href.split("/");
        document.cookie=serialize("previousPage",`/${address[address.length-1]}`);
        navigate("/history");
        
    }
    function getHelpsSum()
    {
       if(!userData || !userData?.help_history || userData?.help_history<=0)return convert("0")
       return convert(addCommas(userData?.help_history.reduce(function (acc, obj) { return acc + obj.price}, 0)));
    }
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
                               <img className='img-user' width={40} height={40} src={ `http://127.0.0.1:8000/${userData?.user?.profilePhoto}` || avatarPlaceHolder} alt="avatar"/>
                                <div onClick={handleUsernameClick} className="account-id"><a href="#"><span>{userData?.user?.firstName}</span></a><p>جمع نیکوکاری های
                                    شما</p><span>{getHelpsSum()}<img src={Toman} alt="تومان"/></span>
                                </div>
                            </li>
                            <div className="last-donate">
                                <div>
                                    <PiClipboardTextThin className="dropdown-icons"/>
                                </div>
                                <div onClick={handleHistoryClick} className="last-donate-description">
                                    <li className="dropdown-li">
                                        <div><a href="#">کمک های پیشین من</a></div>
                                    </li>
                                </div>
                            </div>
                            <div className="exit">
                                <IoExitOutline className="dropdown-icons"/>
                                <div className="exit-description">
                                    <li className="dropdown-li"><a onClick={handleLogoutClick} href="#">خروج</a></li>
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
