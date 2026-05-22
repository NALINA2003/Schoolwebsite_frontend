import React from 'react'
import container from './AboutFirst.module.css'
import { Link } from 'react-router-dom'

const AboutFirst = () => {
  return (
    <div className={container.first}>
      <div className={container.wrapper}>
        <p className={container.about}>
          About Us
        </p>
        <div className={container.links}>
        <div className={container.next}>
          <Link>Home</Link>
          </div>
          <div className={container.us}>
          <p> / About Us</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default AboutFirst