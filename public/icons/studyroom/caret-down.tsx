import React from 'react';

interface IconProps {
  color?: string;
  size?: number | string;
  width?: number | string;
  height?: number | string;
}

const CaretDown: React.FC<IconProps> = ({ color = 'currentColor', size, width = size, height = size }) => (
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
      d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z"
      clipRule="evenodd"
    />
  </svg>
);

export default CaretDown;
