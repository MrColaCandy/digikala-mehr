import "./style.css"

const Loader = ({color="#01B18A"}) => {
  return (
    <div className='loader' style={{backgroundColor:`${color}`,boxShadow:`0 0 25px 15px ${color}`}}></div>
  )
}

export default Loader