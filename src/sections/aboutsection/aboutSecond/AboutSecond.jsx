import React from 'react'
import child from '../../../Assests/about-1.jpg'
import child1 from '../../../Assests/about-2.jpg'
import container from './AboutSecond.module.css'
import { useState , useEffect } from 'react'

const AboutSecond = () => {
     const [show, setShow] = useState(false);
   useEffect(() => {
    window.onscroll = () => {
      setShow(window.scrollY > 100);
    };
  }, []);
  return (
   <div className={container.first}>
        <div className={container.wrapper}>
            <div className={container.one}>
              <img src={child} alt="" />
            </div>
            <div className={container.two}>
                    <div className={container.learn}>
                        <p>LEARN ABOUT US</p>
                        <div className={container.learn1}></div>
                    </div>
                    <div className={container.best}>
                        <p>Best School For Your Kids</p>
                    </div>
                    <div className={container.words}>
                        <p>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</p>
                    </div>
                    <div className={container.next}>
                        <div className={container.img}>
                            <img src={child1} alt="" />
                        </div>
                        <div className={container.img1}>
                            <div className={container.line}></div>
                            <p> <span className={container.check}><i class="fa-solid fa-check"></i></span>Labore eos amet dolor amet diam</p>
                            <div className={container.line}></div>
                            <p> <span className={container.check}><i class="fa-solid fa-check"></i></span>Etsea et sit dolor amet ipsum</p>
                            <div className={container.line}></div>
                            <p> <span className={container.check}><i class="fa-solid fa-check"></i></span>Diam dolor diam elitripsum vero.</p>
                            <div className={container.line}></div>
                        </div>
                    </div>
                    <div>

                              {show && (
                       <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={container.more}>Learn More</button>
                              )}
                    </div>
            </div>
        </div>

    </div>
  )
}

export default AboutSecond