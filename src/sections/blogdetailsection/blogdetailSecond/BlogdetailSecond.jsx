import React from 'react'
import container from './BlogdetailSecond.module.css'
import img1 from '../../../Assests/detail.jpg'
import img2 from '../../../Assests/blog-1.jpg'
import img3 from '../../../Assests/blog-2.jpg'
import img8 from '../../../Assests/blog-3.jpg'
import img4 from '../../../Assests/user.jpg'
import img5 from '../../../Assests/post-1.jpg'
import img6 from '../../../Assests/post-2.jpg'
import img7 from '../../../Assests/post-3.jpg'
import { useState } from 'react'
import axios from 'axios'


const BlogdetailSecond = () => {
   const[email,setEmail] = useState("")
             const[name,setName] = useState("")
             const[catchPhrase,setCatchPhrase] = useState("")
             const[bs,setBs] = useState("")
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
        if(!catchPhrase.trim()){
            console.log(" Fill the required field")
            newError.catchPhrase = (`Fill the required field`)
        }
        else if (!/^[A-Za-z ]+$/.test(catchPhrase)){
            console.log("Invalid Subject")
            newError.catchPhrase = ('Invalid Subject')
        }
        if(!bs.trim()){
            console.log(" Fill the required field")
            newError.bs = (`Fill the required field`)
        }
        else if (!/^[A-Za-z ]+$/.test(bs)){
            console.log("Invalid Subject")
            newError.bs = ('Invalid Subject')
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
                catchPhrase : catchPhrase,
                bs : bs
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
          <div className={container.detail}>
            <p className={container.blog}>BLOG DETAIL PAGE</p>
            <div className={container.line}></div>
          </div>
          <div className={container.word}>
            <p>Diam dolor est ipsum clita lorem</p>
          </div>
         <div className={container.content}>
                        <p className={container.admin}><span className={container.icon}><i class="fa-solid fa-user"></i></span>Admin</p>
                        <p className={container.admin}><span className={container.icon}><i class="fa fa-folder text-primary"></i></span>Web Design</p>
                        <p className={container.admin}><span className={container.icon}><i class="fa-solid fa-comments"></i></span>15</p>
        </div>
        <div className={container.img1}>
          <img src={img1} alt="" />
        </div>
        <div className={container.para}>
          <p className={container.para1}>Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren sit stet no diam kasd vero.</p>
          <p className={container.para2}>Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et, clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat justo dolore sit invidunt.</p>
        </div>
        <div className={container.word}>
            <p>Est dolor lorem et ea</p>
        </div>
        <div className={container.next}>
          <div className={container.img2}>
          <img src={img2} alt="" />
          </div>
          <p className={container.para3}>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita</p>
          
        </div>
        <p className={container.para4}>dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd clita ipsum et. Takimata kasd diam justo est eos erat aliquyam et ut. Ea sed sadipscing no justo et eos labore, gubergren ipsum magna dolor lorem dolore, elitr aliquyam takimata sea kasd dolores diam, amet et est accusam labore eirmod vero et voluptua. Amet labore clita duo et no. Rebum voluptua magna eos magna, justo gubergren labore sit voluptua eos.</p>
        <p className={container.word}>Est dolor lorem et ea</p>
        <div className={container.next1}>
        <p className={container.para5}>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita</p>
        
        <div className={container.img3}>
          <img src={img3} alt="" />
        </div>
        </div>
        <p className={container.para6}>dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd clita ipsum et. Takimata kasd diam justo est eos erat aliquyam et ut. Ea sed sadipscing no justo et eos labore, gubergren ipsum magna dolor lorem dolore, elitr aliquyam takimata sea kasd dolores diam, amet et est accusam labore eirmod vero et voluptua. Amet labore clita duo et no.</p>
          <p className={container.word}>Related Post</p>
           <div className={container.main}>
          <div className={container.parent}>
            <div className={container.child}>
            <div className={container.post}>
              <img src={img5} alt="" />
            </div>
             <div className={container.post1}>
             <p className={container.word1}>Diam amet eos at no eos</p>
            <div className={container.content}>
                        <p className={container.admin}><span className={container.icon}><i class="fa-solid fa-user"></i></span>Admin</p>
                        <p className={container.admin}><span className={container.icon}><i class="fa fa-folder text-primary"></i></span>Web Design</p>
                        <p className={container.admin}><span className={container.icon}><i class="fa-solid fa-comments"></i></span>15</p>
        </div>
        </div>
          </div>
          <div className={container.child}>
            <div className={container.post}>
              <img src={img6} alt="" />
            </div>
             <div className={container.post1}>
             <p className={container.word1}>Diam amet eos at no eos</p>
            <div className={container.content}>
                        <p className={container.admin}><span className={container.icon}><i class="fa-solid fa-user"></i></span>Admin</p>
                        <p className={container.admin}><span className={container.icon}><i class="fa fa-folder text-primary"></i></span>Web Design</p>
                        <p className={container.admin}><span className={container.icon}><i class="fa-solid fa-comments"></i></span>15</p>
        </div>
        </div>
          </div>
          <div className={container.child}>
            <div className={container.post}>
              <img src={img7} alt="" />
            </div>
             <div className={container.post1}>
             <p className={container.word1}>Diam amet eos at no eos</p>
            <div className={container.content}>
                        <p className={container.admin}><span className={container.icon}><i class="fa-solid fa-user"></i></span>Admin</p>
                        <p className={container.admin}><span className={container.icon}><i class="fa fa-folder text-primary"></i></span>Web Design</p>
                        <p className={container.admin}><span className={container.icon}><i class="fa-solid fa-comments"></i></span>15</p>
        </div>
        </div>
          </div>
          </div>
          </div>
           <p className={container.word}>3 Comments</p>
           <div className={container.comment}>
            <div className={container.imggg}>
              <img src={img4} alt="" />
            </div>
            <div className={container.imggg1}>
             <div className={container.time}>
               <p className={container.time1}>John Deo</p>
              <p className={container.time2}>01 Jan 2045 at 12.00pm</p>
             </div>
             <div className={container.reply}>
              <p className={container.diam}>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor consetetur at sit.</p>
             <button className={container.but}>Reply</button>
             </div>
            </div>
           </div>
           <div className={container.comment}>
            <div className={container.imggg}>
              <img src={img4} alt="" />
            </div>
            <div className={container.imggg1}>
             <div className={container.time}>
              <p className={container.time1}>John Deo</p>
              <p className={container.time2}>01 Jan 2045 at 12.00pm</p>
             </div>
             <div className={container.reply}>
              <p className={container.diam}>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor consetetur at sit.</p>
             <button className={container.but}>Reply</button>
             </div>
            </div>
           </div>
           <div className={container.comment}>
            <div className={container.imggg}>
              <img src={img4} alt="" />
            </div>
            <div className={container.imggg1}>
             <div className={container.time}>
              <p className={container.time1}>John Deo</p>
              <p className={container.time2}>01 Jan 2045 at 12.00pm</p>
             </div>
             <div className={container.reply}>
              <p className={container.diam}>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor consetetur at sit.</p>
             <button className={container.but}>Reply</button>
             </div>
            </div>
           </div>


           <div className={container.onee}>
                <p className={container.comment}>Leave a Comment</p>
                <div className={container.onee1}>
                    <label style={{fontFamily:' "Nunito", sans-serif',marginBottom:'-15px'}} >Your Name*</label>
                <input  style={{height:'40px',fontSize:'17px'}}type="text" value={name} onChange={(e) =>setName(e.target.value)} />
                {error.name ? <p style={{color:'red'}}>{error.name}</p> : ""}
                 <label style={{fontFamily:' "Nunito", sans-serif',marginBottom:'-15px'}} >Your Email*</label>
                <input  style={{height:'40px',fontSize:'17px'}}type="text"  value={email} onChange={(e) =>setEmail(e.target.value)} />
                 {error.email ? <p style={{color:'red'}}>{error.email}</p> : ""}
                 <label style={{fontFamily:' "Nunito", sans-serif',marginBottom:'-15px'}} >Website*</label>
                <input  style={{height:'40px',fontSize:'17px'}}type="text"  value={catchPhrase}  onChange={(e) =>setCatchPhrase(e.target.value)}/>
                {error.catchPhrase ? <p style={{color:'red'}}>{error.catchPhrase}</p>: ""}
                 
                  <label style={{fontFamily:' "Nunito", sans-serif',marginBottom:'-15px'}} >Message here*</label>
                <textarea   value={bs} onChange={(e) => setBs(e.target.value)} style={{height:'100px',fontSize:'17px',padding:'10px'}}></textarea>
                {error.bs ? <p style={{color:'red'}}>{error.bs}</p>: ""}
                </div>
                <button className={container.buttons} onClick={(users)}>Leave Comment</button>
            </div>
        </div>
        
        <div className={container.two}>
          <div className={container.border}>
              <div className={container.img4}>
                <img src={img4} alt="" />
              </div>
              <p className={container.name}>John Doe</p>
              <p className={container.name1}>Conset elitr erat vero dolor ipsum et diam, eos dolor lorem ipsum, ipsum ipsum sit no ut est. Guber ea ipsum erat kasd amet est elitr ea sit.</p>
          </div>
          <div className={container.input}> 
          <input style={{width:'260px',fontSize:'18px',padding:'10px'}}type="text" placeholder='Keyword' />
            <div className={container.search}>
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <p className={container.word}>Categories</p>
          <div className={container.level}>
            <p className={container.level1}>Web Design</p>
            <p className={container.level2}>150</p>
          </div>
          <div className={container.lines}></div>
           <div className={container.level}>
             <p className={container.level1}>Web Development</p>
             <p className={container.level2}>131</p>
          </div>
          <div className={container.lines}></div>
          <div className={container.level}>
             <p className={container.level1}>Online Marketing</p>
             <p className={container.level3}>78</p>
          </div>
          <div className={container.lines}></div>
          <div className={container.level}>
             <p className={container.level1}>Keyword Research</p>
             <p className={container.level3}>56</p>
          </div>
          <div className={container.lines}></div>
          <div className={container.level}>
             <p className={container.level1}>Email Marketing</p>
             <p className={container.level3}>98</p>
          </div>
          <div className={container.imgg}>
            <img src={img2} alt="" />
          </div>
          <p className={container.word}>Recent Post</p>
          <div className={container.child}>
            <div className={container.post}>
              <img src={img5} alt="" />
            </div>
             <div className={container.post1}>
             <p className={container.word1}>Diam amet eos at no eos</p>
            <div className={container.content}>
                        <p className={container.admin}><span className={container.icon}><i class="fa-solid fa-user"></i></span>Admin</p>
                        <p className={container.admin}><span className={container.icon}><i class="fa fa-folder text-primary"></i></span>Web Design</p>
                        <p className={container.admin}><span className={container.icon}><i class="fa-solid fa-comments"></i></span>15</p>
        </div>
        </div>
          </div>
          <div className={container.child}>
            <div className={container.post}>
              <img src={img6} alt="" />
            </div>
            <div className={container.post1}>
             <p className={container.word1}>Diam amet eos at no eos</p>
            <div className={container.content}>
                        <p className={container.admin}><span className={container.icon}><i class="fa-solid fa-user"></i></span>Admin</p>
                        <p className={container.admin}><span className={container.icon}><i class="fa fa-folder text-primary"></i></span>Web Design</p>
                        <p className={container.admin}><span className={container.icon}><i class="fa-solid fa-comments"></i></span>15</p>
        </div>
        </div>
          </div>
           <div className={container.child}>
            <div className={container.post}>
              <img src={img7} alt="" />
            </div>
            <div className={container.post1}>
             <p className={container.word1}>Diam amet eos at no eos</p>
            <div className={container.content}>
                        <p className={container.admin}><span className={container.icon}><i class="fa-solid fa-user"></i></span>Admin</p>
                        <p className={container.admin}><span className={container.icon}><i class="fa fa-folder text-primary"></i></span>Web Design</p>
                        <p className={container.admin}><span className={container.icon}><i class="fa-solid fa-comments"></i></span>15</p>
        </div>
        </div>
           </div>
           <div className={container.imgg}>
            <img src={img3} alt="" />
          </div>
          <p className={container.word}>Tag Cloud</p>
          <div className={container.button}>
            <button className={container.button1}>Design</button>
            <button className={container.button2}>Development</button>
            <button className={container.button3}>Marketing</button>
          </div>
          <div className={container.button}>
            <button className={container.button4}>SEO</button>
           <button className={container.button5}>Writing</button>
            <button className={container.button6}>Consulting</button>
          </div>
          <div className={container.imgg}>
            <img src={img8} alt="" />
          </div>
           <p className={container.word}>Plain Text</p>
           <p className={container.text}>Aliquyam sed lorem stet diam dolor sed ut sit. Ut sanctus erat ea est aliquyam dolor et. Et no consetetur eos labore ea erat voluptua et. Et aliquyam dolore sed erat. Magna sanctus sed eos tempor rebum dolor, tempor takimata clita sit et elitr ut eirmod.</p>
        </div>
        </div>

    </div>
  )
}

export default BlogdetailSecond