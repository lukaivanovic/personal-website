import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Link from "next/link";
import ThemeSelect from "@/components/ThemeSelect";
import ProjectRow from "@/components/ProjectRow";
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
    <html lang="en" data-theme="vanilla" className="[scrollbar-gutter:stable]">
      <body className="overflow-x-hidden">
        <main className="container">
          <header className="py-3">
            <div className="flex flex-row items-center justify-between gap-2">
              {/* <Link href="/" className="flex flex-row items-center gap-2">
                <Apollon className="size-15" />
              </Link> */}
              <div className="text-[13px]">
                <div className="font-medium">Luka Ivanovic D.E.P</div>
                <div className="text-secondary">
                  Design Engineering Practice
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
