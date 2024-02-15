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
                <div className="loader"></div>
            }
        </button>
    )
}

export default Button