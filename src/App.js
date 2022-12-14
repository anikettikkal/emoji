import React, { useState } from 'react'
import "./App.css"

function App() {

  const [emoji, setEmoji] = useState("π")
  const [emojiColor, setEmojiColor] = useState("white")
  const [emojiSize, setEmojiSize] = useState(100);
  const [emojiDeg, setEmojiDeg] = useState(0);

  return (
    <div className='first-container'>
      <div className='App-title-container'>
        <h2 className='App-title'>Emoji Kitπ§‘</h2>
      </div> 

      
      <div className='emoji-editor-container row'>
        <div className='col-md-6 '>

          <div className='second-container' style={{backgroundColor:emojiColor, transform:`rotate(${emojiDeg *3.6}deg)`}}>
            <div className='emoji' style={{fontSize: `${emojiSize *1.5}px`}}>
              {emoji}
            </div>
          </div>

          <div className='third-container'>
            <div className='emoji-item' onClick={() => { setEmoji('π') }}>π</div>
            <div className='emoji-item' onClick={() => { setEmoji('π') }}>π</div>
            <div className='emoji-item' onClick={() => { setEmoji('π₯°') }}>π₯°</div>
            <div className='emoji-item' onClick={() => { setEmoji('π') }}>π</div>
            <div className='emoji-item' onClick={() => { setEmoji('π') }}>π</div>
          </div>

        </div>

        <div className='col-md-6'>
          
          <div className='colors-container'>
            <div className='color-item bg-white' onClick={()=>{setEmojiColor("white")}}></div>
            <div className='color-item bg-skyblue' onClick={()=>{setEmojiColor("skyblue")}}></div>
            <div className='color-item bg-yellow' onClick={()=>{setEmojiColor("yellow")}}></div>
            <div className='color-item bg-orange' onClick={()=>{setEmojiColor("orange")}}></div>
            <div className='color-item bg-palegreen' onClick={()=>{setEmojiColor("palegreen")}}></div>
          </div>

          <h2 className='mt-5 heading' >Size Increment or Decrement</h2>
          <div className='size-container'>
            <input type="range" className='size-slider' onChange={(e)=>{setEmojiSize(e.target.value)}}/>
          </div>

          <h2 className='mt-5 heading'>Rotate Emoji</h2>
          <div className='size-container'>
            <input type="range" className='size-slider' onChange={(e)=>{setEmojiDeg(e.target.value)}}/>
          </div>


        </div>
      </div>


    </div>
  )
}

export default App