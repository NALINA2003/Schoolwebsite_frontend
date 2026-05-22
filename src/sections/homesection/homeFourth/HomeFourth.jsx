import React from 'react'
import container from './HomeFourth.module.css'
import class1 from '../../../Assests/class-1.jpg'
import class2 from '../../../Assests/class-2.jpg'
import class3 from '../../../Assests/class-3.jpg'

const HomeFourth = () => {
  return (
    <div className={container.first}>
        <div className={container.wrapper}>
          <div className={container.popular}>
            <div className={container.line}></div>
            <p className={container.word}>POPULAR CLASSES</p>
            <div className={container.line}></div>
          </div>
          <div className={container.class}>
            <p>Classes for Your Kids</p>
          </div>
          <div className={container.grid}>
            <div className={container.grid1}>
              <div className={container.img1}>
              <img src={class1} alt="" />
              </div>
              <p className={container.lan}>Drawing  Class</p>
              <p className={container.lan1}>Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo</p>
              <div className={container.line1}></div>
              <div className={container.pad}>
              <div className={container.year}>
                <p className={container.year1}>Age of Kids</p>
                <p className={container.year2}>3 - 6 Years</p>
              </div>
              <div className={container.line2}></div>
              <div className={container.seats}>
                <p className={container.seat1}>Total Seats</p>
                <p className={container.seat2}>40 Seats</p>
              </div>
              <div className={container.line2}></div>
              <div className={container.time}>
                <p className={container.time1}>Class Time</p>
                <p className={container.time2}>08:00 - 10:00</p>
              </div>
              <div className={container.line2}></div>
              <div className={container.fee}>
                <p className={container.fee1}>Tution Fee</p>
                <p className={container.fee2}>$290 / Month</p>
              </div>
            </div>
            <div className={container.vertical}></div>
            <button className={container.button}>Join Now</button>
            </div>
           
            <div className={container.grid2}>
              <div className={container.img1}>
              <img src={class2} alt="" />
              </div>
              <p className={container.lan}>Language Learning</p>
              <p className={container.lan1}>Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo</p>
              <div className={container.line1}></div>
              <div className={container.pad}>
              <div className={container.year}>
                <p className={container.year1}>Age of Kids</p>
                <p className={container.year2}>3 - 6 Years</p>
              </div>
              <div className={container.line2}></div>
              <div className={container.seats}>
                <p className={container.seat1}>Total Seats</p>
                <p className={container.seat2}>40 Seats</p>
              </div>
              <div className={container.line2}></div>
              <div className={container.time}>
                <p className={container.time1}>Class Time</p>
                <p className={container.time2}>08:00 - 10:00</p>
              </div>
              <div className={container.line2}></div>
              <div className={container.fee}>
                <p className={container.fee1}>Tution Fee</p>
                <p className={container.fee2}>$290 / Month</p>
              </div>
            </div>
            <div className={container.vertical}></div>
            <button className={container.button}>Join Now</button>
            </div>
            <div className={container.grid3}>
              <div className={container.img1}>
              <img src={class3} alt="" />
              </div>
              <p className={container.lan}>Basic Science</p>
              <p className={container.lan1}>Justo ea diam stet diam ipsum no sit, ipsum vero et et diam ipsum duo et no et, ipsum ipsum erat duo amet clita duo</p>
              <div className={container.line1}></div>
              <div className={container.pad}>
              <div className={container.year}>
                <p className={container.year1}>Age of Kids</p>
                <p className={container.year2}>3 - 6 Years</p>
              </div>
              <div className={container.line2}></div>
              <div className={container.seats}>
                <p className={container.seat1}>Total Seats</p>
                <p className={container.seat2}>40 Seats</p>
              </div>
              <div className={container.line2}></div>
              <div className={container.time}>
                <p className={container.time1}>Class Time</p>
                <p className={container.time2}>08:00 - 10:00</p>
              </div>
              <div className={container.line2}></div>
              <div className={container.fee}>
                <p className={container.fee1}>Tution Fee</p>
                <p className={container.fee2}>$290 / Month</p>
              </div>
            </div>
            <div className={container.vertical}></div>
            <button className={container.button}>Join Now</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomeFourth