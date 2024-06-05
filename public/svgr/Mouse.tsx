import * as React from "react";
const SvgComponent = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={79}
    height={83}
    fill="none"
    {...props}
  >
    <path
      fill="#444"
      d="M32.398 35.852c-.442-2.038 1.65-3.696 3.533-2.797l40.367 19.257c2.176 1.038 1.779 4.248-.585 4.725L56.558 60.9a2.51 2.51 0 0 0-1.785 1.413l-8.152 17.76c-1.005 2.191-4.221 1.842-4.733-.514l-9.49-43.707Z"
    />
    <path
      fill="#F96"
      stroke="#444"
      strokeWidth={2}
      d="M25.398 27.56c-.442-2.038 1.65-3.695 3.533-2.797l40.367 19.258c2.176 1.038 1.779 4.248-.585 4.725l-19.155 3.863a2.51 2.51 0 0 0-1.785 1.413l-8.152 17.76c-1.005 2.19-4.221 1.841-4.733-.515l-9.49-43.706Z"
    />
    <path
      stroke="#444"
      strokeLinecap="round"
      strokeWidth={2}
      d="m31.292 14.776 3.485-13.067M14.524 28H1M17.87 15.427 9.53 4.781"
    />
  </svg>
);
export default SvgComponent;
