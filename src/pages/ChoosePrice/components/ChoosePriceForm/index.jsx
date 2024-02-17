import { useState } from "react";

import "./style.css"
import Button from "@components/Button"
import ChoosePriceSuggestions from "../ChoosePriceSuggestions";
import ChoosePriceFooter from "../ChoosePriceFooter"
import usePersianNumberConverter from "../../hooks/usePersianNumberConverter";
import { useAuth } from "@components/hooks/useAuth";
import { postPrice } from "../../requests";
const ChoosePriceForm = () => {
    const {user}=useAuth();
    const [isLoading,setIsLoading]=useState(false)
    const [value, setValue] = useState();
    const {convertEnNumberToPersian,addCommas}=usePersianNumberConverter()
    const [error,setError]=useState(null);
    const handleInputChange = (event) => {
        setValue(event.target.value);
    };

    async function handleChoosePriceFormSubmit(e)
    {
        e.preventDefault()
        if(!value || value==="")
        {
            setError("لطفا این قسمت را خالی نگذارید.")
            return;
        }
        setIsLoading(true)
        const data={
           ...user,
           price:value,
        }
        try {
            await postPrice(data)
        } catch (error) {
            setError(error.message)
        }
        finally{
            setIsLoading(false)
        }
    }

    return (
        <form onSubmit={(e)=>handleChoosePriceFormSubmit(e)} className="choosePrice__form">
            <label className="choosePrice__formLabel">
                مبلغ را به تومان وارد کنید
            </label>
            <div className="choosePrice__input">
                <input
                    className="choosePrice__inputController"
                    type="text"
                    value={value}
                    onChange={handleInputChange}
                    name="price"
                />
                <span className="choosePrice__inputPrefix">تومان</span>

                <p className="choosePrice__inputInfo">
                    {
                        value && !error &&
                        <span>{convertEnNumberToPersian(addCommas(value))} تومان</span>
                    }
                    {
                        error &&
                        <span className="choosePrice__inputError">{error}</span>
                    }
                </p>

            </div>
           
             <ChoosePriceSuggestions value={value} setValue={setValue}/>
             <ChoosePriceFooter/>
            <Button isLoading={isLoading} width={"100%"} margin={0} variant={"filled"} text={"تایید"}/>

        </form>
    )
}

export default ChoosePriceForm