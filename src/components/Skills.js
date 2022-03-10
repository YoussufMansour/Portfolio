import React,{useEffect} from 'react'
import img1 from "../images/html.png";
import img2 from "../images/css.png";
import img3 from "../images/javascript.png";
import img4 from "../images/react.png";
import img5 from "../images/node.png";
import img6 from "../images/mysql.png";
import { useInView } from "react-intersection-observer";
import{motion,useAnimation} from 'framer-motion'; 
const Variants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 }
};




export default function Skills() {
  const controls = useAnimation();
const [ref, inView] = useInView();
useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className="skills" id="skills">
        <h1 className='title'>Skills</h1>
        <div className='skills-icons'>
        <motion.figure  ref={ref}
      animate={controls}
      initial="hidden"
      variants={Variants}  transition={{delay:2}}>
        <img  src= {img1} alt="CSS"/>
        <figcaption>HTML 5</figcaption>
        </motion.figure>
        <motion.figure ref={ref}
      animate={controls}
      initial="hidden"
      variants={Variants} transition={{delay:3}}>
        <img  src= {img2} alt="HTML"/>
        <figcaption>CSS3</figcaption>
        </motion.figure>
        <motion.figure ref={ref}
      animate={controls}
      initial="hidden"
      variants={Variants} transition={{delay:1}}>
        <img  src= {img3} alt="JS"/>
        <figcaption>Javascript</figcaption>
        </motion.figure>
        </div>
        <div className='skills-icons2'>
        <motion.figure ref={ref}
      animate={controls}
      initial="hidden"
      variants={Variants} transition={{delay:6}}>
        <img  src= {img4} alt="React"/>
        <figcaption>React.js</figcaption>
        </motion.figure>
        <motion.figure ref={ref}
      animate={controls}
      initial="hidden"
      variants={Variants} transition={{delay:4}}>
        <img  src= {img5} alt="Node"/>
        <figcaption>Node.js</figcaption>
        </motion.figure>
        <motion.figure ref={ref}
      animate={controls}
      initial="hidden"
      variants={Variants} transition={{delay:5}}>
        <img  src= {img6} alt="Mysql"/>
        <figcaption>Mysql</figcaption>
        </motion.figure>
        </div>
    </div>
  )
}
