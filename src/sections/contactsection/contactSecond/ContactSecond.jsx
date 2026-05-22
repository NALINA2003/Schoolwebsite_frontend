import React from 'react'
import container from './ContactSecond.module.css'
import { useState } from 'react'
import axios from 'axios'

const ContactSecond = () => {
     const[email,setEmail] = useState("")
         const[name,setName] = useState("")
         const[subject,setSubject] = useState("")
         const[message,setMessage] = useState("")
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
        if(!subject.trim()){
            console.log(" Fill the required field")
            newError.subject = (`Fill the required field`)
        }
        else if (!/^[A-Za-z ]+$/.test(subject)){
            console.log("Invalid Subject")
            newError.subject = ('Invalid Subject')
        }
        if(!message.trim()){
            console.log(" Fill the required field")
            newError.message = (`Fill the required field`)
        }
        else if (!/^[A-Za-z ]+$/.test(message)){
            console.log("Invalid Subject")
            newError.message = ('Invalid Subject')
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
                name :  name,
                subject :subject,
                message : message
            }
             const res = await axios.post(`https://schoolwebsite-backend-1us4.onrender.com/api/message/mailSend`,data)
  console.log(res,'rsds')
         }
         catch(err){
            console.log(err)
         }
      }
  return (
    <div className={container.first}>
        <div className={container.wrapper}>
            <div className={container.latest}>
                <div className={container.line}></div>
            <p className={container.word}>GET IN TOUCH</p>
            <div className={container.line}></div>           
            </div>
            <div className={container.meet}>
                <p>Contact Us For Any Query</p>
            </div>
            <div className={container.flex}>
            <div className={container.one}>
                <div className={container.one1}>
                <input  style={{height:'40px',fontSize:'17px'}}type="text" placeholder='Your Name' value={name} onChange={(e) =>setName(e.target.value)} />
                {error.name ? <p style={{color:'red'}}>{error.name}</p> : ""}
                <input  style={{height:'40px',fontSize:'17px'}}type="text" placeholder='Your Email' value={email} onChange={(e) =>setEmail(e.target.value)} />
                 {error.email ? <p style={{color:'red'}}>{error.email}</p> : ""}
                <input  style={{height:'40px',fontSize:'17px'}}type="text" placeholder='Subject' value={subject}  onChange={(e) =>setSubject(e.target.value)}/>
                {error.subject ? <p style={{color:'red'}}>{error.subject}</p>: ""}
                <textarea  placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} style={{height:'100px',fontSize:'17px',padding:'10px'}}></textarea>
                {error.message ? <p style={{color:'red'}}>{error.message}</p>: ""}
                </div>
                <button className={container.button} onClick={(users)}>Send Message</button>
            </div>
            <div className={container.two}>
                <p className={container.para}>Labore sea amet kasd diam justo amet ut vero justo. Ipsum ut et kasd duo sit, ipsum sea et erat est dolore, magna ipsum et magna elitr. Accusam accusam lorem magna, eos et sed eirmod dolor est eirmod eirmod amet.</p>
                <div className={container.add}>
                    <div  className={container.location}>
                        <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <div  className={container.location1}>
                        <p className={container.first1}>Address</p>
                        <p className={container.second}>123 Street, New York, USA</p>
                    </div>
                </div>
                <div className={container.add}>
                    <div  className={container.envelope}>
                        <i class="fa-solid fa-envelope"></i>
                    </div>
                    <div className={container.envelope1}>
                        <p className={container.first1}>Email</p>
                        <p className={container.second}>info@example.com</p>
                    </div>
                </div>
                <div className={container.add}>
                    <div className={container.phone}>
                        <i class="fa-solid fa-phone"></i>
                    </div>
                    <div className={container.phone1}>
                        <p className={container.first1}>Phone</p>
                        <p className={container.second}>+012 345 67890</p>
                    </div>
                </div>
                <div className={container.add}>
                    <div className={container.clock}>
                        <i class="fa-regular fa-clock"></i>
                    </div>
                    <div className={container.clock1}>
                        <p className={container.first1}>Opening Hours</p>
                        <p  className={container.third}>Sunday - Friday:</p>
                        <p className={container.second}>08:00 AM - 05:00 PM</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ContactSecond