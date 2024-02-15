import "./style.css"

const Button = ({text,onClick,variant="outlined",className=""}) => {
    
    
    return (
        <button onClick={onClick} className={`button--${variant} ${className}`}>
            {text}
        </button>
    )
}

export default Button