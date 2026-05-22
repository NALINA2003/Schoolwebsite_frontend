import React from 'react'
import container from './GalleryFirst.module.css'
import { Link } from 'react-router-dom'

const GalleryFirst = () => {
  return (
     <div className={container.first}>
      <div className={container.wrapper}>
        <p className={container.about}>
         Gallery
        </p>
        <div className={container.links}>
        <div className={container.next}>
          <Link>Home</Link>
          </div>
          <div className={container.us}>
          <p> /  Gallery</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryFirst