import VideoPlayer from "@/components/video-player/VideoPlayer";
import VideoWithCaption from "@/components/video-player/VideoWithCaption";
import ProfoundLogo from "@/assets/ProfoundLogo";
import DaytonaLogo from "@/assets/DaytonaLogo";
import TurboLogo from "@/assets/TurboLogo";
import BuenaLogo from "@/assets/BuenaLogo";
import WewebLogo from "@/assets/WewebLogo";
import AkkioLogo from "@/assets/AkkioLogo";

export default function Home() {
  return (
    <>
      <section className="pt-24 pb-24">
        <h1 className="title max-w-[800px] pb-2">
          Design engineering practice founded by Luka Ivanovic. Combining design
          and development into one discipline, the practice reduces handoffs,
          minimizes rework, and enables teams to ship with clarity and speed.
          Built for founders who appreciate craft and want to stay lean without
          compromising quality.
        </h1>
        <p className="text-secondary pb-8 max-w-[800px]">
          We offer continuous personal relationship depending on your needs
          instead of limited subscription packages or sprints.
        </p>

        <div className="flex flex-row items-center gap-3 pb-12 text-[13px]">
          <a
            className="px-4 py-2 bg-foreground text-background rounded-full"
            href="https://wa.me/385958845960"
            target="_blank"
          >
            Chat with us
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

        <div className="h-px bg-foreground/6 w-full" />

        <div className="flex flex-row items-center gap-4 text-secondary py-6">
          <div className="text-secondary text-[13px]">Trusted by</div>

          <div className="flex flex-row gap-4">
            <ProfoundLogo className="h-5 w-auto" />
            <DaytonaLogo className="h-5 w-auto" />
            {/* <TurboLogo className="h-7 w-auto" /> */}
            <BuenaLogo className="h-5 w-auto" />
            <WewebLogo className="h-5 w-auto" />
            <AkkioLogo className="h-5 w-auto" />
          </div>
        </div>

        <div className="h-px bg-foreground/6 w-full" />

        <div className="grid grid-cols-[repeat(4,140px)] text-[13px] pb-6 pt-6">
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
        </div>

        <div className="h-px bg-foreground/6 w-full" />
      </section>

      <section className="gap-4 py-24">
        <h2 className="title pb-1">
          Building Profound's brand new AI shopping analytics experience
        </h2>
        <p className="text-secondary">
          Profound helps brands get mentioned in AI responses. We worked on
          brand new analytic pages for shopping responses.
        </p>

        <div className="grid grid-cols-2 gap-2 mt-8">
          <div className="aspect-square relative rounded-md  w-full bg-black/6 p-6 flex items-center justify-center">
            <img src="/profound-2.webp" className="max-w-[95%] h-auto z-10" />
          </div>
          <div className="aspect-square relative rounded-md   w-full bg-black/6 p-6 flex items-center justify-center">
            <img src="/profound-3.png" className="max-w-[95%] h-auto z-10" />
          </div>
          <div className="aspect-square relative rounded-md   w-full bg-black/6 p-6 flex items-center justify-center">
            <img src="/profound-4.png" className="max-w-[95%] h-auto z-10" />
          </div>
          <div className="aspect-square relative rounded-md   w-full bg-black/6 p-6 flex items-center justify-center">
            <video
              src="/profound-tabs.mp4"
              className="max-w-[95%] h-auto z-10"
              autoPlay
              muted
              loop
            />
          </div>
        </div>
      </section>

      <section className="gap-4 py-24">
        <h2 className="title pb-1">
          Designing and building the most advanced no-code and AI web
          application builder.
        </h2>

        <div className="grid grid-cols-2 gap-2 mt-8">
          <div className="aspect-square relative rounded-md w-full bg-black/6 p-6 flex items-center justify-center">
            <img
              src="/weweb/editor-new.png"
              className="max-w-[95%] h-auto z-10"
            />
          </div>
          <div className="aspect-square relative rounded-md w-full bg-black/6 p-6 flex items-center justify-center">
            <img
              src="/weweb/edition-panel.png"
              className="max-w-[95%] h-auto z-10"
            />
          </div>
          <div className="aspect-square relative rounded-md w-full bg-black/6 p-6 flex items-center justify-center">
            <img
              src="/weweb/workflows.png"
              className="max-w-[95%] h-auto z-10"
            />
          </div>

          <div className="aspect-square relative rounded-md w-full bg-black/6 p-6 flex items-center justify-center">
            <VideoPlayer
              url="ww-ai"
              aspectRatio="16/10"
              className="max-h-[60%] w-auto z-10"
            />
          </div>
        </div>
      </section>

      <section className="gap-4 py-24">
        <h2 className="title pb-1">
          Landing page for Buena celebrating their $58M Series A.
        </h2>
        <p className="text-secondary">
          We built and designed the new buena.com website celebrating their $58M
          Series A.
        </p>

        <div className="grid grid-cols-2 gap-2 mt-8">
          <div className="aspect-video relative rounded-md  w-full bg-black/6 p-6 flex items-center justify-center col-span-2">
            <VideoPlayer
              url="buena"
              aspectRatio="16/9"
              className="max-h-[80%] w-auto z-10"
            />
          </div>
        </div>
      </section>

      <section className="gap-4 py-24">
        <h2 className="title pb-1">
          Designing and building Daytona’s sandboxes views
        </h2>
        <p className="text-secondary">
          Daytona is building a new primitive for the AI age — sandbox. We
          helped them shape their main sandbox screens in their
          Next.js/Tailwind/Radix stack.
        </p>

        <div className="grid grid-cols-2 gap-2 mt-8">
          <div className="aspect-video relative rounded-md  w-full bg-black/6 p-6 flex items-center justify-center col-span-2">
            <img src="/daytona-01.png" className="max-h-[80%] w-auto z-10" />
          </div>
          <div className="aspect-square relative rounded-md   w-full bg-black/6 p-6 flex items-center justify-center">
            <img src="/daytona-02.png" className="max-w-[80%] h-auto z-10" />
          </div>
          <div className="aspect-square relative rounded-md   w-full bg-black/6 p-6 flex items-center justify-center">
            <img src="/daytona-03.png" className="max-w-[80%] h-auto z-10" />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6 md:col-span-2">
        <h2 className="title pb-1">
          Constantly exploring new ideas and building prototypes
        </h2>

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

      <section className="py-24 flex flex-col items-center justify-center">
        {/* <div className="text-[23px] font-medium leading-[32px] text-pretty pb-1">
          Get in touch
        </div> */}
        <div className="flex flex-row items-center gap-3 pb-8 text-[13px]">
          <a className="px-4 py-2 bg-foreground text-background rounded-full">
            Chat with us
          </a>
          <span className="text-secondary">
            {" "}
            or email at{" "}
            <a href="mailto:hi@lukaivanovic.co" className=" text-foreground">
              hi@lukaivanovic.co
            </a>
            .
          </span>
        </div>
      </section>
    </>
  );
}
