import { BsPersonHeart } from "react-icons/bs";
import './style.css'
import usePersian from "@components/hooks/usePersian";
import NoInfo from "./components/NoInfo";
import NoContributions from "./components/NoContributions";
function HomeInfo({ info }) {
  const { convert } = usePersian()


  function getTotalHelpers() {
    if (!info)
      return convert("0")

    return convert(info.totalHelpers.toString())
  }

  return (
    <header className="homeInfo">
      <h2 className="homeInfo__title">جالبه بدونی تا حالا ...</h2>
      <section className="homeInfo__dataBox">
        <section className="homeInfo__membersNumber">
          <p className="">
            <span className="homeInfo__dynamicMembersNumber">{" " + getTotalHelpers() + " "}</span>
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
              info?.recent?.slice(0,2).map(person => {
                return <>
                  <div className="homeInfo__lastMembersWrapper">
                    <div className="homeInfo__lastMembersIcon"><BsPersonHeart/></div>
                    <p className="homeInfo__lastMembersName">
                      {person}
                    </p>
                  </div>
                </>
              })
            }
            {
              !info &&
              <NoInfo />

            }
            {
              info?.recent?.length <= 0 &&
              <NoContributions />
            }
          </section>
        </section>
      </section>
    </header>
  )
}


export default HomeInfo;