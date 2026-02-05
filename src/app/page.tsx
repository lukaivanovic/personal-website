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
      <section className="p-6 w-full flex flex-col items-center">
        <div className="max-w-md mx-auto w-full text-center flex flex-col items-center gap-6">
          <div className="flex justify-center">
            <Apollon className="size-18" />
          </div>

          <div>
            <h1 className="title pt-10 mx-auto">
              independent software design practice
            </h1>
            <p className="text-secondary mx-auto">
              founded and ran by luka ivanovic
            </p>
          </div>

          <ul className="flex flex-col w-xs gap-0 text-[14px] text-centerlist-none border rounded-xl border-foreground/6">
            <li className="border-b border-foreground/6 py-3 flex flex-col items-center">
              <span className="font-medium">Profound</span>
              <span className="text-secondary text-xs">E-commerce</span>
            </li>
            <li className="border-b border-foreground/6 py-3 flex flex-col items-center">
              <span className="font-medium">WeWeb</span>
              <span className="text-secondary text-xs">No-code platform</span>
            </li>
            <li className="border-b border-foreground/6 py-3 flex flex-col items-center">
              <span className="font-medium">Daytona</span>
              <span className="text-secondary text-xs">AI sandboxes</span>
            </li>
            <li className="border-b border-foreground/6 py-3 flex flex-col items-center">
              <span className="font-medium">Buena</span>
              <span className="text-secondary text-xs">
                Property management
              </span>
            </li>
            {/* <li className="border-b w-1/2 border-foreground/6 py-3 flex flex-col gap-0.5 items-center">
              <span className="font-medium">Forge</span>
              <span className="text-secondary">Automation</span>
            </li> */}
            <li className="border-b border-foreground/6 py-3 flex flex-col items-center">
              <span className="font-medium">Assert</span>
              <span className="text-secondary text-xs">Code review</span>
            </li>
            <li className=" py-3 flex flex-col items-center">
              <span className="font-medium">Akkio</span>
              <span className="text-secondary text-xs">AI / ML</span>
            </li>
          </ul>

          <p className="pb-12 text-[13px] text-center">
            <span className="text-secondary">
              Send a{" "}
              <a
                href="https://wa.me/385958845960"
                target="_blank"
                className="text-foreground"
              >
                message on WhatsApp
              </a>{" "}
              or email at{" "}
              <a href="mailto:hi@lukaivanovic.co" className="text-foreground">
                hi@lukaivanovic.co
              </a>
              .
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
