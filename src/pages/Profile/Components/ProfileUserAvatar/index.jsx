import userImagePlaceholder from "@assets/decorations/user-image-placeholder.png"
import './style.css'
import usePersian from "@components/hooks/usePersian";
import { BASE_URL } from "@configs/BASE_URL";
import { useProject } from "@components/hooks/useProject";
function ProfileUserAvatar() {
  const {user}=useProject();
  const {convert}=usePersian()
  return (
    <section className="profileUserAvatar">
      <div className='profileUserAvatar__wrapper'>
        <img width={48} height={48} className="profileUserAvatar__image" src={`${BASE_URL}${user?.user?.profilePhoto}` || userImagePlaceholder} alt="user-image" />
        <a href="#" className="profileUserAvatar__edit">ویرایش اطلاعات شخصی</a>
      </div>
      <div className='profileUserAvatar__wrapper'>
        <div className="profileUserAvatar__name">{user?.user?.firstName} {user?.user?.lastName}</div>
        <div className="profileUserAvatar__mobileNumber">{user?.user?.phone?convert(user?.user?.phone):". . ."}</div>
      </div>
    </section>
  )
}

export default ProfileUserAvatar;