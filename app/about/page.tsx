"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const timeline = [
  { year: 2007, event: "A.I.C Kasarani founded" },
  { year: 2008, event: "Transitioned to new location" },
  { year: 2011, event: "First church building constructed" },
  { year: 2018, event: "Youth ministry established" },
  { year: 2020, event: "Community outreach program launched" },
  { year: 2021, event: "Upgrading and renovation of the sanctuary" },
  { year: 2025, event: "Embracing digital transformation" },
]

const team = [
  { name: "Pastor John Doe", role: "Senior Pastor", image: "/images/pst1.jpg" },
  { name: "Jane Smith", role: "Associate Pastor", image: "/images/pst2.jpg" },
  { name: "Michael Johnson", role: "Youth Pastor", image: "/images/pst1.jpg" },
  { name: "Sarah Williams", role: "Worship Leader", image: "/images/pst2.jpg" },
]

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center text-gradient p-6"
      >
        About A.I.C Kasarani
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/images/church-congregation.jpg"
            alt="A.I.C Kasarani Church Congregation"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-primary">Our History</h2>
          <p className="mb-4 text-foreground/80">
            A.I.C Kasarani was established in 1980 with a vision to spread the gospel and serve the community of
            Kasarani. Over the years, we have grown from a small gathering to a vibrant congregation, always staying
            true to our mission of sharing God's love.
          </p>
          <p className="text-foreground/80">
            Today, we continue to build on the foundation laid by our founders, adapting to the changing needs of our
            community while remaining rooted in the timeless truths of Scripture.
          </p>
        </motion.div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-center text-primary">Our Mission & Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-card p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-card-foreground">Mission</h3>
            <p className="text-card-foreground/80">
              To display Christ's love and lead people to real transformation.
            </p>
          </motion.div>
          <motion.div
            className="bg-card p-6 rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-card-foreground">Vision</h3>
            <p className="text-card-foreground/80">
              To be a center of transformation and church of choice.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-4 text-center text-primary">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CoreValue value="Transformation" description="We believe in the life-changing power of Christ to renew hearts and minds." />
          <CoreValue value="True Worship" description="We are committed to sincere, Spirit-led worship that honors God." />
          <CoreValue value="Unity" description="We strive to walk in love and harmony as one body in Christ." />
          <CoreValue value="Fellowship" description="We cultivate meaningful relationships that encourage spiritual growth." />
          <CoreValue value="Prayers" description="We are devoted to seeking God through fervent and persistent prayer." />
          <CoreValue value="Evangelism" description="We passionately share the gospel to bring others to Christ." />
          <CoreValue value="Discipleship" description="We equip and mentor believers to grow in faith and fulfill their calling." />
          <CoreValue value="Accountability" description="We uphold integrity by being responsible and answerable in all we do." />
          <CoreValue value="Transparency" description="We operate with honesty and openness, reflecting Christ’s truth in all things." />

        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center text-primary">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                  <div className="bg-card p-4 rounded-lg shadow-md">
                    <h3 className="font-bold text-card-foreground">{item.year}</h3>
                    <p className="text-card-foreground/80">{item.event}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-8 text-center text-primary">Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="font-semibold text-foreground">{member.name}</h3>
              <p className="text-foreground/60">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

const CoreValue = ({ value, description }) => (
  <motion.div
    className="bg-card p-4 rounded-lg shadow-md"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <h3 className="font-semibold mb-2 text-card-foreground">{value}</h3>
    <p className="text-card-foreground/80">{description}</p>
  </motion.div>
)

