export default function Pattern() {
  return (
    <svg
      width="100%"
      height="4"
      viewBox="0 0 320 4"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-border"
    >
      <defs>
        <pattern id="step" patternUnits="userSpaceOnUse" width="8" height="4">
          <path
            d="M0 3.5H3.5L3.5 0.5H7.5V4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        </pattern>
      </defs>

      <rect x="0" y="0" width="100%" height="4" fill="url(#step)" />
    </svg>
  );
}
