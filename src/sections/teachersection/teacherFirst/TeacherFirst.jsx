import React from 'react'
import container from './TeacherFirst.module.css'
import { Link } from 'react-router-dom'


const TeacherFirst = () => {
  return (
    <div className={container.first}>
      <div className={container.wrapper}>
        <p className={container.about}>
          Our Teachers
        </p>
        <div className={container.links}>
        <div className={container.next}>
          <Link>Home</Link>
          </div>
          <div className={container.us}>
          <p> /  Our Teachers</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherFirst