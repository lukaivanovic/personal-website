import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Link from "next/link";
import Image from "next/image";
import ThemeSelect from "@/components/ThemeSelect";

import "./globals.css";
import Apollon from "@/assets/Apollon";

export const metadata: Metadata = {
  title: "Luka Ivanovic",
  description: "Luka Ivanovic's personal website",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Luka Ivanovic",
    description: "Luka Ivanovic's personal website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Luka Ivanovic",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luka Ivanovic",
    description: "Luka Ivanovic's personal website",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="hazelnut">
      <body className="root">
        <header className="bg-background flex justify-between items-center px-4 py-4 my-2 text-body container">
          <div className="flex flex-row items-center gap-2">
            <Link href="/">
              <Apollon className="size-10" />
            </Link>
          </div>
          <ThemeSelect />
        </header>
        <main className="bg-background flex flex-col items-start md:flex-row justify-between gap-y-20 md:gap-y-6 md:gap-x-30 text-body container">
          <div className="md:sticky md:top-8 flex flex-col gap-6 w-full md:w-64 shrink-0">
            <div className="flex flex-col">
              <div className="flex flex-row justify-between text-caption uppercase">
                <span>Luka Ivanovic</span>
                <span>I.S.P.</span>
              </div>
              <div className="flex flex-row justify-between text-caption text-secondary uppercase">
                <span>Independent</span>
                <span>Software</span>
                <span>Practice</span>
              </div>
            </div>
            <div>
              <h1 className="text-title mb-2">
                Luka is an independent design engineer who partners with
                companies on end-to-end projects including ideation, design and
                development.
              </h1>
              <p className="text-secondary">
                You can contact me via email by clicking here or copy the email
                to clipboard. Past clients include Buena, WeWeb, Daytona and
                Akkio. I'm also relatively active on X.
              </p>
            </div>
          </div>
          <div>{children}</div>
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
