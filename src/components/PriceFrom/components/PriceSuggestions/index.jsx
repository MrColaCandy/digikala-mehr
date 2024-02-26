import "./style.css"
import usePersian from "@components/hooks/usePersian";

const PriceSuggestions = ({value,setValue,validate}) => {
    const suggestions=[100000,200000,300000,500000];
    const {convert,addCommas}=usePersian()
    const handleClick = (suggestion) => {
        validate(suggestion);
        setValue(suggestion);
    };

    const renderSuggestions = () => {
        return suggestions.map((suggestionValue) => {

            return (
                <button
                    value={suggestionValue}
                    key={suggestionValue}
                    className={suggestionValue===value?"priceForm__suggestion--active":"priceForm__suggestion"}
                    onClick={() => handleClick(suggestionValue)}
                    type="button"
                >
                    {convert(addCommas(suggestionValue))}{" "}
                    <span className={`priceForm__suggestionCurrency${suggestionValue === value?"--active":""}`}>تومان</span>
                </button>
            );
        });
    };
    return (
        <div className="priceForm__suggestionsText">

            یا از پیشنهاد‌های ما انتخاب کنید (بر اساس محبوب‌ترین‌ها)

            <div className="priceForm__suggestions">
                {renderSuggestions()}
            </div>
        </div>
    )
}

export default PriceSuggestions