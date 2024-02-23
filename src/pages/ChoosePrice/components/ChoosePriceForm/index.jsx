import { useState } from "react";
import "./style.css"
import Button from "@components/Button"
import ChoosePriceSuggestions from "../ChoosePriceSuggestions";
import ChoosePriceFooter from "../ChoosePriceFooter"
import usePersian from "@components/hooks/usePersian";
import { useAuth } from "@components/hooks/useAuth";
import { requestAddProject } from "@components/requests";
import {useNavigate} from "react-router-dom"
import { parse, serialize } from "cookie";
const ChoosePriceForm = () => {
    const {token,updateUserData}=useAuth();
    const navigate=useNavigate();
    const [isLoading,setIsLoading]=useState(false)
    const [value, setValue] = useState();
    const {convert,addCommas}=usePersian()
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
        
            await requestAddProject({projectId:parse(document.cookie).projectId,price:value,token:token})
            await updateUserData(token);
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
             <Button isLoading={isLoading} width={440} margin={0} variant={"filled"} text={"تایید"}/>

        </form>
    )
}

export default ChoosePriceForm