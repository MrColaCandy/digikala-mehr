import { useState } from "react";
import "./style.css"
import Button from "@components/Button"
import EditPriceSuggestions from "../EditPriceSuggestions";
import EditPriceFooter from "../EditPriceFooter"
import usePersian from "@components/hooks/usePersian";
import { useAuth } from "@components/hooks/useAuth";
import { postPrice } from "../../requests"
import { useNavigate } from "react-router-dom"
import { serialize } from "cookie";
const EditPriceForm = () => {
    const { user, setUser } = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)
    const [value, setValue] = useState();
    const { convert, addCommas } = usePersian()
    const [error, setError] = useState(null);
    const handleInputChange = (event) => {
        setValue(event.target.value);
    };

    async function handleChoosePriceFormSubmit(e) {
        e.preventDefault()
        if (!value || value === "") {
            setError("لطفا این قسمت را خالی نگذارید.")
            return;
        }
        setIsLoading(true)
        try {
            await postPrice(value)
            const index = user.projects.findIndex(p => p.id === user.editing.id);
            user.projects[index]={...user.editing,price:value}
            setUser(user);
            localStorage.setItem("user", JSON.stringify(user));
            document.cookie = serialize("editProject", true);
            navigate("/profile")
        } catch (error) {
            setError(error.message)
        }
        finally {
            setIsLoading(false)
        }
    }

    return (
        <form onSubmit={(e) => handleChoosePriceFormSubmit(e)} className="editPrice__form">
            <label className="editPrice__formLabel">
                مبلغ را به تومان وارد کنید
            </label>
            <div className="editPrice__input">
                <input
                    className="editPrice__inputController"
                    type="text"
                    value={value}
                    onChange={handleInputChange}
                    name="price"
                />
                <span className="editPrice__inputPrefix">تومان</span>

                <p className="editPrice__inputInfo">
                    {
                        value && !error &&
                        <span>{convert(addCommas(value))} تومان</span>
                    }
                    {
                        error &&
                        <span className="editPrice__inputError">{error}</span>
                    }
                </p>

            </div>

            <EditPriceSuggestions value={value} setValue={setValue} />
            <EditPriceFooter />
            <Button isLoading={isLoading} width={"100%"} margin={0} variant={"filled"} text={"تایید"} />

        </form>
    )
}

export default EditPriceForm