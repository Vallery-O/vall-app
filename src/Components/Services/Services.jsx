import React from 'react'
import './Services.css'
import Services_Data from '../../assets/Serv_data'
import Right_arrow from '../../assets/Arrow.svg'

const Services = () => {
  return (
    <div id='skills' className='services'>
        <div className='serv-title'>
            <h1>My Services</h1>
        </div>
        <div className= 'serv_container'>
            {Services_Data.map((service,index)=>{
                return <div key={index} className='serv-format'>
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className='serv_readmore'>
                        <p>Read More</p>
                        <img src={Right_arrow} alt="" />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Services