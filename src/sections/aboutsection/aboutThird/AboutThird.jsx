import React from 'react'
import Fence from '../../../Assests/fence.svg'
import Drum from '../../../Assests/drum.svg'
import Crayon from '../../../Assests/crayons.svg'
import car from '../../../Assests/car.svg'
import schoolbag from '../../../Assests/school-bag.svg'
import fastfood from '../../../Assests/fastfood.svg'
import container from './AboutThird.module.css'

const AboutThird = () => {
  return (
    <div className={container.first}>
      <div className={container.wrapper}>
        <div className={container.grid}>
          <div className={container.grid1}>
            <div className={container.img1}>
             <img src={Fence} alt="" />
            </div>
            <div>
              <p className={container.word}>Play Ground</p>
              <p className={container.word1}>Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero...</p>
            </div>
          </div>
          <div className={container.grid2}>
             <div className={container.img2}>
             <img src={Drum} alt="" />
            </div>
            <div>
              <p className={container.word}>Music and Dance</p>
              <p className={container.word1}>Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero...</p>
            </div>
          </div>
          <div className={container.grid3}>
            <div className={container.img3}>
             <img src={Crayon} alt="" />
            </div>
            <div>
              <p className={container.word}>Arts and Crafts</p>
              <p className={container.word1}>Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero...</p>
            </div>
          </div>
          <div className={container.grid4}>
             <div className={container.img4}>
             <img src={car} alt="" />
            </div>
            <div>
              <p className={container.word}>Safe Transportation</p>
              <p className={container.word1}>Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero...</p>
            </div>
          </div>
          <div className={container.grid5}>
            <div className={container.img5}>
             <img src={fastfood} alt="" />
            </div>
            <div>
              <p className={container.word}>Healthy food</p>
              <p className={container.word1}>Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero...</p>
            </div>
          </div>
          <div className={container.grid6}>
           <div className={container.img6}>
             <img src={schoolbag} alt="" />
            </div>
            <div>
              <p className={container.word}>Educational Tour</p>
              <p className={container.word1}>Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero...</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AboutThird