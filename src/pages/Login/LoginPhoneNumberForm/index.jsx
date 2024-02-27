import digikalaMehrLogo from '@assets/decorations/digikala-mehr-logo.png'
import Button from "@components/Button"
import { useState } from 'react';
import { useAuth } from "@components/hooks/useAuth"

function LoginPhoneNumberForm({ isLoading, setIsLoading, setCode, setRegistrationError,setPhone }) {
    const { getOTPCode } = useAuth()
    const [error, setError] = useState(null);
    const [value, setValue] = useState("");
    const [formError, setFormError] = useState(null);
    function validate(value) {
        const regex = /^([0|+[0-9]{1,5})?([7-9][0-9]{9})$/
        if (value === "" || !value) {
            setError("لطفاًً این قسمت را خالی نگذارید.")
            return;
        }
        if (!regex?.test(value)) {
            setError("ساختار شماره تلفن همراه معتبر نیست!");
            return;
        }
        setError(null);
        return;
    }
    function handelValueChange(e) {
        setFormError(null);
        validate(e.target.value)
        setValue(e.target.value);
        setPhone(e.target.value);
    }
    function handleBlur(e) {
        validate(e.target.value);
    }
    async function handleSubmit(e) {
        e.preventDefault()
        if (error || !value || value == "" || formError) return;
        setIsLoading(true);
        try {
            const otp = await getOTPCode(value.trim())
            console.log(otp);
            setCode(true)
            setError(null)
            setRegistrationError(false)
        } catch (status) {
            setCode(false);
            if (status == 12002) {
                setFormError("لطفاًً اتصال به شبکه را برسی کنید.")
                return;
            }
            if (status == 404 || status == 400) {
                setRegistrationError(true)
                return;
            }
        }
        finally {
            setIsLoading(false)
        }
    }
    return (
        <form onSubmit={handleSubmit} className={"login__phoneForm"}>
            <img src={digikalaMehrLogo} className={"login__image"} />
            <div className={"login__header"}>
                <h2 className="login__title">ورود همکاران</h2>
                <p className="login__paragraph">سلام همکار عزیز، قراره با هم دیگه کارای بزرگی انجام بدیم</p>
                <p className="login__paragraph">برای شروع لطفاً شماره موبایل خود را وارد کنید</p>
            </div>

            <div className="login__input">
                <input onBlur={handleBlur} autoFocus name="phone" value={value} onChange={handelValueChange} type="tel" className={`login__inputController${error ? "--error" : ""}`} />
                {error && <p className="login__error">{error}</p>}
            </div>
            <Button color={"#00B189"} width={332} isLoading={isLoading} text={"ورود"} variant={"filled"} />
            <p className="login__paragraphTextCenter">ورود شما به معنای پذیرش <span className="login__paragraphBlue">
                شرایط دیجی‌کالا</span>و <span className="login__paragraphBlue">قوانین حریم خصوصی</span> است</p>
                <p className="login__formError">{formError}</p>
        </form>
    )
}

export default LoginPhoneNumberForm