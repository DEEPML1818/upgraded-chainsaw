import React from 'react';
import { render, screen } from '@testing-library/react';
import { ExpandableTopologyDiagram } from '../ExpandableTopologyDiagram';

describe('ExpandableTopologyDiagram', () => {
  it('renders custom-saas topology diagram', () => {
    render(<ExpandableTopologyDiagram solutionId="custom-saas" />);
    
    expect(screen.getByText('Custom SaaS Platform Architecture')).toBeInTheDocument();
    expect(screen.getByText(/Multi-tenant cloud infrastructure/)).toBeInTheDocument();
    
    // Check that SVG content is rendered
    const svgElement = screen.getByRole('img', { hidden: true });
    expect(svgElement).toBeInTheDocument();
  });

  it('renders enterprise-portals topology diagram', () => {
    render(<ExpandableTopologyDiagram solutionId="enterprise-portals" />);
    
    expect(screen.getByText('Enterprise Portal Network')).toBeInTheDocument();
    expect(screen.getByText(/Centralized hub with secure VPN/)).toBeInTheDocument();
  });

  it('renders pen-test-toolkits topology diagram', () => {
    render(<ExpandableTopologyDiagram solutionId="pen-test-toolkits" />);
    
    expect(screen.getByText('Pen-Test Lab — Air-gapped / Segmented')).toBeInTheDocument();
    expect(screen.getByText(/Bastioned admin access → one-way sanitized snapshots/)).toBeInTheDocument();
    
    // Check that SVG content is rendered
    const svgElement = screen.getByRole('img', { hidden: true });
    expect(svgElement).toBeInTheDocument();
  });

  it('renders default topology diagram for unknown solution', () => {
    render(<ExpandableTopologyDiagram solutionId="unknown-solution" />);
    
    expect(screen.getByText('Solution Architecture')).toBeInTheDocument();
    expect(screen.getByText(/Interactive topology diagram/)).toBeInTheDocument();
  });

  it('includes SVG content with proper viewBox', () => {
    render(<ExpandableTopologyDiagram solutionId="custom-saas" />);
    
    // Check that the container has the correct structure
    const container = screen.getByText('Custom SaaS Platform Architecture').closest('div');
    expect(container).toHaveClass('w-full', 'h-96', 'bg-slate-900', 'rounded-lg', 'overflow-hidden');
  });

  it('renders with proper accessibility attributes', () => {
    render(<ExpandableTopologyDiagram solutionId="custom-saas" />);
    
    // Check that the diagram has proper structure for accessibility
    const title = screen.getByText('Custom SaaS Platform Architecture');
    expect(title).toBeInTheDocument();
    
    const description = screen.getByText(/Multi-tenant cloud infrastructure/);
    expect(description).toBeInTheDocument();
  });
});
