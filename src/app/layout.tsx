import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Link from "next/link";
import Image from "next/image";
import ThemeSelect from "@/components/ThemeSelect";
import BookACall from "@/components/BookACall";

import "./globals.css";
import Apollon from "@/assets/Apollon";
import ShaderBackgroundWrapper from "@/components/ShaderBackgroundWrapper";

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
    <html lang="en" data-theme="hazelnut" className="[scrollbar-gutter:stable]">
      <body>
        <ShaderBackgroundWrapper />
        <header className="flex flex-col-reverse md:flex-row justify-between items-start pt-4 text-body container px-4 md:px-0 pb-40 gap-y-3">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex flex-row items-center gap-2">
              <Apollon className="size-9" />
            </Link>
            <div className="flex flex-col md:flex-row gap-2">
              <h1 className="text-title max-w-72 text-pretty">
                Luka is an independent design engineer who partners with
                companies on end-to-end projects.
              </h1>
              <p className="text-secondary max-w-140 text-pretty">
                I love working by using paper or Figma canvas to explore ideas,
                but moving to code to test my ideas. Posts like these ones from{" "}
                <a
                  href="https://x.com/karrisaarinen/status/1715085201653805116"
                  className="underline cursor-default hover:text-foreground"
                >
                  Karri Saarinen
                </a>{" "}
                and{" "}
                <a
                  href="https://x.com/ryolu_/status/1990057444253241545"
                  className="underline cursor-default hover:text-foreground"
                >
                  Ryo Lu
                </a>{" "}
                reflect very well on how I view current design work.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center justify-end gap-3 h-9 w-full md:w-auto">
            <ThemeSelect />

            <a
              href="https://x.com/lukaivnvc"
              className="hover:bg-foreground hover:text-background active:bg-foreground active:text-background cursor-pointer md:cursor-default "
            >
              X
            </a>
            <a
              href="mailto:hi@ivanovicluka.co"
              className="px-1 bg-foreground text-background hover:bg-background hover:text-foreground active:bg-foreground active:text-background cursor-pointer md:cursor-default "
            >
              Send email
            </a>
            {/* <BookACall /> */}
          </div>
        </header>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
