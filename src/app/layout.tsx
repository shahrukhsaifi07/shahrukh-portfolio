import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-drama",
  subsets: ["latin"],
  style: "italic",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#121218",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://shahrukh-saifi.netlify.app"),
  title: {
    default: "Shahrukh Khan | Full Stack Developer",
    template: "%s | Shahrukh Khan",
  },
  description:
    "Full Stack Developer specializing in React, Next.js, and high-performance web applications. Building digital experiences that convert. Available for freelance and full-time opportunities.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript",
    "Web Developer",
    "Portfolio",
    "Freelance Developer",
  ],
  authors: [{ name: "Shahrukh Khan" }],
  creator: "Shahrukh Khan",
  publisher: "Shahrukh Khan",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://shahrukh-saifi.netlify.app",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shahrukh-saifi.netlify.app",
    siteName: "Shahrukh Khan",
    title: "Shahrukh Khan | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, and high-performance web applications. Building digital experiences that convert.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shahrukh Khan - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahrukh Khan | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, and high-performance web applications.",
    images: ["/og-image.png"],
    creator: "@shahrukhsaifi",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <html lang="en" className="scroll-smooth">
        <body
          className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} font-sans min-h-screen bg-background text-primary antialiased`}
        >
          {children}
        </body>
      </html>
    </>
  );
}