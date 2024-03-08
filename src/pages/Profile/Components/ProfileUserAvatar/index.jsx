import userImagePlaceholder from "@assets/decorations/user-image-placeholder.png"
import usePersian from "@components/hooks/usePersian";
import { BASE_URL } from "@configs/end-points";


import './style.css'

function ProfileUserAvatar({user}) {
  
  const {convert}=usePersian()
  return (
    <section className="profileUserAvatar">
      <div className='profileUserAvatar__wrapper'>
        <img width={48} height={48} className="profileUserAvatar__image" src={`${BASE_URL}/${user?.profilePhoto}` || userImagePlaceholder} alt="user-image" />
        <a href="#" className="profileUserAvatar__edit">ویرایش اطلاعات شخصی</a>
      </div>
      <div className='profileUserAvatar__wrapper'>
        <div className="profileUserAvatar__name">{user?.firstName} {user?.lastName}</div>
        <div className="profileUserAvatar__mobileNumber">{user?.phone ? convert(user?.phone):". . ."}</div>
      </div>
    </section>
  )
}

export default ProfileUserAvatar;