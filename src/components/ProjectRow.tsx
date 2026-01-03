import { Fragment } from "react";
import { cn } from "@/lib/utils";

interface ProjectRowProps {
  name: string;
  description: string;
  period?: string;
  href: string;
}

export default function ProjectRow({ name, description, period, href }: ProjectRowProps) {
  return (
    <a href={href} target="_blank" className="relative cursor-pointer">
      <div className="group z-10 h-9 absolute inset-0">
        <BaseRow
          name={name}
          description={description}
          period={period}
          className="bg-foreground h-9 text-background clipped group-hover:reveal-bottom-to-top"
        />
      </div>
      <BaseRow name={name} description={description} period={period} className="z-5 h-9" />
    </a>
  );
}

function BaseRow({
  name,
  description,
  className,
  period,
}: {
  name: string;
  description: string;
  className?: string;
  period?: string;
}) {
  return (
    <div
      className={cn(
        "relative grid grid-cols-[96px_1fr_80px] items-center gap-2 w-full border-b border-foreground/12",
        className,
      )}
    >
      <span>{name}</span>
      <span className="opacity-72">{description}</span>
      <span className="opacity-72">{period}</span>
    </div>
  );
}
