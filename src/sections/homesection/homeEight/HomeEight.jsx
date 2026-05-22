import React from 'react'
import container from './HomeEight.module.css'
import img1 from'../../../Assests/blog-1.jpg'
import img2 from '../../../Assests/blog-2.jpg'
import img3 from '../../../Assests/blog-3.jpg'

const HomeEight = () => {
  return (
    <div className={container.first}>
        <div className={container.wrapper}>
            <div className={container.latest}>
                <div className={container.line}></div>
            <p className={container.word}>LATEST BLOG</p>
            <div className={container.line}></div>           
            </div>
            <div className={container.meet}>
                <p>Latest Articles From Blog</p>
            </div>
            <div className={container.img}>
                <div className={container.img1}>
                    <div className={container.one}>
                       <img src={img1} alt="" />
                       <p className={container.heading}>Diam amet eos at no eos</p>
                       <div className={container.content}>
                        <p className={container.admin}><span className={container.icon}><i class="fa-solid fa-user"></i></span>Admin</p>
                        <p className={container.admin}><span className={container.icon}><i class="fa fa-folder text-primary"></i></span>Web Design</p>
                        <p className={container.admin}><span className={container.icon}><i class="fa-solid fa-comments"></i></span>15</p>
                       </div>
                       <p className={container.content1}>Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam eirmod, duo et sed sit eirmod kasd clita tempor dolor stet lorem. Tempor ipsum justo amet stet...</p>
                       <div className={container.button}>
                       <button style={{border:'none',borderRadius:'20px',backgroundColor:'#17a2b8',padding:'10px',color:'white'}} >Read More</button>
                       </div>
                   </div>
                </div>
                <div className={container.img2}>
                    <div className={container.two}>
                       <img src={img2} alt="" />
                   </div>
                   <p className={container.heading}>Diam amet eos at no eos</p>
                       <div className={container.content}>
                        <p className={container.admin}><span className={container.icon}><i class="fa-solid fa-user"></i></span>Admin</p>
                        <p className={container.admin}><span className={container.icon}><i class="fa fa-folder text-primary"></i></span>Web Design</p>
                        <p className={container.admin}><span className={container.icon}><i class="fa-solid fa-comments"></i></span>15</p>
                       </div>
                       <p className={container.content1}>Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam eirmod, duo et sed sit eirmod kasd clita tempor dolor stet lorem. Tempor ipsum justo amet stet...</p>
                       <div className={container.button}>
                       <button style={{border:'none',borderRadius:'20px',backgroundColor:'#17a2b8',padding:'10px',color:'white'}} >Read More</button>
                       </div>
                </div>
                <div className={container.img3}>
                    <div className={container.three}>
                       <img src={img3} alt="" />
                   </div>
                   <p className={container.heading}>Diam amet eos at no eos</p>
                       <div className={container.content}>
                        <p className={container.admin}><span className={container.icon}><i class="fa-solid fa-user"></i></span>Admin</p>
                        <p className={container.admin}><span className={container.icon}><i class="fa fa-folder text-primary"></i></span>Web Design</p>
                        <p className={container.admin}><span className={container.icon}><i class="fa-solid fa-comments"></i></span>15</p>
                       </div>
                       <p className={container.content1}>Sed kasd sea sed at elitr sed ipsum justo, sit nonumy diam eirmod, duo et sed sit eirmod kasd clita tempor dolor stet lorem. Tempor ipsum justo amet stet...</p>
                       <div className={container.button}>
                       <button style={{border:'none',borderRadius:'20px',backgroundColor:'#17a2b8',padding:'10px',color:'white'}} >Read More</button>
                       </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeEight