import "./style.css"

const Loader = ({ color = "#01B18A", scale = 1 }) => {
  return (

    <div className="custom-loader" style={{"--color":color,"scale":scale}}></div>
  )
}

export default Loader