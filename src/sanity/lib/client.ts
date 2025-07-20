import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'tudwgmb3',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-05-03',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: unknown) {
  return builder.image(source)
}

// Updated GROQ queries with SEO fields
export const blogPostsQuery = `
  *[_type == "blogPost" && (!defined(status) || status == "published")] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    status,
    "author": author->name,
    "featuredImage": featuredImage.asset->url,
    "featuredImageAlt": featuredImage.alt,
    "categories": categories[]->title,
    tags,
    readingTime,
    seo
  }
`

export const blogPostQuery = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    status,
    content[]{
      ...,
      _type == "image" => {
        ...,
        asset->
      }
    },
    publishedAt,
    excerpt,
    "author": author->{name, image},
    "featuredImage": featuredImage.asset->url,
    "featuredImageAlt": featuredImage.alt,
    "categories": categories[]->title,
    tags,
    readingTime,
    seo
  }
`

// Debug query to see all blog posts regardless of status
export const allBlogPostsQuery = `
  *[_type == "blogPost"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    status,
    publishedAt,
    _createdAt,
    "author": author->name
  }
`