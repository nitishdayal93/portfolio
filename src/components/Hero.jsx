import React from 'react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function TypewriterText({ text = '', speed = 80 }){
  const [display, setDisplay] = useState('')
  useEffect(()=>{
    let i = 0
    const t = setInterval(()=>{
      setDisplay(text.slice(0, i+1))
      i++
      if(i >= text.length) clearInterval(t)
    }, speed)
    return ()=> clearInterval(t)
  },[text, speed])
  return (
    <h2 className="mt-4 text-2xl text-slate-700 dark:text-slate-300">{display}<span className="text-slate-200 dark:text-slate-200">|</span></h2>
  )
}

export default function Hero(){
  async function handleDownloadResume(e){
    // Try to fetch the PDF and force a download (works even if browser would open PDF inline)
    try{
      e?.preventDefault()
      const res = await fetch('/resume.pdf')
      if(!res.ok) throw new Error('Failed to fetch')
      const blob = await res.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'NitishDayal_Resume.pdf'
      document.body.appendChild(a)
      a.click()
      a.remove()
      window.URL.revokeObjectURL(url)
    }catch(err){
      // fallback: navigate to file so browser handles it
      window.location.href = '/resume.pdf'
    }
  }
  function handleGoProjects(e){
    e?.preventDefault()
    const el = document.getElementById('projects')
    if(el){
      const y = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({top: y, behavior: 'smooth'})
    } else {
      // fallback: navigate to anchor
      window.location.hash = '#projects'
    }
  }
  return (
    <section id="hero" className="min-h-[70vh] flex flex-col md:flex-row items-center gap-8">
      <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.1}} className="flex-1">
        <h1 className="text-4xl md:text-6xl font-bold">Hi, I’m <span className="neon-text">Nitish Dayal</span></h1>
        <TypewriterText text="Full Stack Developer" />
  <p className="mt-6 text-slate-700 dark:text-slate-300 max-w-xl">I’m a Web Developer with experience. Currently, I’m pursuing a Master of Computer Application (MCA) from Lovely Professional University, Phagwara, Punjab. I love building functional, creative, and scalable digital experiences.</p>
        <div className="mt-6 flex gap-4">
          <a href="/resume.pdf" onClick={handleDownloadResume} className="px-4 py-2 rounded-md bg-gradient-to-r from-[#00d4ff] to-[#8a2be2] text-black font-semibold hover:opacity-90 transition-opacity">Download Resume</a>
          <a href="#projects" onClick={handleGoProjects} className="px-4 py-2 rounded-md border border-slate-700 hover:bg-slate-800 transition-colors">Projects</a>
        </div>
      </motion.div>

      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}} className="flex-1 flex items-center justify-center">
        <div className="w-72 h-80 md:w-96 md:h-[450px] rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700/50 relative">
          <img 
            src="/photo.jpeg" 
            alt="Nitish Dayal" 
            className="w-full h-full object-cover brightness-75 transition-all duration-500"
            loading="eager"
          />
          {/* subtle overlay to further reduce bright areas if needed */}
          <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
        </div>
      </motion.div>
    </section>
  )
}
