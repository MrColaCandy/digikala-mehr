import HistoryItem from "@components/HistoryItem";
import { useNavigate } from "react-router-dom"
import { serialize } from "cookie";
import './style.css'
import { useEffect } from "react";



function ProfileHistory({histories}) {
  const navigate = useNavigate();

  function handleSeeAllHistoryClick() {
    const address = window.location.href.split("/");
    document.cookie = serialize("previousPage", `/${address[address.length - 1]}`);
    navigate("/history")
  }
 useEffect(()=>{
  console.log(histories);
 },[])
  return (
    <section className="profileHistory">

      <div className="profileHistory__header">
        <span className="profileHistory__headerTitle">تاریخچه پرداخت‌های شما</span>
        <span className="profileHistory__sorting">مرتب شده براساس تاریخ</span>
      </div>
      <hr className="profileHistory__hr"/>
      <div className="profileHistory__tableHeader">
        <div className="profileHistory__tableHeaderDate" >تاریخ</div>
        <div className="profileHistory__tableHeaderState">وضعیت</div>
        <div className="profileHistory__tableHeaderTitle" >پروژه</div>
        <div className="profileHistory__tableHeaderPrice" >مبلغ</div>
      </div>
      
      <ul className="profileHistory__table">
        {
          histories?.slice(0, 5).map(history => {
            return <HistoryItem key={history.id} history={history} />
          })
        }
      </ul>



      <button onClick={handleSeeAllHistoryClick} className="profileHistory__button">مشاهده تمام پرداخت‌ها</button>
    </section>
  )
}


export default ProfileHistory;