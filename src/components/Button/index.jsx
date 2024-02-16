import Loader from "@components/Loader"
import "./style.css"

const Button = ({isLoading=false,width="100%",margin=0,text,onClick=()=>{},variant="outlined",className=""}) => {
    
    
    return (
        <button disabled={isLoading} style={{maxWidth:`${width}`,margin:`${margin}`}} onClick={onClick} className={`button--${variant} ${className}`}>
            {
                !isLoading &&
                <div>{text}</div>
            }
            {
                isLoading &&
                <Loader/>
            }
        </button>
    )
}

export default Button