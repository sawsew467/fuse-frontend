import React from 'react';

interface IconProps {
  color?: string;
  size?: number | string;
  width?: number | string;
  height?: number | string;
}

const CaretUp: React.FC<IconProps> = ({ color = 'currentColor', size, width = size, height = size }) => (
   <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={color}
    width={width}
    height={height}
    aria-hidden="true"
    className={`w-6 h-6 text-gray-800 dark:text-white`}
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 9h13a5 5 0 0 1 0 10H7M3 9l4-4M3 9l4 4"
    />
  </svg>
);

export default CaretUp;
