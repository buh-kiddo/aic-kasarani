"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Play, Calendar, Clock, Search, Filter } from "lucide-react"

const sermons = [
  {
    title: "The Fall from Glory",
    speaker: "Rev Kimatu",
    date: "February 23, 2025",
    duration: "45 minutes",
    description: "Causes of loosing God's Glory and how we can reclaim it back.",
    image: "/images/sermons-img/23-FEB-2025.webp",
    audioLink: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2FAickasaraniofficial%2Fvideos%2F2768574739999284%2F&show_text=false&width=560&t=0",
    category: "Renewal",
  },
  {
    title: "The Glory of God",
    speaker: "Pastor Charles",
    date: "February 16, 2025",
    duration: "40 minutes",
    description: "Reclaiming the lost Glory for divine kingdom advancement cont...",
    image: "/images/sermons-img/16-FEB-2025.webp",
    audioLink: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2FAickasaraniofficial%2Fvideos%2F655869896871544%2F&show_text=false&width=560&t=0",
    category: "Renewal",
  },
  {
    title: "The Restoration",
    speaker: "Pastor Charles",
    date: "February 09, 2025",
    duration: "50 minutes",
    description: "Reclaiming the lost Glory for divine kingdom advancement",
    image: "/images/sermons-img/09-FEB-2025.webp",
    audioLink: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2FAickasaraniofficial%2Fvideos%2F2929385657229474%2F&show_text=false&width=560&t=0",
    category: "Purpose",
  },
]

const categories = [...new Set(sermons.map((sermon) => sermon.category))]

export default function Sermons() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredSermons = sermons.filter(
    (sermon) =>
      (selectedCategory === "All" || sermon.category === selectedCategory) &&
      (sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sermon.speaker.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sermon.description.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-white p-6">Latest Sermons</h1>

      {/* Live Broadcast Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-center text-white">Live Broadcast</h2>
        <div className="aspect-w-16 aspect-h-9 mb-8">
          <iframe
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2FAickasaraniofficial%2Fvideos%2F2768574739999284%2F&show_text=false&width=560&t=0"
              frameBorder="0"
              allowFullScreen
              className="w-full h-[500px] md:h-80 lg:h-96 rounded-lg shadow-lg" ></iframe>
        </div>
        <div className="text-center">
          <Link
            href="#"
            className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition-colors duration-300 inline-flex items-center"
          >
            <Play className="mr-2" size={20} />
            Join Live Stream
          </Link>
        </div>
      </section>

      {/* Search and Filter */}
      <div className="mb-8 flex flex-col md:flex-row justify-between items-center">
        <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Search sermons..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
        <div className="relative w-full md:w-1/3">
          <select
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600 appearance-none"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          <Filter className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>

      {/* Sermon Archive */}
      <section>
        <h2 className="text-3xl font-semibold mb-8 text-center text-white">Sermon Archive</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSermons.map((sermon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col glass"
            >
              <Image
                src={sermon.image || "/placeholder.svg"}
                alt={sermon.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-white">{sermon.title}</h3>
                <p className="text-gray-400 mb-2">{sermon.speaker}</p>
                <div className="flex items-center text-gray-400 mb-4">
                  <Calendar className="mr-2" size={16} />
                  <span className="mr-4">{sermon.date}</span>
                  <Clock className="mr-2" size={16} />
                  <span>{sermon.duration}</span>
                </div>
                <p className="text-gray-300 mb-4">{sermon.description}</p>
                <div className="flex justify-between items-center">
                  <Link
                    href={sermon.audioLink}
                    className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300 inline-flex items-center"
                  >
                    <Play className="mr-2" size={16} />
                    Listen to Sermon
                  </Link>
                  <span className="text-gray-400 text-sm">{sermon.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

