import Image from "next/image";
import VideoPlayer from "@/components/video-player/VideoPlayer";
import VideoWithCaption from "@/components/video-player/VideoWithCaption";
import ProfoundLogo from "@/assets/ProfoundLogo";
import EmblaCarousel from "@/components/EmblaCarousel";

export default function Home() {
  return (
    <main className="min-h-screen pb-[240px] container flex flex-col gap-12 md:gap-x-4 md:gap-y-20">
      {/* Profound Shopping */}
      <section className="flex flex-col gap-6 border-b border-secondary/24 py-20">
        <div className="flex flex-col gap-2">
          <h2 className="text-base md:text-[19px] font-medium max-w-160 text-pretty">
            Profound Shopping
          </h2>
          <p className="text-secondary text-pretty max-w-100">
            Built the brand new Profound Shopping analytics package which
            provides an extremely detailed view into ChatGPT's shopping results.
          </p>
        </div>

        <EmblaCarousel className="relative w-full" slideClassName="w-auto">
          <img
            src="/profound-2.webp"
            alt=""
            className="w-140 md:w-200 border border-foreground/24 h-auto object-cover"
          />
          <img
            src="/profound-3.png"
            alt=""
            className="w-140 md:w-200 h-auto object-cover"
          />
          <img
            src="/profound-4.png"
            alt=""
            className="w-140 md:w-200 h-auto object-cover"
          />
        </EmblaCarousel>
      </section>

      {/* Buena website */}
      <section className="flex flex-col gap-2 border-b border-secondary/24 py-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-base font-medium text-pretty">
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
          </h2>
        </div>
        <div>
          <VideoPlayer
            url="buena"
            aspectRatio="16/9"
            className="w-full h-auto "
          />
        </div>
      </section>

      {/* WeWeb Editor */}
      <section className="flex flex-col gap-6 border-b border-secondary/24 py-10">
        <div className="flex flex-col gap-2">
          {" "}
          <h2 className="text-base md:text-[19px] font-medium max-w-160 text-pretty">
            WeWeb Editor
          </h2>
          <p className="text-secondary text-pretty">
            WeWeb is a platform for building complex web applications with
            database conntections, comprehensive styling and workflow automation
          </p>
        </div>

        <EmblaCarousel className="flex-1" slideClassName="">
          <img
            src="/weweb/editor-new.png"
            alt="Create states, components or edit your elements visually"
            className="h-auto ml-4 md:ml-0 w-120 md:w-200 pointer-events-none select-none"
          />
          <VideoPlayer
            url="ww-ai"
            aspectRatio="16/10"
            className="h-auto w-120 md:w-200 shrink-0 pointer-events-none"
          />
          <img
            src="/weweb/workflows.png"
            alt="Manage your app logic and data from a single place"
            className="h-auto w-120 md:w-200 object-cover pointer-events-none select-none"
          />
          <img
            src="/weweb/edition-panel.png"
            alt="Build your logic and automation with the workflow editor"
            className="h-auto w-120 md:w-200 object-cover pointer-events-none select-none"
          />
        </EmblaCarousel>
      </section>

      {/* Gymmy */}
      <section className="flex flex-col gap-6 border-b border-secondary/24 py-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-base md:text-[19px] font-medium max-w-160 text-pretty">
            Gymmy
          </h2>
          <p className="text-secondary text-pretty">
            Gymmy is a platform for building complex web applications with
            database conntections, comprehensive styling and workflow automation
          </p>
        </div>
        <VideoPlayer url="gymmy" aspectRatio="1/1" className="w-full" />
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
