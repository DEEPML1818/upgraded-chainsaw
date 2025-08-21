import { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';
import { motion } from 'framer-motion';

export function EnhancedPhysicsPlayground() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine>();
  const renderRef = useRef<Matter.Render>();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!sceneRef.current) return;

    const { Engine, Render, World, Bodies, Mouse, MouseConstraint, Runner } = Matter;

    // Create engine
    const engine = Engine.create();
    engineRef.current = engine;
    engine.world.gravity.y = 0.8;

    // Create renderer
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: Math.min(800, window.innerWidth - 40),
        height: 400,
        wireframes: false,
        background: 'transparent',
        showVelocity: false,
        showAngleIndicator: false,
        showDebug: false
      }
    });
    renderRef.current = render;

    // Create walls
    const wallOptions = { 
      isStatic: true, 
      render: { 
        fillStyle: 'rgba(99, 102, 241, 0.2)',
        strokeStyle: 'rgba(99, 102, 241, 0.5)',
        lineWidth: 2
      } 
    };

    const walls = [
      Bodies.rectangle(render.options.width! / 2, render.options.height! - 10, render.options.width!, 20, wallOptions),
      Bodies.rectangle(render.options.width! / 2, 10, render.options.width!, 20, wallOptions),
      Bodies.rectangle(10, render.options.height! / 2, 20, render.options.height!, wallOptions),
      Bodies.rectangle(render.options.width! - 10, render.options.height! / 2, 20, render.options.height!, wallOptions)
    ];

    // Add walls to world
    World.add(engine.world, walls);

    // Create mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

    World.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    // Create runner
    const runner = Runner.create();

    // Function to add emoji balls
    const addEmojiBall = (x?: number, y?: number) => {
      const emojis = ['💰', '💎', '🚀', '⚡', '🌟', '💫', '🔥', '💯', '🎯', '🏆'];
      const emoji = emojis[Math.floor(Math.random() * emojis.length)];
      
      const ball = Bodies.circle(
        x || Math.random() * (render.options.width! - 100) + 50,
        y || 50,
        20,
        {
          restitution: 0.7,
          friction: 0.001,
          render: {
            fillStyle: 'transparent',
            strokeStyle: 'rgba(99, 102, 241, 0.3)',
            lineWidth: 1
          }
        }
      );

      // Add emoji as text overlay using encodeURIComponent
      const svgString = `<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><text x="20" y="28" text-anchor="middle" font-size="24">${emoji}</text></svg>`;
      ball.render.sprite = {
        texture: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}`,
        xScale: 1,
        yScale: 1
      };

      World.add(engine.world, ball);
    };

    // Auto-add balls
    const addBallInterval = setInterval(() => {
      if (engine.world.bodies.length < 20) {
        addEmojiBall();
      }
    }, 2000);

    // Add initial balls
    for (let i = 0; i < 5; i++) {
      setTimeout(() => addEmojiBall(), i * 500);
    }

    // Click to add balls
    const handleClick = (event: MouseEvent) => {
      const rect = render.canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      addEmojiBall(x, y);
    };

    render.canvas.addEventListener('click', handleClick);

    // Start the engine and renderer
    Render.run(render);
    Runner.run(runner, engine);
    setIsPlaying(true);

    // Cleanup
    return () => {
      clearInterval(addBallInterval);
      render.canvas.removeEventListener('click', handleClick);
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  const resetPlayground = () => {
    if (engineRef.current) {
      const bodies = engineRef.current.world.bodies.filter(body => !body.isStatic);
      Matter.World.remove(engineRef.current.world, bodies);
    }
  };

  const addRandomBalls = () => {
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        const x = Math.random() * 600 + 100;
        const y = 50;
        if (engineRef.current && renderRef.current) {
          const emojis = ['💰', '💎', '🚀', '⚡', '🌟', '💫', '🔥', '💯', '🎯', '🏆'];
          const emoji = emojis[Math.floor(Math.random() * emojis.length)];
          
          const svgString = `<svg width="40" height="40" xmlns="http://www.w3.org/2000/svg"><text x="20" y="28" text-anchor="middle" font-size="24">${emoji}</text></svg>`;
          const ball = Matter.Bodies.circle(x, y, 20, {
            restitution: 0.7,
            friction: 0.001,
            render: {
              sprite: {
                texture: `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgString)}`,
                xScale: 1,
                yScale: 1
              }
            }
          });

          Matter.World.add(engineRef.current.world, ball);
        }
      }, i * 200);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-6 mb-12"
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">Interactive Physics Playground</h3>
        <p className="text-white/70">Click to add emoji balls • Drag them around • Watch the physics!</p>
      </div>
      
      <div className="flex justify-center mb-4">
        <div 
          ref={sceneRef} 
          className="rounded-2xl overflow-hidden border border-white/20"
          style={{ 
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)'
          }}
        />
      </div>
      
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={addRandomBalls}
          className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 transform hover:scale-105"
          data-testid="add-balls-button"
        >
          Add More Balls
        </button>
        <button
          onClick={resetPlayground}
          className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105"
          data-testid="reset-playground-button"
        >
          Reset Playground
        </button>
      </div>
      
      {isPlaying && (
        <div className="text-center mt-4">
          <div className="inline-flex items-center gap-2 text-green-400 text-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            Physics Engine Active
          </div>
        </div>
      )}
    </motion.div>
  );
}