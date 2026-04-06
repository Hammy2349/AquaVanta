import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { MapPin, Phone } from "lucide-react"

export const metadata = {
  title: "Service Area",
  description: `Areas we serve in and around ${siteConfig.city}.`,
}

export default function ServiceAreaPage() {
  const areas = siteConfig.serviceArea.split(",").map(area => area.trim())

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Areas We Serve</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Providing top-quality plumbing services across {siteConfig.city} and surrounding communities.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold font-heading text-slate-900 mb-6">Local Plumbers You Can Trust</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We are proud to be a local business serving our community. Because we are based right here in {siteConfig.city}, we can respond quickly to your plumbing emergencies.
              </p>
              
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  Primary Service Areas
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {areas.map((area, index) => (
                    <li key={index} className="flex items-center gap-2 text-slate-700">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
              
              <p className="text-slate-600 italic">
                Don't see your city listed? Give us a call anyway! We often travel outside our primary service area for larger jobs or emergencies.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-3xl p-8 flex flex-col justify-center text-center border border-blue-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Need Service Now?</h3>
              <p className="text-slate-600 mb-8">
                Our dispatchers are standing by to send a technician to your location.
              </p>
              <div className="space-y-4">
                <Button size="lg" className="w-full h-14 text-lg" asChild>
                  <a href={`tel:${siteConfig.phone}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call {siteConfig.phoneDisplay}
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full h-14 text-lg bg-white" asChild>
                  <Link href="/book">Book Online</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
