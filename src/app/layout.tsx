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
        <ShaderBackgroundWrapper />

        <main className="grid grid-cols-1 md:grid-cols-[560px_1fr]">
          <header className="text-body">
            <div className="flex flex-col md:sticky md:top-0 md:min-h-screen pt-4 pb-4 px-6">
              <div className="flex flex-row items-center justify-between gap-2">
                <Link href="/" className="flex flex-row items-center gap-2">
                  <Apollon className="size-17" />
                </Link>
              </div>

              <h1 className="text-[28px] leading-[36px] font-medium text-pretty mt-14">
                Independent design engineer helping companies achieve design
                excellence.
              </h1>
              <p className="text-foreground/72 mt-2">
                Living and working out of Zagreb, Croatia.
              </p>

              <div className="flex flex-col py-10">
                <div className="relative grid grid-cols-[96px_1fr_80px] items-center h-9 gap-2 w-full border-b border-foreground/12">
                  <span className="opacity-50">Client</span>
                  <span className="opacity-50">Description</span>
                  <span className="opacity-50">Period</span>
                </div>
                <div className="flex flex-col">
                  <ProjectRow
                    name="Profound"
                    description="GenAI marketing intelligence platform"
                    period="2025"
                    href="https://tryprofound.com"
                  />
                  <ProjectRow
                    name="Daytona"
                    description="Sandboxes for running AI-generated code"
                    period="2025"
                    href="https://daytona.io"
                  />

                  <ProjectRow
                    name="Buena"
                    description="Property management firm"
                    period="2025"
                    href="https://buena.com"
                  />
                  <ProjectRow
                    name="Akkio"
                    description="AI agents for media agencies"
                    period="2024"
                    href="https://weweb.io"
                  />
                  <ProjectRow
                    name="WeWeb"
                    description="No-code AI application builder"
                    period="2022-2025"
                    href="https://weweb.io"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 h-9 w-full md:w-auto">
                <a
                  href="mailto:hi@ivanovicluka.co"
                  className="px-3 w-full py-1 bg-foreground flex items-center justify-center text-background border border-transparent hover:border-foreground hover:bg-background hover:text-foreground cursor-pointer md:cursor-default "
                >
                  Contact
                </a>
                <div className="flex flex-row items-center gap-2">
                  <a
                    href="https://x.com/lukaivnvc"
                    className="px-2 py-0.5 text-secondary hover:text-foreground  cursor-pointer md:cursor-default "
                  >
                    TW
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ivanovicluka0/"
                    className="px-2 py-0.5 text-secondary hover:text-foreground  cursor-pointer md:cursor-default "
                  >
                    LI
                  </a>
                </div>
              </div>

              <div className="mt-auto">
                <ThemeSelect />
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
