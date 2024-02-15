import { useEffect ,useState } from "react";
import { fetchSuggestions } from "../../requests";
import "./style.css"
import usePersianNumberConverter from "../../hooks/usePersianNumberConverter";

const ChoosePriceSuggestions = ({value,setValue}) => {
    const [suggestions, setSuggestions] = useState([]);
    const {convertEnNumberToPersian,addCommas}=usePersianNumberConverter()
    const handleClick = (suggestion) => {
        setValue(suggestion);
    };

    useEffect(() => {
        fetchSuggestions().then(setSuggestions);
    }, []);

    const renderSuggestions = () => {
        return suggestions.map((suggestionValue) => {
            const isActive = suggestionValue === value;
            const className = isActive
                ? `choosePrice__suggestion active-button`
                : `choosePrice__suggestion`;

            return (
                <button
                    value={suggestionValue}
                    key={suggestionValue}
                    className={className}
                    onClick={() => handleClick(suggestionValue)}
                    type="button"
                >
                    {convertEnNumberToPersian(addCommas(suggestionValue))}{" "}
                    <span className="choosePrice__suggestionPrefix">تومان</span>
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