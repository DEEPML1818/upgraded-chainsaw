import { useEffect, useRef } from 'react';
import Matter from 'matter-js';

export function PhysicsPlayground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Create Matter.js engine and world
    const engine = Matter.Engine.create();
    const world = engine.world;
    
    // Disable gravity initially for floating effect
    engine.world.gravity.y = 0.3;
    
    engineRef.current = engine;

    // Create renderer
    const render = Matter.Render.create({
      canvas: canvasRef.current,
      engine: engine,
      options: {
        width: 800,
        height: 400,
        wireframes: false,
        background: 'transparent',
        showVelocity: false,
        showAngleIndicator: false,
        showDebug: false,
      }
    });
    
    renderRef.current = render;

    // Create boundaries (invisible walls)
    const boundaries = [
      Matter.Bodies.rectangle(400, 0, 800, 20, { isStatic: true, render: { fillStyle: 'transparent' } }),
      Matter.Bodies.rectangle(400, 400, 800, 20, { isStatic: true, render: { fillStyle: 'transparent' } }),
      Matter.Bodies.rectangle(0, 200, 20, 400, { isStatic: true, render: { fillStyle: 'transparent' } }),
      Matter.Bodies.rectangle(800, 200, 20, 400, { isStatic: true, render: { fillStyle: 'transparent' } })
    ];

    // Create interactive balls with gradients
    const balls: Matter.Body[] = [];
    const colors = [
      '#6366f1', '#06b6d4', '#8b5cf6', '#f59e0b', 
      '#ef4444', '#10b981', '#f97316', '#3b82f6'
    ];

    for (let i = 0; i < 8; i++) {
      const ball = Matter.Bodies.circle(
        Math.random() * 600 + 100,
        Math.random() * 200 + 100,
        20 + Math.random() * 15,
        {
          restitution: 0.8,
          friction: 0.001,
          frictionAir: 0.01,
          render: {
            fillStyle: colors[i],
            strokeStyle: colors[i],
            lineWidth: 2
          }
        }
      );
      balls.push(ball);
    }

    // Add all bodies to world
    Matter.World.add(world, [...boundaries, ...balls]);

    // Mouse control
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

    Matter.World.add(world, mouseConstraint);

    // Run the renderer
    Matter.Render.run(render);

    // Create runner
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    // Add click event for fun interactions
    const handleClick = (event: MouseEvent) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Add impulse to nearby balls
      balls.forEach(ball => {
        const distance = Math.sqrt(
          Math.pow(ball.position.x - x, 2) + Math.pow(ball.position.y - y, 2)
        );
        
        if (distance < 100) {
          const force = {
            x: (ball.position.x - x) * 0.001,
            y: (ball.position.y - y) * 0.001
          };
          Matter.Body.applyForce(ball, ball.position, force);
        }
      });
    };

    canvasRef.current.addEventListener('click', handleClick);

    // Cleanup
    return () => {
      if (renderRef.current) {
        Matter.Render.stop(renderRef.current);
        renderRef.current.canvas.removeEventListener('click', handleClick);
      }
      if (engineRef.current) {
        Matter.World.clear(engineRef.current.world, false);
        Matter.Engine.clear(engineRef.current);
      }
    };
  }, []);

  return (
    <div className="physics-playground relative">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">Interactive Physics</h3>
        <p className="text-white/70">Click and drag the balls around!</p>
      </div>
      <div className="relative border border-white/20 rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 backdrop-blur-lg">
        <canvas
          ref={canvasRef}
          width={800}
          height={400}
          className="w-full h-full cursor-pointer"
          data-testid="physics-canvas"
        />
        <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-2xl"></div>
      </div>
    </div>
  );
}