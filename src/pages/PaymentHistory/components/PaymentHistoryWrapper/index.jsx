import { BsListCheck } from "react-icons/bs";
import { FaRegCircleCheck } from "react-icons/fa6";
import { TbChevronRight } from "react-icons/tb";
import { TbChevronLeft } from "react-icons/tb";
import './style.css';


function PaymentHistoryWrapper() {
    return (
        <section className="historyOfAllPayments">

        <header className="historyOfAllPayments__header">
          <a href="#" className="historyOfAllPayments__headerGoBackLink">بازگشت</a>
          <section className="historyOfAllPayments__headerTitleWrapper">
            <BsListCheck className="historyOfAllPayments__headerTitleIcon" />
            <span className="historyOfAllPayments__headerTitleText">تاریخچه پرداخت‌ها</span>
          </section>
        </header>

        <section className="allPaymentsListWrapper">

          <header className="allPaymentsHeader">
            <div className="allPaymentsHeader__dateTitle">تاریخ</div>
            <div className="allPaymentsHeader__statusTitle">وضعیت</div>
            <div className="allPaymentsHeader__projectTitle">پروژه</div>
            <div className="allPaymentsHeader__costTitle">مبلغ</div>
          </header>

          <ul className="allPaymentsList">
            <li className="allPaymentsList__projectItem">
              <div className="allPaymentsList__itemDate">تیر ۱۴۰۲</div>
              <div className="allPaymentsList__itemStatus allPaymentsList__itemStatus--nextPayment">پرداخت بعدی</div>
              <div className="allPaymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div className="allPaymentsList__itemCost">
                <span className="allPaymentsList__itemCost--dynamicNumberCost">۲۰۰.۰۰۰</span>
                <span className="allPaymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

            <li className="allPaymentsList__projectItem">
              <div className="allPaymentsList__itemDate">خرداد ۱۴۰۲</div>
              <div className="allPaymentsList__itemStatus allPaymentsList__itemStatus--successful">
                <FaRegCircleCheck className="allPaymentsList__itemStatus--checkIcon" />
                موفق
              </div>
              <div className="allPaymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div className="allPaymentsList__itemCost">
                <span className="allPaymentsList__itemCost--dynamicNumberCost">۲۰۰.۰۰۰</span>
                <span className="allPaymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

            <li className="allPaymentsList__projectItem">
              <div className="allPaymentsList__itemDate">اردیبهشت ۱۴۰۲</div>
              <div className="allPaymentsList__itemStatus allPaymentsList__itemStatus--successful">
                <FaRegCircleCheck className="allPaymentsList__itemStatus--checkIcon" />
                موفق
              </div>
              <div className="allPaymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div className="allPaymentsList__itemCost">
                <span className="allPaymentsList__itemCost--dynamicNumberCost">۲۰۰.۰۰۰</span>
                <span className="allPaymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

            <li className="allPaymentsList__projectItem">
              <div className="allPaymentsList__itemDate">فروردین ۱۴۰۲</div>
              <div className="allPaymentsList__itemStatus allPaymentsList__itemStatus--successful">
                <FaRegCircleCheck className="allPaymentsList__itemStatus--checkIcon" />
                موفق
              </div>
              <div className="allPaymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div className="allPaymentsList__itemCost">
                <span className="allPaymentsList__itemCost--dynamicNumberCost">۱۰۰.۰۰۰</span>
                <span className="allPaymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

            <li className="allPaymentsList__projectItem">
              <div className="allPaymentsList__itemDate">فروردین ۱۴۰۲</div>
              <div className="allPaymentsList__itemStatus allPaymentsList__itemStatus--successful">
                <FaRegCircleCheck className="allPaymentsList__itemStatus--checkIcon" />
                موفق
              </div>
              <div className="allPaymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div className="allPaymentsList__itemCost">
                <span className="allPaymentsList__itemCost--dynamicNumberCost">۱۰۰.۰۰۰</span>
                <span className="allPaymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

            <li className="allPaymentsList__projectItem">
              <div className="allPaymentsList__itemDate">فروردین ۱۴۰۲</div>
              <div className="allPaymentsList__itemStatus allPaymentsList__itemStatus--successful">
                <FaRegCircleCheck className="allPaymentsList__itemStatus--checkIcon" />
                موفق
              </div>
              <div className="allPaymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div className="allPaymentsList__itemCost">
                <span className="allPaymentsList__itemCost--dynamicNumberCost">۱۰۰.۰۰۰</span>
                <span className="allPaymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

            <li className="allPaymentsList__projectItem">
              <div className="allPaymentsList__itemDate">فروردین ۱۴۰۲</div>
              <div className="allPaymentsList__itemStatus allPaymentsList__itemStatus--successful">
                <FaRegCircleCheck className="allPaymentsList__itemStatus--checkIcon" />
                موفق
              </div>
              <div className="allPaymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div className="allPaymentsList__itemCost">
                <span className="allPaymentsList__itemCost--dynamicNumberCost">۱۰۰.۰۰۰</span>
                <span className="allPaymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

            <li className="allPaymentsList__projectItem">
              <div className="allPaymentsList__itemDate">فروردین ۱۴۰۲</div>
              <div className="allPaymentsList__itemStatus allPaymentsList__itemStatus--successful">
                <FaRegCircleCheck className="allPaymentsList__itemStatus--checkIcon" />
                موفق
              </div>
              <div className="allPaymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div className="allPaymentsList__itemCost">
                <span className="allPaymentsList__itemCost--dynamicNumberCost">۱۰۰.۰۰۰</span>
                <span className="allPaymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

            <li className="allPaymentsList__projectItem">
              <div className="allPaymentsList__itemDate">فروردین ۱۴۰۲</div>
              <div className="allPaymentsList__itemStatus allPaymentsList__itemStatus--successful">
                <FaRegCircleCheck className="allPaymentsList__itemStatus--checkIcon" />
                موفق
              </div>
              <div className="allPaymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div className="allPaymentsList__itemCost">
                <span className="allPaymentsList__itemCost--dynamicNumberCost">۱۰۰.۰۰۰</span>
                <span className="allPaymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

            <li className="allPaymentsList__projectItem">
              <div className="allPaymentsList__itemDate">فروردین ۱۴۰۲</div>
              <div className="allPaymentsList__itemStatus allPaymentsList__itemStatus--successful">
                <FaRegCircleCheck className="allPaymentsList__itemStatus--checkIcon" />
                موفق
              </div>
              <div className="allPaymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div className="allPaymentsList__itemCost">
                <span className="allPaymentsList__itemCost--dynamicNumberCost">۱۰۰.۰۰۰</span>
                <span className="allPaymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

            <li className="allPaymentsList__projectItem">
              <div className="allPaymentsList__itemDate">فروردین ۱۴۰۲</div>
              <div className="allPaymentsList__itemStatus allPaymentsList__itemStatus--successful">
                <FaRegCircleCheck className="allPaymentsList__itemStatus--checkIcon" />
                موفق
              </div>
              <div className="allPaymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div className="allPaymentsList__itemCost">
                <span className="allPaymentsList__itemCost--dynamicNumberCost">۱۰۰.۰۰۰</span>
                <span className="allPaymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

            <li className="allPaymentsList__projectItem">
              <div className="allPaymentsList__itemDate">فروردین ۱۴۰۲</div>
              <div className="allPaymentsList__itemStatus allPaymentsList__itemStatus--successful">
                <FaRegCircleCheck className="allPaymentsList__itemStatus--checkIcon" />
                موفق
              </div>
              <div className="allPaymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div className="allPaymentsList__itemCost">
                <span className="allPaymentsList__itemCost--dynamicNumberCost">۱۰۰.۰۰۰</span>
                <span className="allPaymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

            <li className="allPaymentsList__projectItem">
              <div className="allPaymentsList__itemDate">فروردین ۱۴۰۲</div>
              <div className="allPaymentsList__itemStatus allPaymentsList__itemStatus--successful">
                <FaRegCircleCheck className="allPaymentsList__itemStatus--checkIcon" />
                موفق
              </div>
              <div className="allPaymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div className="allPaymentsList__itemCost">
                <span className="allPaymentsList__itemCost--dynamicNumberCost">۱۰۰.۰۰۰</span>
                <span className="allPaymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

            <li className="allPaymentsList__projectItem">
              <div className="allPaymentsList__itemDate">فروردین ۱۴۰۲</div>
              <div className="allPaymentsList__itemStatus allPaymentsList__itemStatus--successful">
                <FaRegCircleCheck className="allPaymentsList__itemStatus--checkIcon" />
                موفق
              </div>
              <div className="allPaymentsList__itemProjectName">تهیه مخزن آب برای حیات وحش گناباد</div>
              <div className="allPaymentsList__itemCost">
                <span className="allPaymentsList__itemCost--dynamicNumberCost">۱۰۰.۰۰۰</span>
                <span className="allPaymentsList__itemCost--staticTomanText">تومان</span>
              </div>
            </li>

          </ul>


        </section>


        <section className="allPaymentsSlidePagination">
          <button className="allPaymentsSlidePagination__perviousBtn"><TbChevronRight />قبلی</button>

          <section className="allPaymentsSlidePagination__pagesNumbers">
            <i className="allPaymentsSlidePagination__pagesNumbersItem">۱</i>
            <i className="allPaymentsSlidePagination__pagesNumbersItem">۲</i>
            <i className="allPaymentsSlidePagination__pagesNumbersItem">۳</i>
            <i
              className="allPaymentsSlidePagination__pagesNumbersItem allPaymentsSlidePagination__pagesNumbersItem--selected">۴</i>
            <i className="allPaymentsSlidePagination__pagesNumbersItem">۵</i>
            <i className="allPaymentsSlidePagination__pagesNumbersItem">۶</i>
            <i className="allPaymentsSlidePagination__pagesNumbersItem">۷</i>
            <i
              className="allPaymentsSlidePagination__pagesNumbersItem allPaymentsSlidePagination__pagesNumbersItem--hover">۸</i>
            <span className="allPaymentsSlidePagination__morePageItem">...</span>
            <i className="allPaymentsSlidePagination__pagesNumbersItem">۱۱</i>
          </section>

          <button className="allPaymentsSlidePagination__nextBtn">بعدی<TbChevronLeft /></button>
        </section>

      </section>
    )
}

export default PaymentHistoryWrapper;