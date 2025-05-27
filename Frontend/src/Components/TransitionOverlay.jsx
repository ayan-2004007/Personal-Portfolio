import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
const bars = [0, 1, 2, 3]

const TransitionOverlay = ({ isActive, onComplete }) => {
  const [exitPhase, setExitPhase] = useState(false)

  useEffect(() => {
    if (isActive) {
      const timeout = setTimeout(() => {
        setExitPhase(true)
        setTimeout(() => {
          onComplete?.()
          setExitPhase(false)
        }, 800)
      }, 600)
      return () => clearTimeout(timeout)
    }
  }, [isActive, onComplete])
  return (
    <AnimatePresence>
      {isActive && (
        <div className="fixed top-0 left-0 w-full h-full z-[9999] pointer-events-none overflow-hidden">
          {bars.map((i) => (
            <motion.div
              key={i}
              className="absolute bottom-0 w-1/4 h-full bg-black"
              style={{ left: `${i * 25}%` }}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: i * 0.1 + (exitPhase ? 0.3 : 0)
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  )
}

export default TransitionOverlay
