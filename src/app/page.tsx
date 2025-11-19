import Image from "next/image";
import VideoPlayer from "@/components/video-player/VideoPlayer";
import VideoWithCaption from "@/components/video-player/VideoWithCaption";

export default function Home() {
  return (
    <div className="min-h-screen space-y-20 lg:space-y-20 pb-[240px]">
      {/* Buena website */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h2>Buena.com</h2>
          <p className="text-secondary">
            New landing page for Buena celebrating the announcement of their
            $58M Series A from Google Ventures
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
        <div>
          <VideoPlayer url="buena" aspectRatio="16/9" />
        </div>
      </section>

      {/* WeWeb Editor */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h2>WeWeb Editor</h2>
          <p className="text-secondary">
            WeWeb is a platform for building complex web applications with
            database conntections, comprehensive styling and workflow automation
          </p>
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
            <div className="relative w-full aspect-video">
              <img
                src="/weweb/main.png"
                alt="Manage your app logic and data from a single place"
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-video">
              <img
                src="/weweb/workflows.png"
                alt="Build your logic and automation with the workflow editor"
                className="object-cover"
              />
            </div>

            <VideoPlayer url="ww-ai" aspectRatio="16/10" />
          </div>
        </div>
      </section>

      {/* Gymmy */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h2>Gymmy</h2>
          <p className="text-secondary">
            Hobby application for tracking your workouts using your voice as
            input.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <VideoPlayer url="gymmy" aspectRatio="1/1" />
        </div>
      </section>

      {/* Playground */}

      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h2>Playground</h2>
          <p className="text-secondary">
            This is where you will find some of my experiments and prototypes.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="flex flex-col gap-2">
            <VideoWithCaption
              url="rive"
              aspectRatio="16/9"
              caption="Rive interactive animation experiment"
            />
            <VideoWithCaption
              url="tsushima"
              aspectRatio="1/1"
              caption="Tsushima character avatar UI prototype"
            />
            <VideoWithCaption
              url="ios-voice"
              aspectRatio="16/9"
              caption="iOS voice command quick feature"
            />
          </div>
          <div className="flex flex-col gap-2">
            <VideoWithCaption
              url="buena-sidebar-icons"
              aspectRatio="1/1"
              caption="Buena sidebar icon animation"
            />
            <VideoWithCaption
              url="threejs"
              aspectRatio="16/9"
              caption="Three.js 3D playground scene"
            />
            <VideoWithCaption
              url="menu"
              aspectRatio="5/4"
              caption="Animated radial menu prototype"
            />
          </div>
          <div className="flex flex-col gap-2">
            <VideoWithCaption
              url="radial"
              aspectRatio="5/4"
              caption="Radial progress visual experiment"
            />
            <VideoWithCaption
              url="material-maker-1"
              aspectRatio="1/1"
              caption="Material Maker node UI demo"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
