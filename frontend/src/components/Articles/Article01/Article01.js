import React from 'react'
import './Article01.css'
import Navbar from '../../../components/Navbar/Navbar'
import article01 from '../../../assets/articles/articles01.png';

const Article01 = () => {
  return (
    <div>
        <Navbar backgroundColor="#0a2472"/>
        <div className='articleTitle'><span className='titleText'>How requesting a credit limit increase affects your credit</span></div>
        <div className='articleContainer'>
          <div className='articleImage'>
            <img src={article01} alt="Description of image" />
          </div>
          <div className='article'>
              <h1 className='articleH1'>How does applying for a credit limit increase affect your credit?</h1>
              <br/>
              <span className='articleSpan'>The impact of a credit limit increase on your credit score partially hinges on how it comes to pass. Lenders often have a process through which cardholders can request credit line increases, which usually results in a hard credit inquiry and a temporary decrease in your credit score. But in some cases lenders automatically provide increases if you meet specified criteria. When this happens, a limited or soft credit inquiry is typically conducted by the lender, exerting no impact on your credit score.</span>
              <br/>
              <span className='articleSpan'>Beyond the initial trigger for getting an increase, here is how a credit limit increase can hurt or help your score.</span>
              <br/><br/>
              <h2 className='articleH2'>How can a credit limit increase hurt your credit score?</h2>
              <br/>
              <span>If the credit increase is not automatic and you actively request it, expect your lender to conduct a hard credit inquiry. While this could temporarily lower your score by a few points, likely no more than 10, the effect is generally short-lived. Nevertheless, the request itself remains on your credit reports for two years.</span>
              <br/>
              <span>If you are worried about the potential impact of a hard inquiry on your score, you can ask the credit issuer about considering a smaller increase request with only a soft inquiry.</span>
              <br/>
              <span>“Another drawback to requesting an increased credit limit is that creditors may see you as a risk and someone who might be heading for financial trouble if you have multiple hard inquiries on your credit reports,” says Severine Bryan, an accredited financial counselor with Bryan Financial Empowerment LLC. She adds that this status may get you denied for new loans or lines of credit.</span>
              <br/>
              <span>Indeed, if your total credit limit is fairly high relative to your income, it can harm your ability to be approved for future loans and credit accounts.</span>
              <br/><br/>

            </div>


            
        </div>

        
    </div>
  )
}

export default Article01

