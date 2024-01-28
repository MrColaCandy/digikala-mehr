import "./style.css"
import digikalaMehrLogo from '@assets/decorations/digikala-mehr-logo.png'
import phoneNumberErorCat from '@assets/decorations/phone-number-eror-cat.png'
function Login() {
    return (
        <>
            <article className="login">
                <section className="addPhonenumber">
                    <img src={digikalaMehrLogo} className="img" />
                    <div className="addPhonenumber__information">
                        <h2 className="title">ورود همکاران</h2>
                        <div className="addPhonenumber__details">
                            <div className="addPhonenumber__paragraph">
                                <p>سلام همکار عزیز، قراره با هم دیگه کارای بزرگی انجام بدیم</p>
                                <p>برای شروع لطفا شماره موبایل خود را وارد کنید</p>
                            </div>
                            <div className="addPhonenumber__vorod">
                                <div className="addPhonenumber__inputEror">
                                    <input type="text" className="input" />
                                    <p className="addPhonenumber__Eror">لطفا این قسمت را خالی نگذارید.</p>
                                </div>
                                <button className="btn">ورود</button>
                            </div>
                        </div>
                        <p className="paragraph">ورود شما به معنای پذیرش <span className="paragraph--color">
                            شرایط دیجی‌کالا</span>و <span className="paragraph--color">قوانین حریم خصوصی</span> است</p>
                    </div>
                </section>
                <section className="ersalCode">
                    <img src={digikalaMehrLogo} className="img" />
                    <div className="ersalCode__information">
                        <div className="ersalCode__paragraph">
                            <p className="paragraph">دلارام عزیز سلام، برای شروع</p>
                            <h2 className="title">رمز یک‌بار‌مصرفی که برات ارسال شد را وارد کن</h2>
                        </div>
                        <p className="paragraph">کد تایید برای شماره ۰۹۲۱۶۴۲۲۹۵۳ ارسال شد.</p>
                        <div className="ersalCode__vorod">
                            <input type="text" className="input" />
                            <div className="ersalCode__vorodDetails">
                                <p className="paragraph">دریافت مجدد از طریق <span className="paragraph--color">پیامک</span> یا <span
                                    className="paragraph--color">تماس</span></p>
                                <button className="btn">ورود</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="erorPhonenumber">
                    <div className="erorPhonenumber__information">
                        <div className="erorPhonenumber__paragraph">
                            <h2 className="title">شماره‌ی موبایل ثبت نشده!</h2>
                            <p className="paragraph">شماره‌ی ۰۹۲۱۶۴۲۲۹۵۳ در لیست همکاران دیجی‌کالا موجود نیست</p>
                            <p className="paragraph">حتما شماره‌ای که در شرکت ثبت شده را وارد کنید.</p>
                        </div>
                        <img src={phoneNumberErorCat} className="erorPhonenumber__img" />
                    </div>
                    <button className="erorPhonenumber__btn"><span className="erorPhonenumber__btn--word">تغییر شماره تلفن</span></button>
                </section>
            </article>
        </>
    )
}
export default Login;