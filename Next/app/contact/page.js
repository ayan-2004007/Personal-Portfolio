import ContactFull from "@/components/ContactFull"
import { siteName, ogImage } from "@/data/site"

const title = "Contact"
const description =
  "Contact Ayan Chakraborty, software engineer and full stack developer in Kolkata. Email or message on LinkedIn about projects, jobs or working together."

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/contact",
    siteName,
    title: `${title} | ${siteName}`,
    description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteName}`,
    description,
    images: [ogImage.url],
  },
}

export default function Page() {
  return <ContactFull />
}
