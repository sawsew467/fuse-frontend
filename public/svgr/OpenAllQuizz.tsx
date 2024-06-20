import * as React from "react";
import { SVGProps } from "react";
interface OpenAllQuizzProps extends SVGProps<SVGSVGElement> {
  variant?: "light" | "dark";
}
const OpenAllQuizz = ({ variant = "dark", ...props }: OpenAllQuizzProps) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlSpace="preserve"
  viewBox="0 0 32 32"
  {...props}
>
  <path
    d="M19.324 2h1.414L18 4.738V3.324L19.324 2zm-6.586 0h-1.414L2 11.324v1.414L12.738 2zm-1.414 12h1.414L14 12.738v-1.414L11.324 14zm-4 0h1.414L14 8.738V7.324L7.324 14zm16-12L18 7.324v1.414L24.738 2h-1.414zM14 4.738V3.324L3.324 14h1.414L14 4.738zM8.738 2H7.324L2 7.324v1.414L8.738 2zm10.586 28h1.414L30 20.738v-1.414L19.324 30zm8 0h1.414L30 28.738v-1.414L27.324 30zm-4 0h1.414L30 24.738v-1.414L23.324 30zM18 27.324v1.414L28.738 18h-1.414L18 27.324zM4.738 2H3.324L2 3.324v1.414L4.738 2zM14 20.738v-1.414L3.324 30h1.414L14 20.738zM23.324 14h1.414L30 8.738V7.324L23.324 14zm4 0h1.414L30 12.738v-1.414L27.324 14zM14 28.738v-1.414L11.324 30h1.414L14 28.738zM19.324 14h1.414L30 4.738V3.324L19.324 14zM4.738 18H3.324L2 19.324v1.414L4.738 18zM18 11.324v1.414L28.738 2h-1.414L18 11.324zM12.738 18h-1.414L2 27.324v1.414L12.738 18zm-4 0H7.324L2 23.324v1.414L8.738 18zM18 19.324v1.414L20.738 18h-1.414L18 19.324zm-4 5.414v-1.414L7.324 30h1.414L14 24.738zM24.738 18h-1.414L18 23.324v1.414L24.738 18z"
    style={{
      fill: "#65cca0",
    }}
  />
  <path
    d="M14 14H2V2h12v12zM2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm28 13H18V2h12v12zM18 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H18zm-4 29H2V18h12v12zM2 17a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V18a1 1 0 0 0-1-1H2zm28 13H18V18h12v12zM18 17a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V18a1 1 0 0 0-1-1H18z"
    style={{
      fill: "#000",
    }}
  />
</svg>
);
export default OpenAllQuizz;
