import { FaRegCircleCheck } from "react-icons/fa6";
import './style.css'



function PaymentHistory (){
    return(
        <section className="historyOfPayments">

        <header className="historyOfPayments__header">
          <span className="historyOfPayments__headerTitle">تاریخچه پرداخت‌های شما</span>
          <span className="historyOfPayments__headerDateSort">مرتب شده براساس تاریخ</span>
        </header>


        <section className="paymentsListWrapper">

          <header className="paymentsHeader">
            <div className="paymentsHeader__dateTitle">تاریخ</div>
            <div className="paymentsHeader__statusTitle">وضعیت</div>
            <div className="paymentsHeader__projectTitle">پروژه</div>
            <div className="paymentsHeader__costTitle">مبلغ</div>
          </header>

          <ul className="paymentsList">
            <li className="paymentsList__projectItem">
              <div className="paymentsList__itemDate">تیر ۱۴۰۲</div>
              <div className="paymentsList__itemStatus paymentsList__itemStatus--nextPayment">پرداخت بعدی</div>
              <div className="paymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div className="paymentsList__itemCost">
                <span className="paymentsList__itemCost--dynamicNumberCost">۲۰۰.۰۰۰</span>
                <span className="paymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

            <li className="paymentsList__projectItem">
              <div className="paymentsList__itemDate">خرداد ۱۴۰۲</div>
              <div className="paymentsList__itemStatus paymentsList__itemStatus--successful">
                <i className="fi fi-rs-check-circle "></i>
                <FaRegCircleCheck className="paymentsList__itemStatus--checkIcon" />

                موفق
              </div>
              <div className="paymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div className="paymentsList__itemCost">
                <span className="paymentsList__itemCost--dynamicNumberCost">۲۰۰.۰۰۰</span>
                <span className="paymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

            <li className="paymentsList__projectItem">
              <div className="paymentsList__itemDate">اردیبهشت ۱۴۰۲</div>
              <div className="paymentsList__itemStatus paymentsList__itemStatus--successful">
                <i className="fi fi-rs-check-circle "></i>
                <FaRegCircleCheck className="paymentsList__itemStatus--checkIcon" />

                موفق
              </div>
              <div className="paymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div className="paymentsList__itemCost">
                <span className="paymentsList__itemCost--dynamicNumberCost">۲۰۰.۰۰۰</span>
                <span className="paymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

            <li className="paymentsList__projectItem">
              <div className="paymentsList__itemDate">فروردین ۱۴۰۲</div>
              <div className="paymentsList__itemStatus paymentsList__itemStatus--successful">
                <i className="fi fi-rs-check-circle "></i>
                <FaRegCircleCheck className="paymentsList__itemStatus--checkIcon" />

                موفق
              </div>
              <div className="paymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div className="paymentsList__itemCost">
                <span className="paymentsList__itemCost--dynamicNumberCost">۱۰۰.۰۰۰</span>
                <span className="paymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

            <li className="paymentsList__projectItem">
              <div className="paymentsList__itemDate">فروردین ۱۴۰۲</div>
              <div className="paymentsList__itemStatus paymentsList__itemStatus--successful">
                <i className="fi fi-rs-check-circle "></i>
                <FaRegCircleCheck className="paymentsList__itemStatus--checkIcon" />

                موفق
              </div>
              <div className="paymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div className="paymentsList__itemCost">
                <span className="paymentsList__itemCost--dynamicNumberCost">۱۰۰.۰۰۰</span>
                <span className="paymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

            <li className="paymentsList__projectItem">
              <div className="paymentsList__itemDate">فروردین ۱۴۰۲</div>
              <div className="paymentsList__itemStatus paymentsList__itemStatus--successful">
                <i className="fi fi-rs-check-circle "></i>
                <FaRegCircleCheck className="paymentsList__itemStatus--checkIcon" />

                موفق
              </div>
              <div className="paymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div className="paymentsList__itemCost">
                <span className="paymentsList__itemCost--dynamicNumberCost">۱۰۰.۰۰۰</span>
                <span className="paymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

          </ul>

        </section>

        <button className="historyOfPayments__allPaymentsBtn">مشاهده تمام پرداخت‌ها</button>
      </section>
    )
}


export default PaymentHistory ;