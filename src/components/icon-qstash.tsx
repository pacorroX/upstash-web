import React, { SVGProps } from "react";

import colors from "tailwindcss/colors";

export default function IconQStash({
  width = 36,
  ...props
}: SVGProps<SVGSVGElement>) {
  const height = props.height || width;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Upstash QStash"
      {...props}
    >
      <g clipPath="url(#logo-qstash)">
        <path
          d="M24.8889 0H7.11111C3.18375 0 0 3.18375 0 7.11111V24.8889C0 28.8162 3.18375 32 7.11111 32H24.8889C28.8162 32 32 28.8162 32 24.8889V7.11111C32 3.18375 28.8162 0 24.8889 0Z"
          fill={colors.purple["600"]}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.4 5.06667C14.4 4.23211 15.0765 3.55556 15.9111 3.55556C16.7457 3.55556 17.4222 4.23211 17.4222 5.06667V12.4444L22.6648 7.20185C23.2549 6.61172 24.2117 6.61172 24.8019 7.20185C25.392 7.79197 25.392 8.74875 24.8019 9.33884L19.5629 14.5778H26.9333C27.7679 14.5778 28.4444 15.2543 28.4444 16.0889C28.4444 16.9235 27.7679 17.6 26.9333 17.6H19.4893L24.801 22.9116C25.3564 23.467 25.3564 24.3676 24.801 24.9229C24.2455 25.4784 23.3451 25.4784 22.7896 24.9229L17.4222 19.5556V27.0222C17.4222 27.8568 16.7457 28.5333 15.9111 28.5333C15.0765 28.5333 14.4 27.8568 14.4 27.0222V19.7407L9.27689 24.8638C8.6868 25.454 7.73002 25.454 7.13989 24.8638C6.54977 24.2737 6.54977 23.3169 7.13989 22.7268L12.2667 17.6H4.97778C4.14322 17.6 3.46667 16.9235 3.46667 16.0889C3.46667 15.2543 4.14322 14.5778 4.97778 14.5778H12.4444L7.139 9.27236C6.58358 8.71692 6.58358 7.81642 7.139 7.261C7.69441 6.70559 8.59491 6.70559 9.15031 7.261L14.4 12.5107V5.06667Z"
          fill={colors.purple["100"]}
        />
      </g>
      <defs>
        <clipPath id="logo-qstash">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}