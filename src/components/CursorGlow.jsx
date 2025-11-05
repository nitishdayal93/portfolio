import React, { useEffect, useState } from 'react'

export default function CursorGlow(){
  const [pos, setPos] = useState({x:-100, y:-100})
  useEffect(()=>{
    const move = (e)=> setPos({x:e.clientX, y:e.clientY})
    window.addEventListener('mousemove', move)
    return ()=> window.removeEventListener('mousemove', move)
  },[])

  return (
    <div style={{left:pos.x, top:pos.y}} className="custom-cursor">
      <div style={{width:24,height:24, background:'rgba(0,212,255,0.15)', border:'1px solid rgba(0,212,255,0.6)', borderRadius:12, boxShadow:'0 0 20px rgba(138,43,226,0.6)'}} />
    </div>
  )
}
