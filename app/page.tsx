"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronRight, Calendar, Headphones, Book } from "lucide-react"
import Image from "next/image"



export default function Home() {
  const cursorRef = useRef(null)
  const cursorDotRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorDot = cursorDotRef.current

    const moveCursor = (e) => {
      const { clientX, clientY } = e
      cursor.style.left = `${clientX}px`
      cursor.style.top = `${clientY}px`
      cursorDot.style.left = `${clientX}px`
      cursorDot.style.top = `${clientY}px`
    }

    document.addEventListener("mousemove", moveCursor)

    return () => {
      document.removeEventListener("mousemove", moveCursor)
    }
  }, [])

  return (
    <div>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-dot" ref={cursorDotRef}></div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay loop muted className="absolute w-auto min-w-full min-h-full max-w-none opacity-50">
          <source src="/videos/church-video-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold mb-4 text-white text-gradient"
          >
            Welcome to A.I.C Kasarani
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            Seeking the One, Guiding Many - Preparing for His Glorious Return
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
            <Link
              href="/about"
              className="bg-accent text-accent-foreground font-bold py-3 px-8 rounded-full hover:bg-accent/80 transition-colors duration-300 inline-flex items-center hover-lift"
            >
              Learn More
              <ChevronRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-16 bg-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <Image
                src="/images/church-welcome.jpg"
                alt="Welcome to A.I.C Kasarani"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-semibold mb-4 text-secondary-foreground">Welcome to Our Church</h2>
              <p className="text-lg mb-8 text-secondary-foreground/80">
                At A.I.C Kasarani, we are a community of believers dedicated to spreading the love of Christ. We welcome
                all to join us in worship, fellowship, and service to our community.
              </p>
              <Link
                href="/about"
                className="text-primary hover:text-primary/80 transition-colors duration-300 inline-flex items-center hover-lift"
              >
                Read More About Us
                <ChevronRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Calendar size={40} />}
              title="Our Ministries"
              description="Discover how you can get involved and serve in our various ministries."
              link="/ministries"
              linkText="Explore Ministries"
            />
            <FeatureCard
              icon={<Headphones size={40} />}
              title="Latest Sermons"
              description="Listen to our recent sermons and grow in your faith."
              link="/sermons"
              linkText="Listen to Sermons"
            />
            <FeatureCard
              icon={<Book size={40} />}
              title="Blog"
              description="Explore our blog for inspiring messages, biblical insights, and spiritual growth resources."
              link="/blog"
              linkText="Read blog articles"
            />
          </div>
        </div>
      </section>

      {/* Live Broadcast Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold mb-8 text-center">Live Broadcast</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2FAickasaraniofficial%2Fvideos%2F2768574739999284%2F&show_text=false&width=560&t=0"
              frameBorder="0"
              allowFullScreen
              className="w-full h-[150px] md:h-80 lg:h-96 rounded-lg shadow-lg" ></iframe>

          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center text-gradient"
        >
          Upcoming Events at A.I.C Kasarani
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card p-6 rounded-lg shadow-lg glass-morphism"
          >
            <h3 className="text-xl font-semibold mb-2 text-card-foreground">Sunday Worship Service</h3>
            <p className="text-card-foreground/80 mb-2">Join us for our weekly worship service</p>
            <div className="flex items-center text-sm text-muted-foreground mb-4">
              <Calendar className="mr-2 h-4 w-4" />
              <span>March 02, 2025 | 06:30 AM - 02:00 PM</span>
            </div>
            <Link
              href="/events"
              className="text-primary hover:text-primary/80 transition-colors duration-300 inline-flex items-center"
            >
              Learn More
              <ChevronRight className="ml-2" size={16} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-card p-6 rounded-lg shadow-lg glass-morphism"
          >
            <h3 className="text-xl font-semibold mb-2 text-card-foreground">Prayer & Fasting</h3>
            <p className="text-card-foreground/80 mb-2">Dive deeper into God's Word with our evening fasting prayers</p>
            <div className="flex items-center text-sm text-muted-foreground mb-4">
              <Calendar className="mr-2 h-4 w-4" />
              <span>Week days | 7:00 PM - 8:30 PM</span>
            </div>
            <Link
              href="/events"
              className="text-primary hover:text-primary/80 transition-colors duration-300 inline-flex items-center"
            >
              Learn More
              <ChevronRight className="ml-2" size={16} />
            </Link>
          </motion.div>
        </div>
        <div className="text-center">
          <Link
            href="/events"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-colors duration-300 inline-flex items-center"
          >
            View All Events
            <ChevronRight className="ml-2" size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}

const FeatureCard = ({ icon, title, description, link, linkText }) => (
  <motion.div whileHover={{ scale: 1.05 }} className="bg-card p-6 rounded-lg shadow-lg glass-morphism">
    <div className="text-primary mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-4 text-card-foreground">{title}</h3>
    <p className="mb-4 text-card-foreground/80">{description}</p>
    <Link
      href={link}
      className="text-primary hover:text-primary/80 transition-colors duration-300 inline-flex items-center"
    >
      {linkText}
      <ChevronRight className="ml-2" size={20} />
    </Link>
  </motion.div>
)

