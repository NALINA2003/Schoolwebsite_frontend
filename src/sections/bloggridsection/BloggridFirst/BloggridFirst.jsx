import React from 'react'
import container from './BloggridFirst.module.css'
import { Link } from 'react-router-dom'

const BloggridFirst = () => {
  return (
   <div className={container.first}>
      <div className={container.wrapper}>
        <p className={container.about}>
        Our Blog 
        </p>
        <div className={container.links}>
        <div className={container.next}>
          <Link>Home</Link>
          </div>
          <div className={container.us}>
          <p> /  Our Blog</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default BloggridFirst