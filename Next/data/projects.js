import sitely from "@/assets/sitely-mockup.jpg"
import playpause from "@/assets/playpause-mockup.jpg"
import bookaholic from "@/assets/bookaholic-mockup.jpg"
import medimate from "@/assets/medimate-mockup.jpg"

export const projects = [
  {
    title: "Sitely",
    category: "Construction Management SaaS",
    link: "https://sitely.in/",
    image: sitely,
    reverse: false,
    description:
      "A construction management tool for companies. It handles projects, buying, stock and payments in one place. 162+ companies have signed up since it launched in July 2026.",
    role: "I lead the product: design, backend and frontend",
    stack: "Next.js · Express · MongoDB · Keycloak",
  },
  {
    title: "PlayPause",
    category: "Video Collaboration Platform",
    link: "https://playpause.io/",
    image: playpause,
    reverse: true,
    description:
      "A video review tool for creative teams. Upload a video, share it, and get comments on the exact frame, all in one place.",
    role: "I led the frontend",
    stack: "Next.js · Tailwind · Java · PostgreSQL · Cloudflare · AWS",
  },
  {
    title: "MediMate",
    category: "AI Healthcare Assistant",
    link: "https://github.com/ayan-2004007/MEDIMATE",
    image: medimate,
    reverse: false,
    description:
      "A medical chatbot. You describe your symptoms by typing or speaking, and it uses AI to suggest what the problem might be.",
    role: "My final year college project",
    stack: "MERN · Python · LLM",
  },
  {
    title: "Bookaholic",
    category: "Library Management System",
    link: "https://bookaholiclibrary.netlify.app/",
    image: bookaholic,
    reverse: true,
    description:
      "An online library where members can find, borrow and return books, and admins can manage everything.",
    role: "My first full stack project",
    stack: "MongoDB · Express · React · Node.js",
  },
]
