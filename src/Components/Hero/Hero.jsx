import React from 'react'
import './Hero.css'
import prof_img from '../../assets/prof-img.svg'
import resume_pdf from '../../assets/Vallery-Otieno-resume.pdf'

const Hero = () => {

  const handleScroll = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  
  return (
    <div id='home' className='hero'>
        <img src={prof_img} alt="" />
        <h1> <span>I'm Vallery</span> , a DevOps Engineer </h1>
        <p>I focus on Building reliable, scalable, and automated infrastructure solutions based in Nairobi, Kenya</p>
        <div className="hero-action">
            <div className="hero-connect" onClick={() => handleScroll("contact")}> Connect With Me</div>
            <a href={resume_pdf} target="_blank" rel=" noopener noreferrer" className="hero-res">See My Resume</a>
        </div>
        
    </div>
  )
}

export default Hero