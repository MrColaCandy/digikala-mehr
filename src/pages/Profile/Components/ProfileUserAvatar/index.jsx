import userImagePlaceholder from "@assets/decorations/user-image-placeholder.png"
import './style.css'
import usePersian from "@components/hooks/usePersian";
function ProfileUserAvatar({ data}) {
  const {convert}=usePersian()
  return (
    <section className="profileUserAvatar">
      <div className='profileUserAvatar__wrapper'>
        <img width={48} height={48} className="profileUserAvatar__image" src={`http://127.0.0.1:8000/${data?.user?.profilePhoto}` || userImagePlaceholder} alt="user-image" />
        <a href="#" className="profileUserAvatar__edit">ویرایش اطلاعات شخصی</a>
      </div>
      <div className='profileUserAvatar__wrapper'>
        <div className="profileUserAvatar__name">{data?.user?.firstName} {data?.user?.lastName}</div>
        <div className="profileUserAvatar__mobileNumber">{data?.user?.phone?convert(data?.user?.phone):". . ."}</div>
      </div>
    </section>
  )
}

export default ProfileUserAvatar;