import digikalaMehrLogo from '@assets/decorations/digikala-mehr-logo.png'
import Button from '@components/Button';
import usePersian from "@components/hooks/usePersian"
import { useRef, useState } from 'react';
import { useAuth } from "@components/hooks/useAuth"
import { useNavigate } from "react-router-dom"
import useCountdown from '../useCountdown';
import { useProject } from '@components/hooks/useProject';

function LoginOTPCodeForm({ isLoading, setIsLoading, phone, setCode }) {
    const inputRef = useRef(null)
    const { validateOTPCode, getOTPCode,setIsLoggedIn} = useAuth()
    const navigate = useNavigate()
    const { convert } = usePersian()
    const { minutes, seconds, resetCountdown } = useCountdown(90, handleCountdownOverCallback);
    const [value, setValue] = useState("");
    const [error, setError] = useState(null);
    const [formError, setFormError] = useState(null);
    const { getUser, setUser,setActiveProject,getActiveProject } = useProject();



    async function handleCountdownOverCallback() {
        try {
            resetCountdown();
            const otp = await getOTPCode(phone);
            console.log(otp);
            setCode(true);
        } catch (error) {
            setCode(false);
            if (error.message.toLowerCase() == "network error") {
                setFormError("لطفاًً اتصال به شبکه را برسی کنید.")
                return;
            }
            if (!error) {
                setFormError(error.message);
            }
        }
    }
    async function login()
    {
        try {
            await validateOTPCode({ otp: value.trim() });
            setIsLoggedIn(true);
            setError(null);
        } catch (error) {
            inputRef?.current?.focus()
            inputRef?.current?.select()
            if (error.message.toLowerCase() == "network error") {
                setFormError("لطفاًً اتصال به شبکه را برسی کنید.")
                return;
            }
            if (error.message.toLowerCase() == "request failed with status code 400") {
                setFormError("کد معتبر نیست!");
                return;

            }
            if (!error) {
                setFormError(error.message);
            }
        }
       
    }

    async function initUser()
    {
        try {
            const user=await getUser();
            setUser(user);
        } catch (error) {
            setUser(null);
            navigate("/login")
        }
    }
    async function initData()
    {
        try{
          const activeProject=await getActiveProject();
          setActiveProject(activeProject);
        }catch(error)
        {
            setActiveProject(null);
        }
    }
    async function handleSubmit(e) {
        e.preventDefault();
        if (error || !value || value == "" || formError) return;
        setIsLoading(true)
        await login();
        await initUser();
        await initData();
        navigate("/");
        setIsLoading(false);

    }
    function validate(value) {
        if (value === "" || !value) {
            setError("لطفاًً این قسمت را خالی نگذارید.")
            return;
        }
        if (!/^[0-9]*$/.test(value)) {
            setError("ساختار کد معتبر نیست!");
            return;
        }
        setError(null);

    }
    function handelValueChange(e) {
        setFormError(null);
        validate(e.target.value)
        setValue(e.target.value);
    }
    function handleBlur(e) {
        validate(e.target.value)
    }
    return (
        <form onSubmit={handleSubmit} className="login__codeForm">
            <img src={digikalaMehrLogo} className="login__image" />

            <div className={"login__header"}>
                <p className="login__paragraph">سلام!  برای شروع</p>
                <h2 className="login__title">رمز یک‌بار‌مصرفی که برات ارسال شد را وارد کن</h2>
                <p className="login__paragraph">کد تایید برای شماره {convert(phone)} ارسال شد.</p>
            </div>
            <div className='login__input'>
                <input ref={inputRef} autoFocus onBlur={handleBlur} value={value} onChange={handelValueChange} name='OTPCode' type="text" className={`login__inputController${error ? "--error" : ""}`} />
                <p className="login__error">{error}</p>
            </div>
            <p className='login__paragraph login__countDown'>{convert(minutes)}{minutes === 0 ? "" : ":"}{convert(seconds)} مانده تا دریافت مجدد کد</p>
            <Button variant='filled' width={332} text={"تایید"} isLoading={isLoading} />
            <p className="login__formError">{formError}</p>
        </form>
    );
}

export default LoginOTPCodeForm