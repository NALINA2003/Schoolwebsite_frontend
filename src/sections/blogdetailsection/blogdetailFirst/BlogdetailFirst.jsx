import React from 'react'
import { Link } from 'react-router-dom'
import container from './Blogdetail.module.css'

const BlogdetailFirst = () => {
  return (
    <div className={container.first}>
      <div className={container.wrapper}>
        <p className={container.about}>
         Blog Details
        </p>
        <div className={container.links}>
        <div className={container.next}>
          <Link>Home</Link>
          </div>
          <div className={container.us}>
          <p> / Blog Details</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default BlogdetailFirst