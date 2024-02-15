import phoneNumberErrorCat from '@assets/decorations/phone-number-error-cat.png'

function Error({ phone, setRegistrationError, setHasCode }) {
  function handleChangePhoneButtonClick() {
    setRegistrationError(false);
    setHasCode(false);
  }
  return (
    <section className="loginCatError">


      <h2 className="login__title">شماره‌ی موبایل ثبت نشده!</h2>
      <p className="login__paragraph">شماره‌ی {phone} در لیست همکاران دیجی‌کالا موجود نیست</p>
      <p className="login__paragraph">حتما شماره‌ای که در شرکت ثبت شده را وارد کنید.</p>

      <img src={phoneNumberErrorCat} />

      <button onClick={handleChangePhoneButtonClick} className="login__button"><span className="errorPhoneNumber__btn--word">تغییر شماره تلفن</span></button>
    </section>
  );
}

export default Error