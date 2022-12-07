import React,{useState} from 'react'
import "./App.css"

function App() {

  const [emoji,setEmoji]= useState("👑")

  return(
    <div className='first-container'>
      <div className='App-title-container'>
        <h2 className='App-title'>Emoji Kit🧡</h2>
      </div>

      <div className='second-container'>
          <h3 className='emoji'>
            {emoji}
          </h3>
      </div>

      <div className='third-container'>
        <div className='emoji-item' onClick={()=>{setEmoji('👑')}}>👑</div>
        <div className='emoji-item' onClick={()=>{setEmoji('💎')}}>💎</div>
        <div className='emoji-item' onClick={()=>{setEmoji('🥰')}}>🥰</div>
        <div className='emoji-item' onClick={()=>{setEmoji('🎁')}}>🎁</div>
        <div className='emoji-item' onClick={()=>{setEmoji('⏲')}}>⏲</div>
      </div>
    </div>
  )
}

export default App