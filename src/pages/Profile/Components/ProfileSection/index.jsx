import userAvatar from '@assets/decorations/userAvatar.svg'
import emptyProfile from '@assets/decorations/emptyProfile.svg'

import './style.css'

function ProfileSection() {
    return (
        <section class="partnerProfileData">
        <section class="partnerPersonalData">
          <img class="partnerPersonalData__partnerAvatar partnerPersonalData__partnerAvatar--notLoggedIn"
            src={emptyProfile}alt="partnerAvatarNotSignUp" />
          <img class="partnerPersonalData__partnerAvatar partnerPersonalData__partnerAvatar--LoggedIn"
            src={userAvatar} alt="partnerAvatarSignUp" />
          <section class="partnerPersonalDataWrapper">
            <span class="partnerPersonalData__partnerName">سارا کمالی</span>
            <span class="partnerPersonalData__partnerTelNumber">۰۹۲۱۶۴۲۲۹۵۳</span>
          </section>
        </section>
        <a href="#" class="partnerPersonalData__editBtn">ویرایش اطلاعات شخصی</a>
      </section>
    )
}

export default ProfileSection;