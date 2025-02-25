"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react"
import { useTheme } from "@/contexts/ThemeContext"
import { motion } from "framer-motion"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-morphism" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="font-bold text-2xl text-gradient">
            A.I.C Kasarani
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/ministries">Ministries</NavLink>
              <NavLink href="/events">Events</NavLink>
              <NavLink href="/sermons">Sermons</NavLink>
              <NavLink href="/blog">Blog</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>
          </div>
          <div className="flex items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-full text-foreground hover:bg-accent transition-colors duration-300"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            <div className="md:hidden ml-4">
              <button onClick={toggleMenu} className="text-foreground focus:outline-none">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden glass-morphism"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="/" onClick={toggleMenu}>
              Home
            </NavLink>
            <NavLink href="/about" onClick={toggleMenu}>
              About
            </NavLink>
            <NavLink href="/ministries" onClick={toggleMenu}>
              Ministries
            </NavLink>
            <NavLink href="/events" onClick={toggleMenu}>
              Events
            </NavLink>
            <NavLink href="/sermons" onClick={toggleMenu}>
              Sermons
            </NavLink>
            <NavLink href="/blog" onClick={toggleMenu}>
              Blog
            </NavLink>
            <NavLink href="/contact" onClick={toggleMenu}>
              Contact
            </NavLink>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

const NavLink = ({ href, children, onClick }) => (
  <Link
    href={href}
    className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover-lift"
    onClick={onClick}
  >
    {children}
  </Link>
)

const NavDropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative group">
      <button
        className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover-lift flex items-center"
        onMouseEnter={() => setIsOpen(true)}
      >
        {title}
        <ChevronDown size={16} className="ml-1" />
      </button>
      {isOpen && (
        <div
          className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-background ring-1 ring-black ring-opacity-5 focus:outline-none"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="py-1">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Navigation

