import ProfileHelp from "./components/ProfileHelp"
import ProfileHelpExpired from "./components/ProfileHelpExpired"
import ProfileNoHelp from "./components/ProfileNoHelp"
import './style.css'





function ProfileActiveHelps({activeHelp}) {

    return (
        <section className="profileActiveHelps">
            <section className="profileActiveHelps__header">
                <i className="profileActiveHelps__icon"></i>
                <span className="profileActiveHelps__title">پروژه‌ی فعال شما</span>
            </section>
            {
                !activeHelp &&
                <ProfileNoHelp />
            }
            {
                activeHelp?.state==="expired" &&
                <ProfileHelpExpired
                    activeHelp={activeHelp}/>
            }
            {
               activeHelp &&
               <ProfileHelp activeHelp={activeHelp}  />
            }

        </section >
    )
}


export default ProfileActiveHelps;