import { BsPersonHeart } from "react-icons/bs";
import './style.css'
import usePersian from "@components/hooks/usePersian";
function HomeInfo({ info }) {
  const { convert } = usePersian()

  function getRecent() {
    if (!info) {
      return <>
        <div className="homeInfo__lastMembersWrapper">
          <p className="homeInfo__lastMembersName">
            . . .
          </p>
        </div>
      </>
    }
    if (info.recent.length <= 0) {
      return <>
        <div className="homeInfo__lastMembersWrapper">
          <p className="homeInfo__lastMembersName homeInfo__lastMembersName--noContribution">
            تا حالا فردی مشارکت نکرده است
          </p>
        </div>
      </>
    }
    else {
      info.recent.slice(0, 1).map(p => {
        return <>
          <div className="homeInfo__lastMembersWrapper">
            <BsPersonHeart className="homeInfo__lastMembersIcon" />
            <p className="homeInfo__lastMembersName">
              {
                p.name + " " + p.lastName
              }
            </p>
          </div>
        </>
      })
    }

  }
  function getTotalHelpers() {
   if(!info)
   return ". . ."
   
   return convert(info.totalHelpers)
  }

  return (
    <header className="homeInfo">
      <h2 className="homeInfo__title">جالبه بدونی تا حالا ...</h2>
      <section className="homeInfo__dataBox">
        <section className="homeInfo__membersNumber">
          <p className="">
            <span className="homeInfo__dynamicMembersNumber">{" "+getTotalHelpers()+" "}</span>
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
            {
               getRecent()
            }
          </section>
        </section>
      </section>
    </header>
  )
}


export default HomeInfo;