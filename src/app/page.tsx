import Image from "next/image";
import VideoPlayer from "@/components/video-player/VideoPlayer";
import VideoWithCaption from "@/components/video-player/VideoWithCaption";
import ProfoundLogo from "@/assets/ProfoundLogo";
import EmblaCarousel from "@/components/EmblaCarousel";

export default function Home() {
  return (
    <main className="min-h-screen pb-[240px] container flex flex-col gap-12 md:gap-x-4 md:gap-y-20">
      {/* Profound Shopping */}
      <section className="grid grid-cols-[280px_1fr] gap-2">
        <p className="text-secondary max-w-88 text-pretty">
          Built the brand new{" "}
          <a
            href="https://www.tryprofound.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-secondary underline underline-offset-2"
          >
            Profound
          </a>{" "}
          Shopping analytics package which provides an extremely detailed view
          into ChatGPT's shopping results.
        </p>
        <EmblaCarousel className="relative w-full" slideClassName="w-auto">
          <img
            src="/profound-2.webp"
            alt=""
            className="w-200 h-auto object-cover"
          />
          <img
            src="/profound-3.png"
            alt=""
            className="w-200 h-auto object-cover"
          />
          <img
            src="/profound-4.png"
            alt=""
            className="w-200 h-auto object-cover"
          />
        </EmblaCarousel>
      </section>

      {/* Buena website */}
      <section className="grid grid-cols-[280px_1fr] gap-2">
        <p className="text-secondary text-pretty">
          Built and designed the new{" "}
          <a
            href="https://buena.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-secondary underline underline-offset-2"
          >
            buena.com
          </a>{" "}
          website celebrating their $58M Series A.
        </p>
        <div>
          <VideoPlayer
            url="buena"
            aspectRatio="16/9"
            className="w-200 h-auto "
          />
        </div>
      </section>

      {/* WeWeb Editor */}
      <section className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-2">
        <p className="text-secondary text-pretty">
          WeWeb is a platform for building complex web applications with
          database conntections, comprehensive styling and workflow automation
        </p>
        <EmblaCarousel className="flex-1" slideClassName="">
          <img
            src="/weweb/editor-new.png"
            alt="Create states, components or edit your elements visually"
            className="h-auto w-80 md:w-200 object-cover pointer-events-none select-none"
          />
          <VideoPlayer
            url="ww-ai"
            aspectRatio="16/10"
            className="h-auto w-200 shrink-0 pointer-events-none"
          />
          <img
            src="/weweb/workflows.png"
            alt="Manage your app logic and data from a single place"
            className="h-auto w-200 object-cover pointer-events-none select-none"
          />
          <img
            src="/weweb/edition-panel.png"
            alt="Build your logic and automation with the workflow editor"
            className="h-auto w-200 object-cover pointer-events-none select-none"
          />
        </EmblaCarousel>
      </section>

      {/* Gymmy */}
      <section className="grid grid-cols-[280px_1fr] gap-2">
        <p className="text-secondary text-pretty">
          WeWeb is a platform for building complex web applications with
          database conntections, comprehensive styling and workflow automation
        </p>
        <div>
          <VideoPlayer url="gymmy" aspectRatio="1/1" className="h-120 w-auto" />
        </div>
      </section>

      {/* Playground */}
      <section className="flex flex-col gap-6 md:col-span-2">
        <div className="flex flex-col gap-1">
          <h2>Playground</h2>
          <p className="text-secondary">
            This is where you will find some of my experiments and prototypes.
          </p>
        </div>
        <div className=" gap-2 grid grid-cols-3">
          <VideoWithCaption
            url="buena-sidebar-icons"
            aspectRatio="1/1"
            caption="Buena sidebar icon animation"
          />
          <div className="flex flex-col gap-2">
            <VideoWithCaption
              url="radial"
              aspectRatio="5/4"
              caption="Radial progress visual experiment"
            />

            <VideoWithCaption
              url="tsushima"
              aspectRatio="1/1"
              caption="Tsushima character avatar UI prototype"
            />
          </div>
          <div className="flex flex-col gap-2">
            <VideoWithCaption
              url="menu"
              aspectRatio="5/4"
              caption="Animated radial menu prototype"
            />
            <VideoWithCaption
              url="rive"
              aspectRatio="16/9"
              caption="Rive interactive animation experiment"
            />
            <VideoWithCaption
              url="ios-voice"
              aspectRatio="16/9"
              caption="iOS voice command quick feature"
            />
          </div>
          <div className="flex flex-col gap-2">
            <VideoWithCaption
              url="material-maker"
              aspectRatio="1/1"
              caption="Material Maker node UI demo"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
