import organLogo from '@assets/decorations/organLogo.svg'

import "./style.css"

function ProjectStatusActive (){
    return(
        <section className="partnerStatusProject__activeStatus">
        <section className="currentProject">
            <section className="currentProject__projectOrganData">
                <img src={organLogo} className="currentProject__oraganLogoImage" alt="organLogoImg" />
                <section className="currentProject__dataTexts">
                    <span className="currentProject__activeProjectName">تهیه مخزن آب برای حیات وحش
                        گناباد</span>
                    <span className="currentProject__activeOraganName">انجمن نذر طبیعت</span>
                </section>
            </section>

            <section className="currentProject__projectOptions">
                <p className="currentProject__costTextProject">ماهیانه
                    <span className="currentProject__dynamicNumberProjectNumber">
                        ۲۰۰.۰۰۰
                    </span>
                    تومان
                </p>
                <section className="currentProject__changeBtns">
                    <a href="#" className="currentProject__editBtn">ویرایش</a>
                    <a href="#" className="currentProject__cancelBtn">لغو</a>
                </section>
            </section>
        </section>

        <section className="partnerStatus__dataLogProject">
            <section className="partnerStatus__dataLogMonths">
                <span className="partnerStatus__dataLogMonthsNumber">۱۷</span>
                <span className="partnerStatus__dataLogMonthsText">تعداد ماه‌هایی که فعال بودید</span>
            </section>

            <section className="partnerStatus__dataLogCost">
                <div className="partnerStatus__dataLogCostNumberWrapper">
                    <span className="partnerStatus__dataLogCostDynamicNumber">۲۳.۰۰۰.۰۰۰</span>
                    <span className="partnerStatus__dataLogCostRialWord">ریال</span>
                </div>
                <span className="partnerStatus__dataLogCostText">مبلغی که تاکنون شریک شدید</span>
            </section>
        </section>
    </section>
    )
}


export default ProjectStatusActive ;

