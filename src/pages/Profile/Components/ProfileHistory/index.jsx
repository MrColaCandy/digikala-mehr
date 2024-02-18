import ProfileHistoryItem from "./ProfileHistoryItem";
import './style.css'



function ProfileHistory({ user }) {
 
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
        {
            user?.history.map(history=>{
              return <ProfileHistoryItem key={history.id} history={history}/>
            })
        }
      </ul>



      <button className="profileHistory__button">مشاهده تمام پرداخت‌ها</button>
    </section>
  )
}


export default ProfileHistory;