import { useState, useRef } from "react"
import digikalaMehrLogo from '@assets/decorations/digikala-mehr-logo.png'
import { useAuth } from "@components/AuthContext/context"
function PhoneNumberForm({ phone, setPhone, setHasCode, setRegistrationError }) {

    const { sendOTPCode } = useAuth()
    const [error, setError] = useState(null)
    const inputRef = useRef(null)
    const [isLoading, setIsLoading] = useState(false);
    function validate(value) {
        const regex = /^([0|+[0-9]{1,5})?([7-9][0-9]{9})$/;
        if (value === "" || !value) {
            setError("لطفا این قسمت را خالی نگذارید.")
            return;
        }
        if (!regex.test(value)) {
            setError("فرمت شماره موبایل صحیح نیست!");
            return;
        }
        setError(null);

    }
    function handlePhoneInputChange(e) {
        validate(e.target.value)
        setPhone(e.target.value)

    }

    async function handleLoginSubmit(e) {
        e.preventDefault()
        if (error || !phone) return;
        setIsLoading(true);
        try {
            await sendOTPCode(phone)
            setHasCode(true)
            console.log("code: 123456");
            setError(null)
            setRegistrationError(false)
        } catch (error) {
            console.log("Something went wrong! error: " + error.message)
            setRegistrationError(true)
            setHasCode(false);
        }
        finally {
            setIsLoading(false);
        }
    }
    return (
        <form onSubmit={handleLoginSubmit} className="login__form">
            <img src={digikalaMehrLogo} className="login__image" />
            <div className="login__header">
                <h2 className="login__title">ورود همکاران</h2>
                <p className="login__paragraph">سلام همکار عزیز، قراره با هم دیگه کارای بزرگی انجام بدیم</p>
                <p className="login__paragraph">برای شروع لطفا شماره موبایل خود را وارد کنید</p>
            </div>

            <div className="login__input">
                <input onBlur={(e) => validate(e.target.value)} autoFocus ref={inputRef} name="phone" value={phone} onChange={handlePhoneInputChange} type="tel" className="login__inputController" />
                {error && <p className="login__error">{error}</p>}
            </div>
            <button disabled={isLoading} className="login__button">
                {
                    isLoading &&
                    <div className="loader"></div>
                }
                {
                    !isLoading &&
                    <div>ورود</div>
                }
            </button>


            <p className="login__paragraph">ورود شما به معنای پذیرش <span className="login__paragraphBlue">
                شرایط دیجی‌کالا</span>و <span className="login__paragraphBlue">قوانین حریم خصوصی</span> است</p>

        </form>
    )
}

export default PhoneNumberForm