import React from 'react'
import container from './ClassesFirst.module.css'
import { Link } from 'react-router-dom'

const ClassesFirst = () => {
  return (
   <div className={container.first}>
      <div className={container.wrapper}>
        <p className={container.about}>
          Our Classes
        </p>
        <div className={container.links}>
        <div className={container.next}>
          <Link>Home</Link>
          </div>
          <div className={container.us}>
          <p> /  Our Classes</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ClassesFirst