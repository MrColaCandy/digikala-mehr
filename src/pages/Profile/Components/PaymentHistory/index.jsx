import { FaRegCircleCheck } from "react-icons/fa6";
import './style.css'



function PaymentHistory (){
    return(
        <section class="historyOfPayments">

        <header class="historyOfPayments__header">
          <span class="historyOfPayments__headerTitle">تاریخچه پرداخت‌های شما</span>
          <span class="historyOfPayments__headerDateSort">مرتب شده براساس تاریخ</span>
        </header>


        <section class="paymentsListWrapper">

          <header class="paymentsHeader">
            <div class="paymentsHeader__dateTitle">تاریخ</div>
            <div class="paymentsHeader__statusTitle">وضعیت</div>
            <div class="paymentsHeader__projectTitle">پروژه</div>
            <div class="paymentsHeader__costTitle">مبلغ</div>
          </header>

          <ul class="paymentsList">
            <li class="paymentsList__projectItem">
              <div class="paymentsList__itemDate">تیر ۱۴۰۲</div>
              <div class="paymentsList__itemStatus paymentsList__itemStatus--nextPayment">پرداخت بعدی</div>
              <div class="paymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div class="paymentsList__itemCost">
                <span class="paymentsList__itemCost--dynamicNumberCost">۲۰۰.۰۰۰</span>
                <span class="paymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

            <li class="paymentsList__projectItem">
              <div class="paymentsList__itemDate">خرداد ۱۴۰۲</div>
              <div class="paymentsList__itemStatus paymentsList__itemStatus--successful">
                <i class="fi fi-rs-check-circle "></i>
                <FaRegCircleCheck className="paymentsList__itemStatus--checkIcon" />

                موفق
              </div>
              <div class="paymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div class="paymentsList__itemCost">
                <span class="paymentsList__itemCost--dynamicNumberCost">۲۰۰.۰۰۰</span>
                <span class="paymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

            <li class="paymentsList__projectItem">
              <div class="paymentsList__itemDate">اردیبهشت ۱۴۰۲</div>
              <div class="paymentsList__itemStatus paymentsList__itemStatus--successful">
                <i class="fi fi-rs-check-circle "></i>
                <FaRegCircleCheck className="paymentsList__itemStatus--checkIcon" />

                موفق
              </div>
              <div class="paymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div class="paymentsList__itemCost">
                <span class="paymentsList__itemCost--dynamicNumberCost">۲۰۰.۰۰۰</span>
                <span class="paymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

            <li class="paymentsList__projectItem">
              <div class="paymentsList__itemDate">فروردین ۱۴۰۲</div>
              <div class="paymentsList__itemStatus paymentsList__itemStatus--successful">
                <i class="fi fi-rs-check-circle "></i>
                <FaRegCircleCheck className="paymentsList__itemStatus--checkIcon" />

                موفق
              </div>
              <div class="paymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div class="paymentsList__itemCost">
                <span class="paymentsList__itemCost--dynamicNumberCost">۱۰۰.۰۰۰</span>
                <span class="paymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

            <li class="paymentsList__projectItem">
              <div class="paymentsList__itemDate">فروردین ۱۴۰۲</div>
              <div class="paymentsList__itemStatus paymentsList__itemStatus--successful">
                <i class="fi fi-rs-check-circle "></i>
                <FaRegCircleCheck className="paymentsList__itemStatus--checkIcon" />

                موفق
              </div>
              <div class="paymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div class="paymentsList__itemCost">
                <span class="paymentsList__itemCost--dynamicNumberCost">۱۰۰.۰۰۰</span>
                <span class="paymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

            <li class="paymentsList__projectItem">
              <div class="paymentsList__itemDate">فروردین ۱۴۰۲</div>
              <div class="paymentsList__itemStatus paymentsList__itemStatus--successful">
                <i class="fi fi-rs-check-circle "></i>
                <FaRegCircleCheck className="paymentsList__itemStatus--checkIcon" />

                موفق
              </div>
              <div class="paymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div class="paymentsList__itemCost">
                <span class="paymentsList__itemCost--dynamicNumberCost">۱۰۰.۰۰۰</span>
                <span class="paymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

          </ul>

        </section>

        <button class="historyOfPayments__allPaymentsBtn">مشاهده تمام پرداخت‌ها</button>
      </section>
    )
}


export default PaymentHistory ;