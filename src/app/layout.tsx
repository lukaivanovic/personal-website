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
    <html lang="en" data-theme="8-ball" className="[scrollbar-gutter:stable]">
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
          <div className="pt-24 pb-48 flex flex-col gap-2">
            <h1 className="text-[15px] md:text-[21px] pr-2 font-medium text-pretty">
              Independent multidisciplinary design engineer partnering with
              <br /> companies on end-to-end projects. I like to focus on the{" "}
              bigger <br /> picture and product vision before diving into the
              design details <br />
              like beautiful visuals and interactions. Contributed to production{" "}
              <br />
              for companies like Profound, Buena and Daytona.
            </h1>
          </div>
        </section>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
