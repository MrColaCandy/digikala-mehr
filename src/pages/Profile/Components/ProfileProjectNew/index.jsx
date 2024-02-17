import organLogo from '@assets/decorations/organLogo.svg'

import "./style.css"

function ProfileProjectNew() {
    return (
        <div className="profileProjectNew">
            <div className='profileProjectNew__info'>
                <img src={organLogo} className="profileProjectNew__infoLogo" alt="employer-logo" />
                <div className="profileProjectNew__infoText">
                    تهیه مخزن آب برای حیات وحش
                    گناباد
                    <span className="profileProjectNew__infoEmployer">انجمن نذر طبیعت</span>
                </div>
            </div>
            <div className="profileProjectNew__edit">
                <a href="#" className="profileProjectNew__editButton">ویرایش</a>
                <span>|</span>
                <a href="#" className="profileProjectNew__editButton">لغو</a>
            </div>

        </div>
    )
}


export default ProfileProjectNew;

