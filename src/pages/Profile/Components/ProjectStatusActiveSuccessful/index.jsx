import organLogo from '@assets/decorations/organLogo.svg'

import "./style.css"

function ProjectStatusActiveSuccessful (){
    return(
        <section className="partnerStatusProject__activeStatus--successful">
        <section className="currentProject--successful">
            <section className="currentProject__projectOrganData--successful">
                <img src={organLogo} className="currentProject__oraganLogoImage--successful"
                    alt="organLogoImg" />
                <section className="currentProject__dataTexts--successful">
                    <span className="currentProject__activeProjectName--successful">تهیه مخزن آب برای حیات وحش
                        گناباد</span>
                    <span className="currentProject__activeOraganName--successful">انجمن نذر طبیعت</span>
                </section>
            </section>

            <section className="currentProject__changeBtns--successful">
                <a href="#" className="currentProject__editBtn">ویرایش</a>
                <a href="#" className="currentProject__cancelBtn">لغو</a>
            </section>

        </section>
    </section>
    )
}


export default ProjectStatusActiveSuccessful ;

