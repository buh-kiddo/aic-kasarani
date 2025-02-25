"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CreditCard, DollarSign, Gift } from "lucide-react"

export default function Donate() {
  const [amount, setAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("credit_card")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle donation submission logic here
    console.log("Donation submitted:", { amount, paymentMethod })
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-white">Support Our Ministry</h1>
      <p className="text-lg text-center mb-12 text-gray-300">
        Your generous donations help us continue our mission and serve our community. Thank you for your support!
      </p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 rounded-lg shadow-lg p-8"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-300">
              Donation Amount
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <DollarSign className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="number"
                name="amount"
                id="amount"
                className="block w-full pl-10 pr-12 sm:text-sm rounded-md bg-gray-700 border-gray-600 text-white"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Payment Method</label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button
                type="button"
                className={`p-4 rounded-lg flex flex-col items-center justify-center ${
                  paymentMethod === "credit_card"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
                onClick={() => setPaymentMethod("credit_card")}
              >
                <CreditCard className="h-8 w-8 mb-2" />
                <span>Credit Card</span>
              </button>
              <button
                type="button"
                className={`p-4 rounded-lg flex flex-col items-center justify-center ${
                  paymentMethod === "bank_transfer"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
                onClick={() => setPaymentMethod("bank_transfer")}
              >
                <DollarSign className="h-8 w-8 mb-2" />
                <span>Bank Transfer</span>
              </button>
              <button
                type="button"
                className={`p-4 rounded-lg flex flex-col items-center justify-center ${
                  paymentMethod === "other" ? "bg-indigo-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
                onClick={() => setPaymentMethod("other")}
              >
                <Gift className="h-8 w-8 mb-2" />
                <span>Other</span>
              </button>
            </div>
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
              placeholder="Add a personal message or prayer request"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Donate Now
            </button>
          </div>
        </form>
      </motion.div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-white">Other Ways to Give</h2>
        <p className="text-gray-300 mb-4">
          If you prefer to give in person or by mail, you can send your donations to:
        </p>
        <address className="text-gray-300 not-italic">
          A.I.C Kasarani
          <br />
          123 Church Street
          <br />
          Kasarani, Nairobi
          <br />
          Kenya
        </address>
      </div>
    </div>
  )
}

