import React from 'react'
import "./Emoji-button.css"
function emojibutton({emoji,setEmoji}) {
  return (
    <div
     className='emoji-option'
     onClick={()=>{
    setEmoji(emoji);
}} > 
{emoji}
      
    </div>
  )
}

export default emojibutton
