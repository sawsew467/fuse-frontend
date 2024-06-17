import * as React from "react";
import { SVGProps } from "react";
interface TimeLineProps extends SVGProps<SVGSVGElement> {
  variant?: "light" | "dark";
}
const TimeLine = ({ variant = "dark", ...props }: TimeLineProps) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  className="si-glyph si-glyph-line-two-angle-point"
  transform="rotate(90)"
  viewBox="0 -0.5 17 17"
  {...props}
>
  <title>{"974"}</title>
  <path
    fill="#434343"
    fillRule="evenodd"
    d="M7.938.938h1.084v1.125H7.938V.938Zm1.083 14.124H7.937v-1.125h.073v.011h.917v-.011h.094v1.125Zm.938-2.021H8.928V3h1.031V.041H7V3h1.011v10.041H7V16h2.959v-2.959Z"
    className="si-glyph-fill"
  />
</svg>
);
export default TimeLine;
