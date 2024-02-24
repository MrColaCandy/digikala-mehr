import "./style.css"
import usePersian from "@components/hooks/usePersian";

const EditPriceSuggestions = ({value,setValue}) => {
    const suggestions=[100000,200000,300000,500000];
    const {convert,addCommas}=usePersian()
    const handleClick = (suggestion) => {
        setValue(suggestion);
    };

    const renderSuggestions = () => {
        return suggestions.map((suggestionValue) => {

            return (
                <button
                    value={suggestionValue}
                    key={suggestionValue}
                    className={suggestionValue===value?"choosePrice__suggestion--active":"choosePrice__suggestion"}
                    onClick={() => handleClick(suggestionValue)}
                    type="button"
                >
                    {convert(addCommas(suggestionValue))}{" "}
                    <span className={`choosePrice__suggestionCurrency${suggestionValue === value?"--active":""}`}>تومان</span>
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

export default EditPriceSuggestions