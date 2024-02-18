import { FaRegCircleCheck } from "react-icons/fa6";
import usePersianNumberConverter from "@components/hooks/usePersianNumberConverter";
import "./style.css"
const ProfileHistoryItem = ({history}) => {
    const{convert,addCommas}= usePersianNumberConverter();
    return (
        <li className="profileHistory__item">
            <div className="profileHistory__itemDate">{history?.date}</div>
            <div className="profileHistory__itemState profileHistory__successState">
                <i className="fi fi-rs-check-circle "></i>
                <FaRegCircleCheck className="profileHistory__icon" />

                موفق
            </div>
            <div className="profileHistory__itemTitle">{history?.name}</div>
            <div className="profileHistory__itemPrice">
                <span className="profileHistory__itemPrice--dynamicNumberCost">{history? convert(addCommas(history.cost)):0}</span>
                <span className="profileHistory__itemPrice--staticTomanText">تومان</span>
            </div>
        </li>
    )
}

export default ProfileHistoryItem