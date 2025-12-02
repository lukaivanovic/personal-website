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
      <body className="root ">
        <ShaderBackgroundWrapper />
        <header className="fixed top-0 left-0 right-0 flex justify-between items-center px-4 pt-4 pb-1 text-body container z-10">
          <div className="flex flex-row items-center gap-2">
            <Link href="/" className="flex flex-row items-center gap-2">
              <Apollon className="size-9" />
              {/* <div className="flex-col hidden md:flex gap-0">
                <div className="flex font-medium gap-1 flex-row">
                  <span>Luka Ivanovic</span>
                  <span>I.S.P.</span>
                </div>
                <div className="flex flex-row gap-1 text-caption text-secondary">
                  <span>Independent</span>
                  <span>Software</span>
                  <span>Practice</span>
                </div>
              </div> */}
            </Link>
          </div>
          <div className="flex flex-row items-center gap-3">
            <a
              href="mailto:hi@ivanovicluka.co"
              className="hover:bg-foreground hover:text-background active:bg-foreground active:text-background cursor-pointer md:cursor-default "
            >
              Send email
            </a>
            <a
              href="https://x.com/lukaivnvc"
              className="hover:bg-foreground hover:text-background active:bg-foreground active:text-background cursor-pointer md:cursor-default "
            >
              Twitter
            </a>
            <ThemeSelect />
          </div>
        </header>
        <main className="flex flex-col items-start md:flex-row justify-between gap-y-20 md:gap-y-6 md:gap-x-20 text-body container mt-24">
          <div className="md:sticky md:top-20 flex flex-col items-start gap-4 w-full md:w-76 shrink-0">
            <h1 className="text-title">
              Luka is an independent design engineer who partners with companies
              on end-to-end projects.
            </h1>
            <p className="text-secondary">
              I love working by starting with messy ideas on paper or Figma and
              quickly moving to code canvas with Cursor.
            </p>
            <p className="text-secondary">
              Tweets like this one from{" "}
              <a
                href="https://x.com/karrisaarinen/status/1715085201653805116"
                className="underline cursor-default hover:text-foreground"
              >
                Karri Saarinen (CEO @ linear)
              </a>{" "}
              and{" "}
              <a
                href="https://x.com/ryolu_/status/1990057444253241545"
                className="underline cursor-default hover:text-foreground"
              >
                Ryo Lu (Head of Design & Cursor)
              </a>{" "}
              resonate with me.
            </p>
            <p className="text-secondary">
              Currently working on an AI analytics tool and a better code review
              tool. Previous projects and clients include companies like Akkio,
              Buena, Daytona, WeWeb, UBS and more.
            </p>
            <p className="text-secondary">Available for new projects.</p>
            <div className="flex flex-row gap-2">
              <BookACall />
              <a
                href="mailto:hi@ivanovicluka.co"
                className="bg-background text-secondary hover:bg-foreground hover:text-background px-1"
              >
                Send email
              </a>
            </div>
          </div>
          {children}
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
