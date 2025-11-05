import React, { useMemo, useState } from 'react'
import AnimatedCard from './AnimatedCard'
import projects from '../data/projects'
import { motion } from 'framer-motion'

export default function Projects(){
  const [filter, setFilter] = useState('all')
  const tags = useMemo(()=>{
    const s = new Set()
    projects.forEach(p=>p.tags.forEach(t=>s.add(t)))
    return ['all', ...Array.from(s)]
  },[])

  const list = projects.filter(p=> filter==='all' ? true : p.tags.includes(filter))

  return (
    <section id="projects">
      <motion.h3 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} className="text-2xl font-semibold neon-text">Projects</motion.h3>

      <div className="mt-4 flex gap-3 flex-wrap">
        {tags.map(t=> (
          <button key={t} onClick={()=>setFilter(t)} className={`px-3 py-1 rounded-full ${filter===t? 'bg-gradient-to-r from-[#00d4ff] to-[#8a2be2] text-black':'bg-[#0b1220]'}`}>{t}</button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {list.map(p=> (
          <AnimatedCard key={p.id}>
            <div className="flex flex-col gap-3">
              <div className="text-lg font-semibold">{p.title}</div>
              <div className="text-sm text-slate-300">{p.description}</div>
              <div className="mt-2 flex gap-2 flex-wrap">{p.tags.map(t=> <span key={t} className="text-xs px-2 py-1 rounded bg-[#0b1220]">{t}</span>)}</div>
              <div className="mt-4 flex gap-2">
                <button className="px-3 py-1 rounded bg-[#111827]">View</button>
                <button className="px-3 py-1 rounded border">Source</button>
              </div>
            </div>
          </AnimatedCard>
        ))}
      </div>
    </section>
  )
}
