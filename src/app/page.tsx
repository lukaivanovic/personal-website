import VideoPlayer from "@/components/video-player/VideoPlayer";
import VideoWithCaption from "@/components/video-player/VideoWithCaption";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-28 p-4">
      {/* Profound Shopping */}
      <section className="flex flex-col items-center gap-4">
        <div className="aspect-3/2 relative px-6 rounded-xl flex items-center justify-center">
          <img
            src="/profound-3.png"
            alt=""
            className="z-10 w-full h-auto object-cover scale-90"
            width={1200}
            height={800}
          />
          <img
            src="/profound-bg.png"
            alt="Profound Shopping background"
            className="w-full h-full absolute inset-0 object-cover"
          />
        </div>
        <div className="flex flex-col items-center text-center w-120 gap-1 ">
          <h2 className="font-medium">Profound Shopping</h2>
          <p className="text-secondary">
            Built the brand new Profound Shopping analytics package which
            provides an extremely detailed view into ChatGPT's shopping results.
          </p>
        </div>
      </section>

      {/* Buena website */}
      <section className="flex flex-col items-center gap-4">
        <div className="aspect-3/ w-full bg-linear-to-b from-foreground/10 to-foreground/5 p-6 flex items-center justify-center">
          <VideoPlayer url="buena" aspectRatio="16/9" className="w-full" />
        </div>
        <div className="flex flex-col items-center text-center w-120">
          <h2 className="font-medium">Buena website</h2>
          <p className="text-secondary">
            Built and designed the new buena.com website celebrating their $58M
            Series A.
          </p>
        </div>
      </section>

      {/* WeWeb Editor */}
      <section className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-2">
          <img
            src="/weweb/editor-new.png"
            alt="Create states, components or edit your elements visually"
            className="pointer-events-none select-none w-full h-auto"
            width={1200}
            height={800}
          />

          <img
            src="/weweb/workflows.png"
            alt="Manage your app logic and data from a single place"
            className="pointer-events-none select-none w-full h-auto"
            width={1200}
            height={800}
          />
          <VideoPlayer
            url="ww-ai"
            aspectRatio="16/10"
            className="pointer-events-none"
          />
        </div>
        <div className="flex flex-col items-center text-center w-120">
          <h2 className="font-medium">WeWeb Editor</h2>
          <p className="text-secondary">
            Platform for building complex web applications with database
            conntections, comprehensive styling and workflow automation
          </p>
        </div>
      </section>

      {/* Playground */}
      <section className="flex flex-col gap-6 md:col-span-2">
        {/* <div className="flex flex-col gap-0.5">
          <h2 className="text-base font-medium text-pretty">Playground</h2>
          <p className="text-secondary text-pretty">
            This is where you will find some of my experiments and prototypes.
          </p>
        </div> */}
        <div className="gap-2 grid grid-cols-1  md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <VideoWithCaption
              url="buena-sidebar-icons"
              aspectRatio="1/1"
              caption="Sidebar with animated icons built in Rive for Buena."
            />
            <VideoWithCaption
              url="radial"
              aspectRatio="5/4"
              caption="Radial menu concept for a design tool built in React"
            />
            <VideoWithCaption
              url="tsushima"
              aspectRatio="1/1"
              caption="Particle dissolve effect inspired by the Ghost of Tsushima game and built with three.js with no external libraries."
            />
          </div>
          <div className="flex flex-col gap-2">
            <VideoWithCaption
              url="menu"
              aspectRatio="5/4"
              caption="A different take on the animation of an opening submenu where the menu items are revealed from the center instead of the top."
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
              url="gymmy"
              aspectRatio="1/1"
              caption="iOS application for tracking your workouts using voice as an input. Built with SwiftUI and LiveKit."
            />
            <VideoWithCaption
              url="material-maker"
              aspectRatio="1/1"
              caption="Cool glowing effect built in Material Maker"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
