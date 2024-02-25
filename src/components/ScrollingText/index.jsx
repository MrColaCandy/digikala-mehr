import "./style.css"
const ScrollingText = ({text,start}) => {
  
  return (
    <div className="scrollingText__container">
        <div className={`${start? "scrollingText__text--animate":"scrollingText__text"}`}>{text}</div>
    </div>
  )
}

export default ScrollingText