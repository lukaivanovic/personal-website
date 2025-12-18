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
      <div className="py-1 text-secondary text-pretty transition-transform duration-300 ease-out z-20 ">
        <span>{caption}</span>
      </div>
    </div>
  );
}
