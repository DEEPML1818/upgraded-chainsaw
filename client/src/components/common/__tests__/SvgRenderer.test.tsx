import React from 'react';
import { render, screen } from '@testing-library/react';
import { SvgRenderer } from '../SvgRenderer';

// Mock SVG component
const MockSvgComponent = ({ className, width, height, 'aria-label': ariaLabel }: any) => (
  <svg className={className} width={width} height={height} aria-label={ariaLabel} data-testid="mock-svg">
    <circle cx="50" cy="50" r="40" />
  </svg>
);

describe('SvgRenderer', () => {
  it('renders SVG as React component when src is a function', () => {
    render(
      <SvgRenderer
        src={MockSvgComponent}
        alt="Test SVG"
        className="test-class"
        width="100"
        height="100"
        aria-label="Test SVG"
      />
    );

    const svgElement = screen.getByTestId('mock-svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveClass('test-class');
    expect(svgElement).toHaveAttribute('width', '100');
    expect(svgElement).toHaveAttribute('height', '100');
    expect(svgElement).toHaveAttribute('aria-label', 'Test SVG');
  });

  it('renders SVG as img tag when src is a string', () => {
    render(
      <SvgRenderer
        src="/path/to/test.svg"
        alt="Test SVG"
        className="test-class"
        width="100"
        height="100"
        aria-label="Test SVG"
      />
    );

    const imgElement = screen.getByRole('img');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', '/path/to/test.svg');
    expect(imgElement).toHaveAttribute('alt', 'Test SVG');
    expect(imgElement).toHaveAttribute('aria-label', 'Test SVG');
    expect(imgElement).toHaveClass('test-class');
    expect(imgElement).toHaveAttribute('width', '100');
    expect(imgElement).toHaveAttribute('height', '100');
  });

  it('uses default alt text when aria-label is not provided', () => {
    render(
      <SvgRenderer
        src="/path/to/test.svg"
        alt="Default alt text"
      />
    );

    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute('aria-label', 'Default alt text');
  });

  it('uses aria-label when provided instead of alt for accessibility', () => {
    render(
      <SvgRenderer
        src="/path/to/test.svg"
        alt="Alt text"
        aria-label="Aria label text"
      />
    );

    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute('aria-label', 'Aria label text');
    expect(imgElement).toHaveAttribute('alt', 'Alt text');
  });

  it('handles missing props gracefully', () => {
    render(<SvgRenderer src="/path/to/test.svg" />);

    const imgElement = screen.getByRole('img');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', '/path/to/test.svg');
    expect(imgElement).toHaveAttribute('role', 'img');
  });

  it('falls back to img tag when React component import fails', () => {
    // Mock console.error to avoid error logs in test
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    // Create a mock function that throws an error
    const failingComponent = () => {
      throw new Error('Component failed to render');
    };

    render(
      <SvgRenderer
        src={failingComponent}
        alt="Fallback test"
      />
    );

    const imgElement = screen.getByRole('img');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', '[object Object]'); // Failed component becomes string representation

    consoleSpy.mockRestore();
  });
});
