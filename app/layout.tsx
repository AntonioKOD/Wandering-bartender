import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { GoogleAnalytics } from '@next/third-parties/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Roaming Mix",
  description: "Professional mobile bartending services for any occasion.",
  keywords: [
    "mobile bartending",
    "professional bartending services",
    "event bartending",
    "cocktail catering",
    "bartender for hire",
    "wandering bartender",
    "Boston bartending services",
  ],
  authors: [{ name: "The Roaming Mix", url: "https://roamingmix.com" }],
  creator: "The Wandering Bartender",
  publisher: "The Wandering Bartender",
  metadataBase: new URL("https://roamingmix.com"),
  alternates: {
    canonical: "https://roamingmix.com",
  },
  openGraph: {
    title: "The Wandering Bartender",
    description: "Bringing the bar experience to your doorstep with professional bartending services for any occasion.",
    url: "https://roamingmix.com",
    siteName: "The Roaming Mix",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "The Wandering Bartender",
              "description": "Professional mobile bartending services for any occasion.",
              "url": "https://roamingmix.com",
              "logo": "https://roamingmix.com/favicon.ico",
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61572162751853",
                "https://www.instagram.com/roamingmix/"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "antonio_kodheli@icloud.com"
              },
              "image": "https://roamingmix.com/images/og-image.jpg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Boston",
                "addressRegion": "MA",
                "addressCountry": "US"
              },
              "areaServed": "MA",
              "founder": "Antonio Kodheli",
              "foundingDate": "2020-01-01"
            }),
          }}
        />
      </body>
      <GoogleAnalytics gaId="G-9RMHVY2C55" />
    </html>
  );
}