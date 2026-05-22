import React from 'react'
import teddy from '../src/Assests/bear.svg'
import { Link } from 'react-router-dom'
import container from './Navbar.module.css'
import { useState } from 'react'


const Navbar = () => {
    const[open,setOpen] = useState('closed')
  return (
    <div  className={container.first}>
      <div className={container.wrapper}>
      <div className={container.logo}>
        <img src={teddy} alt="" />
        <p className={container.kid}>Kid Kinder</p>
      </div>
      <div className={container.second}>
      <div className={container.navlink}>
     <Link to={'/'}>Home</Link>
     <Link to={'/About'}>About</Link>
     <Link to={'/Classes'}>Classes</Link>
     <Link to={'/Teachers'}>Teachers</Link>
     <Link to={'/Gallery'}>Gallery</Link>
     <div className={container.wrap}>
     <Link to={'/Pages'}>Pages <span className={container.down}><i class="fa-solid fa-sort-down"></i></span></Link>
     <div className={container.dropdownContent}>
     <Link to={'/BlogGrid'}>Blog Grid</Link>
     <Link to={'/BlogDetail'}>Blog Detail</Link>
    </div>
     </div>
     <Link to={'/Contact'}>Contact</Link>
     </div>
     <div>
      <button className={container.join} >Join Class</button>
     </div>
     <div className={container.media}>
     <div className={container.navlinks}>
     <Link to={'/'}>Home</Link>
     <Link to={'/About'}>About</Link>
     <Link to={'/Classes'}>Classes</Link>
     <Link to={'/Teachers'}>Teachers</Link>
     <Link to={'/Gallery'}>Gallery</Link>
     <div className={container.wraps}>
     <Link to={'/Pages'}>Pages <span className={container.down}><i class="fa-solid fa-sort-down"></i></span></Link>
     <div className={container.dropdownContents}>
     <Link to={'/BlogGrid'}>Blog Grid</Link>
     <Link to={'/BlogDetail'}>Blog Detail</Link>
    </div>
     </div>
     <Link to={'/Contact'}>Contact</Link>
     </div>
     <div>
      <button className={container.joins} >Join Class</button>
     </div>
     </div>
     </div>
     <div className={container.hamburger} onClick={() => setOpen(open === 'open' ? 'closed' : 'open')}>
                        <i class="fa-solid fa-bars"></i>
                    </div>
     </div>
    </div>
  )
}

export default Navbar