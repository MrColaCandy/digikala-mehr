import userImagePlaceholder from "@assets/decorations/user-image-placeholder.png"
import './style.css'
import usePersianNumberConverter from "@components/hooks/usePersianNumberConverter";
function ProfileUserAvatar({user}) {
  const {convert}=usePersianNumberConverter()
  return (
    <section className="profileUserAvatar">
      <div className='profileUserAvatar__wrapper'>
        <img width={48} height={48} className="profileUserAvatar__image" src={user?.image || userImagePlaceholder} alt="user-image" />
        <a href="#" className="profileUserAvatar__edit">ویرایش اطلاعات شخصی</a>
      </div>
      <div className='profileUserAvatar__wrapper'>
        <div className="profileUserAvatar__name">{user?.name} {user?.lastName}</div>
        <div className="profileUserAvatar__mobileNumber">{user?.phone?convert(user.phone):""}</div>
      </div>
    </section>
  )
}

export default ProfileUserAvatar;