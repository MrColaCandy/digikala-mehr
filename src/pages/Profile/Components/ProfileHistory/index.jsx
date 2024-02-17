import ProfileHistoryItem from "./ProfileHistoryItem";
import './style.css'



function ProfileHistory() {
  return (
    <section className="profileHistory">

      <div className="profileHistory__header">
        <span className="profileHistory__headerTitle">تاریخچه پرداخت‌های شما</span>
        <span className="profileHistory__sorting">مرتب شده براساس تاریخ</span>
      </div>
      <div className="profileHistory__tableHeader">
        <div className="profileHistory__tableHeaderDate" >تاریخ</div>
        <div className="profileHistory__tableHeaderState">وضعیت</div>
        <div className="profileHistory__tableHeaderTitle" >پروژه</div>
        <div className="profileHistory__tableHeaderPrice" >مبلغ</div>
      </div>

      <ul className="profileHistory__table">
        <ProfileHistoryItem/>
        <ProfileHistoryItem/>
        <ProfileHistoryItem/>
        <ProfileHistoryItem/>
        <ProfileHistoryItem/>
        <ProfileHistoryItem/>
        <ProfileHistoryItem/>
        <ProfileHistoryItem/>
        

      </ul>



      <button className="profileHistory__button">مشاهده تمام پرداخت‌ها</button>
    </section>
  )
}


export default ProfileHistory;