import React from 'react'
import './ImageGenius.css'
import img_default from '../Assets/img-default.png'
const ImageGenius = () => {
  return (
    <div className='ai-image-genius'>
      <div className="header">Text To Image <span>AI</span></div>
      <div className="img-loading">
        <div className="image"><img src={img_default} alt="" /></div>
      </div>

      <div className="seach-box">
        <input type="text" className='search-input' placeholder='Describe Your image...' />
      </div>
      
    </div>
  )
}

export default ImageGenius
