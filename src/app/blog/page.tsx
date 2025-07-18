import {client, blogPostsQuery} from '../../sanity/lib/client'
import Link from 'next/link'

interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  publishedAt: string
  author: string
}


export default async function BlogPage() {
  const posts: BlogPost[] = await client.fetch(blogPostsQuery)
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Medical Writing Blog</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <article key={post._id} className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/blog/${post.slug.current}`}>
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>By {post.author}</span>
              <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}