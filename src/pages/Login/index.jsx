import "./style.css";
import { useState } from "react";
import LoginPhoneNumberForm from "./LoginPhoneNumberForm";
import LoginOTPCodeForm from "./LoginOTPCodeForm";
import LoginError from "./LoginError";
import { useAuth } from "@components/hooks/useAuth"
import useCountdown from './useCountdown';
import { parse } from 'cookie';
import {useNavigate} from "react-router-dom"
function LoginColleagues() {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState(null);
  const [registrationError, setRegistrationError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { getOTPCode,validateOTPCode } = useAuth()
  const [error, setError] = useState(null)
  const { minutes, seconds, resetCountdown } = useCountdown(90, handleCountdownOverCallback);
  const navigate =useNavigate()
  function validate(value,regex) {

    if (value === "" || !value) {
      setError("لطفا این قسمت را خالی نگذارید.")
      return;
    }
    if (!regex?.test(value)) {
      setError("فرمت شماره موبایل صحیح نیست!");
      return;
    }
    setError(null);

  }
  function handlePhoneInputChange(e) {
    setPhone(e.target.value)
  }

  async function handleLoginPhoneSubmit(e) {
    e.preventDefault()
    if (error || !phone) return;
    setIsLoading(true);
    try {
      const code = await getOTPCode(phone)
      setCode(code)
      setError(null)
      setRegistrationError(false)
    } catch (error) {
      console.log("Something went wrong! error: " + error.message)
      setError(error.message);
      if (error.message === "404") {
        setRegistrationError(true);
      }
      setCode(false);
    }
    finally {
      setIsLoading(false)
    }
  }

  function handleCodeInputChange(e) {
    validate(e.target.value)
    setCode(e.target.value);

  }

  async function handleCountdownOverCallback() {
    try {
      resetCountdown();
      const  otp  = await getOTPCode(phone);
      setCode(otp);
    } catch (error) {
      setError(error.message);
    }
  }
  async function handleConfirmSubmit(e) {
    e.preventDefault();
    if (error || !code) return;

    setIsLoading(true);
    try {
      await validateOTPCode({ otp: code });
      navigate(parse(document.cookie).nextPage || "/");
      setError(null);
    } catch (error) {
      console.log("Something went wrong! error: " + error.message);
      setError(error.message);
    }
    finally {
      setIsLoading(false);
    }

  }
  return (
    <article className="login">
      {!code && !registrationError && (
        <LoginPhoneNumberForm
          onSubmit={handleLoginPhoneSubmit}
          validate={validate}
          regex={/^([0|+[0-9]{1,5})?([7-9][0-9]{9})$/}
          phone={phone}
          onChange={handlePhoneInputChange}
          error={error}
          isLoading={isLoading}
        />
      )}
      {code && !registrationError &&
        <LoginOTPCodeForm
          phone={phone}
          code={code}
          onChange={handleCodeInputChange}
          onSubmit={handleConfirmSubmit}
          error={error}
          seconds={seconds}
          minutes={minutes}
          isLoading={isLoading}
          regex={/^[0-9]*$/}
          validate={validate}

        />
      }
      {registrationError && (
        <LoginError
          phone={phone}
          setCode={setCode}
          setRegistrationError={setRegistrationError}
        />
      )}
    </article>
  );
}
export default LoginColleagues;
