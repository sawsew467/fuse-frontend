import * as React from "react";
import { SVGProps } from "react";
interface ChartProps extends SVGProps<SVGSVGElement> {
  variant?: "light" | "dark";
}
const Chart = ({ variant = "dark", ...props }: ChartProps) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 64 64"
    {...props}
  >
    <path
      fill="#F9EBB2"
      d="M62 60a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h56a2 2 0 0 1 2 2v56z"
    />
    <g fill="#394240">
      <path d="M60 0H4C1.789 0 0 1.789 0 4v56c0 2.211 1.789 4 4 4h56c2.211 0 4-1.789 4-4V4c0-2.211-1.789-4-4-4zm2 60a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h56a2 2 0 0 1 2 2v56z" />
      <path d="M35 8h-6a1 1 0 0 0-1 1v47h8V9a1 1 0 0 0-1-1zm-1 46h-4V40h4v14zm0-16h-4V10h4v28zM25 16h-6a1 1 0 0 0-1 1v39h8V17a1 1 0 0 0-1-1zm-1 38h-4V44h4v10zm0-12h-4V18h4v24zM55 24h-6a1 1 0 0 0-1 1v31h8V25a1 1 0 0 0-1-1zm-1 30h-4V44h4v10zm0-12h-4V26h4v16zM45 32h-6a1 1 0 0 0-1 1v23h8V33a1 1 0 0 0-1-1zm-1 22h-4v-6h4v6zm0-8h-4V34h4v12zM15 24H9a1 1 0 0 0-1 1v31h8V25a1 1 0 0 0-1-1zm-1 30h-4v-6h4v6zm0-8h-4V26h4v20z" />
    </g>
    <path fill="#B4CCB9" d="M10 26h4v20h-4z" />
    <path fill="#45AAB8" d="M20 18h4v24h-4z" />
    <path fill="#F76D57" d="M40 34h4v12h-4z" />
    <path fill="#45AAB8" d="M30 40h4v14h-4z" />
    <path fill="#B4CCB9" d="M50 26h4v16h-4z" />
    <path fill="#45AAB8" d="M30 10h4v28h-4z" />
    <path fill="#B4CCB9" d="M10 48h4v6h-4z" />
    <path fill="#F76D57" d="M40 48h4v6h-4z" />
    <path fill="#B4CCB9" d="M50 44h4v10h-4z" />
    <path fill="#45AAB8" d="M20 44h4v10h-4z" />
    <g opacity={0.2}>
      <path d="M30 40h4v14h-4zM10 48h4v6h-4zM40 48h4v6h-4zM50 44h4v10h-4zM20 44h4v10h-4z" />
    </g>
  </svg>
);
export default Chart;
