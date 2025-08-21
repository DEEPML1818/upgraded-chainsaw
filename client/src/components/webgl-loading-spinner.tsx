import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface WebGLLoadingSpinnerProps {
  size?: number;
  color?: number;
  isLoading?: boolean;
}

export function WebGLLoadingSpinner({ 
  size = 100, 
  color = 0x6366f1, 
  isLoading = true 
}: WebGLLoadingSpinnerProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    if (!mountRef.current || !isLoading) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(size, size);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create torus knot geometry
    const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
    const material = new THREE.MeshBasicMaterial({ 
      color, 
      wireframe: true,
      transparent: true,
      opacity: 0.8
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    meshRef.current = mesh;

    // Animation loop
    const animate = () => {
      if (!mesh || !renderer || !scene) return;

      mesh.rotation.x += 0.02;
      mesh.rotation.y += 0.03;
      mesh.rotation.z += 0.01;

      // Pulsing effect
      const scale = 1 + Math.sin(Date.now() * 0.005) * 0.2;
      mesh.scale.setScalar(scale);

      renderer.render(scene, camera);
      
      if (isLoading) {
        requestAnimationFrame(animate);
      }
    };

    animate();

    // Cleanup
    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, [size, color, isLoading]);

  if (!isLoading) return null;

  return (
    <div className="flex items-center justify-center">
      <div ref={mountRef} />
    </div>
  );
}

export function PageLoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        <WebGLLoadingSpinner size={120} color={0x6366f1} />
        <div className="mt-6 text-white text-lg font-medium">
          Initializing FlowTech Experience...
        </div>
        <div className="mt-2 text-white/60 text-sm">
          Loading advanced graphics and animations
        </div>
      </div>
    </div>
  );
}