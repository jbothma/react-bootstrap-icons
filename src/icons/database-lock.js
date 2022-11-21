import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const DatabaseLock = forwardRef(({
  color, size, title, ...rest
}, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
      {...rest}
    >
      {title ? <title>{title}</title> : null}

      <path d="M13 5.698a4.92 4.92 0 0 1-.904.525C11.022 6.711 9.573 7 8 7s-3.022-.289-4.096-.777A4.92 4.92 0 0 1 3 5.698V7c0 .374.356.875 1.318 1.313C5.234 8.729 6.536 9 8 9c.666 0 1.298-.056 1.876-.156-.43.31-.804.693-1.102 1.132A12.31 12.31 0 0 1 8 10c-1.573 0-3.022-.289-4.096-.777A4.92 4.92 0 0 1 3 8.698V10c0 .374.356.875 1.318 1.313C5.234 11.729 6.536 12 8 12h.027a4.548 4.548 0 0 0-.017.8A1.9 1.9 0 0 0 8 13c-1.573 0-3.022-.289-4.096-.777A4.916 4.916 0 0 1 3 11.698V13c0 .374.356.875 1.318 1.313C5.234 14.729 6.536 15 8 15c0 .363.097.704.266.997C8.178 16 8.089 16 8 16c-1.573 0-3.022-.289-4.096-.777C2.875 14.755 2 14.007 2 13V4c0-1.007.875-1.755 1.904-2.223C4.978 1.289 6.427 1 8 1s3.022.289 4.096.777C13.125 2.245 14 2.993 14 4v4.256a4.493 4.493 0 0 0-1.753-.249C12.787 7.654 13 7.289 13 7V5.698Zm-8.682-3.01C3.356 3.124 3 3.625 3 4c0 .374.356.875 1.318 1.313C5.234 5.729 6.536 6 8 6s2.766-.27 3.682-.687C12.644 4.875 13 4.373 13 4c0-.374-.356-.875-1.318-1.313C10.766 2.271 9.464 2 8 2s-2.766.27-3.682.687Z" />
      <path d="M9 13a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2Zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1Z" />
    </svg>
  );
});

DatabaseLock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string,
};

DatabaseLock.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null,
};

export default DatabaseLock;
