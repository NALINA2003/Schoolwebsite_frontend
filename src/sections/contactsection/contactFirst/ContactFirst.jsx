import React from 'react'
import { Link } from 'react-router-dom'
import container from './ContactFirst.module.css'

const ContactFirst = () => {
  return (
   <div className={container.first}>
      <div className={container.wrapper}>
        <p className={container.about}>
         Contact Us
        </p>
        <div className={container.links}>
        <div className={container.next}>
          <Link>Home</Link>
          </div>
          <div className={container.us}>
          <p> / Contact Us</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ContactFirst