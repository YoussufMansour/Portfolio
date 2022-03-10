import React, { useState, useEffect } from "react";
import K1 from "../images/K1.png";
import K2 from "../images/K2.png";
import K3 from "../images/K3.png";
import dog from "../images/Dogcare.png";
import arrow from "../images/arrow.gif";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
    delayChildren: 1,
      delay:0.5,
      durarion:1,
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

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const length = 2;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  

  return (
    <div className="projects " id="projects">
      <h1 className="title ">Projects</h1>

      <motion.div
        className="slide"
        variants={container}
        ref={ref}
        initial="hidden"
        animate={controls}
      >
        <motion.button
          className="left-arrow "
          onClick={nextSlide}
          ref={ref}
          variants={item}
        >
          <img src={arrow} alt="->" />
        </motion.button>
        <motion.button className="right-arrow " onClick={prevSlide} ref={ref} variants={item}>
          <img src={arrow} alt="->" />
        </motion.button>

        <div
          className={ 0 === current ? "project-image1 active " : "project-image1"} >
          <img src={K2} alt="K2" />
          <img id="K1" src={K1} alt="K1" />
          <img src={K3} alt="K3" />
          <br />
          <h2 className="project-title">
            " Mobile-Friendly E-commerce Website "
          </h2>
        </div>

        <div
          className={1 === current ? "project-image2 active" : "project-image2"}
        >
          <img src={dog} alt="Dogcare download website" />
          <br />
          <h2 className="project-title">" App marketing website "</h2>
        </div>
      </motion.div>
    </div>
  );
}
