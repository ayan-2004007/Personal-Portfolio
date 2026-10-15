import { siteUrl } from "@/data/site"

export const dynamic = "force-static"

export default function sitemap() {
  const lastModified = new Date()
  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ]
}
