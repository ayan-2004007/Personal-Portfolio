import "./globals.css"
import { sohneBreit, sohneBreitLight, sohneBreitHalbfett, sohneBreitFett } from "./fonts"
import TransitionProvider from "@/components/TransitionProvider"
import { siteUrl, siteName, siteTitle, siteDescription, keywords, email, socials, ogImage } from "@/data/site"

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage.url],
  },
  icons: {
    icon: [
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon-48.png",
    apple: "/apple-icon.png",
  },
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#121212",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: siteName,
      givenName: "Ayan",
      familyName: "Chakraborty",
      url: siteUrl,
      email: `mailto:${email}`,
      image: `${siteUrl}/ayan-chakraborty.jpg`,
      jobTitle: ["Software Engineer", "Full Stack Developer"],
      worksFor: { "@type": "Organization", name: "Cognivaa" },
      description: siteDescription,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kolkata",
        addressRegion: "West Bengal",
        addressCountry: "IN",
      },
      knowsAbout: [
        "Software Engineering",
        "Full Stack Development",
        "SaaS Product Development",
        "System Architecture",
        "Next.js",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "PostgreSQL",
        "Keycloak",
        "Tailwind CSS",
        "GSAP",
        "UI/UX Design",
        "Figma",
      ],
      sameAs: [socials.linkedin, socials.github, socials.instagram],
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: siteTitle,
      inLanguage: "en",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteUrl}/ayan-chakraborty.jpg`,
      },
      mainEntity: { "@id": `${siteUrl}/#person` },
      isPartOf: { "@id": `${siteUrl}/#website` },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      inLanguage: "en",
      publisher: { "@id": `${siteUrl}/#person` },
    },
  ],
}

const preloadScript = `try{if(location.pathname==="/"){var d=document.documentElement;d.classList.add("js-pending");if(!sessionStorage.getItem("hasSeenPreloader"))d.classList.add("preload-pending")}}catch(e){}`

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sohneBreit.variable} ${sohneBreitLight.variable} ${sohneBreitHalbfett.variable} ${sohneBreitFett.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: preloadScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  )
}
