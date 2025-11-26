import React from 'react'
import "./Colorbutton.css"
function ColorButton({bgColor,setBgcolor}) {
  return (
    <div
     className='color-option'
     onClick={()=>{
    setBgcolor(bgColor);
}} 
style={{backgroundColor:bgColor}}  >
    </div>
  )
}

export default ColorButton
