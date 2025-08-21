import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ThreeAnimations() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create floating geometric shapes
    const geometries = [
      new THREE.OctahedronGeometry(0.5),
      new THREE.TetrahedronGeometry(0.7),
      new THREE.IcosahedronGeometry(0.6),
      new THREE.DodecahedronGeometry(0.5)
    ];

    const materials = [
      new THREE.MeshBasicMaterial({ 
        color: 0x6366f1, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.3 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x06b6d4, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.4 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x8b5cf6, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.3 
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x10b981, 
        wireframe: true, 
        transparent: true, 
        opacity: 0.35 
      })
    ];

    const shapes: Array<{ mesh: THREE.Mesh; speed: number; axis: THREE.Vector3 }> = [];
    const shapeCount = window.innerWidth < 768 ? 3 : 6;

    for (let i = 0; i < shapeCount; i++) {
      const geometry = geometries[i % geometries.length];
      const material = materials[i % materials.length];
      const mesh = new THREE.Mesh(geometry, material);
      
      // Random position
      mesh.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      
      // Random rotation axis
      const axis = new THREE.Vector3(
        Math.random() - 0.5,
        Math.random() - 0.5,
        Math.random() - 0.5
      ).normalize();
      
      shapes.push({
        mesh,
        speed: 0.01 + Math.random() * 0.02,
        axis
      });
      
      scene.add(mesh);
    }

    camera.position.z = 15;

    // Animation loop
    const animate = () => {
      // Rotate shapes
      shapes.forEach(({ mesh, speed, axis }) => {
        mesh.rotateOnAxis(axis, speed);
        
        // Floating motion
        mesh.position.y += Math.sin(Date.now() * 0.001 + mesh.position.x) * 0.01;
        mesh.position.x += Math.cos(Date.now() * 0.0008 + mesh.position.z) * 0.005;
      });

      // Camera gentle movement
      camera.position.x = Math.sin(Date.now() * 0.0005) * 2;
      camera.position.y = Math.cos(Date.now() * 0.0003) * 1;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometries.forEach(geo => geo.dispose());
      materials.forEach(mat => mat.dispose());
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 pointer-events-none z-[1]" />;
}