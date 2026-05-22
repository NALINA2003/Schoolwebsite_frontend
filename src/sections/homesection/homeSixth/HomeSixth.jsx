import React from 'react'
import container from './HomeSixth.module.css'
import img1 from '../../../Assests/team-1.jpg'
import img2 from '../../../Assests/team-2.jpg'
import img3 from '../../../Assests/team-3.jpg'
import img4 from '../../../Assests/team-4.jpg'

const HomeSixth = () => {
  return (
    <div className={container.first}>
        <div className={container.wrapper}>
            <div className={container.teacher}>
                <div className={container.line}></div>
            <p className={container.word}>OUR TEACHERS</p>
            <div className={container.line}></div>           
            </div>
            <div className={container.meet}>
                <p>Meet Our Teachers</p>
            </div>
            <div className={container.img}>
                <div className={container.img1}>
                    <div className={container.one}>
                <img src={img1} alt="" />
                <div className={container.overlay}></div>
                <p className={container.icon1}><i className="fa-brands fa-twitter"></i></p>
                <p className={container.icon2}> <i className="fa-brands fa-facebook-f"></i></p>
                <p className={container.icon3}><i className="fa-brands fa-linkedin-in"></i></p>
                </div>
                <p className={container.name}>Julia Smith</p>
                <p className={container.profession}>Music Teacher</p>
                </div>
                <div className={container.img1}>
                    <div className={container.second}>
                <img src={img2} alt="" />
                <div className={container.overlay}></div>
                <p className={container.icon1}><i className="fa-brands fa-twitter"></i></p>
                <p className={container.icon2}> <i className="fa-brands fa-facebook-f"></i></p>
                <p className={container.icon3}><i className="fa-brands fa-linkedin-in"></i></p>
                </div>
                <p className={container.name}>Jhon Doe</p>
                <p className={container.profession}>Language Teacher</p>
                </div>
                <div className={container.img1}>
                    <div className={container.third}>
                <img src={img3} alt="" />
                <div className={container.overlay}></div>
                <p className={container.icon1}><i className="fa-brands fa-twitter"></i></p>
                <p className={container.icon2}> <i className="fa-brands fa-facebook-f"></i></p>
                <p className={container.icon3}><i className="fa-brands fa-linkedin-in"></i></p>
                </div>
                <p className={container.name}>Mollie Ross</p>
                <p className={container.profession}>Dance Teacher</p>
                </div>
                <div className={container.img1}>
                    <div className={container.fourth}>
                <img src={img4} alt="" />
                <div className={container.overlay}></div>
                <p className={container.icon1}><i className="fa-brands fa-twitter"></i></p>
                <p className={container.icon2}> <i className="fa-brands fa-facebook-f"></i></p>
                <p className={container.icon3}><i className="fa-brands fa-linkedin-in"></i></p>
                 </div>
                <p className={container.name}>Donald John</p>
                <p className={container.profession}>Art Teacher</p>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeSixth