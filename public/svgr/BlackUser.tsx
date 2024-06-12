import * as React from "react";
import { SVGProps } from "react";
interface BlackUserProps extends SVGProps<SVGSVGElement> {
  variant?: "light" | "dark";
}
const BlackUser = ({ variant = "dark", ...props }: BlackUserProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={variant === "dark" ? "#0F0F0F" : "#fff"}
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 19v-1a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1m0-8a3 3 0 1 0 0-6m6 14v-1a4 4 0 0 0-4-4h-.5M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
);
export default BlackUser;
