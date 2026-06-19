import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const siteUrl = "https://cooperharris.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Cooper Harris | Software Engineer",
    template: "%s | Cooper Harris",
  },

  description:
    "Software engineer specializing in full-stack web development, mobile applications, cloud infrastructure, and modern software solutions. Explore projects, technical challenges, and development experience.",

  applicationName: "Cooper Harris Portfolio",

  authors: [
    {
      name: "Cooper Harris",
      url: siteUrl,
    },
  ],

  creator: "Cooper Harris",
  publisher: "Cooper Harris",

  keywords: [
    "Cooper Harris",
    "James Harris",
    "Software Engineer",
    "Software Developer",
    "Full Stack Developer",
    "Web Developer",
    "Mobile Developer",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "C#",
    "C Sharp",
    "Java",
    "Go",
    "C",
    "ORM",
    "CMS",
    "Node.js",
    "Portfolio",
    "Programming",
    "Software Projects",
    "Cloud Computing",
    "Frontend Development",
    "Backend Development",
    "Application Development",
    "Computer Science",
  ],

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Cooper Harris Portfolio",
    title: "Cooper Harris | Software Engineer",
    description:
      "Explore software engineering projects, technical challenges, and development experience across web, mobile, and cloud platforms.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cooper Harris Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cooper Harris | Software Engineer",
    description:
      "Software engineer specializing in modern web and application development.",
    images: ["/og-image.png"],
  },

  category: "technology",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  verification: {
    // Add these later if you use them
    // google: "your-google-verification-code",
    // other: {
    //   "msvalidate.01": "bing-verification-code",
    // },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Cooper Harris",
  alternateName: "James Harris",
  url: "https://cooperharris.vercel.app",
  jobTitle: "Software Engineer",
  description: "Software engineer focused on full-stack development, cloud infrastructure, and modern web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}