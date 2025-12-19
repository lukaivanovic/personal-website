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
            <div className="flex flex-col md:sticky md:top-0 md:min-h-screen py-4 px-6">
              {/* <Pattern /> */}

              {/* Header */}
              <div className="flex flex-row items-center justify-between gap-2 pt-4">
                <Link href="/" className="flex flex-row items-center gap-2">
                  <Apollon className="size-9" />
                </Link>

                <ThemeSelect />
              </div>

              {/* <Pattern /> */}

              {/* Content */}

              <div className="flex flex-col pt-16">
                <h1 className="text-[26px] leading-[34px] font-semibold text-pretty">
                  Independent design engineer helping companies achieve design
                  excellence.
                </h1>

                <p className="text-secondary mt-2 font-medium text-pretty">
                  Currently based in Zagreb, Croatia.
                </p>

                <div className="flex flex-row items-center gap-2 h-9 w-full md:w-auto mt-16">
                  <a
                    href="mailto:hi@ivanovicluka.co"
                    className="px-4 py-2 bg-foreground text-background border border-transparent hover:border-foreground hover:bg-background hover:text-foreground cursor-pointer md:cursor-default "
                  >
                    Contact me
                  </a>
                  <a
                    href="https://x.com/lukaivnvc"
                    className="px-2 py-2 text-secondary hover:text-foreground  cursor-pointer md:cursor-default "
                  >
                    See more on X
                  </a>
                </div>
              </div>

              <div className="flex flex-row items-center gap-3 text-foreground/50 mt-6 md:mt-auto pb-6">
                <ProfoundLogo className="h-5 w-auto " />
                <BuenaLogo className="h-5 w-auto " />
                <DaytonaLogo className="h-5 w-auto " />
                <TurboLogo className="h-5 w-auto " />
              </div>

              <Pattern />
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
