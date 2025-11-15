import Carousel from "@/components/carousel/Carousel";
import VideoPlayer from "@/components/video-player/VideoPlayer";

const wewebImages = [
  {
    src: "weweb/main.png",
    alt: "Manage your app logic and data from a single place",
    progressColor: "white",
    dotColor: "black",
  },
  {
    src: "weweb/workflows.png",
    alt: "Build your logic and automation with the workflow editor",
    progressColor: "#ED8D36",
    dotColor: "black",
  },

  {
    src: "weweb/edition-panel.png",
    alt: "Create states, components or edit your elements visually",
    progressColor: "#8F79F1",
    dotColor: "black",
  },
  {
    fileName: "ww-ai",
    aspectRatio: "16/10",
    alt: "AI-powered features in WeWeb",
    duration: 20000,
    progressColor: "#F09CEB",
    dotColor: "black",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen space-y-20 lg:space-y-20 pb-[240px]">
      {/* Buena website */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h2>Buena.com</h2>
          <p className="text-secondary">
            Property management firm that raised $58M Series A from Google
            Ventures
          </p>
          <a
            href="https://buena.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-link text-caption"
          >
            Visit website
          </a>
        </div>
        <div>
          <VideoComponent fileName="buena-light-3" aspectRatio="16/9" />
        </div>
      </section>

      {/* WeWeb Editor */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h2>WeWeb Editor</h2>
          <p className="text-secondary">
            WeWeb is a platform for building web applications where I joined as
            the first design hire and transitioned towards design engineering in
            my 3 year tenure. I was part of most core projects and learnt a lot
            about startups and myself.
          </p>
        </div>
        <div>
          <Carousel images={wewebImages} />
        </div>
      </section>

      {/* Gymmy */}
      <section>
        <div className="w-full aspect-[16/9] flex justify-center items-center [&>*:first-child]:w-auto [&>*:first-child]:h-full bg-black">
          <VideoComponent fileName="workout-app" aspectRatio="1/1" />
        </div>
        <div className="flex flex-col gap-1 mt-6">
          <p>Gymmy</p>
          <p className="text-secondary">
            Hobby application for tracking your workouts using your voice as
            input.
          </p>
        </div>
      </section>

      {/* Playground */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div className="flex flex-col gap-2">
          <VideoComponent fileName="rive" aspectRatio="16/9" />
          <VideoComponent fileName="radial" aspectRatio="5/4" />
          <VideoComponent fileName="tsushima" aspectRatio="1/1" />
          <VideoComponent fileName="ios-voice" aspectRatio="16/9" />
        </div>
        <div className="flex flex-col gap-2">
          <VideoComponent fileName="buena-sidebar-icons" aspectRatio="1/1" />
          <VideoComponent fileName="material-maker-1" aspectRatio="1/1" />
          <VideoComponent fileName="menu" aspectRatio="5/4" />
          <VideoComponent fileName="threejs" aspectRatio="16/9" />
        </div>
      </section>
    </div>
  );
}

async function VideoComponent({
  fileName,
  aspectRatio,
  className,
}: {
  fileName: string;
  aspectRatio: string;
  className?: string;
}) {
  return (
    <VideoPlayer
      className={className}
      url={fileName}
      aspectRatio={aspectRatio}
    />
  );
}
