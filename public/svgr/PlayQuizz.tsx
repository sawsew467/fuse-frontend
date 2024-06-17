import * as React from "react";
import { SVGProps } from "react";
interface PlayQuizzProps extends SVGProps<SVGSVGElement> {
  variant?: "light" | "dark";
}
const PlayQuizz = ({ variant = "dark", ...props }: PlayQuizzProps) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      d="m18.157 12.714.905.509L8 24.285v-1.414l10.157-10.157zm-5.88 9.88 3.232-1.818 6.114-6.114-.905-.509-8.441 8.441zM24 16l-.723-.406-1.858 1.858L24 16zM8 14.871v1.414l5.942-5.942-.905-.509L8 14.871zm0-6.586.822-.822L8 7v1.285zm0 10.586v1.414l8.502-8.502-.905-.509L8 18.871zm0-8v1.414l3.382-3.382-.905-.509L8 10.871z"
      style={{
        fill: "#65cca0",
      }}
    />
    <path
      d="M24 16 8 25V7l16 9zM7.495 6.137A.962.962 0 0 0 7 7v18a.999.999 0 0 0 1.49.872l16-9a1.002 1.002 0 0 0 0-1.744l-16-9C8.338 6.043 8.18 6 8 6s-.349.046-.505.137z"
      style={{
        fill: "#000",
      }}
    />
  </svg>
);
export default PlayQuizz;
