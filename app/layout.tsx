import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "RAFCOM - Spécialiste Travaux Fibre Optique Paris | Urgence Fibre 24h/24",
  description: "RAFCOM, spécialiste des travaux fibre optique en Île-de-France : débouchage fourreaux, détection points de blocage, raccordements complexes, urgences fibre. Intervention rapide Paris 75015.",
  keywords: "travaux fibre optique Paris, fourreau bouché Paris, détection point blocage fibre, raccordement fibre complexe, urgence fibre Paris, débouchage fourreaux télécom, RAFCOM, fibre optique 75015, entrepreneur fibre optique",
  authors: [{ name: "RAFCOM" }],
  creator: "RAFCOM",
  publisher: "RAFCOM",
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
    title: "RAFCOM - Spécialiste Travaux Fibre Optique Paris",
    description: "RAFCOM, spécialiste des travaux fibre optique : débouchage fourreaux, détection points de blocage, raccordements complexes, urgences fibre en Île-de-France.",
    url: "https://rafcom.net",
    siteName: "RAFCOM - Spécialiste Fibre Optique",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RAFCOM - Spécialiste Travaux Fibre Optique Paris",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAFCOM - Spécialiste Fibre Optique",
    description: "Spécialiste des travaux fibre optique : débouchage fourreaux, détection points de blocage, raccordements complexes, urgences fibre en Île-de-France.",
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
        
        {/* Google tag (gtag.js) - New */}
        {/* <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11128083735" strategy="afterInteractive" />
        <Script id="google-analytics-new" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11128083735');
          `}
        </Script> */}

      </head>
      <body className="antialiased prevent-horizontal-scroll" suppressHydrationWarning>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
