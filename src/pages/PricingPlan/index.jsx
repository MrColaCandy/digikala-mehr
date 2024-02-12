import { useEffect, useState } from "react";
import "./style.css";
import { fetchSuggestions } from "./requests";

const convertEnNumberToPersian = (number) => {
  const persian = {
    0: "۰",
    1: "۱",
    2: "۲",
    3: "۳",
    4: "۴",
    5: "۵",
    6: "۶",
    7: "۷",
    8: "۸",
    9: "۹",
  };
  return number.toString().replace(/[0-9]/g, (digit) => persian[digit]);
};

const addCommas = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const PricingPlan = () => {
  const [value, setValue] = useState();
  const [suggestions, setSuggestions] = useState([]);

  const handleClick = (suggestion) => {
    setValue(suggestion);
  };

  const handleSubmit = () => {
    console.log("form submitted");
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    fetchSuggestions().then(setSuggestions);
  }, []);

  const renderSuggestions = () => {
    return suggestions.map((suggestionValue) => {
      const isActive = suggestionValue === value;
      const className = isActive
        ? `proposal-buttons active-button`
        : `proposal-buttons`;

      return (
        <button
          value={suggestionValue}
          key={suggestionValue}
          className={className}
          onClick={() => handleClick(suggestionValue)}
          type="button"
        >
          {convertEnNumberToPersian(addCommas(suggestionValue))}{" "}
          <span className="proposal-buttons-span">تومان</span>
        </button>
      );
    });
  };

  return (
    <div className="main-pricing-plan-section">
      <div className="main-header-div">
        <div className="Pricing-Plan-Header">
          <p className="third-step">مرحله 3 از 3</p>
          <h1 className="header-content">
            مبلغ <span className="header-content-span">کمک ات </span>رو انتخاب
            کن.
          </h1>
          <p className="main-header-content">
            این مبلغ قراره ماهیانه از حقوقت کم و صرف کمک به تهیه مخزن آب برای
            حیات وحش گناباد بشه.{" "}
            <a className="main-header-content-link">تغییر پروژه</a>
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="pricing-plan-form">
        <div className="main-price-section">
          <div className="label-content">
            <label className="main-price-section-label">
              مبلغ را به تومان وارد کنید
            </label>
          </div>
          <div className="price-section-body">
            <div className="manual-gap">
              <div className="price-section">
                <input
                  className="price-input"
                  type="text"
                  value={value}
                  onChange={handleInputChange}
                />
                <span className="toman-span">تومان</span>
                {value && (
                  <p className="price-detail">
                    {convertEnNumberToPersian(addCommas(value))} تومان
                  </p>
                )}
              </div>
              <div className="proposal-text">
                <p className="proposal-text-content">
                  یا از پیشنهاد‌های ما انتخاب کنید (بر اساس محبوب‌ترین‌ها)
                </p>
                <div className="main-proposal-buttons">
                  {renderSuggestions()}
                </div>
              </div>
            </div>
            <div className="main-pricing-footer">
              <div className="pricing-footer-content">
                <p className="pricing-footer-content-text">
                  هر موقع خواستید می‌‌تونید پرداخت رو لغو کنید.
                </p>
                <p className="pricing-footer-content-text">
                  هر موقع خواستید می‌‌تونید قیمت رو تغییر بدید.
                </p>
                <p className="pricing-footer-content-text">
                  در صورت لغو نکردن، اشتراک به مدت ۶ ماه اعتبار دارد.
                </p>
              </div>
              <button type="submit" className="confirm-price-button">
                تایید
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PricingPlan;
