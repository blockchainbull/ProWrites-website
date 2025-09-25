import {client, blogPostQuery} from '../../../sanity/lib/client'
import {PortableText, type PortableTextBlock, type PortableTextComponents} from '@portabletext/react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  content: PortableTextBlock[]
  publishedAt: string
  excerpt: string
  author: { name: string; image?: string }
  featuredImage?: string
  featuredImageAlt?: string
  categories?: string[]
  tags?: string[]
  readingTime?: number
  status?: string
  seo?: {
    metaTitle?: string
    metaDescription?: string
    keywords?: string[]
    canonicalUrl?: string
  }
}

// Define types for image values in PortableText
interface SanityImageAsset {
  _ref: string
  _type: 'reference'
}

interface SanityImage {
  _type: 'image'
  asset: SanityImageAsset
  alt?: string
  caption?: string
}

// Custom components for PortableText
const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-gray-900 mb-4 leading-relaxed">{children}</p>
    ),
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#008080] pl-4 italic text-gray-700 my-6">
        {children}
      </blockquote>
    ),
  },
  types: {
    image: ({ value }: { value: SanityImage }) => {
      if (!value?.asset?._ref) {
        return null
      }
      
      // Handle different image formats including SVG
      const getImageUrl = (ref: string) => {
        const parts = ref.replace('image-', '').split('-')
        const format = parts.pop()
        const id = parts.join('-')
        
        switch (format) {
          case 'svg':
            return `https://cdn.sanity.io/images/tudwgmb3/production/${id}.svg`
          case 'jpg':
          case 'jpeg':
            return `https://cdn.sanity.io/images/tudwgmb3/production/${id}.jpg`
          case 'png':
            return `https://cdn.sanity.io/images/tudwgmb3/production/${id}.png`
          case 'webp':
            return `https://cdn.sanity.io/images/tudwgmb3/production/${id}.webp`
          case 'gif':
            return `https://cdn.sanity.io/images/tudwgmb3/production/${id}.gif`
          default:
            return `https://cdn.sanity.io/images/tudwgmb3/production/${ref.replace('image-', '').replace(`-${format}`, `.${format}`)}`
        }
      }
      
      const imageUrl = getImageUrl(value.asset._ref)
      const isSvg = value.asset._ref.includes('-svg')
      
      return (
        <div className="my-8">
          {isSvg ? (
            <img
              src={imageUrl}
              alt={value.alt || 'Blog image'}
              className="w-full h-auto max-w-2xl mx-auto rounded-lg shadow-lg"
              style={{ maxHeight: '500px', objectFit: 'contain' }}
            />
          ) : (
            <Image
              src={imageUrl}
              alt={value.alt || 'Blog image'}
              width={800}
              height={450}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          )}
          {value.caption && (
            <p className="text-sm text-gray-600 text-center mt-2 italic">
              {value.caption}
            </p>
          )}
        </div>
      )
    },
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic text-gray-800">{children}</em>
    ),
    link: ({ children, value }) => {
      const linkValue = value as Record<string, unknown>
      const linkHref = typeof linkValue?.href === 'string' ? linkValue.href : '#'
      const isBlank = linkValue?.blank === true
      
      return (
        <a
          href={linkHref}
          className="text-[#008080] hover:text-teal-700 underline"
          target={isBlank ? '_blank' : undefined}
          rel={isBlank ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      )
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-outside mb-4 text-gray-900 space-y-2 ml-6 pl-2">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-outside mb-4 text-gray-900 space-y-2 ml-6 pl-2">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="text-gray-900">{children}</li>
    ),
    number: ({ children }) => (
      <li className="text-gray-900">{children}</li>
    ),
  },
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post: BlogPost = await client.fetch(blogPostQuery, { slug })
  
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

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post: BlogPost = await client.fetch(blogPostQuery, { slug })

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Preview Banner */}
      {post.status === 'preview' && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>Preview Mode:</strong> This post is not yet published and is only visible to you.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      
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

              {/* Featured Image with better dimensions */}
              {post.featuredImage && (
                <div className="mb-8">
                  <Image 
                    src={post.featuredImage} 
                    alt={post.featuredImageAlt || post.title}
                    width={1200}
                    height={600}
                    className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-xl shadow-lg"
                    priority
                  />
                </div>
              )}
            </header>

            {/* Article Content with custom styling */}
            <div className="prose-custom max-w-none">
              {post.content && post.content.length > 0 ? (
                <PortableText 
                  value={post.content} 
                  components={portableTextComponents}
                />
              ) : (
                <p className="text-gray-600">No content available.</p>
              )}
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Tags:</h3>
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