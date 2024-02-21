import phoneNumberErrorCat from '@assets/decorations/phone-number-error-cat.png'
import Button from '@components/Button';
import "./style.css"
function LoginError({ phone, setRegistrationError, setCode }) {
  function handleChangePhoneButtonClick() {
    setRegistrationError(false);
    setCode(null) }
  return (
    <section className="loginCatError">
      <h2 className="login__title">شماره‌ی موبایل ثبت نشده!</h2>
      <p className="login__paragraph">شماره‌ی {phone} در لیست همکاران دیجی‌کالا موجود نیست</p>
      <p className="login__paragraph">حتما شماره‌ای که در شرکت ثبت شده را وارد کنید.</p>
      <img className='loginCatError__image' src={phoneNumberErrorCat} />
      <Button width='332px' onClick={handleChangePhoneButtonClick} variant='filled' text={"تغییر شماره"}/>
    </section>
  );
}

export default LoginError