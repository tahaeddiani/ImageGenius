import React from 'react'
import './ImageGenius.css'
import img_default from '../Assets/img-default.png'
const ImageGenius = () => {
  return (
    <div className='ai-image-genius'>

      {/* title*/}
      <div className="header">Text To Image <span>AI</span></div>

      {/* image*/}
      <div className="img-loading">
        <div className="image"><img src={img_default} alt="" /></div>
      </div>

      {/* search box*/}
      <div className="search-box">
        <input type="text" className='search-input' placeholder='Describe Your image...' />
        <div className="generate-btn">Generate</div> 
      </div>
      
    </div>
  )
}

export default ImageGenius
