import React from 'react';
import { SolutionCardProps } from '../types';
import { ExpandableTopologyDiagram } from './ExpandableTopologyDiagram';

/**
 * SolutionCard component that displays business solution information
 * Uses Lucide React icons (not SVG files) - preserves original icon usage
 * Do not modify icon imports - only reference existing Lucide icons
 */
export const SolutionCard: React.FC<SolutionCardProps> = ({ 
  solution, 
  isActive, 
  onHover 
}) => {
  const IconComponent = solution.icon;

  return (
    <div
      className={`bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 transition-all duration-300 cursor-pointer ${
        isActive 
          ? 'border-blue-400/50 shadow-lg shadow-blue-500/20 scale-105' 
          : 'hover:border-slate-600/50 hover:shadow-lg hover:shadow-slate-500/10'
      }`}
      onMouseEnter={() => onHover(solution.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <IconComponent className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2">{solution.name}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{solution.description}</p>
        </div>
      </div>

      {/* Workflow Steps */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">
          Workflow Steps
        </h4>
        <div className="space-y-2">
          {solution.workflow.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <div key={step.id} className="flex items-center gap-3 text-sm">
                <div className="flex-shrink-0 w-6 h-6 bg-slate-700 rounded-full flex items-center justify-center">
                  <span className="text-xs text-gray-300">{index + 1}</span>
                </div>
                <StepIcon className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <div>
                  <span className="text-gray-200 font-medium">{step.label}</span>
                  <span className="text-gray-400 ml-2">- {step.description}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Topology Diagram */}
      {isActive && (
        <div className="mt-6 border-t border-slate-700/50 pt-6">
          <ExpandableTopologyDiagram solutionId={solution.id} />
        </div>
      )}
    </div>
  );
};
