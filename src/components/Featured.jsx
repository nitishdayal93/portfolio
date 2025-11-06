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
            <div className="mb-4 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#8a2be2] text-black text-sm">Coming Soon</span>
              <span className="text-neon-purple">Development Starting Q4 2025</span>
            </div>
            <p className="mb-4">An ambitious e-commerce platform focused on providing a premium shopping experience for fashion enthusiasts.</p>
            <ul className="space-y-2 text-sm">
              <li>• Planned Features:</li>
              <li>• Secure payment processing with Stripe</li>
              <li>• Real-time inventory tracking</li>
              <li>• User profiles and order history</li>
              <li>• Responsive design for all devices</li>
              <li>• AI-powered size recommendations</li>
            </ul>
          </div>
          <div className="mt-6">
            <span className="text-sm text-neon-cyan">Project development updates will be posted here soon</span>
          </div>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </section>
  )
}
