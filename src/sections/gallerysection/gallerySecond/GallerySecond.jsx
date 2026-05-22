import React from 'react'
import container from'./GallerySecond.module.css'
import img1 from '../../../Assests/portfolio-1.jpg'
import img2 from '../../../Assests/portfolio-2.jpg'
import img3 from '../../../Assests/portfolio-3.jpg'
import img4 from '../../../Assests/portfolio-4.jpg'
import img5 from '../../../Assests/portfolio-5.jpg'
import img6 from '../../../Assests/portfolio-6.jpg'

const GallerySecond = () => {
  return (
   <div className={container.first}>
        <div className={container.wrapper}>
            <div className={container.latest}>
                <div className={container.line}></div>
            <p className={container.word}>OUR GALLERY</p>
            <div className={container.line}></div>           
            </div>
            <div className={container.meet}>
                <p>Our Kids School Gallery</p>
            </div>
            <div className={container.buttons}>
                
                    <button className={container.button1}>All</button>
               
                
                    <button  className={container.button2}>Playing</button>
              
               
                    <button className={container.button3}>Drawing</button>
              
              
                    <button className={container.button4}>Reading</button>
            
            </div>
            <div className={container.grid}>
                <div className={container.grid1}>
                    <img src={img1} alt="" />
                    <div className={container.border}><i class="fa-solid fa-plus"></i></div>
                </div>
                <div className={container.grid1}>
                    <img src={img2} alt="" />
                    <div className={container.border}><i class="fa-solid fa-plus"></i></div>
                </div>
                <div className={container.grid1}>
                    <img src={img3} alt="" />
                    <div className={container.border}><i class="fa-solid fa-plus"></i></div>
                </div>
                <div className={container.grid1}>
                    <img src={img4} alt="" />
                    <div className={container.border}><i class="fa-solid fa-plus"></i></div>
                </div>
                <div className={container.grid1}>
                    <img src={img5} alt="" />
                    <div className={container.border}><i class="fa-solid fa-plus"></i></div>
                </div>
                <div className={container.grid1}>
                    <img src={img6} alt="" />
                    <div className={container.border}><i class="fa-solid fa-plus"></i></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GallerySecond