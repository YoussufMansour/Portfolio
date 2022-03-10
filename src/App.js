import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import cv from "./images/cv.pdf";




function App() {
  return (
    <div className="App">
    <div className="cv">
    <a href={cv} download>Download CV > </a>
    </div>
    <Navbar/>
    <Home/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
