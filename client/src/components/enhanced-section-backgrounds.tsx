import { RainingCodeBackground } from './raining-code-background';
import { LiveCodingBackground } from './live-coding-background';
import { CLITerminalBackground } from './cli-terminal-background';
import { NetworkVisualizationBackground } from './network-visualization-background';
import { ServerRoomBackground } from './server-room-background';

export function EnhancedSectionBackgrounds() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Hero Section Backgrounds */}
      <div className="bg-hero-raining absolute inset-0">
        <RainingCodeBackground intensity="high" theme="matrix" />
      </div>
      
      <div className="bg-hero-coding absolute inset-0 parallax-slow">
        <LiveCodingBackground />
      </div>

      {/* Services Section Background */}
      <div className="bg-services-cli absolute inset-0 opacity-30">
        <CLITerminalBackground />
      </div>

      {/* Charts Section Background */}
      <div className="bg-charts-network absolute inset-0 opacity-20">
        <NetworkVisualizationBackground />
      </div>

      {/* Technology Section Background */}
      <div className="bg-technology-servers absolute inset-0 opacity-20">
        <ServerRoomBackground />
      </div>

      {/* Global overlay effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/10 pointer-events-none" />
      
      {/* Ambient lighting effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse parallax-bg"
          style={{ animationDuration: '8s' }}
        />
        <div 
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse parallax-fast" 
          style={{ animationDuration: '12s', animationDelay: '4s' }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse parallax-slow"
          style={{ animationDuration: '10s', animationDelay: '2s' }}
        />
      </div>
    </div>
  );
}