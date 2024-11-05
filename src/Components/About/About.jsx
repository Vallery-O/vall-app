import React from 'react'
import './About.css'
import prof_img from '../../assets/profile.svg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
        </div>
        <div className="about-sect">
            <div className="about-left">
                <img src= {prof_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I'm a Junior DevOps Engineer with a passion for cloud computing, automation, and continuous integration/continuous deployment (CI/CD).</p>
                    <p> I have experience working with tools like Docker, Kubernetes, Jenkins, and cloud platforms such as AWS and Azure</p>
                </div>
                <div className="about-skills">
                    <div className="skills"><p>Contaner:Docker and Kubernetes</p><hr style={{width:"50%"}} /></div>
                    <div className="skills"><p>Cloud: AWS</p><hr style={{width:"50%"}} /></div>
                    <div className="skills"><p>Scripting: Bash, Python, PowerShell</p><hr style={{width:"50%"}} /></div>
                    <div className="skills"><p>Version Control: Git, GitHub, GitLab</p><hr style={{width:"50%"}} /></div>
                    <div className="skills"><p>CI/CD: Jenkins</p><hr style={{width:"50%"}} /></div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default About