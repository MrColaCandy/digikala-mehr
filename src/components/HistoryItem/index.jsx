import { FaRegCircleCheck } from "react-icons/fa6";
import usePersian from "@components/hooks/usePersian";
import "./style.css"
import { useEffect } from "react";
const HistoryItem = ({ history }) => {
    const { convert, addCommas } = usePersian();
    useEffect(()=>{
      console.log({"his":history});
    },[])
    return (
        <li className="profileHistory__item">
            <div className="profileHistory__itemDate">{history ? getDate(new Date(history.date)) : 0}</div>
            {
                history?.state === "next" &&
                <div className="profileHistory__itemState profileHistory__nextState">
                    پرداخت بعدی
                </div>
            }
            {
                history?.state ==="success" &&
                <div className="profileHistory__itemState profileHistory__successState">
                <i className="fi fi-rs-check-circle "></i>
                <FaRegCircleCheck className="profileHistory__icon" />
                موفق
               </div>
            }
            <div className="profileHistory__itemTitle">{history?.topic}</div>
            <div className="profileHistory__itemPrice">
                <span className="profileHistory__itemPrice--dynamicNumberCost">{history ? convert(addCommas(history?.price)) : 0}</span>
                <span className="profileHistory__itemPrice--staticTomanText">تومان</span>
            </div>
        </li>
    )
}

export default HistoryItem

function getDate(date) {

    let options = { month: 'long',year:"numeric" };
    return date.toLocaleDateString('fa-IR', options).split(" ").reverse().join(" ");
}