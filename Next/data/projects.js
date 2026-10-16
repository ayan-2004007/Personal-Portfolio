import sitely from "@/assets/sitely-mockup.jpg"
import playpause from "@/assets/playpause-mockup.jpg"
import p1 from "@/assets/psd01.png"
import p6 from "@/assets/psd06.jpg"

export const projects = [
  {
    title: "Sitely",
    category: "Construction Management SaaS",
    link: "https://sitely.in/",
    image: sitely,
    reverse: false,
    description:
      "End-to-end construction management platform for B2B teams, covering organisation, projects, procurement and finance in one tool. 162+ companies onboarded since its July 2026 launch.",
    role: "Product & engineering lead: UI/UX, architecture, full stack",
    stack: "Next.js · Express · MongoDB · Keycloak",
  },
  {
    title: "PlayPause",
    category: "Video Collaboration Platform",
    link: "https://playpause.io/",
    image: playpause,
    reverse: true,
    description:
      "Frame-accurate video review and collaboration platform for creative teams, with uploads, streaming, versions and feedback in one shared workspace.",
    role: "Frontend lead: owned the full frontend, shaped architecture",
    stack: "Next.js · Tailwind · Java · PostgreSQL · Cloudflare · AWS",
  },
  {
    title: "MediMate",
    category: "AI Healthcare Assistant",
    link: "https://github.com/ayan-2004007/MEDIMATE",
    image: p6,
    reverse: false,
    description:
      "AI-powered medical chatbot that understands symptoms in natural language or voice and predicts likely conditions using LLMs.",
    role: "Final year project: full stack & AI integration",
    stack: "MERN · Python · LLM",
  },
  {
    title: "Bookaholic",
    category: "Library Management System",
    link: "https://bookaholiclibrary.netlify.app/",
    image: p1,
    reverse: true,
    description:
      "Online library system for browsing, borrowing and returning books, with separate flows for members and admins.",
    role: "First MERN project: full stack",
    stack: "MongoDB · Express · React · Node.js",
  },
]
