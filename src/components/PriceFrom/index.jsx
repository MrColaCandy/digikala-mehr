import { useState } from "react";
import "./style.css"
import Button from "@components/Button"
import PriceSuggestions from "./components/PriceSuggestions";
import PriceFooter from "./components/PriceFooter"
import usePersian from "@components/hooks/usePersian";
import PriceHeader from "./components/PriceHeader";

const PriceForm = ({ onSubmit}) => {

    const [value, setValue] = useState("");
    const [isLoading,setIsLoading]=useState(false);
    const { convert, addCommas } = usePersian()
    const [error, setError] = useState(null);
    const [formError,setFormError]=useState(null)
    const handleInputChange = (e) => {
        validate(e.target.value.trim());
        setValue(e.target.value);

    };
    async function handleSubmit(e)
    {   e.preventDefault()
        if(error || value=="" || !value)return;
        setIsLoading(true);
        try {
            await onSubmit(e);
        } catch (error) {
            console.log("Failed to add project. com:PriceForm. error: "+error.message);
            if (error.message.toLowerCase() == "network error") {
                setFormError("لطفاًً اتصال به شبکه را برسی کنید.")
                return;
            }
            if(error.message.toLowerCase().includes("500"))
            {
                setFormError("لطفاًً اتصال به شبکه را برسی کنید.")
                return;
            }
        }finally{

            setIsLoading(false);
        }
    }
    function validate(value) {
        const regex = /^[0-9]*$/;
        if (!value || value == "") {
            setError("لطفاً این قسمت را خالی نگذارید.");

        }
        else if (!regex.test(value)) {
            setError("لطفاً مبلغ را به عدد وارد کنید.");

        }

        else {
            setError(null);
        }
    }

   

    return (
        <>
            <PriceHeader />
            <form onSubmit={handleSubmit} className="priceForm__form">
                <label className="priceForm__formLabel">
                    مبلغ را به تومان وارد کنید
                </label>
                <div className="priceForm__input">
                    <input
                        className="priceForm__inputController"
                        type="text"
                        value={value}
                        onChange={handleInputChange}
                        onBlur={(e) => validate(e.target.value)}
                        name="price"
                    />
                    <span className="priceForm__inputPrefix">تومان</span>

                    <p className="priceForm__inputInfo">
                        {
                            value && !error &&
                            <span>{convert(addCommas(value))} تومان</span>
                        }
                        {
                            error &&
                            <span className="priceForm__inputError">{error}</span>
                        }
                    </p>

                </div>

                <PriceSuggestions value={value} setValue={setValue} validate={validate} />
                <PriceFooter />
                <Button isLoading={isLoading} width={440} margin={0} variant={"filled"} text={"تایید"} />
                <p className="priceForm__formError">{formError}</p>
            </form>
        </>
    )
}

export default PriceForm