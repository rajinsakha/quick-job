"use client"

import type React from "react"
import { motion } from "framer-motion"

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-white text-center">
        <svg className="w-32 h-32 mx-auto mb-4" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <motion.rect
            x="20"
            y="100"
            width="20"
            height="60"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1, y: 40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            fill="white"
          />
          <motion.rect
            x="50"
            y="100"
            width="20"
            height="80"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            fill="white"
          />
          <motion.rect
            x="80"
            y="100"
            width="20"
            height="50"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            fill="white"
          />

          {/* Windows */}
          {[
            { x: 25, y: 50 },
            { x: 25, y: 70 },
            { x: 55, y: 30 },
            { x: 55, y: 50 },
            { x: 55, y: 70 },
            { x: 85, y: 60 },
            { x: 85, y: 80 },
          ].map((window, index) => (
            <motion.rect
              key={index}
              x={window.x}
              y={window.y}
              width="10"
              height="10"
              fill="#3B82F6"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
            />
          ))}
        </svg>
        <motion.h1
          className="text-3xl font-bold mb-2"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          WorkSpace Nepal
        </motion.h1>
        <motion.p
          className="text-xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Finding your perfect space...
        </motion.p>
      </div>
    </motion.div>
  )
}

export default LoadingScreen

