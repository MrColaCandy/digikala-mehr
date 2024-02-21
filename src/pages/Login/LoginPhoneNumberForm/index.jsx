import { useState, useRef } from "react"
import digikalaMehrLogo from '@assets/decorations/digikala-mehr-logo.png'
import { useAuth } from "@components/hooks/useAuth"
import Button from "@components/Button"
import "./style.css"
function LoginPhoneNumberForm({ phone, setPhone,  setCode, setRegistrationError,title,description }) {

    const { getOTPCode } = useAuth()
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

    async function handleLoginPhoneSubmit(e) {
        e.preventDefault()
        if (error || !phone) return;
        setIsLoading(true);
        try {
            const code=  await getOTPCode(phone)
            setCode(code)
            setError(null)
            setRegistrationError(false)
        } catch (error) {
            console.log("Something went wrong! error: " + error.message)
            setError(error.message);
            if(error.message==="404")
            {
                setRegistrationError(true);
            }
            setCode(false);
        }
        finally {
           setIsLoading(false)
        }
    }
    return (
        <form onSubmit={handleLoginPhoneSubmit} className={"login__form"}>
            <img src={digikalaMehrLogo} className={"login__image"} />
            <div className={"login__header"}>
                <h2 className="login__title">{title}</h2>
                <p className="login__paragraph">{description}</p>
            </div>

            <div className="login__input">
                <input onBlur={(e) => validate(e.target.value)} autoFocus ref={inputRef} name="phone" value={phone} onChange={handlePhoneInputChange} type="tel" className={`login__inputController${error?"--error":""}`} />
                {error && <p className="login__error">{error}</p>}
            </div>
            <Button color={"#00B189"}  width={"332px"} isLoading={isLoading} text={"ورود"} variant={"filled"}/>
            


            <p className="login__paragraph">ورود شما به معنای پذیرش <span className="login__paragraphBlue">
                شرایط دیجی‌کالا</span>و <span className="login__paragraphBlue">قوانین حریم خصوصی</span> است</p>

        </form>
    )
}

export default LoginPhoneNumberForm