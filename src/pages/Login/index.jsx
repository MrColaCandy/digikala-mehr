import "./style.css";
import { useState } from "react";
import LoginPhoneNumberForm from "./LoginPhoneNumberForm";
import LoginOTPCodeForm from "./LoginOTPCodeForm";
import LoginError from "./LoginError";

function LoginColleagues() {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState(null);
  const [registrationError, setRegistrationError] = useState(false);

  return (
    <article className="login">
      {!code && !registrationError && (
        <LoginPhoneNumberForm
          title={"ورود همکاران"}
          description={"سلام همکار عزیز، قراره با هم دیگه کارای بزرگی انجام بدیم برای شروع لطفا شماره موبایل خود را وارد کنید."}
          phone={phone}
          setPhone={setPhone}
          setCode={setCode}
          setRegistrationError={setRegistrationError}
        />
      )}
      {code && !registrationError && 
      <LoginOTPCodeForm 
      phone={phone}
      code={code}
      setCode={setCode}
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
