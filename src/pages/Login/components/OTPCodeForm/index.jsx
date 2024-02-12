import digikalaMehrLogo from '@assets/decorations/digikala-mehr-logo.png'
import { useAuth } from '@components/AuthContext/context'
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import useCountdown from './useCountdown';


function OTPCodeForm({ phone }) {
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
            navigate("/");
        } catch (error) {
            console.log("Something went wrong! error: " + error.message);
            setError(error.message);
        }
        finally {
            setIsLoading(false);
        }

    }
    return (
        <form onSubmit={handleConfirmSubmit} className="sendCode">
            <img src={digikalaMehrLogo} className="img" />
            <div className="sendCode__information">
                <div className="sendCode__paragraph">
                    <p className="paragraph greeting">دلارام عزیز سلام، برای شروع</p>
                    <h2 className="title">رمز یک‌بار‌مصرفی که برات ارسال شد را وارد کن</h2>
                </div>
                <p className="paragraph">کد تایید برای شماره {phone} ارسال شد.</p>
                <div className="sendCode__entrance">
                    <div className='inputGroup'>
                        <input autoFocus onBlur={(e) => validate(e.target.value)} ref={inputRef} value={code} onChange={handleCodeInputChange} name='OTPCode' type="text" className="input" />
                        {error && <p className="addPhoneNumber__Error">{error}</p>}
                    </div>
                    <div className="sendCode__entranceDetails">
                        <div className='resend-code'>{seconds} : {minutes} مانده تا دریافت مجدد کد</div>
                        <button disabled={isLoading} className="btn">
                            {
                                isLoading &&
                                <div className='loader'></div>
                            }
                            {
                                !isLoading &&
                                <div>ورود</div>
                            }
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default OTPCodeForm