import type { Metadata } from "next"

const sharedMetadata: Metadata = {
  title: {
    default: "Workspace Nepal - Find Jobs & Rooms in Nepal",
    template: "%s | Workspace Nepal",
  },
  description:
    "Discover job opportunities and ideal living spaces in Nepal. Workspace Nepal offers a comprehensive platform for job seekers and room hunters alike.",
  keywords: ["Nepal jobs", "room rental Nepal", "job search Nepal", "accommodation Nepal", "workspace Nepal"],
  authors: [{ name: "Workspace Nepal Team" }],
  creator: "Workspace Nepal",
  publisher: "Workspace Nepal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_NP",
    url: "https://www.workspacenepal.vercel.app/",
    siteName: "Workspace Nepal",
    title: "Workspace Nepal - Your Gateway to Jobs and Rooms in Nepal",
    description:
      "Find your dream job and ideal living space in Nepal with Workspace Nepal. Browse through a wide range of job listings and accommodation options.",
    images: [
      {
        url: "https://www.workspacenepal.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Workspace Nepal - Jobs and Rooms in One Place",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Workspace Nepal - Jobs and Rooms in Nepal",
    description:
      "Find your ideal job and perfect room in Nepal. Tailored searches, verified listings, and seamless application process.",
    images: ["https://www.workspacenepal.com/twitter-image.jpg"],
    creator: "@WorkspaceNepal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
//   verification: {
//     google: "your-google-site-verification-code",
//     yandex: "your-yandex-verification-code",
//     bing: "your-bing-verification-code",
//   },
}

export default sharedMetadata

