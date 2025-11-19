import React from 'react'
import { motion } from 'framer-motion'

export default function AnimatedCard({children}){
  return (
    <motion.div
      whileHover={{scale:1.03}}
      whileTap={{scale:0.98}}
      className="p-4 rounded-xl bg-white/60 dark:bg-[#071025]/60 border border-slate-200 dark:border-slate-800 shadow-md text-slate-900 dark:text-slate-100"
    >
      {children}
    </motion.div>
  )
}
