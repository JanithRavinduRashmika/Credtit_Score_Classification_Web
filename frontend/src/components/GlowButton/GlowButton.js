import './GlowButton.css'

const GlowButton = ({onText}) => {
  return (
    <button className='container'> 
        <div className='button-bg'>
            <div className='toptobottom'></div>
            <div className='bottomtotop'></div>
            <div className='shadow'></div>
        </div>
        <span>{onText}</span>
    </button>
  )
}

export default GlowButton