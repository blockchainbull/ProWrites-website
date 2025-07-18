import {client, blogPostQuery} from '../../../sanity/lib/client'
import {PortableText} from '@portabletext/react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  content: unknown[] // Changed from any[]
  publishedAt: string
  excerpt: string
  author: { name: string; image?: unknown } // Changed from any
  featuredImage?: string
  featuredImageAlt?: string
  categories?: string[]
  tags?: string[]
  readingTime?: number
  seo?: {
    metaTitle?: string
    metaDescription?: string
    keywords?: string[]
    canonicalUrl?: string
  }
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post: BlogPost = await client.fetch(blogPostQuery, { slug: params.slug })
  
  if (!post) {
    return {
      title: 'Post Not Found | ProWrites',
    }
  }

  return {
    title: post.seo?.metaTitle || `${post.title} | ProWrites Blog`,
    description: post.seo?.metaDescription || post.excerpt,
    keywords: post.seo?.keywords || post.tags,
    alternates: {
      canonical: post.seo?.canonicalUrl || `https://prowrites.io/blog/${post.slug.current}`,
    },
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: post.featuredImage ? [
        {
          url: post.featuredImage,
          alt: post.featuredImageAlt || post.title,
        }
      ] : [],
    },
  }
}

// Generate static paths for better SEO
export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "blogPost"]{ "slug": slug.current }`)
  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post: BlogPost = await client.fetch(blogPostQuery, { slug: params.slug })

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumbs for SEO */}
            <nav className="mb-8 text-sm">
              <Link href="/" className="text-[#008080] hover:underline">Home</Link>
              <span className="mx-2 text-gray-500">/</span>
              <Link href="/blog" className="text-[#008080] hover:underline">Blog</Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-500">{post.title}</span>
            </nav>

            {/* Article Header */}
            <header className="mb-8">
              {post.categories && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.categories.map((category, index) => (
                    <span key={index} className="px-3 py-1 text-sm bg-[#F1FFE9] text-[#008080] rounded-full">
                      {category}
                    </span>
                  ))}
                </div>
              )}
              
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
              
              <div className="flex items-center space-x-4 text-gray-600 mb-6">
                <span>By {post.author.name}</span>
                <span>•</span>
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                {post.readingTime && (
                  <>
                    <span>•</span>
                    <span>{post.readingTime} min read</span>
                  </>
                )}
              </div>

              {post.featuredImage && (
                <Image 
                  src={post.featuredImage} 
                  alt={post.featuredImageAlt || post.title}
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover rounded-xl mb-8"
                />
              )}
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <PortableText value={post.content} />
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold mb-4">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </article>
      
      <Footer />
    </main>
  )
}