import "./style.css"

const HorizontalLine = ({space=16,width=1200}) => {
  return (
    <hr className='horizontalLine' style={{margin:`${space}px  0`,maxWidth:`${width}px`}}/>
  )
}

export default HorizontalLine