
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export function JetonInspiredBackgrounds() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Background transitions with scroll triggers
    const sections = [
      { selector: '.hero-section', background: 'hero' },
      { selector: '.services-section', background: 'services' },
      { selector: '.solutions-section', background: 'solutions' },
      { selector: '.technology-section', background: 'technology' },
      { selector: '.contact-section', background: 'contact' }
    ];

    sections.forEach((section, index) => {
      const element = document.querySelector(section.selector);
      if (!element) return;

      ScrollTrigger.create({
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          gsap.to(`.bg-${section.background}`, { opacity: 1, duration: 1.5, ease: "power2.out" });
          gsap.to(`.bg-layer:not(.bg-${section.background})`, { opacity: 0, duration: 1.5, ease: "power2.out" });
        },
        onLeave: () => {
          if (index < sections.length - 1) {
            gsap.to(`.bg-${section.background}`, { opacity: 0, duration: 1.5, ease: "power2.out" });
          }
        },
        onEnterBack: () => {
          gsap.to(`.bg-${section.background}`, { opacity: 1, duration: 1.5, ease: "power2.out" });
          gsap.to(`.bg-layer:not(.bg-${section.background})`, { opacity: 0, duration: 1.5, ease: "power2.out" });
        },
      });
    });

    // Parallax effects
    gsap.to(".parallax-bg", {
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5
      }
    });

    gsap.to(".parallax-mid", {
      y: -200,
      ease: "none", 
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    gsap.to(".parallax-front", {
      y: -300,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0">
      {/* Hero Section - Jeton-style Raining Code */}
      <div className="bg-layer bg-hero absolute inset-0 opacity-100">
        <JetonRainingCodeBackground />
      </div>

      {/* Services Section - CLI Terminal */}
      <div className="bg-layer bg-services absolute inset-0 opacity-0">
        <CLICommandBackground />
      </div>

      {/* Solutions Section - Database Queries */}
      <div className="bg-layer bg-solutions absolute inset-0 opacity-0">
        <DatabaseQueryBackground />
      </div>

      {/* Technology Section - DevOps Deployment */}
      <div className="bg-layer bg-technology absolute inset-0 opacity-0">
        <DevOpsDeploymentBackground />
      </div>

      {/* Contact Section - API Integration */}
      <div className="bg-layer bg-contact absolute inset-0 opacity-0">
        <APIIntegrationBackground />
      </div>
    </div>
  );
}

// Hero: Jeton-style Raining Code Background
function JetonRainingCodeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Jeton-style programming characters and code snippets
    const characters = 'class(){};function[]=>import{}/\\<>const let var if else return async await try catch';
    const codeWords = ['function', 'class', 'const', 'let', 'var', 'if', 'else', 'return', 'async', 'await', 'import', 'export'];
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    const drops: Array<{y: number, speed: number, opacity: number, isWord: boolean, content: string}> = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = {
        y: Math.random() * -500,
        speed: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        isWord: Math.random() > 0.8,
        content: Math.random() > 0.8 ? codeWords[Math.floor(Math.random() * codeWords.length)] : characters[Math.floor(Math.random() * characters.length)]
      };
    }

    const animate = () => {
      // Jeton-style dark background with slight transparency
      ctx.fillStyle = 'rgba(15, 23, 42, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        const drop = drops[i];
        const hue = (drop.y * 0.5 + i * 30) % 360;
        
        // Jeton-inspired color scheme
        if (drop.y < canvas.height * 0.2) {
          ctx.fillStyle = `hsla(${hue}, 90%, 75%, ${drop.opacity})`;
        } else if (drop.y < canvas.height * 0.5) {
          ctx.fillStyle = `hsla(180, 100%, 60%, ${drop.opacity * 0.8})`;
        } else {
          ctx.fillStyle = `hsla(240, 70%, 50%, ${drop.opacity * 0.6})`;
        }
        
        // Add glow effect for words
        if (drop.isWord) {
          ctx.shadowColor = ctx.fillStyle;
          ctx.shadowBlur = 5;
        } else {
          ctx.shadowBlur = 0;
        }
        
        ctx.fillText(drop.content, i * fontSize, drop.y);
        
        drop.y += drop.speed;
        
        if (drop.y > canvas.height && Math.random() > 0.975) {
          drop.y = Math.random() * -200;
          drop.isWord = Math.random() > 0.8;
          drop.content = drop.isWord ? codeWords[Math.floor(Math.random() * codeWords.length)] : characters[Math.floor(Math.random() * characters.length)];
          drop.opacity = Math.random() * 0.8 + 0.2;
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full parallax-bg" />
      
      {/* Live coding terminal */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[900px] h-[400px] bg-black/90 backdrop-blur-lg rounded-xl border border-green-500/40 overflow-hidden shadow-2xl parallax-mid">
        <div className="bg-gradient-to-r from-green-500/30 to-green-400/20 px-4 py-3 border-b border-green-500/30 flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          </div>
          <span className="ml-2 text-green-300 text-sm font-mono">live-coding-session.js</span>
        </div>
        <LiveCodingTerminal />
      </div>
    </div>
  );
}

// Services: CLI Command Terminal Background
function CLICommandBackground() {
  const [currentCommand, setCurrentCommand] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  
  const commands = [
    '$ docker-compose up -d --scale web=3',
    '$ kubectl apply -f k8s/deployment.yaml', 
    '$ terraform apply -auto-approve -parallelism=10',
    '$ npm install --production --silent',
    '$ git push origin main --force-with-lease',
    '$ pm2 start ecosystem.config.js --env production',
    '$ nginx -t && systemctl reload nginx',
    '$ ansible-playbook deploy.yml --limit production'
  ];
  
  useEffect(() => {
    const command = commands[Math.floor(Date.now() / 4000) % commands.length];
    if (charIndex < command.length) {
      const timer = setTimeout(() => {
        setCurrentCommand(command.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 50 + Math.random() * 50);
      return () => clearTimeout(timer);
    } else {
      const resetTimer = setTimeout(() => {
        setCurrentCommand('');
        setCharIndex(0);
      }, 2000);
      return () => clearTimeout(resetTimer);
    }
  }, [charIndex, commands]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-teal-900 to-cyan-950" />
      <MatrixRain characters="$>|#" color="emerald" />
      
      {/* CLI Terminal */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[900px] h-[400px] bg-black/95 backdrop-blur-lg rounded-xl border border-cyan-500/40 overflow-hidden shadow-2xl parallax-mid">
        <div className="bg-gradient-to-r from-cyan-500/30 to-cyan-400/20 px-4 py-3 border-b border-cyan-500/30 flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          </div>
          <span className="ml-2 text-cyan-300 text-sm font-mono">production-server:/home/admin</span>
        </div>
        <div className="p-6 h-full">
          <div className="text-cyan-400 font-mono text-sm leading-relaxed">
            <div className="mb-2">admin@production-server:~</div>
            <div className="mb-4">
              {currentCommand}
              <span className="inline-block w-2 h-5 bg-cyan-400 animate-pulse ml-1" />
            </div>
            <div className="text-green-300 text-xs space-y-1 opacity-60">
              <div>✓ Services: nginx, docker, postgresql running</div>
              <div>✓ SSL certificates: valid until 2025-12-31</div>
              <div>✓ Disk usage: 45% of 500GB</div>
              <div>✓ Memory usage: 2.1GB / 8GB</div>
              <div>✓ Load average: 0.85, 0.92, 1.05</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Solutions: Database Query Background  
function DatabaseQueryBackground() {
  const [currentQuery, setCurrentQuery] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  
  const queries = [
    'SELECT users.*, profiles.avatar FROM users JOIN profiles ON users.id = profiles.user_id WHERE users.active = true ORDER BY users.created_at DESC;',
    'CREATE TABLE deployments (id SERIAL PRIMARY KEY, app_name VARCHAR(255), status VARCHAR(50), created_at TIMESTAMP DEFAULT NOW());',
    'UPDATE servers SET status = "healthy", last_check = NOW(), cpu_usage = 23.5 WHERE environment = "production";',
    'INSERT INTO audit_logs (action, user_id, timestamp, details) VALUES ("deploy", 1, NOW(), "App deployed successfully to production");'
  ];
  
  useEffect(() => {
    const query = queries[Math.floor(Date.now() / 5000) % queries.length];
    if (charIndex < query.length) {
      const timer = setTimeout(() => {
        setCurrentQuery(query.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 30 + Math.random() * 40);
      return () => clearTimeout(timer);
    } else {
      const resetTimer = setTimeout(() => {
        setCurrentQuery('');
        setCharIndex(0);
      }, 3000);
      return () => clearTimeout(resetTimer);
    }
  }, [charIndex, queries]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-purple-900 to-indigo-950" />
      <MatrixRain characters="SELECT[](){}" color="purple" />
      
      {/* Database Query Terminal */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[900px] h-[400px] bg-black/95 backdrop-blur-lg rounded-xl border border-purple-500/40 overflow-hidden shadow-2xl parallax-mid">
        <div className="bg-gradient-to-r from-purple-500/30 to-purple-400/20 px-4 py-3 border-b border-purple-500/30 flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          </div>
          <span className="ml-2 text-purple-300 text-sm font-mono">database-management.sql</span>
        </div>
        <div className="p-6 h-full">
          <div className="text-purple-400 font-mono text-sm leading-relaxed">
            <div className="text-purple-300 mb-4">postgres=# \\l</div>
            <div className="text-gray-400 text-xs mb-4">
              Connected to database "production_db" as user "admin"<br/>
              SSL connection (protocol: TLSv1.3, cipher: TLS_AES_256_GCM_SHA384)
            </div>
            <div className="mb-4">
              postgres=# {currentQuery}
              <span className="inline-block w-2 h-5 bg-purple-400 animate-pulse ml-1" />
            </div>
            <div className="text-green-300 text-xs opacity-60">
              <div>Query executed successfully</div>
              <div>Rows affected: 1,247 | Execution time: 0.052s</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Technology: DevOps Deployment Background
function DevOpsDeploymentBackground() {
  const [currentScript, setCurrentScript] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  
  const deploymentScript = `#!/bin/bash
echo "Starting deployment pipeline..."

# Build and test
npm run build --production
npm run test:coverage --silent

# Docker deployment
docker build -t myapp:latest .
docker tag myapp:latest registry.company.com/myapp:v1.2.3
docker push registry.company.com/myapp:v1.2.3

# Deploy to Kubernetes
kubectl set image deployment/myapp myapp=registry.company.com/myapp:v1.2.3
kubectl rollout status deployment/myapp --timeout=300s

echo "✓ Deployment completed successfully"
echo "✓ Health checks passing"
echo "✓ Application ready to serve traffic"`;
  
  useEffect(() => {
    if (charIndex < deploymentScript.length) {
      const timer = setTimeout(() => {
        setCurrentScript(deploymentScript.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 25 + Math.random() * 35);
      return () => clearTimeout(timer);
    } else {
      const resetTimer = setTimeout(() => {
        setCurrentScript('');
        setCharIndex(0);
      }, 4000);
      return () => clearTimeout(resetTimer);
    }
  }, [charIndex, deploymentScript]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-950 via-orange-900 to-red-950" />
      <MatrixRain characters="#!/bin/bash" color="amber" />
      
      {/* DevOps Terminal */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[900px] h-[400px] bg-black/95 backdrop-blur-lg rounded-xl border border-amber-500/40 overflow-hidden shadow-2xl parallax-mid">
        <div className="bg-gradient-to-r from-amber-500/30 to-amber-400/20 px-4 py-3 border-b border-amber-500/30 flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          </div>
          <span className="ml-2 text-amber-300 text-sm font-mono">deploy.sh</span>
        </div>
        <div className="p-6 h-full overflow-auto">
          <div className="text-amber-400 font-mono text-sm leading-relaxed">
            <div className="text-amber-300 mb-4">$ chmod +x deploy.sh && ./deploy.sh</div>
            <div className="whitespace-pre-wrap">
              {currentScript}
              <span className="inline-block w-2 h-5 bg-amber-400 animate-pulse ml-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Contact: API Integration Background
function APIIntegrationBackground() {
  const [currentCode, setCurrentCode] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  
  const apiIntegration = `// API Integration & Monitoring Dashboard
const apiClient = {
  baseURL: 'https://api.company.com/v1',
  
  async healthCheck() {
    const response = await fetch(this.baseURL + '/health');
    const data = await response.json();
    console.log('API Health:', data.status);
    return data;
  },
  
  async deployService(config) {
    console.log('Deploying microservice...');
    
    const deployment = await fetch(this.baseURL + '/deploy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(config)
    });
    
    if (deployment.ok) {
      console.log('✓ Service deployed successfully');
      this.monitorHealth(config.serviceName);
    }
  },
  
  monitorHealth(serviceName) {
    setInterval(async () => {
      const health = await this.healthCheck();
      console.log(\`Service \${serviceName}: \${health.status}\`);
    }, 30000);
  }
};

// Start monitoring
apiClient.deployService({
  serviceName: 'user-auth-service',
  replicas: 3,
  environment: 'production'
});`;
  
  useEffect(() => {
    if (charIndex < apiIntegration.length) {
      const timer = setTimeout(() => {
        setCurrentCode(apiIntegration.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 20 + Math.random() * 30);
      return () => clearTimeout(timer);
    } else {
      const resetTimer = setTimeout(() => {
        setCurrentCode('');
        setCharIndex(0);
      }, 5000);
      return () => clearTimeout(resetTimer);
    }
  }, [charIndex, apiIntegration]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950 via-blue-900 to-indigo-950" />
      <MatrixRain characters="API{}/\\<>" color="cyan" />
      
      {/* API Integration Terminal */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[900px] h-[400px] bg-black/95 backdrop-blur-lg rounded-xl border border-cyan-500/40 overflow-hidden shadow-2xl parallax-mid">
        <div className="bg-gradient-to-r from-cyan-500/30 to-cyan-400/20 px-4 py-3 border-b border-cyan-500/30 flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          </div>
          <span className="ml-2 text-cyan-300 text-sm font-mono">api-integration.js</span>
        </div>
        <div className="p-6 h-full overflow-auto">
          <div className="text-cyan-400 font-mono text-sm leading-relaxed">
            <div className="text-cyan-300 mb-4">$ node api-integration.js</div>
            <div className="whitespace-pre-wrap">
              {currentCode}
              <span className="inline-block w-2 h-5 bg-cyan-400 animate-pulse ml-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Matrix Rain Component
function MatrixRain({ characters, color }: { characters: string; color: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const fontSize = 12;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];
    
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;
      
      const colorMap: Record<string, string> = {
        emerald: '#10b981',
        purple: '#8b5cf6',
        amber: '#f59e0b',
        cyan: '#06b6d4'
      };
      
      for (let i = 0; i < drops.length; i++) {
        const char = characters[Math.floor(Math.random() * characters.length)];
        const alpha = Math.max(0.1, 1 - (drops[i] / canvas.height) * 2);
        
        ctx.fillStyle = colorMap[color] + Math.floor(alpha * 255).toString(16).padStart(2, '0');
        ctx.fillText(char, i * fontSize, drops[i]);
        
        drops[i] += Math.random() * 2 + 1;
        
        if (drops[i] > canvas.height && Math.random() > 0.975) {
          drops[i] = Math.random() * -100;
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [characters, color]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-20 parallax-bg" />;
}

// Live Coding Terminal Component
function LiveCodingTerminal() {
  const [currentText, setCurrentText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  
  const codeSnippet = `const ITServiceManager = {
  deployApp: async (config) => {
    console.log('Starting deployment...');
    const result = await docker.deploy(config);
    return { success: true, url: result.url };
  },
  
  monitorServices: () => {
    setInterval(() => {
      const health = checkSystemHealth();
      if (health.status === 'critical') {
        alertTeam(health.message);
      }
    }, 5000);
  }
};`;

  useEffect(() => {
    if (charIndex < codeSnippet.length) {
      const timer = setTimeout(() => {
        setCurrentText(codeSnippet.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 30 + Math.random() * 40);
      return () => clearTimeout(timer);
    } else {
      const resetTimer = setTimeout(() => {
        setCurrentText('');
        setCharIndex(0);
      }, 3000);
      return () => clearTimeout(resetTimer);
    }
  }, [charIndex, codeSnippet]);

  return (
    <div className="p-6 h-full overflow-hidden">
      <div className="text-green-400 font-mono text-sm leading-relaxed">
        <div className="text-green-300 mb-4">$ npm run dev</div>
        <div className="whitespace-pre-wrap">
          {currentText}
          <span className="inline-block w-2 h-5 bg-green-400 animate-pulse ml-1" />
        </div>
      </div>
    </div>
  );
}

// Smooth wrapper for GSAP ScrollSmoother
export function JetonSmoothWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div id="smooth-wrapper" className="overflow-hidden">
      <div id="smooth-content" className="relative">
        {children}
      </div>
    </div>
  );
}
