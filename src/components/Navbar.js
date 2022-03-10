import React, { useState } from "react";
import logo from "../images/logo1.png";

export default function Navbar() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="navbar">
      <a href="#home" onClick={() => {
            setSelected(0);
          }} className="logo">
        <img src={logo} alt="Yusuf" />
      </a>

      <nav className="navigation" id="navigation">
        <a
          href="#skills"
          onClick={() => {
            setSelected(1);
          }}
          id={1 === selected ? "selected" : ""}
        >
          1. Skills
        </a>
        <a
          href="#projects"
          onClick={() => {
            setSelected(2);
          }}
          id={2 === selected ? "selected" : ""}
        >
          2. Projects
        </a>
        <a
          href="#contact"
          onClick={() => {
            setSelected(3);
          }}
          id={3 === selected ? "selected" : ""}
        >
          3. Contact
        </a>
      </nav>
    </div>
  );
}
