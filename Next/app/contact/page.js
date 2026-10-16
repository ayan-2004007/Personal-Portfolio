import ContactFull from "@/components/ContactFull"
import { siteName, ogImage } from "@/data/site"

const title = "Contact"
const description =
  "Have an idea or project in mind? Get in touch with Ayan Chakraborty, Software Engineer from Kolkata. Partnership starts with hello."

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
