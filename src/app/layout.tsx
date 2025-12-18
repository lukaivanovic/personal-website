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
      <body>
        <ShaderBackgroundWrapper />
        <header className="flex flex-row items-center justify-between pt-4 text-body container px-4 pb-16 gap-y-3">
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
        <section className="container flex flex-col md:flex-row gap-2 pb-16">
          <div className="border-b border-secondary/24 pb-16 flex flex-col  gap-4 w-full">
            <h1 className="text-[19px] max-w-160 pr-2 font-medium text-pretty">
              Dr. Ing. h.c. F. Porsche AG, commonly known as Porsche, is a
              German automobile manufacturer specializing in luxury,
              high-performance sports cars, SUVs and sedans, headquartered in
              Stuttgart, Baden-Württemberg, Germany. The company is owned by
              Volkswagen AG, a controlling stake of which is owned by Porsche
              Automobil Holding SE, usually shortened to Porsche SE. Porsche's
              current lineup includes the 911, Panamera, Macan, Cayenne and
              Taycan.
            </h1>
            <p className="text-secondary max-w-140  text-pretty">
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
        </section>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
