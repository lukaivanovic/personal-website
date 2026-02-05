import VideoPlayer from "@/components/video-player/VideoPlayer";
import VideoWithCaption from "@/components/video-player/VideoWithCaption";
import ProfoundLogo from "@/assets/ProfoundLogo";
import DaytonaLogo from "@/assets/DaytonaLogo";
import TurboLogo from "@/assets/TurboLogo";
import BuenaLogo from "@/assets/BuenaLogo";
import WewebLogo from "@/assets/WewebLogo";
import AkkioLogo from "@/assets/AkkioLogo";
import Image from "next/image";
import Apollon from "@/assets/Apollon";

export default function Home() {
  return (
    <>
      <section className="p-6">
        <Apollon className="size-10 -ml-0.5" />
        <h1 className="title pb-2 pt-10">
          Independent software development practice fueled by design ran by Luka
          Ivanovic.
        </h1>
        <p className="text-secondary pb-8 max-w-[800px]">
          We offer continuous personal relationship depending on your needs
          instead of limited subscription packages or sprints.
        </p>

        {/* <div className="flex flex-row items-center gap-4 text-secondary py-6">
          <div className="text-secondary text-[13px]">Trusted by</div>

          <div className="flex flex-row gap-4">
            <ProfoundLogo className="h-5 w-auto" />
            <DaytonaLogo className="h-5 w-auto" />
            <BuenaLogo className="h-5 w-auto" />
            <WewebLogo className="h-5 w-auto" />
            <AkkioLogo className="h-5 w-auto" />
          </div>
        </div> */}

        <div className="py-6">
          <div className="text-[14px] flex flex-col">
            <div className="grid grid-cols-[100px_80px_1fr] gap-x-8 border-b border-foreground/6 pb-2 text-secondary">
              <div>Client</div>
              <div>Year</div>
              <div>Industry</div>
            </div>

            <div className="grid grid-cols-[100px_80px_1fr] gap-x-8 border-b border-foreground/6 py-2">
              <div className="font-medium">Profound</div>
              <div>22</div>
              <div>E-commerce</div>
            </div>

            <div className="grid grid-cols-[100px_80px_1fr] gap-x-8 border-b border-foreground/6 py-2">
              <div className="font-medium">WeWeb</div>
              <div>21</div>
              <div>No-code platform</div>
            </div>

            <div className="grid grid-cols-[100px_80px_1fr] gap-x-8 border-b border-foreground/6 py-2">
              <div className="font-medium">Akkio</div>
              <div>23</div>
              <div>AI / ML</div>
            </div>

            <div className="grid grid-cols-[100px_80px_1fr] gap-x-8 border-b border-foreground/6 py-2">
              <div className="font-medium">Forge</div>
              <div>25/26</div>
              <div>Automation</div>
            </div>

            <div className="grid grid-cols-[100px_80px_1fr] gap-x-8 border-b border-foreground/6 py-2">
              <div className="font-medium">Assert</div>
              <div>25/26</div>
              <div>Code review</div>
            </div>

            <div className="grid grid-cols-[100px_80px_1fr] gap-x-8 border-b border-foreground/6 py-2">
              <div className="font-medium">Daytona</div>
              <div>25</div>
              <div>AI sandboxes</div>
            </div>

            <div className="grid grid-cols-[100px_80px_1fr] gap-x-8 border-b border-foreground/6 py-2">
              <div className="font-medium">Buena</div>
              <div>25</div>
              <div>Property management</div>
            </div>
          </div>
        </div>

        <div className="h-px bg-foreground/6 w-full" />

        <div className="flex flex-row items-center gap-3 pb-12 text-[13px]">
          <a
            className="px-4 py-2 bg-foreground text-background rounded-full"
            href="https://wa.me/385958845960"
            target="_blank"
          >
            Chat with me
          </a>
          <span className="text-secondary">
            {" "}
            or email at{" "}
            <a href="mailto:hi@lukaivanovic.co" className="text-foreground">
              hi@lukaivanovic.co
            </a>
            .
          </span>
        </div>

        {/* <div className="grid grid-cols-[repeat(4,140px)] text-[13px] pb-6 pt-6">
          <div className="flex flex-col gap-3">
            <div className="text-secondary">Design</div>

            <ul>
              <li>Web</li>
              <li>Mobile</li>
              <li>Desktop</li>
              <li>Websites</li>
              <li>Branding</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-secondary">Product</div>

            <ul>
              <li>User experience</li>
              <li>Strategy</li>
              <li>Research</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-secondary">Development</div>

            <ul>
              <li>Frontend</li>
              <li>iOS</li>
              <li>Creative coding</li>
              <li>Desktop</li>
              <li>Design systems</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-secondary">Technologies</div>

            <ul>
              <li>React</li>
              <li>Solid</li>
              <li>Next.js</li>
              <li>Tailwind</li>
              <li>Radix & Base UI</li>
              <li>SwiftUI</li>
              <li>Motion.dev</li>
              <li>Three.js</li>
              <li className="text-secondary">+ many more</li>
            </ul>
          </div>
        </div> */}
      </section>

      <section className="p-6">
        <div className="w-full mx-auto aspect-9/16 flex flex-col gap-0.5">
          <div className="blueprint-ruler shrink-0">
            <span className="blueprint-ruler-minor" aria-hidden />
            <span className="blueprint-ruler-sub" aria-hidden />
          </div>
          <div className="blueprint-grid flex-1 min-h-0" />
        </div>
      </section>
    </>
  );
}
