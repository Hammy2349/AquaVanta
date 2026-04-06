import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Award, Users, Clock } from "lucide-react"

export const metadata = {
  title: "About Us",
  description: `Learn more about ${siteConfig.name}, your trusted plumbing experts in ${siteConfig.city}.`,
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">About Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Your trusted local plumbing experts serving {siteConfig.city} and surrounding areas.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900">
                Committed to Excellence in Plumbing
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                At {siteConfig.name}, we believe that quality plumbing services shouldn't be a luxury. For over a decade, we've been providing the residents and businesses of {siteConfig.city} with reliable, efficient, and affordable plumbing solutions.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our team of licensed and insured professionals is dedicated to solving your plumbing issues right the first time. We pride ourselves on our transparent pricing, punctuality, and exceptional customer service.
              </p>
              
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  <span className="font-medium text-slate-800">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  <span className="font-medium text-slate-800">100% Satisfaction Guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  <span className="font-medium text-slate-800">Upfront Flat-Rate Pricing</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  <span className="font-medium text-slate-800">24/7 Emergency Service</span>
                </div>
              </div>
              
              <div className="pt-8">
                <Button size="lg" asChild>
                  <Link href="/contact">Contact Our Team</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden relative shadow-2xl">
                <Image
                  src="https://picsum.photos/seed/plumber-team/800/800"
                  alt="Our plumbing team"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xl">10+ Years</h4>
                    <p className="text-sm text-slate-500">Of Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-600">These principles guide everything we do, from the moment you call us to the completion of the job.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Customer First</h3>
              <p className="text-slate-600">We treat your home with the utmost respect and ensure you are completely satisfied with our work.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Quality Workmanship</h3>
              <p className="text-slate-600">We don't cut corners. We use high-quality materials and proven techniques for lasting repairs.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Reliability</h3>
              <p className="text-slate-600">When we say we'll be there, we'll be there. You can count on us for prompt and dependable service.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
