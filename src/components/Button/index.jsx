import Loader from "@components/Loader"
import "./style.css"

const Button = ({color="#00B189", isLoading=false,width="100%",margin=0,text,onClick=()=>{},variant="outlined",className=""}) => {
    
    
    return (
        <button disabled={isLoading} style={{maxWidth:`${width}`,margin:`${margin}`,backgroundColor:`${variant==="outlined"?"white":color}`,borderColor:`${color}`}} onClick={onClick} className={`button--${variant} ${className}`}>
            {
                !isLoading &&
                <div>{text}</div>
            }
            {
                isLoading &&
                <Loader color={color}/>
            }
        </button>
    )
}

export default Button