export default function Caret({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="6"
      fill="none"
      viewBox="0 0 12 12"
      className={className}
    >
      <g clipPath="url(#a)">
        <path fill="currentColor" d="m11 6-9.75 5.196V.804L11 6Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="currentColor" d="M0 0h12v12H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
