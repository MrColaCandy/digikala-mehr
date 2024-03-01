import digikalaMehrLogo from "@assets/decorations/digikala-mehr-logo.png";
import Button from "@components/Button";
import usePersian from "@components/hooks/usePersian";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useCountdown from "../useCountdown";
import { useAuthContext } from "@contexts/auth";
import { requestCode, requestCodeValidation } from "@services/http";

function LoginOTPCodeForm({ isLoading, setIsLoading, phone, setCode }) {
  const inputRef = useRef(null);
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const { convert } = usePersian();
  const { minutes, seconds, resetCountdown } = useCountdown(
    90,
    handleCountdownOverCallback
  );
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);
  const [formError, setFormError] = useState(null);

  async function handleCountdownOverCallback() {
    try {
      resetCountdown();
      const { data: { otp } = {} } = await requestCode(phone);
      console.log(otp);
      setCode(true);
    } catch (error) {
      setCode(false);
      setError(error.message);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (error || !value || value == "" || formError) return;
    try {
      setIsLoading(true);
      const { token } = await requestCodeValidation(
        value.trim(),
        phone
      );
      console.log({ token });
      login(token);
      setError(null);
      navigate("/");
    } catch (error) {
  
      inputRef?.current?.focus();
      inputRef?.current?.select();
      const CODE_IS_INVALID=400;
      
      if(error?.response?.status==CODE_IS_INVALID)
      {
        setFormError("کد معتیر نیست!")
        return;
      }
      setFormError(error.message);

    } finally {
      setIsLoading(false);
    }
  }
  function validate(value) {
    if (value === "" || !value) {
      setError("لطفاًً این قسمت را خالی نگذارید.");
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
    validate(e.target.value);
    setValue(e.target.value);
  }
  function handleBlur(e) {
    validate(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit} className="login__codeForm">
      <img src={digikalaMehrLogo} className="login__image" />

      <div className={"login__header"}>
        <p className="login__paragraph">سلام! برای شروع</p>
        <h2 className="login__title">
          رمز یک‌بار‌مصرفی که برات ارسال شد را وارد کن
        </h2>
        <p className="login__paragraph">
          کد تایید برای شماره {convert(phone)} ارسال شد.
        </p>
      </div>
      <div className="login__input">
        <input
          ref={inputRef}
          autoFocus
          onBlur={handleBlur}
          value={value}
          onChange={handelValueChange}
          name="OTPCode"
          type="text"
          className={`login__inputController${error ? "--error" : ""}`}
        />
        <p className="login__error">{error}</p>
      </div>
      <p className="login__paragraph login__countDown">
        <span>
          {convert(seconds)}
          {minutes !== 0 ? " : " + convert(minutes) : ""}
        </span>{" "}
        مانده تا دریافت مجدد کد
      </p>
      <Button
        variant="filled"
        width={332}
        text={"تایید"}
        isLoading={isLoading}
      />
      <p className="login__formError">{formError}</p>
    </form>
  );
}

export default LoginOTPCodeForm;
