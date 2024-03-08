import Loader from "@components/Loader";
import "./style.css";

const Button = ({
  color = "#00B189",
  isLoading = false,
  width = 355,
  margin = 0,
  text,
  onClick = () => {},
  variant = "outlined",
  to,
  href,
}) => {
  return (
    <button
      disabled={isLoading}
      style={{
        maxWidth: `${width + "px"}`,
        margin: `${margin}`,
        backgroundColor: `${variant === "outlined" ? "white" : color}`,
        borderColor: `${color}`,
        color: `${variant === "outlined" ? color : "white"}`,
      }}
      to={to}
      href={href}
      onClick={onClick}
      className={`button button--${variant}`}
    >
      {!isLoading && <div>{text}</div>}
      {isLoading && <Loader color={color} />}
    </button>
  );
};

export default Button;
