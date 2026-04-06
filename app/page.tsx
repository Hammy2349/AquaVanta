import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Phone, Shield, Clock, Wrench, Star, ArrowRight, Droplet, Search, Thermometer, Pipette, AlertTriangle, HelpCircle } from "lucide-react"

const iconMap = {
  Droplet,
  Search,
  Thermometer,
  Wrench,
  Pipette,
  AlertTriangle,
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/plumbing-hero/1920/1080?blur=2"
            alt="Plumbing professional at work"
            fill
            className="object-cover opacity-30 mix-blend-multiply"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 text-sm font-medium mb-4">
              <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
              24/7 Emergency Service Available
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
              Fast & Reliable Plumbing Services in {siteConfig.city}
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl leading-relaxed">
              Don't let plumbing problems disrupt your life. Our licensed experts are ready to fix leaks, clear drains, and restore your peace of mind.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="text-lg h-14 px-8 bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-900/20" asChild>
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: {siteConfig.phoneDisplay}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg h-14 px-8 bg-white/10 border-white/20 text-white hover:bg-white hover:text-blue-900 backdrop-blur-sm" asChild>
                <Link href="/book">Get Free Quote</Link>
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 pt-8 text-sm font-medium text-blue-200">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-400" />
                Licensed & Insured
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-blue-400" />
                Fast Response Time
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                5-Star Rated
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges / Features */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-blue-50/50 border border-blue-100/50">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">Guaranteed Work</h3>
                <p className="text-slate-600 text-sm leading-relaxed">We stand behind our repairs with a 100% satisfaction guarantee. If it's not right, we'll fix it.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-blue-50/50 border border-blue-100/50">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">On-Time Arrival</h3>
                <p className="text-slate-600 text-sm leading-relaxed">We respect your time. Our plumbers arrive when scheduled, ready to get to work immediately.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-blue-50/50 border border-blue-100/50">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                <Wrench className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-slate-900">Upfront Pricing</h3>
                <p className="text-slate-600 text-sm leading-relaxed">No hidden fees or surprise charges. You'll know the exact cost before we start any work.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">Our Plumbing Services</h2>
            <p className="text-lg text-slate-600">From minor leaks to major installations, our experienced team handles all your plumbing needs with professionalism and care.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.services.map((service) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap] || Wrench;
              return (
                <div key={service.id} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                    <Icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6 line-clamp-3">{service.description}</p>
                  <Link href={`/services#${service.id}`} className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              )
            })}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-blue-700/50 p-8 md:p-12 rounded-3xl border border-blue-500/30">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Plumbing Emergency? We're Available 24/7</h2>
              <p className="text-blue-100 text-lg">Burst pipe? Overflowing toilet? No hot water? Don't panic. Our emergency response team is ready to help right now.</p>
            </div>
            <div className="shrink-0">
              <Button size="lg" variant="secondary" className="text-lg h-16 px-8 shadow-xl" asChild>
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="mr-2 h-6 w-6" />
                  Call {siteConfig.phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-slate-600">Don't just take our word for it. Read why homeowners in {siteConfig.city} trust us for their plumbing needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.testimonials.map((testimonial, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Lead Capture */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Ready to fix your plumbing issues?</h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Fill out the form to request a free estimate or schedule a service. Our team will get back to you within 15 minutes during business hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-sm text-slate-400 font-medium mb-1">Call Us 24/7</h4>
                    <a href={`tel:${siteConfig.phone}`} className="text-xl font-bold hover:text-blue-400 transition-colors">{siteConfig.phoneDisplay}</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-sm text-slate-400 font-medium mb-1">Service Area</h4>
                    <p className="text-lg font-medium">{siteConfig.serviceArea}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 md:p-10 text-slate-900 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Request Service</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-slate-700">First Name</label>
                    <input id="firstName" type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-slate-700">Last Name</label>
                    <input id="lastName" type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="Doe" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number</label>
                  <input id="phone" type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" placeholder="(555) 123-4567" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-slate-700">Service Needed</label>
                  <select id="service" defaultValue="" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all bg-white" required>
                    <option value="" disabled>Select a service...</option>
                    {siteConfig.services.map(s => (
                      <option key={s.id} value={s.id}>{s.title}</option>
                    ))}
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">Message (Optional)</label>
                  <textarea id="message" rows={3} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none" placeholder="Briefly describe your issue..."></textarea>
                </div>
                <Button type="submit" size="lg" className="w-full h-14 text-lg mt-2">
                  Get Free Estimate
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-600">Common questions about our plumbing services.</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "Do you offer emergency plumbing services?", a: "Yes, we offer 24/7 emergency plumbing services. If you have a burst pipe, severe leak, or overflowing toilet, call us immediately and we'll dispatch a technician." },
              { q: "Are your plumbers licensed and insured?", a: "Absolutely. All our plumbers are fully licensed, bonded, and insured for your protection and peace of mind." },
              { q: "Do you provide free estimates?", a: "Yes, we provide free, no-obligation estimates for most plumbing projects and repairs. Contact us to schedule an evaluation." },
              { q: "How quickly can you respond to a service call?", a: "For emergencies, we aim to be at your location within 60 minutes. For non-emergencies, we can usually schedule same-day or next-day service." }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-start gap-3">
                  <HelpCircle className="h-6 w-6 text-blue-500 shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-slate-600 pl-9">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
