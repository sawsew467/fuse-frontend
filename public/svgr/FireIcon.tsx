import * as React from "react";
import { SVGProps } from "react";
const FireIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 95.05 113.63"
    {...props}
  >
    <defs>
      <linearGradient id="a">
        <stop offset={0} stopColor="#FFB426" />
        <stop offset={1} stopColor="#FD7A19" />
      </linearGradient>
      <linearGradient
        xlinkHref="#a"
        id="b"
        x1={37.47}
        x2={62.79}
        y1={9.1}
        y2={90.19}
        gradientUnits="userSpaceOnUse"
      />
    </defs>
    <g transform="translate(.28 -.13)">
      <path fill="#FFF" d="M-.28.13h95.05v113.63H-.28z" />
      <path
        fill="url(#b)"
        d="M76.12 66.56c0 15.63-13.23 28.31-29.54 28.31-16.3 0-29.73-12.68-29.53-28.31.28-21.7 21.5-33.27 22.1-50.09 10.79 2.2 36.97 24.8 36.97 50.09z"
      />
      <circle
        cx={46.58}
        cy={66.56}
        r={1}
        className="fill-white animate-flame"
      />
      <circle
        cx={46.58}
        cy={66.56}
        r={1}
        className="fill-white animate-flame ci2"
      />
      <circle
        cx={46.58}
        cy={66.56}
        r={1}
        className="fill-white animate-flame ci3"
      />
      <circle
        cx={46.58}
        cy={66.56}
        r={1}
        className="fill-white animate-flame ci4"
      />
    </g>
  </svg>
);
export default FireIcon;
