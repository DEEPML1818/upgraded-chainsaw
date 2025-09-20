import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { useGSAPInit } from '@/hooks/use-gsap-init';
import { useGSAPAnimations } from '@/hooks/use-gsap-animations';
import { useGSAPScrollSmoother } from '@/hooks/use-gsap-scroll-smoother';
import { 
  Cloud, 
  Key, 
  FileText, 
  Headphones, 
  BookOpen, 
  Wrench,
  Rocket,
  Ticket,
  TrendingUp,
  Search,
  AlertTriangle,
  Building,
  Shield,
  Eye,
  Bot,
  Globe,
  Target,
  Calculator,
  ShoppingCart,
  Folder,
  CloudSnow,
  Antenna,
  Cpu,
  Lock,
  HardDrive,
  BarChart3,
  GraduationCap,
  Users,
  Grid,
  Monitor,
  Database,
  CheckCircle,
  Settings,
  Repeat,
  Bell,
  Share,
  ArrowLeftRight,
  ArrowRight,
  Network
} from 'lucide-react';
import { useState, useEffect } from 'react';

interface WorkflowStep {
  id: string;
  icon: any;
  label: string;
  description: string;
}

interface BusinessSolution {
  id: string;
  name: string;
  icon: any;
  description: string;
  workflow: WorkflowStep[];
  category: 'general' | 'niche' | 'specialized';
}

const TopologyDiagram = ({ solutionId }: { solutionId: string }) => {
  const renderTopology = () => {
    switch (solutionId) {
      case 'custom-saas':
        return (
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            minHeight: '100vh',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div style={{
              color: 'white',
              fontSize: '32px',
              fontWeight: '700',
              marginBottom: '30px',
              textAlign: 'center',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              animation: 'titleGlow 3s ease-in-out infinite alternate'
            }}>
              Multi-tenant VPC + Service Mesh Network Topology
            </div>
            
            <div style={{
              width: '95vw',
              height: '90vh',
              position: 'relative',
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '20px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
              backdropFilter: 'blur(10px)',
              overflow: 'hidden'
            }}>
              {/* Network Zones */}
              <div style={{
                position: 'absolute',
                top: '2vh',
                left: '2vw',
                width: '18vw',
                height: '12vh',
                background: 'linear-gradient(135deg, rgba(255,193,7,0.1), rgba(255,152,0,0.1))',
                border: '2px dashed #ff9800',
                borderRadius: '15px',
                backdropFilter: 'blur(5px)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '15px',
                  background: 'white',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                  color: '#ff9800'
                }}>
                  INTERNET
                </div>
              </div>

              <div style={{
                position: 'absolute',
                top: '16vh',
                left: '2vw',
                width: '30vw',
                height: '25vh',
                background: 'linear-gradient(135deg, rgba(63,81,181,0.1), rgba(57,73,171,0.1))',
                border: '2px dashed #3f51b5',
                borderRadius: '15px',
                backdropFilter: 'blur(5px)'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '15px',
                  background: 'white',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  color: '#3f51b5'
                }}>
                  SERVICE MESH
                </div>
              </div>

              <div style={{
                position: 'absolute',
                top: '16vh',
                right: '2vw',
                width: '25vw',
                height: '25vh',
                background: 'linear-gradient(135deg, rgba(0,150,136,0.1), rgba(0,121,107,0.1))',
                border: '2px dashed #009688',
                borderRadius: '15px',
                backdropFilter: 'blur(5px)'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '15px',
                  background: 'white',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  color: '#009688'
                }}>
                  TENANT ISOLATION
                </div>
              </div>

              <div style={{
                position: 'absolute',
                top: '45vh',
                left: '2vw',
                width: '50vw',
                height: '18vh',
                background: 'linear-gradient(135deg, rgba(96,125,139,0.1), rgba(84,110,122,0.1))',
                border: '2px dashed #607d8b',
                borderRadius: '15px',
                backdropFilter: 'blur(5px)'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '15px',
                  background: 'white',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  color: '#607d8b'
                }}>
                  DATA LAYER
                </div>
              </div>

              {/* Network Components */}
              <div style={{
                position: 'absolute',
                width: '6vw',
                height: '8vh',
                top: '5vh',
                left: '8vw',
                background: 'white',
                border: '3px solid #e67e22',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '600',
                fontSize: '11px',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                boxShadow: '0 5px 25px rgba(0,0,0,0.1)'
              }}>
                <div style={{ fontSize: '24px', marginBottom: '5px', animation: 'iconBounce 2s ease-in-out infinite' }}>🌐</div>
                <div>Internet</div>
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#4caf50',
                  boxShadow: '0 0 10px #4caf50',
                  animation: 'statusPulse 2s ease-in-out infinite'
                }}></div>
              </div>

              <div style={{
                position: 'absolute',
                width: '7vw',
                height: '8vh',
                top: '19vh',
                left: '4vw',
                background: 'white',
                border: '3px solid #3f51b5',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '600',
                fontSize: '11px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '24px', marginBottom: '5px', animation: 'iconBounce 2s ease-in-out infinite' }}>🔄</div>
                <div>Service Mesh</div>
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#4caf50',
                  animation: 'statusPulse 2s ease-in-out infinite'
                }}></div>
              </div>

              <div style={{
                position: 'absolute',
                width: '6vw',
                height: '7vh',
                top: '30vh',
                left: '13vw',
                background: 'white',
                border: '3px solid #ff9800',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px'
              }}>
                <div style={{ fontSize: '20px', animation: 'iconBounce 2s ease-in-out infinite' }}>🛡️</div>
                <div>Ingress</div>
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#4caf50',
                  animation: 'statusPulse 2s ease-in-out infinite'
                }}></div>
              </div>

              <div style={{
                position: 'absolute',
                width: '6vw',
                height: '7vh',
                top: '19vh',
                right: '15vw',
                background: 'white',
                border: '3px solid #009688',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px'
              }}>
                <div style={{ fontSize: '20px', animation: 'iconBounce 2s ease-in-out infinite' }}>👥</div>
                <div>Tenant A</div>
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#4caf50',
                  animation: 'statusPulse 2s ease-in-out infinite'
                }}></div>
              </div>

              <div style={{
                position: 'absolute',
                width: '6vw',
                height: '7vh',
                top: '19vh',
                right: '7vw',
                background: 'white',
                border: '3px solid #00bcd4',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px'
              }}>
                <div style={{ fontSize: '20px', animation: 'iconBounce 2s ease-in-out infinite' }}>👥</div>
                <div>Tenant B</div>
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#4caf50',
                  animation: 'statusPulse 2s ease-in-out infinite'
                }}></div>
              </div>

              <div style={{
                position: 'absolute',
                width: '6vw',
                height: '7vh',
                top: '28vh',
                right: '11vw',
                background: 'white',
                border: '3px solid #4db6ac',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px'
              }}>
                <div style={{ fontSize: '20px', animation: 'iconBounce 2s ease-in-out infinite' }}>👥</div>
                <div>Tenant C</div>
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#4caf50',
                  animation: 'statusPulse 2s ease-in-out infinite'
                }}></div>
              </div>

              <div style={{
                position: 'absolute',
                width: '7vw',
                height: '8vh',
                top: '48vh',
                left: '8vw',
                background: 'white',
                border: '3px solid #2196f3',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px'
              }}>
                <div style={{ fontSize: '24px', animation: 'iconBounce 2s ease-in-out infinite' }}>🗄️</div>
                <div>Database</div>
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#4caf50',
                  animation: 'statusPulse 2s ease-in-out infinite'
                }}></div>
              </div>

              <div style={{
                position: 'absolute',
                width: '6vw',
                height: '7vh',
                top: '48vh',
                left: '18vw',
                background: 'white',
                border: '3px solid #ff5722',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px'
              }}>
                <div style={{ fontSize: '20px', animation: 'iconBounce 2s ease-in-out infinite' }}>⚡</div>
                <div>Cache</div>
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#4caf50',
                  animation: 'statusPulse 2s ease-in-out infinite'
                }}></div>
              </div>

              <div style={{
                position: 'absolute',
                width: '7vw',
                height: '8vh',
                top: '48vh',
                left: '27vw',
                background: 'white',
                border: '3px solid #9c27b0',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px'
              }}>
                <div style={{ fontSize: '24px', animation: 'iconBounce 2s ease-in-out infinite' }}>📬</div>
                <div>Queue</div>
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#4caf50',
                  animation: 'statusPulse 2s ease-in-out infinite'
                }}></div>
              </div>

              {/* SVG Connections */}
              <svg style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 10,
                pointerEvents: 'none'
              }} viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <style>{`
                    @keyframes dataFlow {
                      0%, 100% { stroke-dashoffset: 0; }
                      50% { stroke-dashoffset: 20; }
                    }
                    @keyframes encryptedFlow {
                      0% { stroke-dasharray: 8 4; stroke-dashoffset: 0; }
                      100% { stroke-dasharray: 8 4; stroke-dashoffset: 12; }
                    }
                    @keyframes highTrafficFlow {
                      0%, 100% { stroke-width: 5; }
                      50% { stroke-width: 7; }
                    }
                  `}</style>
                </defs>

                {/* Standard connections (blue) */}
                <path d="M 11,9 Q 15,12 20,15" stroke="#2196f3" strokeWidth="3" fill="none" vectorEffect="non-scaling-stroke" style={{animation: 'dataFlow 3s ease-in-out infinite'}} />
                <path d="M 7,23 Q 12,25 18,28" stroke="#2196f3" strokeWidth="3" fill="none" vectorEffect="non-scaling-stroke" style={{animation: 'dataFlow 3s ease-in-out infinite'}} />

                {/* Secure connections (green) */}
                <path d="M 11,27 Q 25,35 35,42" stroke="#4caf50" strokeWidth="4" fill="none" vectorEffect="non-scaling-stroke" />
                <path d="M 20,35 Q 25,40 30,45" stroke="#4caf50" strokeWidth="4" fill="none" vectorEffect="non-scaling-stroke" />

                {/* Encrypted connections (orange dashed) */}
                <path d="M 25,42 Q 35,35 45,30" stroke="#ff9800" strokeWidth="3" fill="none" vectorEffect="non-scaling-stroke" style={{animation: 'encryptedFlow 2s linear infinite'}} />
                <path d="M 45,35 Q 50,40 55,45" stroke="#ff9800" strokeWidth="3" fill="none" vectorEffect="non-scaling-stroke" style={{animation: 'encryptedFlow 2s linear infinite'}} />

                {/* High traffic connections (red thick) */}
                <path d="M 11,52 Q 18,50 25,52" stroke="#f44336" strokeWidth="5" fill="none" vectorEffect="non-scaling-stroke" style={{animation: 'highTrafficFlow 1s ease-in-out infinite'}} />
                <path d="M 27,52 Q 32,50 37,52" stroke="#f44336" strokeWidth="5" fill="none" vectorEffect="non-scaling-stroke" style={{animation: 'highTrafficFlow 1s ease-in-out infinite'}} />
              </svg>

              {/* Connection Mid-Point Labels */}
              <div style={{
                position: 'absolute',
                top: '20vh',
                left: '15vw',
                transform: 'translateX(-50%) translateY(-50%)',
                background: 'rgba(255,255,255,0.95)',
                border: '2px solid #2196f3',
                borderRadius: '12px',
                padding: '4px 8px',
                fontSize: '10px',
                fontWeight: '600',
                color: '#2196f3',
                animation: 'labelGlow 3s ease-in-out infinite'
              }}>
                MESH
              </div>

              <div style={{
                position: 'absolute',
                top: '30vh',
                left: '35vw',
                transform: 'translateX(-50%) translateY(-50%)',
                background: 'rgba(255,255,255,0.95)',
                border: '2px solid #4caf50',
                borderRadius: '12px',
                padding: '4px 8px',
                fontSize: '10px',
                fontWeight: '600',
                color: '#4caf50',
                animation: 'labelGlow 3s ease-in-out infinite'
              }}>
                MTLS
              </div>

              <div style={{
                position: 'absolute',
                top: '25vh',
                right: '20vw',
                transform: 'translateX(-50%) translateY(-50%)',
                background: 'rgba(255,255,255,0.95)',
                border: '2px solid #ff9800',
                borderRadius: '12px',
                padding: '4px 8px',
                fontSize: '10px',
                fontWeight: '600',
                color: '#ff9800',
                animation: 'labelGlow 3s ease-in-out infinite'
              }}>
                VPC
              </div>

              <div style={{
                position: 'absolute',
                top: '50vh',
                left: '20vw',
                transform: 'translateX(-50%) translateY(-50%)',
                background: 'rgba(255,255,255,0.95)',
                border: '2px solid #f44336',
                borderRadius: '12px',
                padding: '4px 8px',
                fontSize: '10px',
                fontWeight: '600',
                color: '#f44336',
                animation: 'labelGlow 3s ease-in-out infinite'
              }}>
                DATA
              </div>

              {/* Legend */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '15px',
                padding: '15px',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
              }}>
                <div style={{ fontSize: '12px', fontWeight: '600', marginBottom: '10px', color: '#2c3e50' }}>Connection Types</div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                  <div style={{ width: '20px', height: '3px', background: '#2196f3', marginRight: '8px' }}></div>
                  <span style={{ fontSize: '10px', color: '#2c3e50' }}>Standard</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                  <div style={{ width: '20px', height: '4px', background: '#4caf50', marginRight: '8px' }}></div>
                  <span style={{ fontSize: '10px', color: '#2c3e50' }}>Secure</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                  <div style={{ width: '20px', height: '3px', background: '#ff9800', marginRight: '8px', borderStyle: 'dashed' }}></div>
                  <span style={{ fontSize: '10px', color: '#2c3e50' }}>Encrypted</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '20px', height: '5px', background: '#f44336', marginRight: '8px' }}></div>
                  <span style={{ fontSize: '10px', color: '#2c3e50' }}>High Traffic</span>
                </div>
              </div>
            </div>

            <style>{`
              @keyframes titleGlow {
                from { text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }
                to { text-shadow: 2px 2px 20px rgba(255,255,255,0.5); }
              }
              @keyframes iconBounce {
                0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                40% { transform: translateY(-5px); }
                60% { transform: translateY(-3px); }
              }
              @keyframes statusPulse {
                0%, 100% { opacity: 1; transform: scale(1); }
                50% { opacity: 0.6; transform: scale(1.2); }
              }
              @keyframes labelGlow {
                0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.3); }
                50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.6); }
              }
            `}</style>
          </div>
        );
        
      case 'enterprise-portals':
        return (
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            minHeight: '100vh',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div style={{
              color: 'white',
              fontSize: '32px',
              fontWeight: '700',
              marginBottom: '30px',
              textAlign: 'center',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              animation: 'titleGlow 3s ease-in-out infinite alternate'
            }}>
              Hub-and-Spoke Hybrid Cloud Network Topology
            </div>
            
            <div style={{
              width: '95vw',
              height: '90vh',
              position: 'relative',
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '20px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
              backdropFilter: 'blur(10px)',
              overflow: 'hidden'
            }}>
              {/* Network Zones */}
              <div style={{
                position: 'absolute',
                top: '2vh',
                left: '2vw',
                width: '20vw',
                height: '15vh',
                background: 'linear-gradient(135deg, rgba(255,193,7,0.1), rgba(255,152,0,0.1))',
                border: '2px dashed #ff9800',
                borderRadius: '15px',
                backdropFilter: 'blur(5px)'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '15px',
                  background: 'white',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  color: '#ff9800'
                }}>
                  BRANCH NETWORK
                </div>
              </div>

              <div style={{
                position: 'absolute',
                top: '25vh',
                left: '20vw',
                width: '60vw',
                height: '20vh',
                background: 'linear-gradient(135deg, rgba(63,81,181,0.1), rgba(57,73,171,0.1))',
                border: '2px dashed #3f51b5',
                borderRadius: '15px',
                backdropFilter: 'blur(5px)'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '15px',
                  background: 'white',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  color: '#3f51b5'
                }}>
                  HUB CLOUD REGION
                </div>
              </div>

              <div style={{
                position: 'absolute',
                top: '50vh',
                left: '2vw',
                width: '45vw',
                height: '18vh',
                background: 'linear-gradient(135deg, rgba(0,150,136,0.1), rgba(0,121,107,0.1))',
                border: '2px dashed #009688',
                borderRadius: '15px',
                backdropFilter: 'blur(5px)'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '15px',
                  background: 'white',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  color: '#009688'
                }}>
                  APPLICATION ZONE
                </div>
              </div>

              <div style={{
                position: 'absolute',
                top: '50vh',
                right: '2vw',
                width: '45vw',
                height: '18vh',
                background: 'linear-gradient(135deg, rgba(96,125,139,0.1), rgba(84,110,122,0.1))',
                border: '2px dashed #607d8b',
                borderRadius: '15px',
                backdropFilter: 'blur(5px)'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '15px',
                  background: 'white',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  color: '#607d8b'
                }}>
                  DATA ZONE
                </div>
              </div>

              {/* Network Components */}
              <div style={{
                position: 'absolute',
                width: '6vw',
                height: '8vh',
                top: '5vh',
                left: '6vw',
                background: 'white',
                border: '3px solid #9333EA',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px'
              }}>
                <div style={{ fontSize: '20px', animation: 'iconBounce 2s ease-in-out infinite' }}>🏢</div>
                <div>Branch A</div>
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#4caf50',
                  animation: 'statusPulse 2s ease-in-out infinite'
                }}></div>
              </div>

              <div style={{
                position: 'absolute',
                width: '6vw',
                height: '8vh',
                top: '5vh',
                left: '14vw',
                background: 'white',
                border: '3px solid #9333EA',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px'
              }}>
                <div style={{ fontSize: '20px', animation: 'iconBounce 2s ease-in-out infinite' }}>🏢</div>
                <div>Branch B</div>
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#4caf50',
                  animation: 'statusPulse 2s ease-in-out infinite'
                }}></div>
              </div>

              <div style={{
                position: 'absolute',
                width: '8vw',
                height: '10vh',
                top: '28vh',
                left: '25vw',
                background: 'white',
                border: '3px solid #3B82F6',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px'
              }}>
                <div style={{ fontSize: '24px', animation: 'iconBounce 2s ease-in-out infinite' }}>☁️</div>
                <div>Identity Hub</div>
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#4caf50',
                  animation: 'statusPulse 2s ease-in-out infinite'
                }}></div>
              </div>

              <div style={{
                position: 'absolute',
                width: '6vw',
                height: '7vh',
                top: '30vh',
                left: '40vw',
                background: 'white',
                border: '3px solid #ff9800',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px'
              }}>
                <div style={{ fontSize: '20px', animation: 'iconBounce 2s ease-in-out infinite' }}>🛡️</div>
                <div>SSO Gateway</div>
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#4caf50',
                  animation: 'statusPulse 2s ease-in-out infinite'
                }}></div>
              </div>

              <div style={{
                position: 'absolute',
                width: '7vw',
                height: '8vh',
                top: '30vh',
                left: '55vw',
                background: 'white',
                border: '3px solid #e91e63',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px'
              }}>
                <div style={{ fontSize: '24px', animation: 'iconBounce 2s ease-in-out infinite' }}>🚪</div>
                <div>API Gateway</div>
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#4caf50',
                  animation: 'statusPulse 2s ease-in-out infinite'
                }}></div>
              </div>

              <div style={{
                position: 'absolute',
                width: '7vw',
                height: '8vh',
                top: '53vh',
                left: '8vw',
                background: 'white',
                border: '3px solid #009688',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px'
              }}>
                <div style={{ fontSize: '24px', animation: 'iconBounce 2s ease-in-out infinite' }}>⚡</div>
                <div>Load Balancer</div>
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#4caf50',
                  animation: 'statusPulse 2s ease-in-out infinite'
                }}></div>
              </div>

              <div style={{
                position: 'absolute',
                width: '6vw',
                height: '7vh',
                top: '53vh',
                left: '18vw',
                background: 'white',
                border: '3px solid #00bcd4',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px'
              }}>
                <div style={{ fontSize: '20px', animation: 'iconBounce 2s ease-in-out infinite' }}>🖥️</div>
                <div>App Server 1</div>
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#4caf50',
                  animation: 'statusPulse 2s ease-in-out infinite'
                }}></div>
              </div>

              <div style={{
                position: 'absolute',
                width: '6vw',
                height: '7vh',
                top: '53vh',
                left: '27vw',
                background: 'white',
                border: '3px solid #4db6ac',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px'
              }}>
                <div style={{ fontSize: '20px', animation: 'iconBounce 2s ease-in-out infinite' }}>🖥️</div>
                <div>App Server 2</div>
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#4caf50',
                  animation: 'statusPulse 2s ease-in-out infinite'
                }}></div>
              </div>

              <div style={{
                position: 'absolute',
                width: '7vw',
                height: '8vh',
                top: '53vh',
                right: '15vw',
                background: 'white',
                border: '3px solid #2196f3',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px'
              }}>
                <div style={{ fontSize: '24px', animation: 'iconBounce 2s ease-in-out infinite' }}>🗄️</div>
                <div>Database</div>
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#4caf50',
                  animation: 'statusPulse 2s ease-in-out infinite'
                }}></div>
              </div>

              <div style={{
                position: 'absolute',
                width: '6vw',
                height: '7vh',
                top: '53vh',
                right: '6vw',
                background: 'white',
                border: '3px solid #9c27b0',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '11px'
              }}>
                <div style={{ fontSize: '20px', animation: 'iconBounce 2s ease-in-out infinite' }}>📊</div>
                <div>Monitor Hub</div>
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: '#4caf50',
                  animation: 'statusPulse 2s ease-in-out infinite'
                }}></div>
              </div>

              {/* SVG Connections */}
              <svg style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 10,
                pointerEvents: 'none'
              }} viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* SD-WAN connections (encrypted orange) */}
                <path d="M 9,13 Q 20,20 28,30" stroke="#ff9800" strokeWidth="4" fill="none" vectorEffect="non-scaling-stroke" strokeDasharray="8 4" style={{animation: 'encryptedFlow 2s linear infinite'}} />
                <path d="M 17,13 Q 25,20 30,30" stroke="#ff9800" strokeWidth="4" fill="none" vectorEffect="non-scaling-stroke" strokeDasharray="8 4" style={{animation: 'encryptedFlow 2s linear infinite'}} />

                {/* SSO flows (secure green) */}
                <path d="M 32,35 Q 38,33 43,33" stroke="#4caf50" strokeWidth="4" fill="none" vectorEffect="non-scaling-stroke" />
                <path d="M 48,35 Q 55,33 58,33" stroke="#4caf50" strokeWidth="4" fill="none" vectorEffect="non-scaling-stroke" />

                {/* API calls (standard blue) */}
                <path d="M 28,45 Q 30,48 32,55" stroke="#2196f3" strokeWidth="3" fill="none" vectorEffect="non-scaling-stroke" style={{animation: 'dataFlow 3s ease-in-out infinite'}} />
                <path d="M 35,45 Q 38,48 40,55" stroke="#2196f3" strokeWidth="3" fill="none" vectorEffect="non-scaling-stroke" style={{animation: 'dataFlow 3s ease-in-out infinite'}} />

                {/* High traffic data flows (red) */}
                <path d="M 11,55 Q 15,58 21,58" stroke="#f44336" strokeWidth="5" fill="none" vectorEffect="non-scaling-stroke" style={{animation: 'highTrafficFlow 1s ease-in-out infinite'}} />
                <path d="M 21,58 Q 28,58 33,58" stroke="#f44336" strokeWidth="5" fill="none" vectorEffect="non-scaling-stroke" style={{animation: 'highTrafficFlow 1s ease-in-out infinite'}} />
                <path d="M 70,58 Q 75,58 80,58" stroke="#f44336" strokeWidth="5" fill="none" vectorEffect="non-scaling-stroke" style={{animation: 'highTrafficFlow 1s ease-in-out infinite'}} />
              </svg>

              {/* Connection Mid-Point Labels */}
              <div style={{
                position: 'absolute',
                top: '22vh',
                left: '18vw',
                transform: 'translateX(-50%) translateY(-50%)',
                background: 'rgba(255,255,255,0.95)',
                border: '2px solid #ff9800',
                borderRadius: '12px',
                padding: '4px 8px',
                fontSize: '10px',
                fontWeight: '600',
                color: '#ff9800',
                animation: 'labelGlow 3s ease-in-out infinite'
              }}>
                SDWAN
              </div>

              <div style={{
                position: 'absolute',
                top: '32vh',
                left: '47vw',
                transform: 'translateX(-50%) translateY(-50%)',
                background: 'rgba(255,255,255,0.95)',
                border: '2px solid #4caf50',
                borderRadius: '12px',
                padding: '4px 8px',
                fontSize: '10px',
                fontWeight: '600',
                color: '#4caf50',
                animation: 'labelGlow 3s ease-in-out infinite'
              }}>
                SSO
              </div>

              <div style={{
                position: 'absolute',
                top: '45vh',
                left: '30vw',
                transform: 'translateX(-50%) translateY(-50%)',
                background: 'rgba(255,255,255,0.95)',
                border: '2px solid #2196f3',
                borderRadius: '12px',
                padding: '4px 8px',
                fontSize: '10px',
                fontWeight: '600',
                color: '#2196f3',
                animation: 'labelGlow 3s ease-in-out infinite'
              }}>
                API
              </div>

              <div style={{
                position: 'absolute',
                top: '58vh',
                left: '25vw',
                transform: 'translateX(-50%) translateY(-50%)',
                background: 'rgba(255,255,255,0.95)',
                border: '2px solid #f44336',
                borderRadius: '12px',
                padding: '4px 8px',
                fontSize: '10px',
                fontWeight: '600',
                color: '#f44336',
                animation: 'labelGlow 3s ease-in-out infinite'
              }}>
                DATA
              </div>

              {/* Legend */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '15px',
                padding: '15px',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
              }}>
                <div style={{ fontSize: '12px', fontWeight: '600', marginBottom: '10px', color: '#2c3e50' }}>Connection Types</div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                  <div style={{ width: '20px', height: '3px', background: '#2196f3', marginRight: '8px' }}></div>
                  <span style={{ fontSize: '10px', color: '#2c3e50' }}>Standard</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                  <div style={{ width: '20px', height: '4px', background: '#4caf50', marginRight: '8px' }}></div>
                  <span style={{ fontSize: '10px', color: '#2c3e50' }}>Secure</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                  <div style={{ width: '20px', height: '3px', background: '#ff9800', marginRight: '8px', borderStyle: 'dashed' }}></div>
                  <span style={{ fontSize: '10px', color: '#2c3e50' }}>Encrypted</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '20px', height: '5px', background: '#f44336', marginRight: '8px' }}></div>
                  <span style={{ fontSize: '10px', color: '#2c3e50' }}>High Traffic</span>
                </div>
              </div>
            </div>

            <style>{`
              @keyframes titleGlow {
                from { text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }
                to { text-shadow: 2px 2px 20px rgba(255,255,255,0.5); }
              }
              @keyframes iconBounce {
                0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                40% { transform: translateY(-5px); }
                60% { transform: translateY(-3px); }
              }
              @keyframes statusPulse {
                0%, 100% { opacity: 1; transform: scale(1); }
                50% { opacity: 0.6; transform: scale(1.2); }
              }
              @keyframes labelGlow {
                0%, 100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.3); }
                50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.6); }
              }
              @keyframes dataFlow {
                0%, 100% { stroke-dashoffset: 0; }
                50% { stroke-dashoffset: 20; }
              }
              @keyframes encryptedFlow {
                0% { stroke-dasharray: 8 4; stroke-dashoffset: 0; }
                100% { stroke-dasharray: 8 4; stroke-dashoffset: 12; }
              }
              @keyframes highTrafficFlow {
                0%, 100% { stroke-width: 5; }
                50% { stroke-width: 7; }
              }
            `}</style>
          </div>
        );
        
      case 'compliance-reporting':
        return (
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            minHeight: '100vh',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div style={{
              color: 'white',
              fontSize: '32px',
              fontWeight: '700',
              marginBottom: '30px',
              textAlign: 'center',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              animation: 'titleGlow 3s ease-in-out infinite alternate'
            }}>
              Segmented DMZ + Data Lake Overlay Network Topology
            </div>
            
            <div style={{
              width: '95vw',
              height: '90vh',
              position: 'relative',
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '20px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
              backdropFilter: 'blur(10px)',
              overflow: 'hidden'
            }}>
              {/* Return simple placeholder for now */}
              <div style={{ padding: '20px', color: '#333' }}>Compliance & Reporting Topology Implementation</div>
            </div>
          </div>
        );
        
      case 'itil-itsm':
        return (
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            minHeight: '100vh',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div style={{
              color: 'white',
              fontSize: '32px',
              fontWeight: '700',
              marginBottom: '30px',
              textAlign: 'center',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              animation: 'titleGlow 3s ease-in-out infinite alternate'
            }}>
              Zero-Trust Access Fabric Network Topology
            </div>
            
            <div style={{
              width: '95vw',
              height: '90vh',
              position: 'relative',
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '20px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
              backdropFilter: 'blur(10px)',
              overflow: 'hidden'
            }}>
              <div style={{ padding: '20px', color: '#333' }}>ITIL-Based ITSM Zero-Trust Topology Implementation</div>
            </div>
          </div>
        );
        
      case 'operational-playbooks':
        return (
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            minHeight: '100vh',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div style={{
              color: 'white',
              fontSize: '32px',
              fontWeight: '700',
              marginBottom: '30px',
              textAlign: 'center',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              animation: 'titleGlow 3s ease-in-out infinite alternate'
            }}>
              Bastioned Workflow Cluster Network Topology
            </div>
            
            <div style={{
              width: '95vw',
              height: '90vh',
              position: 'relative',
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '20px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
              backdropFilter: 'blur(10px)',
              overflow: 'hidden'
            }}>
              <div style={{ padding: '20px', color: '#333' }}>Operational Playbooks Bastioned Workflow Topology Implementation</div>
            </div>
          </div>
        );
        
      case 'enterprise-recovery':
        return (
          <div style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            minHeight: '100vh',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div style={{
              color: 'white',
              fontSize: '32px',
              fontWeight: '700',
              marginBottom: '30px',
              textAlign: 'center',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              animation: 'titleGlow 3s ease-in-out infinite alternate'
            }}>
              Multi-Site Active/Passive DR with SD-WAN Network Topology
            </div>
            
            <div style={{
              width: '95vw',
              height: '90vh',
              position: 'relative',
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '20px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
              backdropFilter: 'blur(10px)',
              overflow: 'hidden'
            }}>
              <div style={{ padding: '20px', color: '#333' }}>Enterprise Recovery Multi-Site DR Topology Implementation</div>
            </div>
          </div>
        );
        
      default:
        return <div className="h-80 bg-slate-900/30 rounded-xl border border-gray-700/50 p-6 flex items-center justify-center">
          <span className="text-gray-400">Topology diagram not available</span>
        </div>;
    }
  };

  return renderTopology();
};

const SolutionCard = ({ solution, isActive, onHover }: { 
  solution: BusinessSolution, 
  isActive: boolean, 
  onHover: (id: string | null) => void 
}) => {
  const IconComponent = solution.icon;
  
  return (
    <div 
      className="solution-card bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
      onMouseEnter={() => onHover(solution.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
          <IconComponent className="w-8 h-8 text-blue-400" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
            {solution.name}
          </h3>
        </div>
      </div>
      
      <p className="text-gray-300 text-sm leading-relaxed mb-6">
        {solution.description}
      </p>
      
      <TopologyDiagram solutionId={solution.id} />
    </div>
  );
};

export default function BusinessSolutions() {
  useGSAPInit();
  useGSAPAnimations();
  useGSAPScrollSmoother();
  
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const generalSolutions: BusinessSolution[] = [
    {
      id: 'custom-saas',
      name: 'Custom SaaS Platforms',
      icon: Cloud,
      description: 'Isolated VPCs per tenant (or namespaces) inside a cloud region, Kubernetes microservices fronted by ingress, service mesh for secure east-west traffic and autoscaling.',
      category: 'general',
      workflow: [
        { id: 'cloud-hub', icon: Cloud, label: 'Cloud Hub', description: 'Central cloud infrastructure setup' },
        { id: 'hr-module', icon: Users, label: 'HR Module', description: 'Human resources management system' },
        { id: 'erp-module', icon: BarChart3, label: 'ERP Module', description: 'Enterprise resource planning' },
        { id: 'crm-module', icon: Users, label: 'CRM Module', description: 'Customer relationship management' }
      ]
    },
    {
      id: 'enterprise-portals',
      name: 'Enterprise Portals',
      icon: Key,
      description: 'Central hub (identity, SSO, API gateway) in a secure cloud region with spokes for branch offices / on-prem apps over VPN/SD-WAN for low-latency access.',
      category: 'general',
      workflow: [
        { id: 'user-login', icon: Users, label: 'User Login', description: 'Employee authentication' },
        { id: 'sso-gateway', icon: Key, label: 'SSO Gateway', description: 'Single sign-on verification' },
        { id: 'app-access', icon: Grid, label: 'App Access', description: 'Access to internal applications' },
        { id: 'dashboard', icon: Monitor, label: 'Dashboard', description: 'Unified workspace view' }
      ]
    },
    {
      id: 'compliance-reporting',
      name: 'Compliance & Reporting Automation',
      icon: FileText,
      description: 'DMZ for ingestion and transformation, separate compliance VLANs with immutable storage (WORM) and an isolated data-lake network overlay for auditing and egress control.',
      category: 'general',
      workflow: [
        { id: 'data-source', icon: Database, label: 'Data Sources', description: 'Multiple data inputs collected' },
        { id: 'automation-engine', icon: Bot, label: 'Automation Engine', description: 'Processing and analysis' },
        { id: 'audit-report', icon: FileText, label: 'Audit Report', description: 'Compliance-ready documentation' },
        { id: 'verification', icon: Shield, label: 'Verification', description: 'Blockchain verification' }
      ]
    },
    {
      id: 'itil-itsm',
      name: 'ITIL-Based ITSM Kits',
      icon: Headphones,
      description: 'Internal service desk systems on a segmented LAN with ZTNA (identity-based microsegmentation), bastion hosts for admin access and out-of-band management network.',
      category: 'general',
      workflow: [
        { id: 'ticket-creation', icon: Ticket, label: 'Ticket Creation', description: 'Support request submitted' },
        { id: 'auto-routing', icon: Bot, label: 'Auto Routing', description: 'Intelligent ticket assignment' },
        { id: 'resolution', icon: CheckCircle, label: 'Resolution', description: 'Issue resolution process' },
        { id: 'dashboard', icon: Monitor, label: 'Dashboard', description: 'Performance monitoring' }
      ]
    },
    {
      id: 'operational-playbooks',
      name: 'Operational Playbooks & SOP Generators',
      icon: BookOpen,
      description: 'Hardened orchestration cluster (CI/CD + automation controllers) in a management VPC, separated from production networks via bastions and role-based network policies.',
      category: 'general',
      workflow: [
        { id: 'sop-templates', icon: BookOpen, label: 'SOP Templates', description: 'Standard procedure templates' },
        { id: 'workflow-design', icon: Settings, label: 'Workflow Design', description: 'Custom workflow creation' },
        { id: 'automation', icon: Bot, label: 'Automation', description: 'Automated execution' },
        { id: 'ops-cycle', icon: Repeat, label: 'Operations Cycle', description: 'Consistent operations loop' }
      ]
    },
    {
      id: 'enterprise-recovery',
      name: 'Enterprise Recovery Kits',
      icon: Wrench,
      description: 'Primary and DR sites connected by encrypted SD-WAN, asynchronous replication over dedicated replication VLANs and automated failover orchestration.',
      category: 'general',
      workflow: [
        { id: 'outage-event', icon: AlertTriangle, label: 'Outage Event', description: 'System failure detected' },
        { id: 'recovery-steps', icon: Wrench, label: 'Recovery Steps', description: 'Automated recovery process' },
        { id: 'restoration', icon: CheckCircle, label: 'Restoration', description: 'System restored to normal' },
        { id: 'monitoring', icon: Eye, label: 'Monitoring', description: 'Continuous health monitoring' }
      ]
    }
  ];

  const nicheSolutions: BusinessSolution[] = [
    {
      id: 'defi-launch',
      name: 'Secure DeFi Launch Pack',
      icon: Rocket,
      description: 'Complete decentralized finance platform with staking pools, liquidity management, and security audits.',
      category: 'niche',
      workflow: [
        { id: 'token-creation', icon: Rocket, label: 'Token Creation', description: 'Smart contract deployment' },
        { id: 'staking-pool', icon: Database, label: 'Staking Pool', description: 'Liquidity pool setup' },
        { id: 'security-audit', icon: Shield, label: 'Security Audit', description: 'Smart contract verification' },
        { id: 'live-launch', icon: TrendingUp, label: 'Live Launch', description: 'Platform goes live' }
      ]
    },
    {
      id: 'nft-marketplace',
      name: 'NFT Marketplaces & Ticketing Systems',
      icon: Ticket,
      description: 'Blockchain-based NFT trading platform with integrated event ticketing and verification systems.',
      category: 'niche',
      workflow: [
        { id: 'minting', icon: Cpu, label: 'Minting', description: 'NFT creation process' },
        { id: 'trading', icon: TrendingUp, label: 'Trading', description: 'Marketplace transactions' },
        { id: 'verification', icon: Shield, label: 'Verification', description: 'Authenticity confirmation' },
        { id: 'redemption', icon: Ticket, label: 'Redemption', description: 'Ticket/asset redemption' }
      ]
    },
    {
      id: 'quant-trading',
      name: 'Quantitative Trading Platforms',
      icon: TrendingUp,
      description: 'AI-powered algorithmic trading system with real-time market analysis and automated execution.',
      category: 'niche',
      workflow: [
        { id: 'market-data', icon: BarChart3, label: 'Market Data', description: 'Real-time market feeds' },
        { id: 'ai-analysis', icon: Bot, label: 'AI Analysis', description: 'Algorithm processing' },
        { id: 'strategy-execution', icon: Target, label: 'Strategy Execution', description: 'Trade execution' },
        { id: 'performance', icon: TrendingUp, label: 'Performance', description: 'Results monitoring' }
      ]
    },
    {
      id: 'fraud-detection',
      name: 'Fraud & Scam Detection Dashboards',
      icon: Search,
      description: 'Advanced transaction monitoring with real-time anomaly detection and automated alert systems.',
      category: 'niche',
      workflow: [
        { id: 'transactions', icon: Database, label: 'Transactions', description: 'Transaction monitoring' },
        { id: 'anomaly-detection', icon: Search, label: 'Anomaly Detection', description: 'Pattern analysis' },
        { id: 'risk-scoring', icon: AlertTriangle, label: 'Risk Scoring', description: 'Threat assessment' },
        { id: 'alerts', icon: Bell, label: 'Alerts', description: 'Automated notifications' }
      ]
    },
    {
      id: 'rug-pull-detection',
      name: 'AI-Powered Rug Pull Detection',
      icon: AlertTriangle,
      description: 'Smart contract monitoring system that predicts and alerts investors about potential rug pull scams.',
      category: 'niche',
      workflow: [
        { id: 'contract-monitoring', icon: Eye, label: 'Contract Monitoring', description: 'Smart contract analysis' },
        { id: 'rug-predictor', icon: Bot, label: 'Rug Predictor', description: 'AI risk assessment' },
        { id: 'risk-analysis', icon: AlertTriangle, label: 'Risk Analysis', description: 'Threat evaluation' },
        { id: 'investor-alert', icon: Bell, label: 'Investor Alert', description: 'Warning notifications' }
      ]
    },
    {
      id: 'dao-governance',
      name: 'DAO Governance Platforms',
      icon: Building,
      description: 'Decentralized governance system with token-based voting and transparent decision-making processes.',
      category: 'niche',
      workflow: [
        { id: 'token-holders', icon: Users, label: 'Token Holders', description: 'Community members' },
        { id: 'proposal-creation', icon: FileText, label: 'Proposal Creation', description: 'Governance proposals' },
        { id: 'on-chain-voting', icon: CheckCircle, label: 'On-Chain Voting', description: 'Blockchain voting' },
        { id: 'governance-decision', icon: Building, label: 'Governance Decision', description: 'Final implementation' }
      ]
    }
  ];

  const specializedSolutions: BusinessSolution[] = [
    {
      id: 'pentest-toolkits',
      name: 'Pen-Test Toolkits & Scripts',
      icon: Shield,
      description: 'Comprehensive penetration testing suite with automated vulnerability scanning and reporting.',
      category: 'specialized',
      workflow: [
        { id: 'target-scan', icon: Target, label: 'Target Scan', description: 'System reconnaissance' },
        { id: 'vulnerability-test', icon: Search, label: 'Vulnerability Test', description: 'Security testing' },
        { id: 'exploit-analysis', icon: AlertTriangle, label: 'Exploit Analysis', description: 'Risk assessment' },
        { id: 'security-report', icon: FileText, label: 'Security Report', description: 'Detailed findings' }
      ]
    },
    {
      id: 'soc-automation',
      name: 'SOC Automation Starter',
      icon: Eye,
      description: 'Security Operations Center automation with AI-driven threat detection and incident response.',
      category: 'specialized',
      workflow: [
        { id: 'monitoring', icon: Eye, label: 'Monitoring', description: '24/7 security monitoring' },
        { id: 'threat-detection', icon: Search, label: 'Threat Detection', description: 'AI threat analysis' },
        { id: 'incident-response', icon: AlertTriangle, label: 'Incident Response', description: 'Automated response' },
        { id: 'security-dashboard', icon: Monitor, label: 'Security Dashboard', description: 'Centralized view' }
      ]
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI-Powered Cybersecurity Platforms',
      icon: Bot,
      description: 'Machine learning-based security platform with predictive threat analysis and automated defense.',
      category: 'specialized',
      workflow: [
        { id: 'data-collection', icon: Database, label: 'Data Collection', description: 'Security data ingestion' },
        { id: 'ai-analysis', icon: Bot, label: 'AI Analysis', description: 'Machine learning processing' },
        { id: 'threat-prediction', icon: Target, label: 'Threat Prediction', description: 'Predictive modeling' },
        { id: 'auto-defense', icon: Shield, label: 'Auto Defense', description: 'Automated protection' }
      ]
    },
    {
      id: 'decentralized-soc',
      name: 'Decentralized SOC (dSOC)',
      icon: Globe,
      description: 'Blockchain-based distributed security operations with community-driven threat intelligence.',
      category: 'specialized',
      workflow: [
        { id: 'distributed-nodes', icon: Globe, label: 'Distributed Nodes', description: 'Network of security nodes' },
        { id: 'threat-sharing', icon: Share, label: 'Threat Sharing', description: 'Intelligence sharing' },
        { id: 'consensus-analysis', icon: CheckCircle, label: 'Consensus Analysis', description: 'Community verification' },
        { id: 'blockchain-security', icon: Shield, label: 'Blockchain Security', description: 'Decentralized protection' }
      ]
    },
    {
      id: 'ai-threat-hunting',
      name: 'AI Threat Hunting System',
      icon: Target,
      description: 'Proactive threat hunting platform using AI to identify advanced persistent threats and zero-day attacks.',
      category: 'specialized',
      workflow: [
        { id: 'data-ingestion', icon: Database, label: 'Data Ingestion', description: 'Multi-source data collection' },
        { id: 'pattern-analysis', icon: Search, label: 'Pattern Analysis', description: 'Behavioral analysis' },
        { id: 'threat-hunting', icon: Target, label: 'Threat Hunting', description: 'Proactive hunting' },
        { id: 'threat-neutralization', icon: Shield, label: 'Threat Neutralization', description: 'Threat elimination' }
      ]
    },
    {
      id: 'tokenomics-simulator',
      name: 'Tokenomics Simulator',
      icon: Calculator,
      description: 'Economic modeling platform for cryptocurrency projects with supply/demand analysis and price prediction.',
      category: 'specialized',
      workflow: [
        { id: 'economic-model', icon: Calculator, label: 'Economic Model', description: 'Token economics design' },
        { id: 'simulation-engine', icon: Bot, label: 'Simulation Engine', description: 'Market simulation' },
        { id: 'scenario-testing', icon: TrendingUp, label: 'Scenario Testing', description: 'Various market conditions' },
        { id: 'optimization', icon: Target, label: 'Optimization', description: 'Parameter optimization' }
      ]
    },
    {
      id: 'web3-ecommerce',
      name: 'Web3 E-Commerce Platform',
      icon: ShoppingCart,
      description: 'Decentralized e-commerce platform with cryptocurrency payments and blockchain-based inventory management.',
      category: 'specialized',
      workflow: [
        { id: 'product-listing', icon: ShoppingCart, label: 'Product Listing', description: 'Blockchain-based catalog' },
        { id: 'crypto-payment', icon: Cpu, label: 'Crypto Payment', description: 'Cryptocurrency transactions' },
        { id: 'smart-contract', icon: Shield, label: 'Smart Contract', description: 'Automated fulfillment' },
        { id: 'delivery-tracking', icon: Target, label: 'Delivery Tracking', description: 'Decentralized tracking' }
      ]
    },
    {
      id: 'compliance-generators',
      name: 'Compliance & Reporting Generators',
      icon: Folder,
      description: 'Automated compliance document generation with PDF/DOC export and regulatory reporting capabilities.',
      category: 'specialized',
      workflow: [
        { id: 'data-collection', icon: Database, label: 'Data Collection', description: 'Compliance data gathering' },
        { id: 'processing-engine', icon: Settings, label: 'Processing Engine', description: 'Document generation' },
        { id: 'report-creation', icon: FileText, label: 'Report Creation', description: 'PDF/DOC generation' },
        { id: 'regulatory-submission', icon: CheckCircle, label: 'Regulatory Submission', description: 'Automated filing' }
      ]
    },
    {
      id: 'cloud-dr-hardening',
      name: 'Cloud DR & Hardening',
      icon: CloudSnow,
      description: 'Cloud disaster recovery with automated hardening protocols and backup management systems.',
      category: 'specialized',
      workflow: [
        { id: 'backup-automation', icon: HardDrive, label: 'Backup Automation', description: 'Automated cloud backups' },
        { id: 'hardening-protocols', icon: Shield, label: 'Hardening Protocols', description: 'Security hardening' },
        { id: 'disaster-detection', icon: AlertTriangle, label: 'Disaster Detection', description: 'Failure monitoring' },
        { id: 'recovery-execution', icon: ArrowRight, label: 'Recovery Execution', description: 'Automated restoration' }
      ]
    },
    {
      id: 'iot-telemetry',
      name: 'IoT Telemetry Stack',
      icon: Antenna,
      description: 'Complete IoT data collection and analysis platform with real-time telemetry and edge processing.',
      category: 'specialized',
      workflow: [
        { id: 'sensor-data', icon: Antenna, label: 'Sensor Data', description: 'IoT device collection' },
        { id: 'edge-processing', icon: Cpu, label: 'Edge Processing', description: 'Local data processing' },
        { id: 'telemetry-analysis', icon: BarChart3, label: 'Telemetry Analysis', description: 'Data analysis' },
        { id: 'action-triggers', icon: Bell, label: 'Action Triggers', description: 'Automated responses' }
      ]
    },
    {
      id: 'edge-ai-deployments',
      name: 'Edge AI Deployments',
      icon: Network,
      description: 'Edge computing AI deployment platform with distributed processing and real-time inference.',
      category: 'specialized',
      workflow: [
        { id: 'ai-model', icon: Bot, label: 'AI Model', description: 'Machine learning model' },
        { id: 'edge-deployment', icon: Network, label: 'Edge Deployment', description: 'Distributed deployment' },
        { id: 'local-inference', icon: Cpu, label: 'Local Inference', description: 'Edge processing' },
        { id: 'result-aggregation', icon: Database, label: 'Result Aggregation', description: 'Centralized results' }
      ]
    },
    {
      id: 'security-appliances',
      name: 'Custom Security Appliances',
      icon: Lock,
      description: 'Hardware-based security appliances with custom firewall configurations and intrusion detection.',
      category: 'specialized',
      workflow: [
        { id: 'hardware-setup', icon: Lock, label: 'Hardware Setup', description: 'Security appliance config' },
        { id: 'firewall-rules', icon: Shield, label: 'Firewall Rules', description: 'Custom rule engine' },
        { id: 'intrusion-detection', icon: Search, label: 'Intrusion Detection', description: 'Threat monitoring' },
        { id: 'response-automation', icon: Bot, label: 'Response Automation', description: 'Automated defense' }
      ]
    },
    {
      id: 'ha-storage',
      name: 'High Availability Storage Solutions',
      icon: HardDrive,
      description: 'Enterprise high-availability storage with automatic replication and failover capabilities.',
      category: 'specialized',
      workflow: [
        { id: 'data-ingestion', icon: HardDrive, label: 'Data Ingestion', description: 'Primary storage' },
        { id: 'replication', icon: ArrowLeftRight, label: 'Replication', description: 'Multi-site sync' },
        { id: 'health-monitoring', icon: Eye, label: 'Health Monitoring', description: 'System monitoring' },
        { id: 'failover', icon: CheckCircle, label: 'Failover', description: 'Automatic switching' }
      ]
    },
    {
      id: 'treasury-dashboards',
      name: 'Treasury & Risk Dashboards',
      icon: BarChart3,
      description: 'Financial treasury management with real-time risk assessment and automated portfolio monitoring.',
      category: 'specialized',
      workflow: [
        { id: 'portfolio-data', icon: BarChart3, label: 'Portfolio Data', description: 'Asset data collection' },
        { id: 'risk-analysis', icon: AlertTriangle, label: 'Risk Analysis', description: 'Risk assessment' },
        { id: 'treasury-management', icon: Database, label: 'Treasury Management', description: 'Asset management' },
        { id: 'reporting', icon: FileText, label: 'Reporting', description: 'Financial reports' }
      ]
    },
    {
      id: 'defi-arbitrage',
      name: 'DeFi Yield & Arbitrage Systems',
      icon: TrendingUp,
      description: 'Automated DeFi yield farming and arbitrage platform with cross-chain liquidity optimization.',
      category: 'specialized',
      workflow: [
        { id: 'market-scanning', icon: Search, label: 'Market Scanning', description: 'Opportunity detection' },
        { id: 'arbitrage-execution', icon: ArrowLeftRight, label: 'Arbitrage Execution', description: 'Cross-exchange trading' },
        { id: 'yield-optimization', icon: TrendingUp, label: 'Yield Optimization', description: 'Profit maximization' },
        { id: 'liquidity-management', icon: Database, label: 'Liquidity Management', description: 'Capital allocation' }
      ]
    },
    {
      id: 'training-platforms',
      name: 'Training & Knowledge Platforms',
      icon: GraduationCap,
      description: 'AI-powered learning management system with personalized training paths and skill assessment.',
      category: 'specialized',
      workflow: [
        { id: 'content-creation', icon: GraduationCap, label: 'Content Creation', description: 'Learning material design' },
        { id: 'personalization', icon: Bot, label: 'Personalization', description: 'AI-driven customization' },
        { id: 'skill-assessment', icon: Target, label: 'Skill Assessment', description: 'Progress evaluation' },
        { id: 'certification', icon: CheckCircle, label: 'Certification', description: 'Achievement verification' }
      ]
    }
  ];

  const allSolutions = [...generalSolutions, ...nicheSolutions, ...specializedSolutions];

  return (
    <div id="smooth-wrapper" className="min-h-screen bg-slate-950 flex flex-col relative">
      <Navigation />

      <div id="smooth-content" className="flex-1">
        <main className="pt-20">
          {/* Hero Section */}
          <section className="liquid-section min-h-screen flex items-center relative overflow-hidden pt-20 hero">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-purple-950/40"></div>

            <div className="max-w-7xl mx-auto text-center relative z-10 hero-content">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white slide-in-up">
                Business <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto fade-in">
                Interactive workflow diagrams showing how our business solutions transform your operations
              </p>
            </div>
          </section>

          {/* General Business Solutions */}
          <section className="liquid-section px-4 py-20">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">General Business Solutions</h2>
                <p className="text-gray-300 text-lg">Enterprise-grade solutions for modern business operations</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {generalSolutions.map((solution) => (
                  <SolutionCard
                    key={solution.id}
                    solution={solution}
                    isActive={activeCard === solution.id}
                    onHover={setActiveCard}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Niche Business Solutions */}
          <section className="liquid-section px-4 py-20 bg-slate-900/20">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Niche Business Solutions</h2>
                <p className="text-gray-300 text-lg">Cutting-edge fintech and blockchain solutions</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {nicheSolutions.map((solution) => (
                  <SolutionCard
                    key={solution.id}
                    solution={solution}
                    isActive={activeCard === solution.id}
                    onHover={setActiveCard}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Specialized Solutions */}
          <section className="liquid-section px-4 py-20">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Specialized Solutions</h2>
                <p className="text-gray-300 text-lg">Advanced cybersecurity, AI-powered platforms, and enterprise tools</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {specializedSolutions.map((solution) => (
                  <SolutionCard
                    key={solution.id}
                    solution={solution}
                    isActive={activeCard === solution.id}
                    onHover={setActiveCard}
                  />
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}