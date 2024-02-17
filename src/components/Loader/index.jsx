import "./style.css"

const Loader = ({color="#01B18A",scale=1}) => {
  return (
    <div className='loader' style={{backgroundColor:`${color}`,boxShadow:`0 0 25px 15px ${color}`,"--loader-scale":`${scale}`}}></div>
  )
}

export default Loader