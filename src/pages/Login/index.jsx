import "./style.css";
import { useState } from "react";
import LoginPhoneNumberForm from "./LoginPhoneNumberForm";
import LoginOTPCodeForm from "./LoginOTPCodeForm";
import LoginError from "./LoginError";

function LoginColleagues() {
  const [phone, setPhone] = useState("");
  const [hasCode, setHasCode] = useState(false);
  const [registrationError, setRegistrationError] = useState(false);

  return (
    <article className="login">
      {!hasCode && !registrationError && (
        <LoginPhoneNumberForm
          title={"ورود همکاران"}
          description={"سلام همکار عزیز، قراره با هم دیگه کارای بزرگی انجام بدیم برای شروع لطفا شماره موبایل خود را وارد کنید."}
          phone={phone}
          setPhone={setPhone}
          setHasCode={setHasCode}
          setRegistrationError={setRegistrationError}
        />
      )}
      {hasCode && !registrationError && <LoginOTPCodeForm phone={phone} />}
      {registrationError && (
        <LoginError
          phone={phone}
          setHasCode={setHasCode}
          setRegistrationError={setRegistrationError}
        />
      )}
    </article>
  );
}
export default LoginColleagues;
