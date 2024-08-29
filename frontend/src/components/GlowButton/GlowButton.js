import './GlowButton.css'
import { useNavigate } from 'react-router-dom'

const GlowButton = ({onText, targetPath }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(targetPath);
  }

  return (
    <button className='container' onClick={handleClick}> 
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