import Image from "next/image";
import VideoPlayer from "@/components/video-player/VideoPlayer";
import VideoWithCaption from "@/components/video-player/VideoWithCaption";
import ProfoundLogo from "@/assets/ProfoundLogo";

export default function Home() {
  return (
    <main className="min-h-screen pb-[240px] container grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4">
      {/* Profound Shopping */}
      <section className="flex flex-col gap-2">
        <div className="relative w-full aspect-video overflow-hidden">
          <img
            src="/profound-shopping2.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
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
      </section>

      {/* Buena website */}
      <section className="flex flex-col gap-2">
        <div>
          <VideoPlayer url="buena" aspectRatio="16/9" />
        </div>
        <p className="text-secondary max-w-70 text-pretty">
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
      </section>

      {/* WeWeb Editor */}
      <section className="flex flex-col gap-6 md:col-span-2">
        <div className="flex flex-col gap-1">
          <h2>WeWeb Editor</h2>
          <p className="text-secondary">
            WeWeb is a platform for building complex web applications with
            database conntections, comprehensive styling and workflow automation
          </p>
          <a
            href="https://buena.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-link text-caption mt-2"
          >
            Visit website
          </a>
        </div>
        <div className="flex flex-col gap-2">
          <div className="relative w-full aspect-video">
            <img
              src="/weweb/edition-panel.png"
              alt="Create states, components or edit your elements visually"
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="relative w-full h-full row-span-2 overflow-hidden">
              <img
                src="/weweb/workflows-new.png"
                alt="Manage your app logic and data from a single place"
                className="h-full w-full object-cover "
              />
            </div>
            <div className="relative w-full aspect-video">
              <img
                src="/weweb/editor-new.png"
                alt="Build your logic and automation with the workflow editor"
                className="object-cover"
              />
            </div>

            <VideoPlayer url="ww-ai" aspectRatio="16/10" />
          </div>
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
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <VideoWithCaption
              url="gymmy"
              aspectRatio="1/1"
              caption="Hobby application for tracking your workouts using your voice as input."
            />
            <VideoWithCaption
              url="buena-sidebar-icons"
              aspectRatio="1/1"
              caption="Buena sidebar icon animation"
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
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
              <VideoWithCaption
                url="threejs"
                aspectRatio="16/9"
                caption="Three.js 3D playground scene"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
