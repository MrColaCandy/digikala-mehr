import organLogo from '@assets/decorations/organLogo.svg'

import "./style.css"

function ProjectStatusActive (){
    return(
        <section class="partnerStatusProject__activeStatus">
        <section class="currentProject">
            <section class="currentProject__projectOrganData">
                <img src={organLogo} class="currentProject__oraganLogoImage" alt="organLogoImg" />
                <section class="currentProject__dataTexts">
                    <span class="currentProject__activeProjectName">تهیه مخزن آب برای حیات وحش
                        گناباد</span>
                    <span class="currentProject__activeOraganName">انجمن نذر طبیعت</span>
                </section>
            </section>

            <section class="currentProject__projectOptions">
                <p class="currentProject__costTextProject">ماهیانه
                    <span class="currentProject__dynamicNumberProjectNumber">
                        ۲۰۰.۰۰۰
                    </span>
                    تومان
                </p>
                <section class="currentProject__changeBtns">
                    <a href="#" class="currentProject__editBtn">ویرایش</a>
                    <a href="#" class="currentProject__cancelBtn">لغو</a>
                </section>
            </section>
        </section>

        <section class="partnerStatus__dataLogProject">
            <section class="partnerStatus__dataLogMonths">
                <span class="partnerStatus__dataLogMonthsNumber">۱۷</span>
                <span class="partnerStatus__dataLogMonthsText">تعداد ماه‌هایی که فعال بودید</span>
            </section>

            <section class="partnerStatus__dataLogCost">
                <div class="partnerStatus__dataLogCostNumberWrapper">
                    <span class="partnerStatus__dataLogCostDynamicNumber">۲۳.۰۰۰.۰۰۰</span>
                    <span class="partnerStatus__dataLogCostRialWord">ریال</span>
                </div>
                <span class="partnerStatus__dataLogCostText">مبلغی که تاکنون شریک شدید</span>
            </section>
        </section>
    </section>
    )
}


export default ProjectStatusActive ;

