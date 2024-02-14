import organLogo from '@assets/decorations/organLogo.svg'

import "./style.css"

function ProjectStatusActiveSuccessful (){
    return(
        <section class="partnerStatusProject__activeStatus--successful">
        <section class="currentProject--successful">
            <section class="currentProject__projectOrganData--successful">
                <img src={organLogo} class="currentProject__oraganLogoImage--successful"
                    alt="organLogoImg" />
                <section class="currentProject__dataTexts--successful">
                    <span class="currentProject__activeProjectName--successful">تهیه مخزن آب برای حیات وحش
                        گناباد</span>
                    <span class="currentProject__activeOraganName--successful">انجمن نذر طبیعت</span>
                </section>
            </section>

            <section class="currentProject__changeBtns--successful">
                <a href="#" class="currentProject__editBtn">ویرایش</a>
                <a href="#" class="currentProject__cancelBtn">لغو</a>
            </section>

        </section>
    </section>
    )
}


export default ProjectStatusActiveSuccessful ;

