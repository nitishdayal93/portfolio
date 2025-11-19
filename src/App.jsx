import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Featured from './components/Featured'
import Education from './components/Education'
import Contact from './components/Contact'
import CursorGlow from './components/CursorGlow'
import ThemeToggle from './components/ThemeToggle'

export default function App(){
  // initialize theme from localStorage or system preference
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem('theme')
      if(stored) return stored
      if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
    } catch (e) {}
    return 'dark'
  })

  useEffect(()=>{
    document.documentElement.classList.toggle('dark', theme==='dark')
    try { localStorage.setItem('theme', theme) } catch(e){}
  },[theme])

  return (
    <AnimatePresence mode="wait">
  <div className={`min-h-screen ${theme==='dark' ? 'bg-[#0b0f17] text-slate-100' : 'bg-white text-slate-900'}`}>
        <CursorGlow />
        <Nav />
        <main className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="pt-20">
            <Hero />
            <div className="mt-24">
              <Skills />
            </div>
            <div className="mt-20">
              <Featured />
            </div>
            <div className="mt-20">
              <Projects />
            </div>
            <div className="mt-20">
              <Education />
            </div>
            <div className="mt-10">
              <Contact />
            </div>
          </div>
        </main>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>
    </AnimatePresence>
  )
}
