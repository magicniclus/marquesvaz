import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "MARQUES VAZ PLACO - Spécialiste Plaquiste Marseille | Cloisons Sèches PACA",
  description: "MARQUES VAZ PLACO, spécialiste plaquiste à Marseille : cloisons sèches, doublage isolation, faux plafonds, finitions et rénovation placo. Intervention rapide en région PACA.",
  keywords: "plaquiste Marseille, cloisons sèches Marseille, doublage isolation PACA, faux plafonds Marseille, finitions placo, rénovation placo, MARQUES VAZ PLACO, entrepreneur plaquiste",
  authors: [{ name: "MARQUES VAZ PLACO" }],
  creator: "MARQUES VAZ PLACO",
  publisher: "MARQUES VAZ PLACO",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://rafcom.net"),
  alternates: {
    canonical: "https://rafcom.net",
  },
  openGraph: {
    title: "MARQUES VAZ PLACO - Spécialiste Plaquiste Marseille",
    description: "MARQUES VAZ PLACO, spécialiste plaquiste : cloisons sèches, doublage isolation, faux plafonds, finitions et rénovation placo en région PACA.",
    url: "https://marquesvazplaco.fr",
    siteName: "MARQUES VAZ PLACO - Spécialiste Plaquiste",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MARQUES VAZ PLACO - Spécialiste Plaquiste Marseille",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MARQUES VAZ PLACO - Spécialiste Plaquiste",
    description: "Spécialiste plaquiste : cloisons sèches, doublage isolation, faux plafonds, finitions et rénovation placo en région PACA.",
    images: ["/og-image.jpg"],
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icon.png" sizes="any" />
        <link rel="shortcut icon" href="/favicon.png" />
        
        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-17729745211" strategy="afterInteractive" />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17729745211');
          `}
        </Script>

      </head>
      <body className="antialiased prevent-horizontal-scroll" suppressHydrationWarning>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
