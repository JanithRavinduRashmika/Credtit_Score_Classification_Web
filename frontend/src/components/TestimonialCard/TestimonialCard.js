import './TestimonialCard.css'
import { motion } from "framer-motion"

const TestimonialCard = ({ name, role, quote, image }) => {
  return (
    <motion.div className='testimonial-card'
    initial={{x:-100, opacity:0}}
    whileInView={{x:0, opacity:1}}
    transition={{
      delay:0.2,
      x: {type: "spring", stiffness:60}, opacity: {duration: 1}, ease: "easeIn", duration: 1,
    }}
    >
        <div className='testimonial-card-top'>
            <span className='testimonial-quote '>{quote}</span>
        </div>
        <hr/>
        <div className="testimonial-card-bottom">
            <img src={image} alt="person1" className="testimonial-image" />
            <div className="testimonial-content">
                <h3 className="testimonial-name">{name}</h3>
                <p className="testimonial-role">{role}</p>
            </div>
        </div>
    </motion.div>
    
  );
};

export default TestimonialCard;