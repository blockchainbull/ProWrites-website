import Head from 'next/head'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  canonicalUrl?: string
  image?: string
  imageAlt?: string
  publishedAt?: string
  author?: string
  type?: 'website' | 'article'
  slug?: string
}

export default function SEO({
  title = 'ProWrites - Medical Writing Solutions',
  description = 'Physician-authored medical writing that drives real results',
  keywords = ['medical writing', 'healthcare content', 'physician writers'],
  canonicalUrl,
  image = '/og-image.png', // You'll need to create this
  imageAlt = 'ProWrites Medical Writing',
  publishedAt,
  author,
  type = 'website',
  slug,
}: SEOProps) {
  const baseUrl = 'https://prowrites.io'
  const fullUrl = slug ? `${baseUrl}/blog/${slug}` : baseUrl
  const canonical = canonicalUrl || fullUrl

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={`${baseUrl}${image}`} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:site_name" content="ProWrites" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${image}`} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {/* Article-specific tags */}
      {type === 'article' && (
        <>
          {publishedAt && (
            <meta property="article:published_time" content={publishedAt} />
          )}
          {author && <meta property="article:author" content={author} />}
          <meta property="article:section" content="Medical Writing" />
          {keywords.map((keyword, index) => (
            <meta key={index} property="article:tag" content={keyword} />
          ))}
        </>
      )}

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': type === 'article' ? 'Article' : 'WebSite',
            name: title,
            description: description,
            url: fullUrl,
            ...(type === 'article' && {
              headline: title,
              datePublished: publishedAt,
              author: {
                '@type': 'Person',
                name: author,
              },
              publisher: {
                '@type': 'Organization',
                name: 'ProWrites',
                url: baseUrl,
              },
            }),
          }),
        }}
      />
    </Head>
  )
}