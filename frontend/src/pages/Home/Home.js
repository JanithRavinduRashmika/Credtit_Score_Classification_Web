import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import HeroSection from '../../components/HeroSection/HeroSection'
import InfinityScroll from '../../components/InfinityScroll/InfinityScroll'

const Home = () => {
  return (
    <React.Fragment>
      <HeroSection/>
      <InfinityScroll/>
      
    </React.Fragment>
    
  )
}

export default Home 