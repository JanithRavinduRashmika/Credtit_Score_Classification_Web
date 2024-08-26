import './Footer.css'
import logo from '../../assets/logo.png'
import address from '../../assets/footer/address.svg'
import email from '../../assets/footer/email.svg'
import google from '../../assets/footer/google.svg'
import linkedin from '../../assets/footer/linkedin.svg'
import x from '../../assets/footer/x.svg'

const Footer = () => {
  return (
    <div className='footerContainer'>
        <div className="footerOverlay">
            <div className="footerContent">
                <div className='footerUp'>
                    <div className='footerVision'>
                        <span>Your financial health, our priority.</span>
                        <span className="visionSm">Discover your credit potential</span>
                        <span className='visionSm'>with Us.</span>
                    </div>
                    
                    <div className='footerContacts'>
                        <div className="contactsLogo">
                            <img src={logo} alt="logo"/>
                            <span>CrediDecode</span>
                        </div>
                        <div>
                            <img src={address} alt="address" />
                            <span>4556 Innovation Drive, Suite 320, Austin, TX 78701</span>
                        </div>
                        <div>
                            <img src={email} alt="email" />
                            <span>contact@credidecode.com</span>
                        </div>
                        <div>
                            <img src={google} alt="google" />
                            <img src={linkedin} alt="linkedin" />
                            <img src={x} alt="x" />
                        </div>
                    </div>
                    
                </div>
                <div className='footerDown'>
                    <div className='downLeft'>
                        <span>Home</span>
                        <span>About</span>
                        <span>Products</span>
                        <span>Insights</span>
                        <span>Contacts</span>
                    </div>
                    <div className='downRight'>
                        <span>Copyright 2024,All Rights Reserved</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer