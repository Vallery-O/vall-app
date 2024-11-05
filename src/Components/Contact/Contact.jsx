import React from 'react'
import './Contact.css'
import email_icon from '../../assets/email.svg'
import call_icon from '../../assets/call.svg'
import loc_icon from '../../assets/location.svg'



const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "cb9b6caa-85f7-49e1-81b2-e5f1b5f2d4ba");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully, talk soon!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <div id='contact' className='contact'>
        <div className="cont-title">
            <h1>Hit Me Up?</h1>
        </div>
        <div className="cont-section">
            <div className="cont-left">
                <h1>Lets Get Acquinted</h1>
                <p>I'm currently available to take up new projects</p>
                <div className="cont-details">
                    <div className="cont-detail">
                        <img src={email_icon} alt="" /> <p>vallerynoh@gmail.com</p>
                    </div>
                    <div className="cont-detail">
                        <img src={call_icon} alt="" /> <p>+254790036363</p>
                    </div>
                    <div className="cont-detail">
                        <img src={loc_icon} alt="" /> <p>Nairobi,Kenya</p>
                    </div>
                </div>
            </div>
             <form onSubmit={onSubmit}  className="cont-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter Your Name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="text" placeholder='Enter Your Email Address' name='email' />
                    <label htmlFor="">Write Your message here</label>
                    <textarea name="message" rows='8' placeholder='Enter Your Message' ></textarea>
                    <button type='submit' className="cont-submit">Submit Now</button>
                    
                </form>
        </div>
    </div>
  )
}

export default Contact