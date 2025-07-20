import {client, blogPostQuery} from '../../../sanity/lib/client'
import {PortableText, type PortableTextBlock} from '@portabletext/react'
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
  seo?: {
    metaTitle?: string
    metaDescription?: string
    keywords?: string[]
    canonicalUrl?: string
  }
}

const portableTextComponents = {
  block: {
    // Normal paragraph
    normal: ({children}: {children: React.ReactNode}) => (
      <p className="text-gray-900 mb-4 leading-relaxed">{children}</p>
    ),
    // Headings
    h1: ({children}: {children: React.ReactNode}) => (
      <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">{children}</h1>
    ),
    h2: ({children}: {children: React.ReactNode}) => (
      <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-3">{children}</h2>
    ),
    h3: ({children}: {children: React.ReactNode}) => (
      <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">{children}</h3>
    ),
    // Blockquote
    blockquote: ({children}: {children: React.ReactNode}) => (
      <blockquote className="border-l-4 border-[#008080] pl-4 italic text-gray-700 my-6">
        {children}
      </blockquote>
    ),
  },
  // Custom image component
  types: {
    image: ({value}: {value: any}) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <div className="my-8">
          <Image
            src={`https://cdn.sanity.io/images/tudwgmb3/production/${value.asset._ref.replace('image-', '').replace('-jpg', '.jpg').replace('-png', '.png').replace('-webp', '.webp')}`}
            alt={value.alt || 'Blog image'}
            width={800}
            height={450}
            className="w-full h-auto rounded-lg shadow-lg"
          />
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
    // Bold text
    strong: ({children}: {children: React.ReactNode}) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),
    // Italic text
    em: ({children}: {children: React.ReactNode}) => (
      <em className="italic text-gray-800">{children}</em>
    ),
    // Links
    link: ({children, value}: {children: React.ReactNode, value: any}) => (
      <a  href={value.href}
        className="text-[#008080] hover:text-teal-700 underline"
        target={value.blank ? '_blank' : undefined}
        rel={value.blank ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
  },
  list: {
    // Bullet lists
    bullet: ({children}: {children: React.ReactNode}) => (
      <ul className="list-disc list-inside mb-4 text-gray-900 space-y-2 ml-4">
        {children}
      </ul>
    ),
    // Numbered lists
    number: ({children}: {children: React.ReactNode}) => (
      <ol className="list-decimal list-inside mb-4 text-gray-900 space-y-2 ml-4">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({children}: {children: React.ReactNode}) => (
      <li className="text-gray-900">{children}</li>
    ),
    number: ({children}: {children: React.ReactNode}) => (
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