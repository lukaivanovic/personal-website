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
    <html lang="en" data-theme="vanilla" className="[scrollbar-gutter:stable]">
      <body className="overflow-x-hidden">
        <ShaderBackgroundWrapper />
        <header className="flex flex-row items-center justify-between pt-4 text-body container px-4 pb-2 gap-y-3">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex flex-row items-center gap-2">
              <Apollon className="size-10" />
            </Link>
          </div>
          <div className="flex flex-row items-center justify-end gap-8 h-9 w-full md:w-auto">
            <a
              href="https://x.com/lukaivnvc"
              className="px-1 hover:bg-foreground hover:text-background active:bg-foreground active:text-background cursor-pointer md:cursor-default "
            >
              Twitter
            </a>
            <ThemeSelect />
            <a
              href="mailto:hi@ivanovicluka.co"
              className="px-1 bg-foreground text-background hover:bg-background hover:text-foreground active:bg-foreground active:text-background cursor-pointer md:cursor-default "
            >
              Send email
            </a>
            {/* <BookACall /> */}
          </div>
        </header>
        <section className="container gap-2">
          <div className="border-b border-secondary/24 pt-16 pb-32 flex md:flex-row flex-col md:justify-between gap-4">
            <h1 className="text-[16px] md:text-[20px] max-w-178 pr-2 font-medium text-pretty">
              Luka Ivanovic is an independent multidisciplinary design engineer
              partnering with companies on end-to-end projects. He follows the
              principle of form follows function focusing on the bigger picture
              and product vision before diving into the design details like
              beautiful visuals and interactions. Contributed to production for
              companies like Profound, Buena and Daytona.
            </h1>
            <p className="text-[11px] text-secondary max-w-60 text-justify text-pretty pt-2">
              In my free time, I love to playing with new tools like Cavalry or
              Rive and creating product prototypes like this one for AI image
              editing. Posts like{" "}
              <a
                href="https://x.com/karrisaarinen/status/1715085201653805116"
                className="underline cursor-default hover:text-foreground"
              >
                this
              </a>{" "}
              one or{" "}
              <a
                href="https://x.com/ryolu_/status/1990057444253241545"
                className="underline cursor-default hover:text-foreground"
              >
                this
              </a>{" "}
              one reflect very well on how I view current design work.
            </p>
          </div>
        </section>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
