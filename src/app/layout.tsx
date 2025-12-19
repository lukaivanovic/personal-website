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
import ProfoundLogo from "@/assets/ProfoundLogo";
import BuenaLogo from "@/assets/BuenaLogo";
import DaytonaLogo from "@/assets/DaytonaLogo";
import TurboLogo from "@/assets/TurboLogo";
import Pattern from "@/assets/Pattern";

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
        <main className="grid grid-cols-1 md:grid-cols-[400px_1fr]">
          <header className="text-body">
            <div className="flex flex-col md:sticky md:top-0 md:min-h-screen p-6">
              <Pattern />

              {/* Header */}
              <div className="flex flex-row items-center justify-between gap-2 pt-4">
                <Link href="/" className="flex flex-row items-center gap-2">
                  <Apollon className="size-9" />
                </Link>

                <ThemeSelect />
              </div>

              {/* <Pattern /> */}

              {/* Content */}

              <div className="flex flex-col gap-4 py-10">
                <h1 className="text-[15px] md:text-[40px] leading-11 font-semibold text-pretty">
                  Independent design engineer partnering with companies on end
                  to end projects.
                </h1>

                <div className="flex flex-row items-center gap-1 h-9 w-full md:w-auto">
                  <a
                    href="mailto:hi@ivanovicluka.co"
                    className="px-2 py-1 bg-foreground text-background hover:bg-background hover:text-foreground active:bg-foreground active:text-background cursor-pointer md:cursor-default "
                  >
                    Contact me
                  </a>
                  <a
                    href="https://x.com/lukaivnvc"
                    className="px-2 py-1 hover:bg-foreground hover:text-background active:bg-foreground active:text-background cursor-pointer md:cursor-default "
                  >
                    See more on X
                  </a>
                </div>
              </div>

              <div className="grow"></div>

              <Pattern />

              <div className="grid grid-cols-2 text-foreground/50">
                <div className="flex flex-row items-center py-4 justify-center ">
                  <ProfoundLogo className="h-6 w-auto " />
                </div>
                <div className="flex flex-row items-center py-4 justify-center ">
                  <BuenaLogo className="h-6 w-auto " />
                </div>
                <div className="flex flex-row items-center py-4 justify-center ">
                  <DaytonaLogo className="h-6 w-auto " />
                </div>
                <div className="flex flex-row items-center py-4 justify-center ">
                  <TurboLogo className="h-6 w-auto " />
                </div>
              </div>
            </div>
          </header>

          {children}
        </main>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
