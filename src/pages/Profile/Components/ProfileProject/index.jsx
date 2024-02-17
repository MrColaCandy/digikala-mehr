import organLogo from '@assets/decorations/organLogo.svg'

import "./style.css"

function ProfileProject (){
    return(
        <div className="profileProject">
      
            
               <div className="profileProject__info">
               <img src={organLogo} className="profileProject__infoLogo" alt="employer-logo" />
                <div  className="profileProject__infoText">
                    <span className="profileProject__infoTitle">تهیه مخزن آب برای حیات وحش
                        گناباد</span>
                    <span className="profileProject__infoEmployer">انجمن نذر طبیعت</span>
                </div>
               </div>
           

            <div className="profileProject__edit">
                <p className="profileProject__price">ماهیانه
                    ۲۰۰.۰۰۰
                    تومان
                </p>
                <div className="profileProject__editButtons">
                    <a href="#" className="profileProject__editButton">ویرایش</a>
                     <span>|</span>                    
                    <a href="#" className="profileProject__editButton">لغو</a>
                </div>
            </div>
        

      
            <div className="profileProject__finance">
                <span className="profileProject__financeDate">۱۷</span>
                <span className="profileProject__financeText">تعداد ماه‌هایی که فعال بودید</span>
            </div>

            <div className="profileProject__finance">
                ۲۳.۰۰۰.۰۰۰
                ریال
                <span className="profileProject__financeText">مبلغی که تاکنون شریک شدید</span>
            </div>
        </div>
   
    )
}


export default ProfileProject ;

