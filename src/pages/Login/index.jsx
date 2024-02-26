import "./style.css";
import { useState } from "react";
import LoginPhoneNumberForm from "./LoginPhoneNumberForm";
import LoginOTPCodeForm from "./LoginOTPCodeForm";
import LoginError from "./LoginError";
function LoginColleagues() {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState(false);
  const [registrationError, setRegistrationError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <article className="login">
        {!code && !registrationError && (
          <LoginPhoneNumberForm
           setCode={setCode}
           setRegistrationError={setRegistrationError}
           setIsLoading={setIsLoading}
           isLoading={isLoading}
           setPhone={setPhone}
          
          />
        )}
        {code && !registrationError &&
          <LoginOTPCodeForm
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          phone={phone}
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
