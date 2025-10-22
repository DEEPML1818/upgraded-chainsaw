import React from 'react';

interface SvgRendererProps {
  src: string;
  alt?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  role?: string;
  'aria-label'?: string;
}

/**
 * SvgRenderer component that handles SVG imports safely
 * Supports both React component imports and URL imports
 * Never modifies or reads SVG file contents
 */
export const SvgRenderer: React.FC<SvgRendererProps> = ({
  src,
  alt = '',
  className = '',
  width,
  height,
  role = 'img',
  'aria-label': ariaLabel,
}) => {
  // Try to render as React component first, fallback to img tag
  try {
    // If src is a React component (imported with ?react)
    if (typeof src === 'function' || (typeof src === 'object' && src.$$typeof)) {
      const SvgComponent = src as React.ComponentType<React.SVGProps<SVGSVGElement>>;
      return (
        <SvgComponent
          className={className}
          width={width}
          height={height}
          role={role}
          aria-label={ariaLabel || alt}
        />
      );
    }
  } catch (error) {
    // Fallback to img tag if React component import fails
  }

  // Render as img tag for URL imports or when React component fails
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      role={role}
      aria-label={ariaLabel || alt}
    />
  );
};
