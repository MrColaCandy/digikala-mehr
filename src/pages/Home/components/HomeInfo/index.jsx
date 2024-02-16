import { BsPersonHeart } from "react-icons/bs";
import './style.css'

function HomeInfo() {
  return (
    <header className="homeInfo">
      <h2 className="homeInfo__title">جالبه بدونی تا حالا ...</h2>
      <section className="homeInfo__dataBox">
        <section className="homeInfo__membersNumber">
          <p className="">
            <span className="homeInfo__dynamicMembersNumber">1207</span>
            <span>نفر</span>
          </p>

          <p className="homeInfo__staticMembersDescription--smallFont">
            در پروژه های مختلف شرکت کردن
          </p>
        </section>

        <section className="homeInfo__lastMembers">
          <p className="homeInfo__lastMembersTitle">
            آخرین مشارکت ها
          </p>
          <section className="homeInfo__lastTwinMembers">
            <div className="homeInfo__lastMembersWrapper">
              <BsPersonHeart className="homeInfo__lastMembersIcon" />
              <p className="homeInfo__lastMembersName">
                فرهاد شریعتمداری
              </p>
            </div>
            <div className="homeInfo__lastMembersWrapper">
              <BsPersonHeart className="homeInfo__lastMembersIcon" />
              <p className="homeInfo__lastMembersName">کاوه هدا</p>
            </div>
          </section>
        </section>
      </section>
    </header>
  )
}


export default HomeInfo;