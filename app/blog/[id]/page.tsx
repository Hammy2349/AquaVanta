import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowLeft } from "lucide-react"

// Mock data for the blog post
const getBlogPost = (id: string) => {
  return {
    id,
    title: "5 Signs You Need to Replace Your Water Heater",
    content: `
      <p>Is your water heater making strange noises or failing to provide enough hot water? It might be time for a replacement. Here are the top 5 warning signs you shouldn't ignore.</p>
      
      <h3>1. Age of the Water Heater</h3>
      <p>Most traditional tank water heaters last between 8 and 12 years. If yours is approaching or has surpassed this age, it's time to start considering a replacement, even if it seems to be working fine. Older units are less efficient and more prone to sudden failure.</p>
      
      <h3>2. Rusty Water</h3>
      <p>If you notice rusty water coming from your hot water taps, it's a strong indicator that the inside of your water heater tank is rusting. This is a serious issue that usually requires a full replacement to prevent a catastrophic leak.</p>
      
      <h3>3. Strange Noises</h3>
      <p>Rumbling, popping, or banging noises coming from your water heater are often caused by sediment buildup at the bottom of the tank. As the sediment hardens, it can damage the tank and reduce efficiency.</p>
      
      <h3>4. Leaks Around the Base</h3>
      <p>Any sign of moisture or pooling water around the base of your water heater is a major red flag. This usually indicates a fracture in the tank itself, which cannot be repaired and requires immediate replacement.</p>
      
      <h3>5. Not Enough Hot Water</h3>
      <p>If your water heater is struggling to keep up with your household's demand for hot water, or if the water isn't getting as hot as it used to, it could be a sign of a failing heating element or a buildup of sediment.</p>
      
      <p>If you're experiencing any of these issues, don't wait until your water heater fails completely. Contact ${siteConfig.name} today for a professional inspection and expert advice on whether repair or replacement is the best option for you.</p>
    `,
    date: "Oct 15, 2023",
    author: "Mike Johnson",
    category: "Water Heaters",
    image: "https://picsum.photos/seed/water-heater/1200/600"
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const post = getBlogPost(resolvedParams.id)

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Image */}
      <div className="w-full h-[40vh] md:h-[50vh] relative">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 md:px-6 text-center text-white">
            <div className="inline-block bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-full mb-4">
              {post.category}
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading max-w-4xl mx-auto leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to all articles
          </Link>
          
          <div className="flex items-center gap-6 text-slate-500 border-b border-slate-100 pb-8 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              {post.author}
            </div>
          </div>
          
          <div 
            className="prose prose-lg prose-blue max-w-none prose-headings:font-heading prose-headings:font-bold prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-slate-600 prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="mt-16 bg-blue-50 p-8 rounded-2xl border border-blue-100 text-center">
            <h3 className="text-2xl font-bold font-heading text-slate-900 mb-4">Need Plumbing Help?</h3>
            <p className="text-slate-600 mb-6">
              Our experts are ready to assist you with any plumbing issues you might have.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <a href={`tel:${siteConfig.phone}`}>Call {siteConfig.phoneDisplay}</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white" asChild>
                <Link href="/book">Book Online</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
