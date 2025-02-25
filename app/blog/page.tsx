"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, Calendar, User } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "The Importance of Community in Faith",
    excerpt: "Exploring how fellowship and community support our spiritual growth and well-being.",
    author: "Pastor Charles Omondi",
    date: "January 26, 2025",
    image: "/images/blogs-img/blog-1.webp",
    category: "Faith",
  },
  {
    id: 2,
    title: "Understanding the Beatitudes",
    excerpt: "A deep dive into Jesus' teachings in the Sermon on the Mount and their relevance today.",
    author: "Pastor Charles Omondi",
    date: "Feb 02, 2025",
    image: "/images/blogs-img/blog-2.webp",
    category: "Bible Study",
  },
  {
    id: 3,
    title: "The Power of Forgiveness",
    excerpt: "Examining the transformative impact of forgiveness in our lives and relationships.",
    author: "Pastor Charles Omondi",
    date: "Feb 09, 2025",
    image: "/images/blogs-img/blog-3.webp",
    category: "Christian Living",
  },
  {
    id: 4,
    title: "Navigating Faith in a Digital Age",
    excerpt: "Discussing the challenges and opportunities for Christians in the era of social media and technology.",
    author: "Pastor Charles Omondi",
    date: "Feb 16, 2025",
    image: "/images/blogs-img/blog-4.webp",
    category: "Modern Faith",
  },
]

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">Our Blog</h1>

      <div className="mb-8">
        <div className="relative w-full max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search blog posts..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex-grow">
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{post.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
              <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                <User className="mr-2" size={16} />
                <span className="mr-4">{post.author}</span>
                <Calendar className="mr-2" size={16} />
                <span>{post.date}</span>
              </div>
              <Link
                href={`/blog/${post.id}`}
                className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-300"
              >
                Read More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

