import { useState } from "react";
import "./style.css"
import usePersian from "@components/hooks/usePersian";

const ChoosePriceSuggestions = ({value,setValue}) => {
    const [suggestions] = useState([100000,200000,300000,500000]);
    const {convert,addCommas}=usePersian()
    const handleClick = (suggestion) => {
        setValue(suggestion);
    };

    const renderSuggestions = () => {
        return suggestions.map((suggestionValue) => {
            const isActive = suggestionValue === value;
            const className = isActive
                ? `choosePrice__suggestion--active`
                : `choosePrice__suggestion`;

            return (
                <button
                    value={suggestionValue}
                    key={suggestionValue}
                    className={className}
                    onClick={() => handleClick(suggestionValue)}
                    type="button"
                >
                    {convert(addCommas(suggestionValue))}{" "}
                    <span className={`choosePrice__suggestionCurrency${isActive?"--active":""}`}>تومان</span>
                </button>
            );
        });
    };
    return (
        <div className="choosePrice__suggestionsText">

            یا از پیشنهاد‌های ما انتخاب کنید (بر اساس محبوب‌ترین‌ها)

            <div className="choosePrice__suggestions">
                {renderSuggestions()}
            </div>
        </div>
    )
}

export default ChoosePriceSuggestions