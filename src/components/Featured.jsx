import React from 'react'
import AnimatedCard from './AnimatedCard'
import { motion } from 'framer-motion'

export default function Featured(){
  return (
    <section id="featured">
      <motion.h3 initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} className="text-2xl font-semibold neon-text">Featured Project</motion.h3>
      <div className="mt-6">
        <AnimatedCard>
          <div className="md:flex md:items-center md:gap-6">
            <div className="flex-1">
              <div className="text-lg font-bold">ECOMMERCE</div>
              <div className="mt-2 text-slate-300">
            <p className="mb-4">"buy alll your clothes here" — A modern ecommerce platform built with React and Node.js that offers a seamless shopping experience for clothing and fashion accessories.</p>
            <ul className="space-y-2 text-sm">
              <li>• Secure payment processing with Stripe integration</li>
              <li>• Real-time inventory management</li>
              <li>• User accounts with order history</li>
              <li>• Mobile-responsive design</li>
            </ul>
          </div>
          <div className="mt-6 flex gap-3">
            <button className="px-4 py-2 rounded bg-gradient-to-r from-[#00d4ff] to-[#8a2be2] text-black hover:opacity-90 transition-opacity">Live Demo</button>
            <button className="px-4 py-2 rounded border border-slate-700 hover:bg-slate-800 transition-colors">View Code</button>
          </div>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </section>
  )
}
