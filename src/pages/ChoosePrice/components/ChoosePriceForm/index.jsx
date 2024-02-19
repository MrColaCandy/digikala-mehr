import { useState } from "react";

import "./style.css"
import Button from "@components/Button"
import ChoosePriceSuggestions from "../ChoosePriceSuggestions";
import ChoosePriceFooter from "../ChoosePriceFooter"
import usePersianNumberConverter from "@components/hooks/usePersianNumberConverter";
import { useAuth } from "@components/hooks/useAuth";
import { postPrice } from "../../requests";
import {useNavigate} from "react-router-dom"
import { serialize } from "cookie";
const ChoosePriceForm = () => {
    const {user,setUser}=useAuth();
    const navigate=useNavigate();
    const [isLoading,setIsLoading]=useState(false)
    const [value, setValue] = useState();
    const {convert,addCommas}=usePersianNumberConverter()
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
        try {
            await postPrice(value)
    
            user.projects.push(user.currentProject)
            setUser({...user});
            localStorage.setItem("user",JSON.stringify(user));
            document.cookie=serialize("newProject",true);
            navigate("/profile")
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
                        <span>{convert(addCommas(value))} تومان</span>
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