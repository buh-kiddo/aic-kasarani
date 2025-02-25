"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const ministries = [
  {
    name: "Children's Ministry",
    description: "Nurturing young hearts in faith and love.",
    longDescription:
      "Our Children's Ministry is dedicated to providing a fun and engaging environment where children can learn about God's love and grow in their faith. We offer age-appropriate lessons, activities, and events that help children develop a strong spiritual foundation.",
    image: "/images/children-ministry.jpg",
  },
  {
    name: "Youth Ministry",
    description: "Empowering the next generation of believers.",
    longDescription:
      "The Youth Ministry at A.I.C Kasarani is focused on guiding teenagers and young adults in their spiritual journey. Through Bible studies, fellowship events, and service opportunities, we help young people develop a personal relationship with Christ and prepare them for Christian leadership.",
    image: "/images/youth-ministry.png",
  },
  {
    name: "Women's Fellowship",
    description: "Connecting and supporting women in their faith journey.",
    longDescription:
      "Our Women's Fellowship provides a supportive community for women to grow in their faith, develop meaningful relationships, and serve others. We offer regular meetings, Bible studies, retreats, and outreach programs tailored to the unique needs and experiences of women.",
    image: "/images/women-ministry.jpg",
  },
  {
    name: "Men's Fellowship",
    description: "Building strong men of faith and integrity.",
    longDescription:
      "The Men's Fellowship at A.I.C Kasarani is committed to helping men grow as disciples of Christ, leaders in their families, and servants in the church and community. We offer Bible studies, accountability groups, and service projects that challenge and encourage men in their faith walk.",
    image: "/images/men-ministry.jpg",
  },
  {
    name: "Choir",
    description: "Praising God through music and song.",
    longDescription:
      "Our Choir Ministry leads the congregation in worship through beautiful and inspiring music. We welcome singers of all skill levels who have a passion for praising God through song. The choir participates in regular Sunday services and special events throughout the year.",
    image: "/images/choir-ministry.jpg",
  },
  {
    name: "Community Outreach",
    description: "Serving our neighbors with Christ's love.",
    longDescription:
      "The Community Outreach Ministry is dedicated to showing God's love in practical ways to our local community. We organize various service projects, food drives, and support programs to meet the needs of those around us and share the message of hope in Christ.",
    image: "/images/community-ministry.jpg",
  },
]

export default function Ministries() {
  const [selectedMinistry, setSelectedMinistry] = useState(null)
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-white p-6">Our Ministries</h1>
      <p className="text-lg text-center mb-12 text-gray-300">
        At A.I.C Kasarani, we offer various ministries to cater to the spiritual needs of our congregation and
        community. Get involved and grow in your faith through these opportunities to serve and connect.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ministries.map((ministry, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer"
            onClick={() => setSelectedMinistry(ministry)}
          >
            <Image
              src={ministry.image || "/placeholder.svg"}
              alt={ministry.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-white">{ministry.name}</h3>
              <p className="text-gray-300">{ministry.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedMinistry && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <div className="bg-gray-800 rounded-lg p-8 max-w-2xl w-full">
            <h2 className="text-2xl font-semibold mb-4 text-white">{selectedMinistry.name}</h2>
            <p className="text-gray-300 mb-6">{selectedMinistry.longDescription}</p>
            <div className="flex justify-between">
              <button
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
                onClick={() => setShowForm(true)}
              >
                Volunteer
              </button>
              <button
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
                onClick={() => setSelectedMinistry(null)}
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {showForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-semibold mb-4 text-white">Volunteer Sign Up</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="ministry" className="block text-sm font-medium text-gray-300">
                  Preferred Ministry
                </label>
                <select
                  id="ministry"
                  name="ministry"
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                  required
                >
                  <option value="">Select a ministry</option>
                  {ministries.map((ministry, index) => (
                    <option key={index} value={ministry.name}>
                      {ministry.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
                ></textarea>
              </div>
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      )}
    </div>
  )
}

