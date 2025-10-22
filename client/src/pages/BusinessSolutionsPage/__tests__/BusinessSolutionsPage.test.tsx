import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BusinessSolutionsPage from '../index';

// Mock the hooks
jest.mock('@/hooks/use-gsap-init', () => ({
  useGSAPInit: () => {},
}));

jest.mock('@/hooks/use-gsap-animations', () => ({
  useGSAPAnimations: () => {},
}));

jest.mock('@/hooks/use-gsap-scroll-smoother', () => ({
  useGSAPScrollSmoother: () => {},
}));

// Mock the Navigation and Footer components
jest.mock('@/components/navigation', () => ({
  Navigation: () => <div data-testid="navigation">Navigation</div>,
}));

jest.mock('@/components/footer', () => ({
  Footer: () => <div data-testid="footer">Footer</div>,
}));

// Mock the SolutionCard component
jest.mock('../components/SolutionCard', () => ({
  SolutionCard: ({ solution, isActive, onHover }: any) => (
    <div
      data-testid={`solution-card-${solution.id}`}
      data-active={isActive}
      onMouseEnter={() => onHover(solution.id)}
      onMouseLeave={() => onHover(null)}
    >
      <h3>{solution.name}</h3>
      <p>{solution.description}</p>
      {isActive && <div data-testid={`topology-${solution.id}`}>Topology diagram</div>}
    </div>
  ),
}));

describe('BusinessSolutionsPage Integration', () => {
  it('renders the main page structure', () => {
    render(<BusinessSolutionsPage />);

    expect(screen.getByTestId('navigation')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByText('Business Solutions')).toBeInTheDocument();
    expect(screen.getByText(/Interactive workflow diagrams/)).toBeInTheDocument();
  });

  it('renders all solution sections', () => {
    render(<BusinessSolutionsPage />);

    expect(screen.getByText('General Business Solutions')).toBeInTheDocument();
    expect(screen.getByText('Niche Business Solutions')).toBeInTheDocument();
    expect(screen.getByText('Specialized Solutions')).toBeInTheDocument();
  });

  it('renders solution cards for each category', () => {
    render(<BusinessSolutionsPage />);

    // Check for general solutions
    expect(screen.getByTestId('solution-card-custom-saas')).toBeInTheDocument();
    expect(screen.getByTestId('solution-card-enterprise-portals')).toBeInTheDocument();
    expect(screen.getByTestId('solution-card-compliance-reporting')).toBeInTheDocument();

    // Check for niche solutions
    expect(screen.getByTestId('solution-card-defi-launch')).toBeInTheDocument();
    expect(screen.getByTestId('solution-card-ai-automation')).toBeInTheDocument();
    expect(screen.getByTestId('solution-card-iot-platform')).toBeInTheDocument();

    // Check for specialized solutions
    expect(screen.getByTestId('solution-card-pen-test-toolkits')).toBeInTheDocument();
    expect(screen.getByTestId('solution-card-crypto-mining')).toBeInTheDocument();
    expect(screen.getByTestId('solution-card-research-lab')).toBeInTheDocument();
  });

  it('shows topology diagrams when hovering over solution cards', () => {
    render(<BusinessSolutionsPage />);

    const customSaasCard = screen.getByTestId('solution-card-custom-saas');
    
    // Initially no topology should be visible
    expect(screen.queryByTestId('topology-custom-saas')).not.toBeInTheDocument();

    // Hover over the card
    fireEvent.mouseEnter(customSaasCard);

    // Topology should now be visible
    expect(screen.getByTestId('topology-custom-saas')).toBeInTheDocument();

    // Mouse leave should hide the topology
    fireEvent.mouseLeave(customSaasCard);
    expect(screen.queryByTestId('topology-custom-saas')).not.toBeInTheDocument();
  });

  it('only shows one topology diagram at a time', () => {
    render(<BusinessSolutionsPage />);

    const customSaasCard = screen.getByTestId('solution-card-custom-saas');
    const enterprisePortalsCard = screen.getByTestId('solution-card-enterprise-portals');

    // Hover over first card
    fireEvent.mouseEnter(customSaasCard);
    expect(screen.getByTestId('topology-custom-saas')).toBeInTheDocument();
    expect(screen.queryByTestId('topology-enterprise-portals')).not.toBeInTheDocument();

    // Hover over second card
    fireEvent.mouseEnter(enterprisePortalsCard);
    expect(screen.queryByTestId('topology-custom-saas')).not.toBeInTheDocument();
    expect(screen.getByTestId('topology-enterprise-portals')).toBeInTheDocument();
  });

  it('renders solution information correctly', () => {
    render(<BusinessSolutionsPage />);

    // Check that solution names and descriptions are rendered
    expect(screen.getByText('Custom SaaS Platforms')).toBeInTheDocument();
    expect(screen.getByText(/Isolated VPCs per tenant/)).toBeInTheDocument();

    expect(screen.getByText('Enterprise Portals')).toBeInTheDocument();
    expect(screen.getByText(/Central hub/)).toBeInTheDocument();

    expect(screen.getByText('Secure DeFi Launch Pack')).toBeInTheDocument();
    expect(screen.getByText(/Multi-cloud active-active/)).toBeInTheDocument();
  });

  it('has proper accessibility structure', () => {
    render(<BusinessSolutionsPage />);

    // Check for proper heading hierarchy
    expect(screen.getByRole('heading', { level: 1, name: /Business Solutions/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'General Business Solutions' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Niche Business Solutions' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Specialized Solutions' })).toBeInTheDocument();
  });

  it('applies correct CSS classes for styling', () => {
    render(<BusinessSolutionsPage />);

    const wrapper = screen.getByTestId('navigation').closest('div');
    expect(wrapper).toHaveClass('min-h-screen', 'bg-slate-950');

    const main = screen.getByRole('main');
    expect(main).toHaveClass('pt-20');
  });
});
