import { useEffect ,useState } from "react";
import { fetchSuggestions } from "../../requests";
import "./style.css"
import usePersianNumberConverter from "@components/hooks/usePersianNumberConverter";

const EditPriceSuggestions = ({value,setValue}) => {
    const [suggestions, setSuggestions] = useState([]);
    const {convert,addCommas}=usePersianNumberConverter()
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
                ? `editPrice__suggestion--active`
                : `editPrice__suggestion`;

            return (
                <button
                    value={suggestionValue}
                    key={suggestionValue}
                    className={className}
                    onClick={() => handleClick(suggestionValue)}
                    type="button"
                >
                    {convert(addCommas(suggestionValue))}{" "}
                    <span className="editPrice__suggestionCurrency">تومان</span>
                </button>
            );
        });
    };
    return (
        <div className="editPrice__suggestionsText">

            یا از پیشنهاد‌های ما انتخاب کنید (بر اساس محبوب‌ترین‌ها)

            <div className="editPrice__suggestions">
                {renderSuggestions()}
            </div>
        </div>
    )
}

export default EditPriceSuggestions