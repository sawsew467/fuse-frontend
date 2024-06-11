import { SVGProps } from "react";

interface ThreeDotProps extends SVGProps<SVGSVGElement> {
  variant?: "light" | "dark";
}

const ThreeDot = ({ variant = "dark", ...props }: ThreeDotProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 32 32"
    {...props}
  >
    <g
      fill={variant === "dark" ? "#0F0F0F" : "#fff"}
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
    >
      <circle cx={16} cy={16} r={2} />
      <circle cx={6} cy={16} r={2} />
      <circle cx={26} cy={16} r={2} />
    </g>
  </svg>
);
export default ThreeDot;
