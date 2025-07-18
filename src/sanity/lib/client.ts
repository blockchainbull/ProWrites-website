import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'tudwgmb3',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: unknown) {
  return builder.image(source)
}

// Updated GROQ queries with SEO fields
export const blogPostsQuery = `
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
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
    content,
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