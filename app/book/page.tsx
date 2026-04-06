"use client"

import * as React from "react"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, Wrench, CheckCircle2 } from "lucide-react"

export default function BookPage() {
  const [step, setStep] = React.useState(1)
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col min-h-[70vh] items-center justify-center py-20 bg-slate-50">
        <div className="bg-white p-10 rounded-3xl shadow-lg border border-slate-100 text-center max-w-md w-full mx-4">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold font-heading text-slate-900 mb-4">Booking Confirmed!</h2>
          <p className="text-slate-600 mb-8">
            Thank you for choosing {siteConfig.name}. We have received your request and will contact you shortly to confirm the exact time.
          </p>
          <Button size="lg" className="w-full" onClick={() => window.location.href = "/"}>
            Return to Home
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold font-heading mb-4">Book an Appointment</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Schedule a service visit online. Fast, easy, and convenient.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            {/* Progress Bar */}
            <div className="flex border-b border-slate-100">
              <div className={`flex-1 py-4 text-center text-sm font-medium ${step >= 1 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-400'}`}>
                1. Service Details
              </div>
              <div className={`flex-1 py-4 text-center text-sm font-medium ${step >= 2 ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-400'}`}>
                2. Contact Info
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-8 md:p-10">
              {step === 1 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Wrench className="h-6 w-6 text-blue-600" />
                    What do you need help with?
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium text-slate-700">Select Service</label>
                      <select id="service" defaultValue="" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white" required>
                        <option value="" disabled>Choose a service...</option>
                        {siteConfig.services.map(s => (
                          <option key={s.id} value={s.id}>{s.title}</option>
                        ))}
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="date" className="text-sm font-medium text-slate-700">Preferred Date</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                          <input id="date" type="date" className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="time" className="text-sm font-medium text-slate-700">Preferred Time</label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                          <select id="time" defaultValue="" className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white" required>
                            <option value="" disabled>Any time</option>
                            <option value="morning">Morning (8am - 12pm)</option>
                            <option value="afternoon">Afternoon (12pm - 4pm)</option>
                            <option value="evening">Evening (4pm - 8pm)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="description" className="text-sm font-medium text-slate-700">Brief Description of the Issue</label>
                      <textarea id="description" rows={3} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white resize-none" placeholder="E.g., Kitchen sink is draining very slowly..."></textarea>
                    </div>
                  </div>
                  
                  <div className="pt-4 flex justify-end">
                    <Button type="button" size="lg" onClick={() => setStep(2)}>
                      Next Step
                    </Button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <User className="h-6 w-6 text-blue-600" />
                    Your Details
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium text-slate-700">First Name</label>
                        <input id="firstName" type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium text-slate-700">Last Name</label>
                        <input id="lastName" type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white" required />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                        <input id="email" type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number</label>
                        <input id="phone" type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="address" className="text-sm font-medium text-slate-700">Service Address</label>
                      <input id="address" type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white" placeholder="Street Address" required />
                    </div>
                  </div>
                  
                  <div className="pt-4 flex justify-between">
                    <Button type="button" variant="outline" size="lg" onClick={() => setStep(1)}>
                      Back
                    </Button>
                    <Button type="submit" size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                      Confirm Booking
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
