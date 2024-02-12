import phoneNumberErrorCat from '@assets/decorations/phone-number-error-cat.png'

function Error({ phone, setRegistrationError, setHasCode }) {
  function handleChangePhoneButtonClick() {
    setRegistrationError(false);
    setHasCode(false);
  }
  return (
    <section className="errorPhoneNumber">
      <div className="errorPhoneNumber__information">
        <div className="errorPhoneNumber__paragraph">
          <h2 className="title">شماره‌ی موبایل ثبت نشده!</h2>
          <p className="paragraph">شماره‌ی {phone} در لیست همکاران دیجی‌کالا موجود نیست</p>
          <p className="paragraph">حتما شماره‌ای که در شرکت ثبت شده را وارد کنید.</p>
        </div>
        <img src={phoneNumberErrorCat} className="errorPhoneNumber__img" />
      </div>
      <button onClick={handleChangePhoneButtonClick} className="errorPhoneNumber__btn"><span className="errorPhoneNumber__btn--word">تغییر شماره تلفن</span></button>
    </section>
  );
}

export default Error