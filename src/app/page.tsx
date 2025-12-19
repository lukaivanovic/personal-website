import Image from "next/image";
import VideoPlayer from "@/components/video-player/VideoPlayer";
import VideoWithCaption from "@/components/video-player/VideoWithCaption";
import ProfoundLogo from "@/assets/ProfoundLogo";
import EmblaCarousel from "@/components/EmblaCarousel";
import Pattern from "@/assets/Pattern";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-10 p-4">
      {/* Profound Shopping */}
      <section className="flex flex-col gap-2">
        <div className="aspect-5/3 relative  px-6 rounded-xl flex items-center justify-center">
          <img
            src="/profound-2.webp"
            alt=""
            className="z-10 border border-foreground/24 h-auto object-cover scale-90"
          />
          <img
            src="/profound-bg.png"
            alt="Profound Shopping background"
            className="w-full h-full absolute inset-0 object-cover"
          />
        </div>

        <div className="flex flex-col md:flex-row md:gap-4 gap-1">
          <h2 className="font-medium">Profound Shopping</h2>
          <p className="text-secondary">
            Built the brand new Profound Shopping analytics package which
            provides an extremely detailed view into ChatGPT's shopping results.
          </p>
        </div>
      </section>

      {/* Buena website */}
      <section className="flex flex-col gap-2">
        <div className="aspect-5/3 bg-linear-to-b from-foreground/10 to-foreground/5 px-6 flex items-center justify-center">
          <VideoPlayer
            url="buena"
            aspectRatio="16/9"
            className="w-3/4 h-auto "
          />
        </div>
        <div className="flex flex-col md:flex-row md:gap-4 gap-1">
          <h2 className="font-medium">Buena website</h2>
          <p className="text-secondary">
            Built and designed the new buena.com website celebrating their $58M
            Series A.
          </p>
        </div>
      </section>

      {/* WeWeb Editor */}
      <section className="flex flex-col gap-2">
        <div className="aspect-5/3 bg-linear-to-b from-foreground/10 to-foreground/5 px-6 flex items-center justify-center overflow-hidden">
          <EmblaCarousel className="flex-1">
            <img
              src="/weweb/editor-new.png"
              alt="Create states, components or edit your elements visually"
              className="h-auto w-60 md:w-200 pointer-events-none select-none"
            />
            <VideoPlayer
              url="ww-ai"
              aspectRatio="16/10"
              className="h-auto w-60 md:w-200 shrink-0 pointer-events-none"
            />
            <img
              src="/weweb/workflows.png"
              alt="Manage your app logic and data from a single place"
              className="h-auto w-60 md:w-200 object-cover pointer-events-none select-none"
            />
            <img
              src="/weweb/edition-panel.png"
              alt="Build your logic and automation with the workflow editor"
              className="h-auto w-60 md:w-200 object-cover pointer-events-none select-none"
            />
          </EmblaCarousel>
        </div>

        <div className="flex flex-col md:flex-row md:gap-4 gap-1">
          <h2 className="font-medium">WeWeb</h2>
          <p className="text-secondary">
            WeWeb is a platform for building complex web applications with
            database conntections, comprehensive styling and workflow automation
          </p>
        </div>
      </section>

      <Pattern viewBoxWidth={1000} />

      {/* Playground */}
      <section className="flex flex-col gap-6 md:col-span-2">
        <div className="flex flex-col gap-0.5">
          <h2 className="text-base font-medium text-pretty">Playground</h2>
          <p className="text-secondary text-pretty">
            This is where you will find some of my experiments and prototypes.
          </p>
        </div>
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
