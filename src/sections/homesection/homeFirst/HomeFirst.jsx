import React from 'react'
import container from './HomeFirst.module.css'
import img1 from '../../../Assests/header.png'



const HomeFirst = () => {
  return (
    <div className={container.first}>
       <div className={container.wrapper}>
        <div className={container.one}>
            <p className={container.kids}>Kids Learning center</p>
            <p className={container.kids1}>New Approach to Kids Education</p>
            <p className={container.kid}>At KID KINDER Learning Center, we believe that every child is full of potential and curiosity. Our center is designed to nurture that natural love for learning in a fun, safe, and supportive environment. Whether your child is just starting their educational journey or building on early skills, we provide age-appropriate programs that spark creativity, encourage exploration, and build confidence.</p>
             <button className={container.button}>Learn More</button>
        </div>
        <div className={container.two}>
        <div className={container.img}>
            <img src={img1} alt="" />
        </div>
        </div>
       </div>
       
    </div>
  )
}

export default HomeFirst