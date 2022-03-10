import React,{useEffect} from "react";
import phone from "../images/phone.gif"
import email from "../images/email.gif"

import { useInView } from "react-intersection-observer";
import{motion,useAnimation} from 'framer-motion'; 
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    hover:{scale:2},
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Contact() {
  const controls = useAnimation();
const [ref, inView] = useInView();
useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  
  return (
    <div className="cards" id="contact" >
      <h1 className='title'>Let's work together</h1>
      <motion.div className="content" variants={container}
    ref={ref}
    initial="hidden"
    animate={controls}>
        <motion.div className="card" ref={ref}>     
             <div className="icon">
          <img  src= {email} alt="Email"/>
          </div>
          <div className="info">
            <h2>E-mail</h2>
            <p>youssufkhaled9@gmail.com</p>
          </div>
        </motion.div>

        <motion.div className="card" ref={ref}
          >
          <div className="icon">
          <img  src= {phone} alt="Phone"/>
          </div>
          <div className="info">
            <h2>Phone</h2>
            <p>(+90)5442296430</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
