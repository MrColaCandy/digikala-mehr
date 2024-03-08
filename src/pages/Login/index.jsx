import { useState } from "react";



import LoginPhoneNumberForm from "./LoginPhoneNumberForm";
import LoginOTPCodeForm from "./LoginOTPCodeForm";
import LoginError from "./LoginError";

import "./style.css";

function LoginColleagues() {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState(false);
  const [phoneNotFound, setPhoneNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    
      <article className="login">
        {!code && !phoneNotFound && (
          <LoginPhoneNumberForm
            setCode={setCode}
            setPhoneNotFound={setPhoneNotFound}
            setIsLoading={setIsLoading}
            isLoading={isLoading}
            setPhone={setPhone}
          />
        )}
        {code && !phoneNotFound && (
          <LoginOTPCodeForm
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            phone={phone}
            setCode={setCode}
            code={code}
          />
        )}
        {phoneNotFound && (
          <LoginError
            phone={phone}
            setCode={setCode}
            setPhoneNotFound={setPhoneNotFound}
          />
        )}
      </article>
   
  );
}
export default LoginColleagues;
