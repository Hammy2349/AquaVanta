"use client"

import * as React from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EstimatePopup() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [hasSeen, setHasSeen] = React.useState(false)

  React.useEffect(() => {
    // Show popup after 10 seconds if they haven't seen it
    const timer = setTimeout(() => {
      if (!hasSeen) {
        setIsOpen(true)
        setHasSeen(true)
      }
    }, 10000)

    return () => clearTimeout(timer)
  }, [hasSeen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="relative bg-blue-600 p-6 text-center text-white">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          <h2 className="text-2xl font-bold mb-2">Need a Plumber Fast?</h2>
          <p className="text-blue-100">Get a free, no-obligation estimate today.</p>
        </div>
        
        <form className="p-6 space-y-4" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); alert("Thanks! We'll contact you shortly."); }}>
          <div>
            <label htmlFor="popup-name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input required type="text" id="popup-name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" />
          </div>
          <div>
            <label htmlFor="popup-phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
            <input required type="tel" id="popup-phone" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="(555) 123-4567" />
          </div>
          <div>
            <label htmlFor="popup-service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
            <select id="popup-service" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>General Plumbing</option>
              <option>Emergency Repair</option>
              <option>Drain Cleaning</option>
              <option>Water Heater</option>
              <option>Other</option>
            </select>
          </div>
          <Button type="submit" className="w-full" size="lg">Get My Free Estimate</Button>
          <p className="text-xs text-center text-gray-500 mt-4">We respect your privacy. No spam.</p>
        </form>
      </div>
    </div>
  )
}
