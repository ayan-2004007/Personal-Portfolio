import { siteUrl } from "@/data/site"

export const dynamic = "force-static"

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
