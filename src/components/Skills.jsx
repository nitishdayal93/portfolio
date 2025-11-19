import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub 
} from 'react-icons/fa'
import { 
  SiTailwindcss, 
  SiExpress, 
  SiVercel, 
  SiMongodb,
  SiVite,
  SiCplusplus,
  SiC,
  SiVisualstudiocode
} from 'react-icons/si'

const skillGroups = [
  { 
    title: 'Frontend', 
    items: [
      { name: 'React.js', icon: <FaReact className="text-[#61DAFB]" /> },
      { name: 'HTML', icon: <FaHtml5 className="text-[#E34F26]" /> },
      { name: 'CSS', icon: <FaCss3Alt className="text-[#1572B6]" /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss className="text-[#38B2AC]" /> },
      { name: 'Vite', icon: <SiVite className="text-[#646CFF]" /> }
    ]
  },
  { 
    title: 'Backend', 
    items: [
      { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
      { name: 'Express.js', icon: <SiExpress className="text-white" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> }
    ]
  },
  { 
    title: 'Languages', 
    items: [
      { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" /> },
      { name: 'C++', icon: <SiCplusplus className="text-[#00599C]" /> },
      { name: 'C', icon: <SiC className="text-[#A8B9CC]" /> }
    ]
  },
  { 
    title: 'Tools', 
    items: [
      { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
      { name: 'GitHub', icon: <FaGithub className="text-white" /> },
      { name: 'VS Code', icon: <SiVisualstudiocode className="text-[#007ACC]" /> }
    ]
  }
]

export default function Skills(){
  return (
    <section id="skills">
      <motion.h3 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} className="text-2xl font-semibold neon-text">Skills</motion.h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillGroups.map(g=> (
          <motion.div 
            key={g.title} 
            whileHover={{scale:1.02}} 
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            transition={{duration: 0.3}}
            className="p-5 rounded-xl bg-white/60 dark:bg-[#071025]/60 border border-slate-200 dark:border-slate-800">
            <h4 className="font-medium text-slate-800 dark:text-slate-200 text-lg mb-4">{g.title}</h4>
            <ul className="grid grid-cols-2 gap-3">
              {g.items.map(item => (
                <motion.li 
                  key={item.name}
                  whileHover={{scale:1.05}}
                  className="flex items-center gap-2 p-2 rounded-lg bg-gray-100 dark:bg-[#0b1220] text-slate-800 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-[#0f1836] transition-colors">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm">{item.name}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
