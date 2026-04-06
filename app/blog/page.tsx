import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Plumbing Tips & News",
  description: `Read the latest plumbing tips, tricks, and news from ${siteConfig.name}.`,
}

const blogPosts = [
  {
    id: 1,
    title: "5 Signs You Need to Replace Your Water Heater",
    excerpt: "Is your water heater making strange noises or failing to provide enough hot water? It might be time for a replacement. Learn the top 5 warning signs.",
    date: "Oct 15, 2023",
    author: "Mike Johnson",
    category: "Water Heaters",
    image: "https://picsum.photos/seed/water-heater/800/600"
  },
  {
    id: 2,
    title: "How to Prevent Frozen Pipes in Winter",
    excerpt: "Winter in our area can be harsh on plumbing systems. Follow these simple steps to protect your pipes from freezing and bursting when temperatures drop.",
    date: "Nov 02, 2023",
    author: "Sarah Williams",
    category: "Maintenance",
    image: "https://picsum.photos/seed/frozen-pipes/800/600"
  },
  {
    id: 3,
    title: "Why Is My Water Bill So High? Common Hidden Leaks",
    excerpt: "A sudden spike in your water bill is often the first sign of a hidden leak. Discover the most common culprits and how to find them before they cause major damage.",
    date: "Dec 10, 2023",
    author: "David Smith",
    category: "Leak Detection",
    image: "https://picsum.photos/seed/water-leak/800/600"
  },
  {
    id: 4,
    title: "The Dangers of Chemical Drain Cleaners",
    excerpt: "Reaching for that bottle of chemical drain cleaner might seem like a quick fix, but it could be doing more harm than good to your plumbing system.",
    date: "Jan 05, 2024",
    author: "Mike Johnson",
    category: "Drain Cleaning",
    image: "https://picsum.photos/seed/drain-cleaner/800/600"
  },
  {
    id: 5,
    title: "Upgrading to a Tankless Water Heater: Pros and Cons",
    excerpt: "Considering a tankless water heater? We break down the advantages and disadvantages to help you decide if it's the right choice for your home.",
    date: "Feb 18, 2024",
    author: "Sarah Williams",
    category: "Water Heaters",
    image: "https://picsum.photos/seed/tankless/800/600"
  },
  {
    id: 6,
    title: "What to Do in a Plumbing Emergency",
    excerpt: "When a pipe bursts or a toilet overflows, every second counts. Learn the crucial first steps you need to take to minimize damage before the plumber arrives.",
    date: "Mar 12, 2024",
    author: "David Smith",
    category: "Emergency",
    image: "https://picsum.photos/seed/emergency/800/600"
  }
]

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Plumbing Tips & News</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Expert advice, maintenance tips, and industry news from your local plumbing professionals.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col">
                <div className="aspect-[16/9] relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  <p className="text-slate-600 mb-6 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.id}`} className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700 mt-auto">
                    Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button variant="outline" size="lg">Load More Articles</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
