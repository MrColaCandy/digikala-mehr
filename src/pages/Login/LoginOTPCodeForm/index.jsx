import digikalaMehrLogo from '@assets/decorations/digikala-mehr-logo.png'
import { useAuth } from '@components/hooks/useAuth';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useCountdown from './useCountdown';
import Button from '@components/Button';
import "./style.css"
import { parse } from 'cookie';

function LoginOTPCodeForm({ phone }) {
    const { sendOTPCode } = useAuth();
    const { minutes, seconds, resetCountdown } = useCountdown(90, handleCountdownOverCallback);
    const { confirmOTPCode } = useAuth();
    const [code, setCode] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const inputRef = useRef(null);

    const navigate = useNavigate();

    function validate(value) {
        const regex = /^[0-9]*$/;
        if (value === "") {
            setError("لطفا این قسمت را خالی نگذارید.")
            return;
        }
        if (!regex.test(value)) {
            setError("فرمت کد صحیح نیست!")
            return;
        }
        setError(null);

    }
    function handleCodeInputChange(e) {
        validate(e.target.value)
        setCode(e.target.value);

    }

    async function handleCountdownOverCallback() {
        try {
            await sendOTPCode(phone);
            resetCountdown();
        } catch (error) {
            setError(error.message);
        }
    }
    async function handleConfirmSubmit(e) {
        e.preventDefault();
        if (error || !code) return;

        setIsLoading(true);
        try {
            await confirmOTPCode(phone, code);
            setError(null);
            navigate(parse(document.cookie).nextPage || "/");
        } catch (error) {
            console.log("Something went wrong! error: " + error.message);
            setError(error.message);
        }
        finally {
            setIsLoading(false);
        }

    }
    return (
        <form onSubmit={handleConfirmSubmit} className='login__codeForm'>
            <img src={digikalaMehrLogo} className="login__image" />
          
                <div className={"login__header"}>
                    <h2 className="login__title">رمز یک‌بار‌مصرفی که برات ارسال شد را وارد کن</h2>
                    <p className="login__paragraph">کد تایید برای شماره {phone} ارسال شد.</p>
                </div>
                <div className='login__input'>
                    <input autoFocus onBlur={(e) => validate(e.target.value)} ref={inputRef} value={code} onChange={handleCodeInputChange} name='OTPCode' type="text" className={`login__inputController${error?"--error":""}`} />
                    {error && <p className="login__error">{error}</p>}
                </div>
                <div className='login__countdown'>{seconds} : {minutes} مانده تا دریافت مجدد کد</div>
                <Button variant='filled' width={"332px"} text={"تایید"} isLoading={isLoading}/>
        </form>
    );
}

export default LoginOTPCodeForm