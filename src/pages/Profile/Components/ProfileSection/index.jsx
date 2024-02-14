import userAvatar from '@assets/decorations/userAvatar.svg'
import emptyProfile from '@assets/decorations/emptyProfile.svg'

import './style.css'

function ProfileSection() {
    return (
        <section className="partnerProfileData">
        <section className="partnerPersonalData">
          <img className="partnerPersonalData__partnerAvatar partnerPersonalData__partnerAvatar--notLoggedIn"
            src={emptyProfile}alt="partnerAvatarNotSignUp" />
          <img className="partnerPersonalData__partnerAvatar partnerPersonalData__partnerAvatar--LoggedIn"
            src={userAvatar} alt="partnerAvatarSignUp" />
          <section className="partnerPersonalDataWrapper">
            <span className="partnerPersonalData__partnerName">سارا کمالی</span>
            <span className="partnerPersonalData__partnerTelNumber">۰۹۲۱۶۴۲۲۹۵۳</span>
          </section>
        </section>
        <a href="#" className="partnerPersonalData__editBtn">ویرایش اطلاعات شخصی</a>
      </section>
    )
}

export default ProfileSection;