import React from 'react'
import './Prediction.css'
import Navbar from '../../components/Navbar/Navbar'
import Quiz from '../../components/Quiz/Quiz'
import Footer from '../../components/Footer/Footer'

const Prediction = () => {
  return (
    <div>
        <Navbar backgroundColor="#0a2472"/>
        <div className='quizContainer'>
            <div className='title'>Credit Score Class Estimator</div>
            <div className='subTitle'>Predicting and Categorizing Credit Scores for Enhanced Financial Insights</div>
            <Quiz/>
        </div>
        <Footer/>

        
    </div>
  )
}

export default Prediction

