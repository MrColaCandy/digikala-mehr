import { BsListCheck } from "react-icons/bs";
import { FaRegCircleCheck } from "react-icons/fa6";
import { TbChevronRight } from "react-icons/tb";
import { TbChevronLeft } from "react-icons/tb";
import './style.css';


function PaymentHistoryWrapper() {
    return (
        <section class="historyOfAllPayments">

        <header class="historyOfAllPayments__header">
          <a href="#" class="historyOfAllPayments__headerGoBackLink">بازگشت</a>
          <section class="historyOfAllPayments__headerTitleWrapper">
            <BsListCheck className="historyOfAllPayments__headerTitleIcon" />
            <span class="historyOfAllPayments__headerTitleText">تاریخچه پرداخت‌ها</span>
          </section>
        </header>

        <section class="allPaymentsListWrapper">

          <header class="allPaymentsHeader">
            <div class="allPaymentsHeader__dateTitle">تاریخ</div>
            <div class="allPaymentsHeader__statusTitle">وضعیت</div>
            <div class="allPaymentsHeader__projectTitle">پروژه</div>
            <div class="allPaymentsHeader__costTitle">مبلغ</div>
          </header>

          <ul class="allPaymentsList">
            <li class="allPaymentsList__projectItem">
              <div class="allPaymentsList__itemDate">تیر ۱۴۰۲</div>
              <div class="allPaymentsList__itemStatus allPaymentsList__itemStatus--nextPayment">پرداخت بعدی</div>
              <div class="allPaymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div class="allPaymentsList__itemCost">
                <span class="allPaymentsList__itemCost--dynamicNumberCost">۲۰۰.۰۰۰</span>
                <span class="allPaymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

            <li class="allPaymentsList__projectItem">
              <div class="allPaymentsList__itemDate">خرداد ۱۴۰۲</div>
              <div class="allPaymentsList__itemStatus allPaymentsList__itemStatus--successful">
                <FaRegCircleCheck className="allPaymentsList__itemStatus--checkIcon" />
                موفق
              </div>
              <div class="allPaymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div class="allPaymentsList__itemCost">
                <span class="allPaymentsList__itemCost--dynamicNumberCost">۲۰۰.۰۰۰</span>
                <span class="allPaymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

            <li class="allPaymentsList__projectItem">
              <div class="allPaymentsList__itemDate">اردیبهشت ۱۴۰۲</div>
              <div class="allPaymentsList__itemStatus allPaymentsList__itemStatus--successful">
                <FaRegCircleCheck className="allPaymentsList__itemStatus--checkIcon" />
                موفق
              </div>
              <div class="allPaymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div class="allPaymentsList__itemCost">
                <span class="allPaymentsList__itemCost--dynamicNumberCost">۲۰۰.۰۰۰</span>
                <span class="allPaymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

            <li class="allPaymentsList__projectItem">
              <div class="allPaymentsList__itemDate">فروردین ۱۴۰۲</div>
              <div class="allPaymentsList__itemStatus allPaymentsList__itemStatus--successful">
                <FaRegCircleCheck className="allPaymentsList__itemStatus--checkIcon" />
                موفق
              </div>
              <div class="allPaymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div class="allPaymentsList__itemCost">
                <span class="allPaymentsList__itemCost--dynamicNumberCost">۱۰۰.۰۰۰</span>
                <span class="allPaymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

            <li class="allPaymentsList__projectItem">
              <div class="allPaymentsList__itemDate">فروردین ۱۴۰۲</div>
              <div class="allPaymentsList__itemStatus allPaymentsList__itemStatus--successful">
                <FaRegCircleCheck className="allPaymentsList__itemStatus--checkIcon" />
                موفق
              </div>
              <div class="allPaymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div class="allPaymentsList__itemCost">
                <span class="allPaymentsList__itemCost--dynamicNumberCost">۱۰۰.۰۰۰</span>
                <span class="allPaymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

            <li class="allPaymentsList__projectItem">
              <div class="allPaymentsList__itemDate">فروردین ۱۴۰۲</div>
              <div class="allPaymentsList__itemStatus allPaymentsList__itemStatus--successful">
                <FaRegCircleCheck className="allPaymentsList__itemStatus--checkIcon" />
                موفق
              </div>
              <div class="allPaymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div class="allPaymentsList__itemCost">
                <span class="allPaymentsList__itemCost--dynamicNumberCost">۱۰۰.۰۰۰</span>
                <span class="allPaymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

            <li class="allPaymentsList__projectItem">
              <div class="allPaymentsList__itemDate">فروردین ۱۴۰۲</div>
              <div class="allPaymentsList__itemStatus allPaymentsList__itemStatus--successful">
                <FaRegCircleCheck className="allPaymentsList__itemStatus--checkIcon" />
                موفق
              </div>
              <div class="allPaymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div class="allPaymentsList__itemCost">
                <span class="allPaymentsList__itemCost--dynamicNumberCost">۱۰۰.۰۰۰</span>
                <span class="allPaymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

            <li class="allPaymentsList__projectItem">
              <div class="allPaymentsList__itemDate">فروردین ۱۴۰۲</div>
              <div class="allPaymentsList__itemStatus allPaymentsList__itemStatus--successful">
                <FaRegCircleCheck className="allPaymentsList__itemStatus--checkIcon" />
                موفق
              </div>
              <div class="allPaymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div class="allPaymentsList__itemCost">
                <span class="allPaymentsList__itemCost--dynamicNumberCost">۱۰۰.۰۰۰</span>
                <span class="allPaymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

            <li class="allPaymentsList__projectItem">
              <div class="allPaymentsList__itemDate">فروردین ۱۴۰۲</div>
              <div class="allPaymentsList__itemStatus allPaymentsList__itemStatus--successful">
                <FaRegCircleCheck className="allPaymentsList__itemStatus--checkIcon" />
                موفق
              </div>
              <div class="allPaymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div class="allPaymentsList__itemCost">
                <span class="allPaymentsList__itemCost--dynamicNumberCost">۱۰۰.۰۰۰</span>
                <span class="allPaymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

            <li class="allPaymentsList__projectItem">
              <div class="allPaymentsList__itemDate">فروردین ۱۴۰۲</div>
              <div class="allPaymentsList__itemStatus allPaymentsList__itemStatus--successful">
                <FaRegCircleCheck className="allPaymentsList__itemStatus--checkIcon" />
                موفق
              </div>
              <div class="allPaymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div class="allPaymentsList__itemCost">
                <span class="allPaymentsList__itemCost--dynamicNumberCost">۱۰۰.۰۰۰</span>
                <span class="allPaymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

            <li class="allPaymentsList__projectItem">
              <div class="allPaymentsList__itemDate">فروردین ۱۴۰۲</div>
              <div class="allPaymentsList__itemStatus allPaymentsList__itemStatus--successful">
                <FaRegCircleCheck className="allPaymentsList__itemStatus--checkIcon" />
                موفق
              </div>
              <div class="allPaymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div class="allPaymentsList__itemCost">
                <span class="allPaymentsList__itemCost--dynamicNumberCost">۱۰۰.۰۰۰</span>
                <span class="allPaymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

            <li class="allPaymentsList__projectItem">
              <div class="allPaymentsList__itemDate">فروردین ۱۴۰۲</div>
              <div class="allPaymentsList__itemStatus allPaymentsList__itemStatus--successful">
                <FaRegCircleCheck className="allPaymentsList__itemStatus--checkIcon" />
                موفق
              </div>
              <div class="allPaymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div class="allPaymentsList__itemCost">
                <span class="allPaymentsList__itemCost--dynamicNumberCost">۱۰۰.۰۰۰</span>
                <span class="allPaymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

            <li class="allPaymentsList__projectItem">
              <div class="allPaymentsList__itemDate">فروردین ۱۴۰۲</div>
              <div class="allPaymentsList__itemStatus allPaymentsList__itemStatus--successful">
                <FaRegCircleCheck className="allPaymentsList__itemStatus--checkIcon" />
                موفق
              </div>
              <div class="allPaymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div class="allPaymentsList__itemCost">
                <span class="allPaymentsList__itemCost--dynamicNumberCost">۱۰۰.۰۰۰</span>
                <span class="allPaymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

            <li class="allPaymentsList__projectItem">
              <div class="allPaymentsList__itemDate">فروردین ۱۴۰۲</div>
              <div class="allPaymentsList__itemStatus allPaymentsList__itemStatus--successful">
                <FaRegCircleCheck className="allPaymentsList__itemStatus--checkIcon" />
                موفق
              </div>
              <div class="allPaymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div class="allPaymentsList__itemCost">
                <span class="allPaymentsList__itemCost--dynamicNumberCost">۱۰۰.۰۰۰</span>
                <span class="allPaymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

          </ul>


        </section>


        <section class="allPaymentsSlidePagination">
          <button class="allPaymentsSlidePagination__perviousBtn"><TbChevronRight />قبلی</button>

          <section class="allPaymentsSlidePagination__pagesNumbers">
            <i class="allPaymentsSlidePagination__pagesNumbersItem">۱</i>
            <i class="allPaymentsSlidePagination__pagesNumbersItem">۲</i>
            <i class="allPaymentsSlidePagination__pagesNumbersItem">۳</i>
            <i
              class="allPaymentsSlidePagination__pagesNumbersItem allPaymentsSlidePagination__pagesNumbersItem--selected">۴</i>
            <i class="allPaymentsSlidePagination__pagesNumbersItem">۵</i>
            <i class="allPaymentsSlidePagination__pagesNumbersItem">۶</i>
            <i class="allPaymentsSlidePagination__pagesNumbersItem">۷</i>
            <i
              class="allPaymentsSlidePagination__pagesNumbersItem allPaymentsSlidePagination__pagesNumbersItem--hover">۸</i>
            <span class="allPaymentsSlidePagination__morePageItem">...</span>
            <i class="allPaymentsSlidePagination__pagesNumbersItem">۱۱</i>
          </section>

          <button class="allPaymentsSlidePagination__nextBtn">بعدی<TbChevronLeft /></button>
        </section>

      </section>
    )
}

export default PaymentHistoryWrapper;