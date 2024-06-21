import React from 'react';
import PropTypes from 'prop-types';

interface IconProps {
  color?: string;
  size?: number | string;
  width?: number | string;
  height?: number | string;
  className?: string;
}

const CaretUp: React.FC<IconProps> = ({
  color = 'currentColor',
  size = '24', // Default size
  width = size,
  height = size,
  className = 'w-6 h-6 text-gray-800 dark:text-white',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={color}
    width={width}
    height={height}
    className={className}
    aria-hidden="true"
  >
    <path 
      fillRule="evenodd" 
      d="M5.575 13.729C4.501 15.033 5.43 17 7.12 17h9.762c1.69 0 2.618-1.967 1.544-3.271l-4.881-5.927a2 2 0 0 0-3.088 0l-4.88 5.927Z" 
      clipRule="evenodd"
    />
  </svg>
);

CaretUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
};

export default CaretUp;
