import React from 'react'
import './Testimonial.css'
import TestimonialCard from '../TestimonialCard/TestimonialCard'

import person1 from '../../assets/testimonial/Alex Johnson.jpeg';
import person2 from '../../assets/testimonial/Emily Davis.jpeg';
import person3 from '../../assets/testimonial/Michael Brown.jpeg';
import person4 from '../../assets/testimonial/Sarah Thompson.jpeg';
import person5 from '../../assets/testimonial/Daniel Roberts.jpeg';
import person6 from '../../assets/testimonial/Jessica Lee.jpeg';

const Testimonial = () => {

    const testimonials = [
        {
          name: "Alex Johnson",
          role: "Homeowner",
          quote: "\"CrediDecode transformed the way I manage my finances. Their easy-to-understand credit score system helped me secure a better mortgage rate. Highly recommend!\"",
          image: person1
        },
        {
            name: "Emily Davis",
            role: "Small Business Owner",
            quote: "\"I was overwhelmed by the complexities of credit scores, but CrediDecode made everything clear. Their insights were spot-on and helped me improve my score within months!\"",
            image: person2
        },
        {
            name: "Michael Brown",
            role: "Entrepreneur",
            quote: "\"The best decision I made was using CrediDecode. Their intuitive platform guided me through improving my credit score, and now I’m on track to achieve my financial goals.\"",
            image: person3
        },
        {
            name: "Sarah Thompson",
            role: "Freelance Designer",
            quote: "\"Thanks to CrediDecode, I finally understand my credit score and how to improve it. The detailed analysis and personalized tips made all the difference.\"",
            image: person4
        },
        {
            name: "Daniel Roberts",
            role: "IT Consultant",
            quote: "\"CrediDecode’s platform is incredibly user-friendly. I was able to track my credit score progress and take actionable steps that led to a significant increase in just a few months.\"",
            image: person5
        },
        {
            name: "Jessica Lee",
            role: "Recent Graduate",
            quote: "\"I’ve tried other credit score tools before, but none compare to CrediDecode. Their detailed insights and guidance were invaluable in helping me qualify for a better loan.\"",
            image: person6
        },
      ];

  return (
    <div className='testimonialContainer'>
        <h2 className='testimonialTitle'>What our customers say about us</h2>
        <span className='testimonialSubTitle'>2,157 people have said how good we are</span>

        <div className='testimonialGrid'>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              quote={testimonial.quote}
              image={testimonial.image}
            />
          ))}
        </div>
    </div>
  )
}

export default Testimonial