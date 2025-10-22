import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { SolutionCard } from '../SolutionCard';
import { BusinessSolution } from '../../types';
import { Cloud, Users } from 'lucide-react';

// Mock the ExpandableTopologyDiagram component
jest.mock('../ExpandableTopologyDiagram', () => ({
  ExpandableTopologyDiagram: ({ solutionId }: { solutionId: string }) => (
    <div data-testid="topology-diagram" data-solution-id={solutionId}>
      Topology diagram for {solutionId}
    </div>
  ),
}));

describe('SolutionCard', () => {
  const mockSolution: BusinessSolution = {
    id: 'test-solution',
    name: 'Test Solution',
    icon: Cloud,
    description: 'Test description for the solution',
    category: 'general',
    workflow: [
      {
        id: 'step-1',
        icon: Users,
        label: 'Step 1',
        description: 'First step description',
      },
      {
        id: 'step-2',
        icon: Cloud,
        label: 'Step 2',
        description: 'Second step description',
      },
    ],
  };

  const mockOnHover = jest.fn();

  beforeEach(() => {
    mockOnHover.mockClear();
  });

  it('renders solution information correctly', () => {
    render(
      <SolutionCard
        solution={mockSolution}
        isActive={false}
        onHover={mockOnHover}
      />
    );

    expect(screen.getByText('Test Solution')).toBeInTheDocument();
    expect(screen.getByText('Test description for the solution')).toBeInTheDocument();
    expect(screen.getByText('Step 1')).toBeInTheDocument();
    expect(screen.getByText('Step 2')).toBeInTheDocument();
  });

  it('calls onHover when mouse enters the card', () => {
    render(
      <SolutionCard
        solution={mockSolution}
        isActive={false}
        onHover={mockOnHover}
      />
    );

    const card = screen.getByText('Test Solution').closest('div');
    fireEvent.mouseEnter(card!);

    expect(mockOnHover).toHaveBeenCalledWith('test-solution');
  });

  it('calls onHover with null when mouse leaves the card', () => {
    render(
      <SolutionCard
        solution={mockSolution}
        isActive={false}
        onHover={mockOnHover}
      />
    );

    const card = screen.getByText('Test Solution').closest('div');
    fireEvent.mouseLeave(card!);

    expect(mockOnHover).toHaveBeenCalledWith(null);
  });

  it('renders topology diagram when card is active', () => {
    render(
      <SolutionCard
        solution={mockSolution}
        isActive={true}
        onHover={mockOnHover}
      />
    );

    expect(screen.getByTestId('topology-diagram')).toBeInTheDocument();
    expect(screen.getByTestId('topology-diagram')).toHaveAttribute('data-solution-id', 'test-solution');
  });

  it('does not render topology diagram when card is inactive', () => {
    render(
      <SolutionCard
        solution={mockSolution}
        isActive={false}
        onHover={mockOnHover}
      />
    );

    expect(screen.queryByTestId('topology-diagram')).not.toBeInTheDocument();
  });

  it('applies active styling when isActive is true', () => {
    render(
      <SolutionCard
        solution={mockSolution}
        isActive={true}
        onHover={mockOnHover}
      />
    );

    const card = screen.getByText('Test Solution').closest('div');
    expect(card).toHaveClass('border-blue-400/50', 'shadow-lg', 'shadow-blue-500/20', 'scale-105');
  });

  it('renders workflow steps with correct numbering', () => {
    render(
      <SolutionCard
        solution={mockSolution}
        isActive={false}
        onHover={mockOnHover}
      />
    );

    // Check that step numbers are rendered
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });
});
