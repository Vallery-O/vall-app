import React, { useState, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import menu_icon from '../../assets/icons8-menu.svg'
import menu_back from '../../assets/left-arrow-svgrepo-com.svg'


const Navbar = () => {

  const [menu,setMenu] = useState("home");

  const menuRef = useRef();

  const handleScroll = (sectionId) => {
    setMenu(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({
      behavior:"smooth",
      block:"start",
    });
  };


  const openMenu = () => {
    if (menuRef.current){
      menuRef.current.style.right = "0";
    }
  };

  const closeMenu = () => {
    if (menuRef.current){
      menuRef.current.style.right = "-350px";
    }
  };
     


  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <img src={menu_icon} alt="" className="mobile-open" onClick={openMenu} />

        <ul ref={menuRef}  className="nav-menu">
          <img src={menu_back} onClick={closeMenu} alt="" className="mobile-close" />
          <li><p onClick={() => handleScroll("home")} className={menu === "home" ? "active" : ""} > Home </p></li>
          <li><p onClick={() => handleScroll("about")} className={menu === "about" ? "active" : ""} > About Me </p></li>
          <li><p onClick={() => handleScroll("skills")} className={menu === "skills" ? "active" : ""} > Skills </p></li>
          <li><p onClick={() => handleScroll("projects")} className={menu === "projects" ? "active" : ""} > Projects </p></li>
          <li><p onClick={() => handleScroll("contact")} className={menu === "contact" ? "active" : ""} > Contact </p></li>

            
        </ul>
        <div className="nav-connect"> 
          <p onClick={() => handleScroll("contact")} className={menu === "contact" ? "active" : ""} > Connect with Me </p>
          
        </div>

    </div>
  )
}

export default Navbar