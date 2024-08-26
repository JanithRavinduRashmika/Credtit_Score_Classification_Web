import React from 'react'
import './Home.css'
import HeroSection from '../../components/HeroSection/HeroSection'
import InfinityScroll from '../../components/InfinityScroll/InfinityScroll'
import Testimonial from '../../components/Testimonial/Testimonial'
import Footer from '../../components/Footer/Footer'
import Pricing from '../../components/Pricing/Pricing'

const Home = () => {
  return (
    <React.Fragment>
      <HeroSection/>
      <InfinityScroll/>
      <Testimonial/>
      <Pricing/>
      <Footer/>
      
    </React.Fragment>
    
  )
}

export default Home 