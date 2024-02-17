import userAvatar from '@assets/decorations/userAvatar.svg'

import './style.css'

function ProfileUserAvatar() {
  return (
    <section className="profileUserAvatar">
      <div className='profileUserAvatar__wrapper'>
        <img className="profileUserAvatar__image" src={userAvatar} alt="user-image" />
        <a href="#" className="profileUserAvatar__edit">ویرایش اطلاعات شخصی</a>
      </div>
      <div className='profileUserAvatar__wrapper'>
        <div className="profileUserAvatar__name">سارا کمالی</div>
        <div className="profileUserAvatar__mobileNumber">۰۹۲۱۶۴۲۲۹۵۳</div>
      </div>
    </section>
  )
}

export default ProfileUserAvatar;