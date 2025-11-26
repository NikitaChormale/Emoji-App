import React, { useState } from 'react'
import "./Home.css";
import Emojibutton from '../../components/Emoji-button/Emojibutton'
import ColorButton from '../../components/Color-button/Colorbutton';
import imgRotate from "./rotate.png.png";

function Home() {
const[emoji,setEmoji]= useState("😇")
const [slidervalue,setslidervalue]=useState(50);
const[bgColor,setBgcolor]=useState("#ffffff")
const[angle,setAngle]=useState(0);

  return (
    <div>
 <h1 className='header'> Playing with{" "}
     <span className='header-highlight'>UseState And UseEffect</span></h1>
      
<p className='app-description'> 
    useState is a React Hooks were introduced,
     <code>Usestate</code> was primarily managed in class components.
</p>
<div 
className='emoji-container'
 style={{
    fontSize:`${slidervalue}px`,
   backgroundColor: bgColor,
}}> 
<span style={{transform:`rotate(${angle}deg)`
}}
className='emoji'>
  {emoji}
 
</span>

</div>
<div className='slider-container'>
    
    <input type='range' min="0" max="100" className='slider'
    onChange={(e)=>{setslidervalue(e.target.value)}}
    value={slidervalue}/>
</div>
<div className="angle-rotate">
    <img 
    src={imgRotate} 
    alt='rotate' 
    className='rotate-image'
    onClick={()=>{
      setAngle(angle + 45);
    }}/>
    
</div>
<div className='emoji-picker'>  
    <Emojibutton emoji={"💫"}setEmoji={setEmoji}/>
    <Emojibutton emoji={"🥰"}setEmoji={setEmoji}/>
    <Emojibutton emoji={"🪄"}setEmoji={setEmoji}/>
   <Emojibutton emoji={"🎀"}setEmoji={setEmoji}/>
   <Emojibutton emoji={"🌺"}setEmoji={setEmoji}/>
   <Emojibutton emoji={"🏆"}setEmoji={setEmoji}/>
<Emojibutton emoji={"🎧"}setEmoji={setEmoji}/>
<Emojibutton emoji={"🎸"}setEmoji={setEmoji}/>

<Emojibutton emoji={"🎲"}setEmoji={setEmoji}/>


</div>
<div className='color-picker'>
        
<ColorButton bgColor={"#a9f7bfff"} setBgcolor={setBgcolor}/>
<ColorButton bgColor={"#a8eaf4ff"} setBgcolor={setBgcolor}/>
<ColorButton bgColor={"#feb8b8ff"} setBgcolor={setBgcolor}/>
<ColorButton bgColor={"#c49cf6ff"} setBgcolor={setBgcolor}/>
<ColorButton bgColor={"#efb8daff"} setBgcolor={setBgcolor}/>
<ColorButton bgColor={"#baebc8ff"} setBgcolor={setBgcolor}/>
<ColorButton bgColor={"#e4f8b1ff"} setBgcolor={setBgcolor}/>
<ColorButton bgColor={"#fdc5ceff"} setBgcolor={setBgcolor}/>
<ColorButton bgColor={"#bdebfcff"} setBgcolor={setBgcolor}/>
<ColorButton bgColor={"#e1a0d0ff"} setBgcolor={setBgcolor}/>
<ColorButton bgColor={"#9c9ca1ff"} setBgcolor={setBgcolor}/>

<ColorButton bgColor={"#cbb7f6ff"} setBgcolor={setBgcolor}/>


       </div>
    </div>
  )
}

export default Home
