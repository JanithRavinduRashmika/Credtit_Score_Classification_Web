import React from 'react'
import './HeroSection.css';
import heroImg from '../../assets/heroImage.png'
import Navbar from '../Navbar/Navbar';
import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <React.Fragment>
      
      <div className="hero-image-container">
        <Navbar/>
        <div className="overlay"></div>
        <img src={heroImg} alt="coinPot" className="hero-image" />
        <div className="hero-image-content">
          <motion.h1
            initial={{x:-100, opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{
              delay:0.2,
              x: {type: "spring", stiffness:60}, opacity: {duration: 1}, ease: "easeIn", duration: 1,
            }}
          >Your Credit Score Decoded!
          </motion.h1>
          <p>Unlock the mysteries of your credit score with our advanced prediction tools. <br/>
          Understand key factors influencing your score and make informed financial <br/>
          decisions for a brighter future.
          </p>
          <button>Learn More</button>
          <button>Try it free</button>
        </div>
      </div>
    </React.Fragment>
    
  )
}

export default HeroSection