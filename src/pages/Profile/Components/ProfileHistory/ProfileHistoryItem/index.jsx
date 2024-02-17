import { FaRegCircleCheck } from "react-icons/fa6";
import "./style.css"
const ProfileHistoryItem = () => {
    return (
        <li className="profileHistory__item">
            <div className="profileHistory__itemDate">اردیبهشت ۱۴۰۲</div>
            <div className="profileHistory__itemState profileHistory__successState">
                <i className="fi fi-rs-check-circle "></i>
                <FaRegCircleCheck className="profileHistory__icon" />

                موفق
            </div>
            <div className="profileHistory__itemTitle">تهیه مخزن آب برای حیات وحش گناباد</div>
            <div className="profileHistory__itemPrice">
                <span className="profileHistory__itemPrice--dynamicNumberCost">۲۰۰.۰۰۰</span>
                <span className="profileHistory__itemPrice--staticTomanText">تومان</span>
            </div>
        </li>
    )
}

export default ProfileHistoryItem