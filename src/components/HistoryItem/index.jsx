import { FaRegCircleCheck } from "react-icons/fa6";
import usePersian from "@components/hooks/usePersian";
import "./style.css"
const HistoryItem = ({history}) => {
    const{convert,addCommas}= usePersian();
    return (
        <li className="profileHistory__item">
            <div className="profileHistory__itemDate">{history?.date}</div>
            <div className="profileHistory__itemState profileHistory__successState">
                <i className="fi fi-rs-check-circle "></i>
                <FaRegCircleCheck className="profileHistory__icon" />

                موفق
            </div>
            <div className="profileHistory__itemTitle">ورزشگاه</div>
            <div className="profileHistory__itemPrice">
                <span className="profileHistory__itemPrice--dynamicNumberCost">{history? convert(addCommas(history?.price)):0}</span>
                <span className="profileHistory__itemPrice--staticTomanText">تومان</span>
            </div>
        </li>
    )
}

export default HistoryItem