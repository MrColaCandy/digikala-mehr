import "./style.css"

const Button = ({text,onClick,variant="outlined"}) => {
    
    
    return (
        <button onClick={onClick} className={`button--${variant}`}>
            {text}
        </button>
    )
}

export default Button