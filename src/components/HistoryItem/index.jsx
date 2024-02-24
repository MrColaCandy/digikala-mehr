import { FaRegCircleCheck } from "react-icons/fa6";
import usePersian from "@components/hooks/usePersian";
import "./style.css"
const HistoryItem = ({ history }) => {
    const { convert, addCommas } = usePersian();
    return (
        <li className="history__item">
            <div className="history__itemDate">{history ? getDate(new Date(history.date)) : 0}</div>
            {
                history?.state === "next" &&
                <div className="history__itemState history__nextState">
                    پرداخت بعدی
                </div>
            }
            {
                history?.state ==="success" &&
                <div className="history__itemState history__successState">
                <i className="fi fi-rs-check-circle "></i>
                <FaRegCircleCheck className="history__icon" />
                موفق
               </div>
            }
            <div className="history__itemTitle">{history?.topic}</div>
            <div className="history__itemPrice">
                <span className="history__itemPrice--dynamicNumberCost">{history ? convert(addCommas(history?.price)) : 0}</span>
                <span className="history__itemPrice--staticTomanText">تومان</span>
            </div>
        </li>
    )
}

export default HistoryItem

function getDate(date) {

    let options = { month: 'long',year:"numeric" };
    return date.toLocaleDateString('fa-IR', options).split(" ").reverse().join(" ");
}