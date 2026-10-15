import { siteName, siteTitle, siteDescription } from "@/data/site"

export const dynamic = "force-static"

export default function manifest() {
  return {
    name: siteTitle,
    short_name: siteName,
    description: siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#121212",
    icons: [
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "171x70",
        type: "image/png",
      },
    ],
  }
}
