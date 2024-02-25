import digikalaMehrLogo from '@assets/decorations/digikala-mehr-logo.png'
import Button from "@components/Button"
function LoginPhoneNumberForm({ onSubmit, validate, phone, onChange, error, isLoading,regex }) {

    return (
        <form onSubmit={onSubmit} className={"login__form"}>
            <img src={digikalaMehrLogo} className={"login__image"} />
            <div className={"login__header"}>
                <h2 className="login__title">ورود همکاران</h2>
                <p className="login__paragraph">سلام همکار عزیز، قراره با هم دیگه کارای بزرگی انجام بدیم</p>
                <p className="login__paragraph">برای شروع لطفا شماره موبایل خود را وارد کنید</p>
            </div>

            <div className="login__input">
                <input onBlur={(e) => validate(e.target.value,regex)} autoFocus name="phone" value={phone} onChange={(e)=>{
                    onChange(e);
                    validate(e.target.value,regex)
                }} type="tel" className={`login__inputController${error ? "--error" : ""}`} />
                {error && <p className="login__error">{error}</p>}
            </div>
            <Button color={"#00B189"} width={332} isLoading={isLoading} text={"ورود"} variant={"filled"} />



            <p className="login__paragraphTextCenter">ورود شما به معنای پذیرش <span className="login__paragraphBlue">
                شرایط دیجی‌کالا</span>و <span className="login__paragraphBlue">قوانین حریم خصوصی</span> است</p>

        </form>
    )
}

export default LoginPhoneNumberForm