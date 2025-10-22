import { LucideIcon } from 'lucide-react';

export interface WorkflowStep {
  id: string;
  icon: LucideIcon;
  label: string;
  description: string;
}

export interface BusinessSolution {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  workflow: WorkflowStep[];
  category: 'general' | 'niche' | 'specialized';
}

export interface SolutionCardProps {
  solution: BusinessSolution;
  isActive: boolean;
  onHover: (solutionId: string | null) => void;
}

export interface ExpandableTopologyDiagramProps {
  solutionId: string;
}
