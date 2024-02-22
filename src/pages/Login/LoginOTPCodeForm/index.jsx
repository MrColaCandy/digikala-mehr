import digikalaMehrLogo from '@assets/decorations/digikala-mehr-logo.png'
import Button from '@components/Button';
import usePersian from "@components/hooks/usePersian"

function LoginOTPCodeForm({ onSubmit, phone, error, validate, code, seconds, minutes, isLoading, onChange, regex }) {
    const {convert}=usePersian()
    return (
        <form onSubmit={onSubmit} className='login__form'>
            <img src={digikalaMehrLogo} className="login__image" />

            <div className={"login__header"}>
                <p className="login__paragraph">سلام!  برای شروع</p>
                <h2 className="login__title">رمز یک‌بار‌مصرفی که برات ارسال شد را وارد کن</h2>
                <p className="login__paragraph">کد تایید برای شماره {phone} ارسال شد.</p>
            </div>
            <div className='login__input'>
                <input autoFocus onBlur={(e) => validate(e.target.value, regex)} value={code} onChange={(e) => {
                    onChange(e);
                    validate(e.target.value, regex)
                }} name='OTPCode' type="text" className={`login__inputController${error ? "--error" : ""}`} />
                {error && <p className="login__error">{error}</p>}
            </div>
            <p className='login__paragraph login__countDown'>{convert(minutes)}{minutes===0?"":":"}{convert(seconds)} مانده تا دریافت مجدد کد</p>
            <Button variant='filled' width={332} text={"تایید"} isLoading={isLoading} />
            <p className='login__paragraph'></p>
        </form>
    );
}

export default LoginOTPCodeForm