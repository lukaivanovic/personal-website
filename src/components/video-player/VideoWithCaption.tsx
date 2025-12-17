import VideoPlayer from "./VideoPlayer";

interface VideoWithCaptionProps {
  url: string;
  aspectRatio: string;
  caption: string;
  className?: string;
  autoPlay?: boolean;
}

export default function VideoWithCaption({
  url,
  aspectRatio,
  caption,
  className,
  autoPlay,
}: VideoWithCaptionProps) {
  return (
    <div className={`group relative overflow-hidden ${className || ""}`}>
      <VideoPlayer url={url} aspectRatio={aspectRatio} autoPlay={autoPlay} />
      <div className="absolute bottom-0 left-0 right-0 bg-foreground/95 backdrop-blur-sm px-4 py-1 transition-transform duration-300 ease-out z-20 ">
        <span className="text-background">{caption}</span>
      </div>
    </div>
  );
}
