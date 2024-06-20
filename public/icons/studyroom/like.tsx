import React from 'react';
import PropTypes from 'prop-types';

interface IconProps {
  color?: string;
  size?: number | string;
  width?: number | string;
  height?: number | string;
  className?: string;
}

const LikeIcon: React.FC<IconProps> = ({
  color = '#000000', // Default color as specified in the SVG
  size = '24', // Default size
  width = size,
  height = size,
  className = '',
}) => (
  <svg
    fill={color}
    width={width}
    height={height}
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M2.5,209.1C1,221.1,0,233.3,0,245.7c0,109,59.7,203.9,148.1,254.2l16.5-34.8V227.4l-18.3-18.3H2.5z M512,227.4
      c0-18.3-18.3-36.6-36.6-36.6H329.1c9.1-36.6,18.3-73.1,18.3-91.4c0-36.6-18.3-73.1-27.4-82.3c-0.2-0.2-9.1-9.1-27.4-9.1
      c-27.4,0-27.4,27.4-27.4,27.4c0,0.5-9.1,45.7-9.1,64s-36.6,91.4-54.9,109.7l-18.3,9.1v256l18.3,9.1h201.1
      c36.6,0,54.9-18.3,54.9-36.6s-18.3-36.6-36.6-36.6c36.6,0,54.9-18.3,54.9-36.6c0-18.3-18.3-36.6-36.6-36.6
      c36.6,0,54.9-18.3,54.9-36.6c0-18.3-18.3-36.6-36.6-36.6C493.7,264,512,245.7,512,227.4z"/>
  </svg>
);

LikeIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
};

export default LikeIcon;
