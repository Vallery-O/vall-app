import React from 'react'
import './MyWork.css'
import Mywork_Data from '../../assets/mywork_data'
import Right_arrow from '../../assets/Arrow.svg'

const MyWork = () => {
  return (
    <div id='projects' className='mywork'>
        <div className="mywork-title">
            <h1>My Work</h1>
        </div>
        <div className="mywork-cont">
            {Mywork_Data.map((work,index)=>{
              return <img key= {index} src={work.w_img} alt="" />
            })}
        </div>
        <div className="mywork-showmore">
          <p>Show More</p>
          <img src={Right_arrow} alt="" />
        </div>
    </div>
  )
}

export default MyWork