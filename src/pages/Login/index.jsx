import "./style.css";
import { useState } from "react";
import PhoneNumberForm from "./components/PhoneNumberForm";
import OTPCodeForm from "./components/OTPCodeForm";
import Error from "./components/Error";

function Login() {
  const [phone, setPhone] = useState("");
  const [hasCode, setHasCode] = useState(false);
  const [registrationError, setRegistrationError] = useState(false);

  return (
    <article className="login">
      {!hasCode && !registrationError && (
        <PhoneNumberForm
          phone={phone}
          setPhone={setPhone}
          setHasCode={setHasCode}
          setRegistrationError={setRegistrationError}
        />
      )}
      {hasCode && !registrationError && <OTPCodeForm phone={phone} />}
      {registrationError && (
        <Error
          phone={phone}
          setHasCode={setHasCode}
          setRegistrationError={setRegistrationError}
        />
      )}
    </article>
  );
}
export default Login;
