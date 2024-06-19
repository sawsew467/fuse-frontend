import React from 'react';
import PropTypes from 'prop-types';

interface IconProps {
  color?: string;
  size?: number | string;
  width?: number | string;
  height?: number | string;
  className?: string;
}

const MicOffIcon: React.FC<IconProps> = ({
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
    <path d="m15.506 14.097.994.995A3.989 3.989 0 0 0 17.975 12V9.011a.996.996 0 0 1 1.992 0v2.99a5.981 5.981 0 0 1-2.054 4.503l1.762 1.762a.996.996 0 1 1-1.408 1.408L4.325 5.733a.996.996 0 0 1 1.408-1.408L7.04 5.632a3.984 3.984 0 0 1 3.964-3.59h1.992c2.2 0 3.983 1.783 3.983 3.983v4.98a3.975 3.975 0 0 1-1.473 3.092ZM4.033 10.008a.996.996 0 1 1 1.992 0V12a3.99 3.99 0 0 0 3.984 3.984H12c.55 0 .996.446.996.996v2.988h1.992a.996.996 0 0 1 0 1.992H9.012a.996.996 0 0 1 0-1.992h1.992v-1.992h-.997a5.981 5.981 0 0 1-5.974-5.974v-1.993Z"/>
  </svg>
);

MicOffIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
};

export default MicOffIcon;
