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
    className="w-6 h-6 text-gray-800 dark:text-white"
  >
    <path
      fillRule="evenodd"
      d="M5.575 13.729C4.501 15.033 5.43 17 7.12 17h9.762c1.69 0 2.618-1.967 1.544-3.271l-4.881-5.927a2 2 0 0 0-3.088 0l-4.88 5.927Z"
      clipRule="evenodd"
    />
  </svg>
);

export default CaretUp;
