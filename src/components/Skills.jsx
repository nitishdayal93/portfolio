import React from 'react'
import { motion } from 'framer-motion'

const skillGroups = [
  { title: 'Frontend', items: ['React.js','HTML','CSS','JavaScript','TailwindCSS'] },
  { title: 'Backend', items: ['Node.js','Express.js'] },
  { title: 'Other Tools', items: ['Git','Vercel'] }
]

export default function Skills(){
  return (
    <section id="skills">
      <motion.h3 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} className="text-2xl font-semibold neon-text">Skills</motion.h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillGroups.map(g=> (
          <motion.div key={g.title} whileHover={{scale:1.02}} className="p-5 rounded-xl bg-[#071025]/60 border border-slate-800">
            <h4 className="font-medium text-slate-200">{g.title}</h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {g.items.map(i=> <li key={i} className="text-sm px-3 py-1 rounded-full bg-[#0b1220] text-slate-300">{i}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
