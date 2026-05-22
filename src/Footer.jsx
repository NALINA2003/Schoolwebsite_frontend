import React from 'react'
import container from './Footer.module.css'
import teddy from '../src/Assests/bear.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const Footer = () => {
    const[email,setEmail] = useState("")
         const[name,setName] = useState("")
          const[error,setError] = useState({})


           const validate =()=>{
         const newError={}
         if(!email.trim()){
            console.log("Enter the required Email ")
            newError.email = (`Enter the required email`)
        }else if(!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)){
            console.log("Invalid email")
            newError.email = (`Invalid email`)
        }
        if(!name.trim()){
            console.log("Fill the required field")
            newError.name = (`Fill the required field`)
        }
        else if(!/^[A-Za-z]+$/.test(name)){
            console.log("Invalid Name")
            newError.name = (`Invalid Name`)
        }
         setError(newError)
        return Object.keys(newError).length === 0
    }
    const users = async() =>{
         if(validate()){
            console.log("form submitted sucessfully")
         }
          try{
            const data = { 
                email : email,
                name :  name
            }
            const res = await axios.post(`https://jsonplaceholder.typicode.com/users`,data)
  console.log(res,'rsds')
         }
         catch(err){
            console.log(err)
         }
      }


  return (
    
    <div className={container.first}>
<div className={container.first1}>
        <div className={container.wrapper}>
            <div className={container.one}>
                <div  className={container.logo}>
                    <div className={container.img}>
                        <img src={teddy} alt="" />
                    </div>
                    <p className={container.kid}>KidKinder</p>
                </div>
                <p className={container.para}>Labore dolor amet ipsum ea, erat sit ipsum duo eos. Volup amet ea dolor et magna dolor, elitr rebum duo est sed diam elitr. Stet elitr stet diam duo eos rebum ipsum diam ipsum elitr.</p>
                <div className={container.pic}>
                 <p className={container.icon1}><i className="fa-brands fa-twitter"></i></p>
                <p className={container.icon2}> <i className="fa-brands fa-facebook-f"></i></p>
                <p className={container.icon3}><i className="fa-brands fa-linkedin-in"></i></p>
                 <p className={container.icon4}><i className="fa-brands fa-instagram"></i></p>
                 </div>
            </div>
            <div  className={container.second}>
                <p className={container.get}>Get In Touch</p>
                <div className={container.address}>
                    <div className={container.icon5}>
                        <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <div className={container.address1}>
                        <p className={container.address2}>Address</p>
                        <p className={container.address3}>123 Street,New York,USA</p>
                    </div>
                </div>
                <div className={container.email} >
                    <div className={container.icon6}>
                        <i class="fa-solid fa-envelope"></i>
                    </div>
                    <div className={container.email1}>
                        <p className={container.email2}>Email</p>
                        <p className={container.email3}>info@example.com</p>
                    </div>
                </div>
                <div className={container.phone}>
                    <div className={container.icon7}>
                        <i class="fa-solid fa-phone"></i>
                    </div>
                   <div className={container.phone1}>
                    <p className={container.phone2}>Phone</p>
                    <p className={container.phone3}>+012 345 67890</p>
                   </div>
                </div>
            </div>
            <div  className={container.three}>
                <p className={container.quick}>Quick Links</p>
                <div className={container.links}>
                    <div className={container.link1}>
                        <i class="fa-solid fa-angle-right" style={{color:'#17a2b8',position:'relative',top:'5px'}}></i> 
                        <div className={container.link11}>
                        <Link>Home</Link>
                        </div>
                    </div>
                    <div className={container.link1}>
                        <i class="fa-solid fa-angle-right" style={{color:'#17a2b8',position:'relative',top:'5px',left:'6px'}}></i> 
                        <div className={container.link22}>
                        <Link>About Us</Link>
                        </div>
                    </div>
                     <div className={container.link1}>
                        <i class="fa-solid fa-angle-right" style={{color:'#17a2b8',position:'relative',top:'5px',left:'12px'}}></i>
                         <div className={container.link33}>
                        <Link>Our Classes</Link>
                        </div>
                    </div>
                     <div className={container.link1}>
                        <i class="fa-solid fa-angle-right" style={{color:'#17a2b8',position:'relative',top:'5px',left:'13px'}}></i>
                        <div className={container.link44}>
                        <Link>Our Teachers</Link>
                        </div>
                    </div>
                     <div className={container.link1}>
                        <i class="fa-solid fa-angle-right" style={{color:'#17a2b8',position:'relative',top:'5px',left:'5px'}}></i>
                        <div className={container.link55}>
                        <Link>Our Blog</Link>
                        </div>
                    </div>
                     <div className={container.link1}>
                        <i class="fa-solid fa-angle-right" style={{color:'#17a2b8',position:'relative',top:'5px',left:'10px'}}></i>
                        <div className={container.link66}>
                        <Link>Contact Us</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div  className={container.four}>
                <p className={container.news}>Newsletter</p>
                
                <div className={container.name}>
                       <input style={{padding:'15px',borderRadius:'5px',border:'none'}} type="text" placeholder='Your Name' value={name} onChange={(e) =>setName(e.target.value)} required />
                       {error.name && (<div className={container.popup}> ⚠ {error.name}</div> )}
                       <input style={{padding:'15px',borderRadius:'5px',border:'none'}} type="text" placeholder='Your Email' value={email} onChange={(e) =>setEmail(e.target.value)} required />
                      {error.email && ( <div className={container.popup}> ⚠ {error.email} </div> )}
                        <button className={container.input1} onClick={(users)}>Submit Now</button>
                </div>
                
                   
                </div>
                
            </div>
            </div>
            <div className={container.first2}>
            <div className={container.wrapper1}>
            <div className={container.border}></div>
                <div className={container.next}>
                    <p className={container.line}>© <span className={container.color}>Your Site Name</span>. All Rights Reserved. Designed by <span className={container.color}>HTML Codex</span></p>
                    <p className={container.line1}>Distributed <span className={container.color}>ThemeWagon</span></p>
                </div>
                </div>
                </div>
        </div>

    
  )
}

export default Footer