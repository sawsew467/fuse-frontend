import { SVGProps } from "react";

interface PinProps extends SVGProps<SVGSVGElement> {
  variant?: "on" | "off";
}

const Pin = ({ variant = "off", ...props }: PinProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-1.6 -1.6 19.2 19.2"
    {...props}
  >
    <path
      d="M10 3.72 12.28 6l-.43.43-2.12 2.1-.41.41v2.83l-2.05-2-1-1-2-2h2.79l.41-.41 2.12-2.21.41-.43M9.31 1 7.89 2.45l.71.71-2.12 2.12H3.65L2.24 6.69l3 3L1 14l1 1 4.24-4.25 3 3 1.41-1.41V9.52l2.19-2.12.71.71L15 6.69 9.31 1Z"
    />
  </svg>
);
export default Pin;
