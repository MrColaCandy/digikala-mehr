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
  className = "",
  as: As = 'button',
  to,
  href,
}) => {
  return (
    <As
      disabled={isLoading}
      style={{
        maxWidth: `${width + "px" || "100%"}`,
        margin: `${margin}`,
        backgroundColor: `${variant === "outlined" ? "white" : color}`,
        borderColor: `${color}`,
        color: `${variant === "outlined" ? color : "white"}`,
      }}
      to={to}
      href={href}
      onClick={onClick}
      className={`button--${variant} ${className}`}
    >
      {!isLoading && <div>{text}</div>}
      {isLoading && <Loader color={color} />}
    </As>
  );
};

export default Button;
