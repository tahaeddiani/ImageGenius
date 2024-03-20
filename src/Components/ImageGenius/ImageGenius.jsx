import React, { useRef, useState } from 'react'
import './ImageGenius.css'
import img_default from '../Assets/img-default.png'


const ImageGenius = () => {

  const [image_url, setImage_url] = useState("/");
  let inputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  


  const imageGenius = async ()  => {
    if(inputRef.current.value==="") {
      return 0;
    }
    setLoading(true);
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method:"POST",
        headers:
        {
          "Content-Type":"application/json",
          Authorization: REACT_APP_API_KEY,
          "User-Agent":"Chrome",
        },
        body:JSON.stringify({
          prompt:`${inputRef.current.value}`,
          n:1,
          size:"512x512",
          }),

      }
    );
    let data = await response.json();
    setImage_url(data.data[0].url);
    setLoading(false);
    
    console.log(data);
    console.log(data.data[0].url);
    
  }
  return (
    <div className='ai-image-genius'>

     
      {/* title*/}
      <div className="header">Image <span>Genius</span></div>
      <div className="sub-header">Generate an image from text in seconds!</div>

      {/* image*/}
      <div className="img-loading">
        <div className="image"><img src={image_url==="/"?img_default:image_url} alt="" /></div>
        
      </div>

      {/* loading_bar */}
      <div className="loading">
        <div className={loading?"loading-bar-full":"loading-bar"}></div>
        <div className={loading?"loading-text":"display-none"}>Loading...</div>
      </div>

      {/* input box*/}
      <div className="search-box">
        <input type="text" ref={inputRef} className='search-input' placeholder='Describe Your image...' />
      </div>
      <div className="generate-btn" onClick={()=>{imageGenius()}}>Generate</div> 

      <div className="made-by">Made with <span role="img" aria-label="heart">❤️</span> by Taha Eddiani</div>

      
    </div>
  )
}

export default ImageGenius
