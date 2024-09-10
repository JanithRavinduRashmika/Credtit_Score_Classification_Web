import './Pricing.css'

const Pricing = () => {
  return (
    <div className='pricingContainer'>
        <div className='title'>The right plan can change your whole life</div>
        <div className='subTitle'>Simple plans. Simple prices. Only pay for what you really need. Enjoy lifetime access with 24/7 expert support. Upgrade your financial insight, hassle-free.</div>
        <div className='pricingTableContainer'>
            <table>
                <thead>
                    <tr>
                        <th className="topth"></th>

                        <th className="titleth">
                            <span className="titlespan"> Basic </span>
                            <p className="titleptop">$0</p>
                            <p className="titlepbot">Per month</p>
                        </th>

                        <th className="titleth">
                            <span className="titlespan"> Advanced </span>
                            <p className="titleptop">$29</p>
                            <p className="titlepbot">Per month</p>
                        </th>

                        <th className="titlethsp">
                            <span className="titlespansp"> Premium </span>
                            <p className="titleptopsp">$59</p>
                            <p className="titlepbotsp">Per month</p>
                        </th>

                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="tdnormal">Attempt</td>

                        <td className="tdnormal">01</td>

                        <td className="tdnormal">10</td>

                        <td className="tdspecial">50</td>

                        
                    </tr>

                    <tr>
                        <td className="tdnormal">Educational Resources</td>

                        <td className="tdnormal">10</td>

                        <td className="tdnormal">30</td>

                        <td className="tdspecial">Unlimited</td>

                        
                    </tr>

                    <tr>
                        <td className="tdnormal"> Customer Support </td>

                        <td className="tdnormal">-</td>

                        <td className="tdnormal">15</td>

                        <td className="tdspecial">Unlimited</td>

                        
                    </tr>

                    <tr>
                        <td className="tdnormal">Reports and Dashboard</td>

                        <td className="tdnormal">-</td>

                        <td className="tdnormal">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </td>

                        <td className="tdspecial">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </td>

                        
                    </tr>

                    <tr>
                        <td className="tdnormal">Alerts and Notifications</td>

                        <td className="tdnormal">-</td>

                        <td className="tdnormal">-</td>

                        <td className="tdspecial">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </td>

                        
                    </tr>

                    <tr>
                        <td className="tdnormal">Recommendations and Action Plans</td>

                        <td className="tdnormal">-</td>

                        <td className="tdnormal">-</td>

                        <td className="tdspecial">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </td>

                        
                    </tr>


                    <tr>
                        <td className="tdfootttitle"></td>

                        <td className="tdfootnormal">
                            <a href="#" className="tdfoothrefnormal">
                                Get Started
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </td>

                        <td className="tdfootnormal">
                            <a href="#" className="tdfoothrefnormal">
                                Get Started
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </td>

                        <td className="tdfootspecial">
                            <a href="#" className="tdfoothrefspecial">
                                Get Started
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </td>

                        
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Pricing