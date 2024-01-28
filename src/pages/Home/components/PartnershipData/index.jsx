import { BsPersonHeart } from "react-icons/bs";
import './style.css'

function PartnershipData() {
  return (
    <header className="partnershipBlock__data">
      <h2 className="partnershipBlock__title">جالبه بدونی تا حالا ...</h2>
      <section className="partnershipBlock__dataBox">
        <section className="partnershipBlock__membersNumber">
          <p className="">
            <span className="partnershipBlock__dynamicMembersNumber">1207</span>
            <span>نفر</span>
          </p>

          <p className="partnershipBlock__staticMembersDescription--smallFont">
            در پروژه های مختلف شرکت کردن
          </p>
        </section>

        <section className="partnershipBlock__lastMembers">
          <p className="partnershipBlock__lastMembersTitle">
            آخرین مشارکت ها
          </p>
          <section className="partnershipBlock__lastTwinMembers">
            <div className="partnershipBlock__lastMembersWrapper">
              <BsPersonHeart className="partnershipBlock__lastMembersIcon" />
              <p className="partnershipBlock__lastMembersName">
                فرهاد شریعتمداری
              </p>
            </div>
            <div className="partnershipBlock__lastMembersWrapper">
              <BsPersonHeart className="partnershipBlock__lastMembersIcon" />
              <p className="partnershipBlock__lastMembersName">کاوه هدا</p>
            </div>
          </section>
        </section>
      </section>
    </header>
  )
}


export default PartnershipData;