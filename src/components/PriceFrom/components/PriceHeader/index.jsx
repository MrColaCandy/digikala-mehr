import { useNavigate } from "react-router-dom";

import "./style.css";

const PriceHeader = ({ projectName = "انتخابیت" }) => {
  const navigate = useNavigate();

  function handleBackClick() {
    navigate(-1);
  }

  return (
    <div className="priceForm__headerWrapper">
      <div className="priceForm__back">
        <button onClick={handleBackClick} className="priceForm__backButton">
          بازگشت
        </button>
      </div>
      <div className="priceForm__header">
        <div className="priceForm__phase">
          <div className="priceForm__currentPhase">مرحله 3 از 3</div>
          <h1 className="priceForm__headerTitle">
            مبلغ <span className="priceForm__headerTextGreen">کمک ات </span>رو
            انتخاب کن.
          </h1>
          <div className="priceForm__headerSubtitle">
            <span>این مبلغ ماهیانه از حقوقت صرف پروژه {projectName} میشه.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceHeader;
