import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Droplet, Search, Thermometer, Wrench, Pipette, AlertTriangle, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "Our Services",
  description: `Comprehensive plumbing services in ${siteConfig.city}. From drain cleaning to emergency repairs.`,
}

const iconMap = {
  Droplet,
  Search,
  Thermometer,
  Wrench,
  Pipette,
  AlertTriangle,
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Our Plumbing Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Professional, reliable, and affordable plumbing solutions for your home or business.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {siteConfig.services.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap] || Wrench;
              const isEven = index % 2 === 0;
              
              return (
                <div key={service.id} id={service.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center scroll-mt-24`}>
                  <div className="w-full lg:w-1/2">
                    <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={`https://picsum.photos/seed/${service.id}/800/600`}
                        alt={service.title}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 mb-2">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl font-bold font-heading text-slate-900">{service.title}</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3 pt-2">
                      {[1, 2, 3].map((_, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                          <span className="text-slate-700">Professional and thorough inspection</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-6">
                      <Button size="lg" asChild>
                        <Link href={`/book?service=${service.id}`}>Book This Service</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-6">Don't See What You Need?</h2>
          <p className="text-lg text-slate-600 mb-8">
            We handle all types of plumbing issues. If you have a specific problem not listed here, give us a call. Chances are, we can fix it!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <a href={`tel:${siteConfig.phone}`}>Call {siteConfig.phoneDisplay}</a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
