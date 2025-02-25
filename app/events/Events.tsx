"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { format, isBefore, isAfter } from "date-fns"

const events = [
  {
    title: "Sunday Worship Service",
    date: new Date(2025, 1, 23), // February 23, 2025
    time: "10:00 AM - 12:00 PM",
    description:
      "Join us for our weekly worship service, featuring praise and worship, prayer, and a powerful message from God's Word.",
    image: "/images/events-img/sunday-service2.jpg",
    location: "Main Sanctuary",
    schedule: "Every Sunday",
    additionalInfo: "All are welcome. Childcare provided for ages 0-5.",
  },
  {
    title: "Friday Kesha",
    date: new Date(2025, 1, 28), // Adjust the date as needed
    time: "09:30 PM - Dawn",
    description: "Join us for a powerful night of prayer, worship, and spiritual renewal.",
    image: "/images/events-img/friday-kesha.jpg",
    location: "Main Sanctuary",
    schedule: "Weekly Event",
    additionalInfo: "Open to all; come expectant for a night of breakthrough and divine encounters.",
},

  {
    title: "Community Outreach",
    date: new Date(2024, 6, 27), // July 27, 2024
    time: "09:00 AM - 01:00 PM",
    description:
      "Join us as we serve our local community through various outreach activities and volunteer opportunities.",
    image: "/images/events-img/community-ministry.jpg",
    location: "Community Center",
    schedule: "Last Saturday of each month",
    additionalInfo: "Wear comfortable clothes and shoes. Lunch will be provided for volunteers.",
  },
  {
    title: "Sunday Service",
    date: new Date(2025, 2, 2), // March 02, 2025 (Upcoming  event)
    time: "06:30 AM - 02:00 PM",
    description: "Join us for a beautiful sunday service.",
    image: "/images/events-img/sunday-service.jpg",
    location: "Main Sanctuary",
    schedule: "Every Sunday",
    additionalInfo: "Arrive early for best seating. Come prepared to worship the Lord",
  },
  {
    title: "Baptism Classes",
    date: new Date(2025, 1, 25), // December 24, 2023 (past event)
    time: "07:00 AM - 08:30 PM",
    description: "Register for Baptism Classes",
    image: "/images/events-img/community-ministry.jpg",
    location: "Main Sanctuary",
    schedule: "Annual Event",
    additionalInfo: "For: Those not baptized, Need full water immersion baptism, New beleivers, Baptized but looking for Recap/revison",
  },
  { 
    title: "Easter Celebration Service",
    date: new Date(2025, 3, 20), // April 20, 2025 (Easter Sunday)
    time: "09:00 AM - 12:00 PM",
    description: "Join us for a powerful Easter celebration as we rejoice in the resurrection of Christ!",
    image: "/images/events-img/easter-service.jpeg",
    location: "Main Sanctuary",
    schedule: "Annual Event",
    additionalInfo: "All are welcome! Special performances, worship, and a message of hope await you."
},
]

export default function Events() {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null)

  const toggleEventDetails = (index: number) => {
    setExpandedEvent(expandedEvent === index ? null : index)
  }

  const currentDate = new Date()
  const upcomingEvents = events.filter((event) => isAfter(event.date, currentDate))
  const pastEvents = events.filter((event) => isBefore(event.date, currentDate))

  const EventCard = ({ event, index, isPast = false }) => (
    <Card className="flex flex-col h-full">
      <CardHeader className="p-0">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          width={400}
          height={200}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <CardTitle className="mb-2">{event.title}</CardTitle>
        <CardDescription className="mb-4">{event.description}</CardDescription>
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <Calendar className="mr-2 h-4 w-4" />
          <span>{format(event.date, "MMMM d, yyyy")}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <Clock className="mr-2 h-4 w-4" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="mr-2 h-4 w-4" />
          <span>{event.location}</span>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button variant="outline" size="sm" className="w-full" onClick={() => toggleEventDetails(index)}>
          {expandedEvent === index ? (
            <>
              Hide Details
              <ChevronUp className="ml-2 h-4 w-4" />
            </>
          ) : (
            <>
              {isPast ? "View Recap" : "Show Details"}
              <ChevronDown className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </CardFooter>
      {expandedEvent === index && (
        <div className="px-6 pb-6 text-sm text-card-foreground">
          <p>
            <strong>Schedule:</strong> {event.schedule}
          </p>
          <p className="mt-2">
            <strong>Additional Information:</strong> {event.additionalInfo}
          </p>
          {isPast && (
            <p className="mt-2 italic">
              This event has already taken place. Check our gallery for photos and highlights!
            </p>
          )}
        </div>
      )}
    </Card>
  )

  return (
    <div className="container mx-auto px-4 py-24">
      {" "}
      {/* Increased top padding */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 text-center text-primary"
      >
        Church Events
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-center mb-12 text-muted-foreground"
      >
        Stay connected with our church community by participating in our upcoming events. We look forward to seeing you
        there!
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-3xl font-semibold mb-6 text-primary"
      >
        Upcoming Events
      </motion.h2>
      {upcomingEvents.length === 0 ? (
        <p className="text-center text-lg text-muted-foreground">No upcoming events at this time. Check back soon!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
            >
              <EventCard event={event} index={index} />
            </motion.div>
          ))}
        </div>
      )}
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-3xl font-semibold mb-6 text-primary"
      >
        Past Events
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pastEvents.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
          >
            <EventCard event={event} index={index + upcomingEvents.length} isPast={true} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

