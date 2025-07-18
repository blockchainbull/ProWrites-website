import {client, blogPostsQuery} from '../../sanity/lib/client'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CalendlyWidget from '@/components/Calendly'

interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  publishedAt: string
  author: string
  featuredImage?: string
  categories?: string[]
}

export default async function BlogPage() {
  const posts: BlogPost[] = await client.fetch(blogPostsQuery)
  
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <CalendlyWidget />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#008080] to-[#006666] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Medical Writing Insights & Industry Expertise
            </h1>
            <p className="text-xl mb-8 text-teal-100">
              Stay informed with the latest trends, best practices, and expert insights 
              in medical writing from our team of practicing physicians.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {posts.length > 0 ? (
              <div className="grid lg:grid-cols-2 gap-8">
                {posts.map((post) => (
                  <article key={post._id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition group">
                    {post.featuredImage && (
                      <div className="aspect-video bg-gray-200 rounded-t-xl overflow-hidden">
                        <img 
                          src={post.featuredImage} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    
                    <div className="p-8">
                      {post.categories && post.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.categories.map((category, index) => (
                            <span 
                              key={index}
                              className="px-3 py-1 text-sm bg-[#F1FFE9] text-[#008080] rounded-full font-medium"
                            >
                              {category}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#008080] transition">
                        <Link href={`/blog/${post.slug.current}`}>
                          {post.title}
                        </Link>
                      </h2>
                      
                      {post.excerpt && (
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {post.excerpt}
                        </p>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>By {post.author}</span>
                          <span>•</span>
                          <span>{new Date(post.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}</span>
                        </div>
                        
                        <Link 
                          href={`/blog/${post.slug.current}`}
                          className="inline-flex items-center text-[#008080] font-semibold hover:text-teal-700 transition"
                        >
                          Read More
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              // Compact Empty State
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#F1FFE9] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#008080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Coming Soon</h3>
                <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
                  We're preparing valuable insights and expert content on medical writing. 
                  Check back soon for the latest industry trends and best practices.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block bg-[#008080] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition"
                >
                  Get Notified When We Publish
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-16 bg-[#F1FFE9]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Informed</h2>
            <p className="text-lg text-gray-600 mb-6">
              Get the latest medical writing insights, industry trends, and expert tips 
              delivered directly to your inbox.
            </p>
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-md mx-auto">
              <form 
                action="https://formspree.io/f/xjkrdvaa" 
                method="POST"
                className="space-y-4"
              >
                <input 
                  type="email" 
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008080] focus:border-transparent"
                  placeholder="Enter your email address"
                  required
                />
                <input type="hidden" name="_subject" value="Blog newsletter subscription from ProWrites website" />
                <button 
                  type="submit" 
                  className="w-full bg-[#008080] text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition"
                >
                  Subscribe to Updates
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#008080] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work with Medical Writing Experts?</h2>
          <p className="text-lg mb-6 text-teal-100 max-w-2xl mx-auto">
            Don't let your medical content fall short. Partner with physicians who understand 
            both the science and the art of effective medical communication.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/contact" className="border-2 bg-white text-[#008080] px-6 py-3 rounded-lg font-semibold hover:bg-[#008080] hover:border-2 hover:text-white transition">
              Start Your Project
            </Link>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#008080] transition">
              <a href="https://calendly.com/contact-prowrites/30min">Schedule Consultation</a>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}