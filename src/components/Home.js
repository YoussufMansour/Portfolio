import React from "react";
import img from "../images/web6.gif";
import{motion} from 'framer-motion'; 

export default function Home() {
  
  return (
    <div className="home" id="home">
      <motion.div initial={{y:300}} animate={{y:0}} className="description">
        <h1>
          Hello, I'm Yusuf Mansur
          <br /> <span>Front-end developer</span>
        </h1>
        
        <h2>My passion is to build useful Web apps</h2>
        <a href="#contact" className="btn">
          Contact me
        </a>
        <div className="social-accounts">
          <a href="https://www.linkedin.com/in/yusuf-m-55b756171">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/YoussufMansour">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </motion.div>
      
      <img src={img} alt="-" />
      


      
    </div>
  );
}
