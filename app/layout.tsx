import type { Metadata } from "next";
import "./globals.css";
import { SITE } from "@/content/data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Observability from "@/components/Observability";

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  metadataBase: new URL(`https://${SITE.domain}`),
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: `https://${SITE.domain}`,
    siteName: SITE.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- App Router root layout: fonts load site-wide */}
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* Privacy-respecting analytics — enable after creating a site in Plausible:
        <script defer data-domain="shegadelakun.com" src="https://plausible.io/js/script.js"></script> */}
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Observability />
      </body>
    </html>
  );
}
