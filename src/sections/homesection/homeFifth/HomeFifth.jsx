import React from 'react'
import container from './HomeFifth.module.css'
import { useState } from 'react'
import axios from 'axios'

const HomeFifth = () => {
     const[email,setEmail] = useState("")
     const[name,setName] = useState("")
      const[error,setError] = useState({})
     const[select,setSelect] = useState("")

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
        if(!select.trim()){
    newError.selected = "Please select a class"
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
                select: select
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
        <div className={container.wrapper}>
            <div className={container.one}>
                <div className={container.book}>
                    <p>BOOK A SEAT </p>
                    <p className={container.line}></p>
                </div>
                <div className={container.book1}>
                    <p>Book A Seat For Your Kid</p>
                </div>
                <div className={container.book2}>
                    <p>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</p>
                </div>
                <div className={container.book3}>
                    <div className={container.para1}>
                        <p className={container.check}><i class="fa-solid fa-check"></i></p>
                        <p className={container.word}>Labore eos amet dolor amet diam</p>
                    </div>
                    <div className={container.para2}>
                         <p className={container.check}><i class="fa-solid fa-check"></i></p>
                        <p className={container.word}>  Etsea et sit dolor amet ipsum</p>
                    </div>
                    <div className={container.para3}>
                         <p className={container.check}><i class="fa-solid fa-check"></i></p>
                        <p className={container.word}> Diam dolor diam elitripsum vero.</p>
                    </div>
                </div>
                <button className={container.button2}>Book Now</button>
            </div>
            <div className={container.two}>
                <div className={container.border}>
                    <div className={container.seat}>
                        <p>Book A Seat</p>
                    </div>
                    <div className={container.name}>
                       <input style={{padding:'15px',borderRadius:'5px',border:'none'}} type="text" placeholder='Your Name' value={name} onChange={(e) =>setName(e.target.value)} required />
                       {error.name && (<div className={container.popup}> ⚠ {error.name}</div> )}
                       <input style={{padding:'15px',borderRadius:'5px',border:'none'}} type="text" placeholder='Your Email' value={email} onChange={(e) =>setEmail(e.target.value)} required />
                      {error.email && ( <div className={container.popup}> ⚠ {error.email} </div> )}
                       <input list="three-options" id="options"  name="options" placeholder="Select A Class" style={{ padding:'15px', borderRadius:'5px', border:'none' }} value={select} onChange={(e) => setSelect(e.target.value)}/>
            <datalist id="three-options">
                 <option value="Class A" />
                 <option value="Class B" />
                 <option value="Class C" />
            </datalist>
                       <button  className={container.click}onClick={(users)}>Book Now</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeFifth