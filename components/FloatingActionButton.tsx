"use client"

import { useState } from "react"
import { Plus, Heart, Calendar, Headphones, Mail, X } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <motion.button
        onClick={toggleMenu}
        className="bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-16 right-0 space-y-2"
          >
            <FloatingActionItem href="/donate" icon={<Heart />} label="Donate" />
            <FloatingActionItem href="/events" icon={<Calendar />} label="Events" />
            <FloatingActionItem href="/sermons" icon={<Headphones />} label="Sermons" />
            <FloatingActionItem href="/contact" icon={<Mail />} label="Contact" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const FloatingActionItem = ({ href, icon, label }) => (
  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <Link
      href={href}
      className="flex items-center space-x-2 bg-card text-card-foreground px-4 py-2 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
    >
      {icon}
      <span>{label}</span>
    </Link>
  </motion.div>
)

export default FloatingActionButton

