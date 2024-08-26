import React from 'react'
import './HeroSection.css';
import heroImg from '../../assets/heroImage.png'
import Navbar from '../Navbar/Navbar';
import { motion } from "framer-motion"
import GlowButton from '../GlowButton/GlowButton';

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
          >Your Credit Score <span>Decoded!</span>
          </motion.h1>
          <p>Unlock the mysteries of your credit score with our advanced prediction tools.
          Understand key factors <br/> influencing your score and make informed financial 
          decisions for a brighter future.
          </p>
          <GlowButton onText = "Try It Free"/>
        </div>
      </div>
    </React.Fragment>
    
  )
}

export default HeroSection