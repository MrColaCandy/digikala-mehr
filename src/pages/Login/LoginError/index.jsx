import phoneNumberErrorCat from '@assets/decorations/phone-number-error-cat.png'
import Button from '@components/Button';
import "./style.css"
import usePersian from "@components/hooks/usePersian"
function LoginError({ phone,  setPhoneNotFound, setCode }) {
  const {convert} =usePersian();
    
  function handleChangePhoneButtonClick() {
    setPhoneNotFound(false);
    setCode(null) }
  return (
    <section className="loginCatError">
      <h2 className="loginCatError__title">شماره‌ی موبایل ثبت نشده!</h2>
      <p className="loginCatError__text">شماره‌ی {convert(phone)} در لیست همکاران دیجی‌کالا موجود نیست</p>
      <p className="loginCatError__text">حتما شماره‌ای که در شرکت ثبت شده را وارد کنید.</p>
      <img className='loginCatError__image' src={phoneNumberErrorCat} />
      <Button width='332px' onClick={handleChangePhoneButtonClick} variant='filled' text={"تغییر شماره"}/>
    </section>
  );
}

export default LoginError