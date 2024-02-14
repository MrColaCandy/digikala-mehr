import { BsPersonHeart } from "react-icons/bs";
import './style.css'

function PartnershipData() {
  return (
    <header className="partnershipData">
      <h2 className="partnershipData__title">جالبه بدونی تا حالا ...</h2>
      <section className="partnershipData__dataBox">
        <section className="partnershipData__membersNumber">
          <p className="">
            <span className="partnershipData__dynamicMembersNumber">1207</span>
            <span>نفر</span>
          </p>

          <p className="partnershipData__staticMembersDescription--smallFont">
            در پروژه های مختلف شرکت کردن
          </p>
        </section>

        <section className="partnershipData__lastMembers">
          <p className="partnershipData__lastMembersTitle">
            آخرین مشارکت ها
          </p>
          <section className="partnershipData__lastTwinMembers">
            <div className="partnershipData__lastMembersWrapper">
              <BsPersonHeart className="partnershipData__lastMembersIcon" />
              <p className="partnershipData__lastMembersName">
                فرهاد شریعتمداری
              </p>
            </div>
            <div className="partnershipData__lastMembersWrapper">
              <BsPersonHeart className="partnershipData__lastMembersIcon" />
              <p className="partnershipData__lastMembersName">کاوه هدا</p>
            </div>
          </section>
        </section>
      </section>
    </header>
  )
}


export default PartnershipData;