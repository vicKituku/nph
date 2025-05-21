import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "NPH Sports | Professional Football Management",
  description: "Elite football management agency providing professional player development, scouting, and career management services in Kenya.",
  keywords: ["football agency", "soccer management", "player development", "sports agency", "Kenya football", "professional football"],
  authors: [{ name: "NPH Sports" }],
  creator: "NPH Sports",
  publisher: "NPH Sports",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nphsports.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nphsports.com',
    title: 'NPH Sports | Professional Football Management',
    description: 'Elite football management agency providing professional player development, scouting, and career management services in Kenya.',
    siteName: 'NPH Sports',
    images: [
      {
        url: '/meta/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NPH Sports - Professional Football Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NPH Sports | Professional Football Management',
    description: 'Elite football management agency providing professional player development, scouting, and career management services in Kenya.',
    images: ['/meta/twitter-image.jpg'],
    creator: '@nphsports',
  },
  icons: {
    icon: [
      { url: '/meta/favicon.ico' },
      { url: '/meta/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/meta/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/meta/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/meta/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/meta/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/meta/apple-touch-icon.png" />
        <link rel="manifest" href="/meta/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className="antialiased">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
