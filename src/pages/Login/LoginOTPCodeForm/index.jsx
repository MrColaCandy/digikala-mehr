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
    const { validateOTPCode, getOTPCode,setIsLoggedIn,setToken} = useAuth()
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
        } catch (status) {
            setCode(false);
            if (status == 12002) {
                setFormError("لطفاًً اتصال به شبکه را برسی کنید.")
                return;
            }
            if (status == 400 ||status == 404 ) {
                
                setFormError("کد معتبر نیست!");
                return;
            }
        }
    }
    async function login()
    {
        try {
            const token= await validateOTPCode({ otp: value.trim() });
            setToken(token);
            setIsLoggedIn(true);
            setError(null);
        } catch (status) {
            console.log("otp status",status);
            inputRef?.current?.focus()
            inputRef?.current?.select()
            if (status == 12002) {
                setFormError("لطفاًً اتصال به شبکه را برسی کنید.")
                throw status;
            }
            if (status == 400) {
                
                setFormError("کد معتبر نیست!");
                throw status;
            }
            

           
        }
       
    }

    async function initUser()
    {
        try {
            const user=await getUser();
            setUser(user);
        } catch (status) {
            setUser(null);
            throw status;
        }
    }
    async function initData()
    {
        try{
          const activeProject=await getActiveProject();
          setActiveProject(activeProject);
        }catch(status)
        {
            setActiveProject(null);
            throw status;
        }
    }
    async function handleSubmit(e) {
        e.preventDefault();
        if (error || !value || value == "" || formError) return;
        try {
        setIsLoading(true)
        await login();
        await initUser();
        await initData();
        navigate("/");
        } catch (status) {
            console.log("Failed to  login error code: "+status);
        }finally
        {
            setIsLoading(false);
        }

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
            <p className='login__paragraph login__countDown'><span>{convert(seconds)}{minutes !== 0 ? " : "+convert(minutes):"" }</span> مانده تا دریافت مجدد کد</p>
            <Button variant='filled' width={332} text={"تایید"} isLoading={isLoading} />
            <p className="login__formError">{formError}</p>
        </form>
    );
}

export default LoginOTPCodeForm