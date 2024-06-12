import * as React from "react";
import { SVGProps } from "react";
interface JoinRoomProps extends SVGProps<SVGSVGElement> {
  variant?: "light" | "dark";
}
const JoinRoom = ({ variant = "dark", ...props }: JoinRoomProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 96 96"
    {...props}
  >
    <title />
    <path
      fill={variant === "dark" ? "#0F0F0F" : "#fff"}
      d="M43.758 61.758a6 6 0 1 0 8.484 8.484l18-18a5.998 5.998 0 0 0 0-8.484l-18-18a6 6 0 0 0-8.484 8.484L51.516 42H6a6 6 0 0 0 0 12h45.516Z"
    />
    <path
      fill={variant === "dark" ? "#0F0F0F" : "#fff"}
      d="M90 0H30a5.997 5.997 0 0 0-6 6v12a6 6 0 0 0 12 0v-6h48v72H36v-6a6 6 0 0 0-12 0v12a5.997 5.997 0 0 0 6 6h60a5.997 5.997 0 0 0 6-6V6a5.997 5.997 0 0 0-6-6Z"
    />
  </svg>
);
export default JoinRoom;
