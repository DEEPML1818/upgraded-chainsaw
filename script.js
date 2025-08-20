/**
 * main.js
 * ----------------------------------------------------------------------
 * CDN / npm dependencies (choose CDN or local copies):
 *
 * CDN recommended (already used in index.html):
 * - THREE: https://unpkg.com/three@0.154.0/build/three.min.js
 * - GSAP:  https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js
 * - ScrollTrigger (GSAP plugin):
 *         https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js
 *
 * If using npm, install:
 *   npm i three gsap
 *
 * Overview:
 * - Renders an inside-out cylinder (tunnel) with a shader to create swirling bands.
 * - Uses GSAP ScrollTrigger to map page scroll to uniforms.u_scroll and camera.z.
 * - Adds/removes .active on .animate-in elements via ScrollTrigger.batch for performant DOM animations.
 * - Pins Cloud Architecture panel during mid-scroll.
 *
 * Customization points (quick):
 *  - Tunnel length: change `TUNNEL_LENGTH` constant
 *  - Colors: change uniforms.colorA/colorB/bandColor
 *  - Performance: reduce radialSegments / heightSegments or cap DPR
 *
 * NOTE: keep shader complexity balanced for mobile. For low-power fallback, hide canvas and use CSS gradient.
 * ----------------------------------------------------------------------
 */

(() => {
  // Early low-power fallback hint (uncomment to enable quick fallback)
  // const isLowPower = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  // if (isLowPower) {
  //   document.getElementById('tunnel-bg').style.display = 'none';
  //   document.body.style.background = 'linear-gradient(180deg, #001f3f, #007bff)';
  //   // continue to initialize DOM animations only (no WebGL)
  // }

  // -----------------------
  // Scene setup
  // -----------------------
  const canvas = document.getElementById('tunnel-bg');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2)); // cap DPR for performance
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  renderer.setClearColor(0x000000, 0); // transparent background

  const scene = new THREE.Scene();

  // Perspective camera: positioned slightly inside entrance; we'll move along negative Z
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 5000);
  camera.position.set(0, 0, 5); // start just in front of tunnel entrance

  // -----------------------
  // Tunnel geometry + shader
  // -----------------------
  const TUNNEL_LENGTH = 1200;      // change this to make tunnel longer/shorter
  const RADIUS = 12;
  const RADIAL_SEGMENTS = 128;     // reduce for lower GPU cost
  const HEIGHT_SEGMENTS = 800;     // reduce for lower GPU cost

  // Cylinder centered at origin; we'll translate so entrance is near z=0 and deep end negative
  const geometry = new THREE.CylinderGeometry(RADIUS, RADIUS, TUNNEL_LENGTH, RADIAL_SEGMENTS, Math.max(4, Math.floor(HEIGHT_SEGMENTS/10)), true);
  // Translate cylinder so that one end is at z=0 (entrance) and the rest goes negative z
  geometry.translate(0, 0, -TUNNEL_LENGTH/2);

  // Vertex shader (pass UV)
  const vertexShader = `
    varying vec2 vUv;
    varying vec3 vPos;
    void main(){
      vUv = uv;
      vPos = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  // Fragment shader: layered bands + fbm-like noise + depth-based color blend
  const fragmentShader = `
    precision highp float;
    varying vec2 vUv;
    varying vec3 vPos;

    uniform float u_time;
    uniform float u_scroll;
    uniform vec2  u_resolution;
    uniform vec3  colorA;
    uniform vec3  colorB;
    uniform vec3  bandColor;

    // Simple hash & noise (compact IQ-style)
    float hash(vec2 p){
      p = vec2(dot(p,vec2(127.1,311.7)), dot(p,vec2(269.5,183.3)));
      return fract(sin(p.x+p.y) * 43758.5453123);
    }

    float noise(vec2 p){
      vec2 i = floor(p);
      vec2 f = fract(p);
      float a = hash(i);
      float b = hash(i + vec2(1.0,0.0));
      float c = hash(i + vec2(0.0,1.0));
      float d = hash(i + vec2(1.0,1.0));
      vec2 u = f*f*(3.0-2.0*f);
      return mix(a,b,u.x) + (c-a)*u.y*(1.0-u.x) + (d-b)*u.x*u.y;
    }

    float fbm(vec2 p){
      float v = 0.0;
      float a = 0.5;
      for(int i=0;i<4;i++){
        v += a * noise(p);
        p *= 2.0;
        a *= 0.5;
      }
      return v;
    }

    void main(){
      // vUv.x around circumference, vUv.y along length (0 entrance -> 1 deep)
      vec2 uv = vUv;

      float t = u_time * 0.35;
      // small swirl based on circumference & depth
      float swirl = sin(uv.x * 6.2831 + t*0.6) * 0.12;

      // bands along depth with noise modulation
      float bands = sin((uv.y * 40.0) + t*1.8 + swirl * 8.0);
      bands = smoothstep(0.0, 1.0, (bands + 1.0) * 0.5);

      // accent pulses influenced by scroll progress
      float pulse = smoothstep(0.0,1.0, fract(uv.y * 6.0 - t*0.2 + u_scroll * 4.0));
      float combined = mix(bands, pulse, 0.35);

      // depth fade (far end darker)
      float depthFade = pow(1.0 - uv.y, 1.5);

      // base color: blend from colorA (entrance) to colorB (deep)
      vec3 base = mix(colorA, colorB, uv.y * (0.4 + u_scroll*0.6));

      // noise for variation
      float n = fbm(uv * 6.0 + t*0.3);

      // final combine
      vec3 result = base + bandColor * combined * 0.55 * depthFade + 0.06 * n;
      // darken edges slightly
      float edge = smoothstep(0.8, 0.95, abs(uv.x - 0.5) * 2.0);
      result *= mix(1.0, 0.75, edge);

      gl_FragColor = vec4(result, 1.0);
    }
  `;

  // Uniforms: tweak colorA/colorB/bandColor to match brand
  const uniforms = {
    u_time: { value: 0 },
    u_scroll: { value: 0 },
    u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    colorA: { value: new THREE.Color(0x001f3f) }, // entrance deep navy (customize)
    colorB: { value: new THREE.Color(0x007bff) }, // deep azure
    bandColor: { value: new THREE.Color(0x00ffff) } // electric cyan accent
  };

  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms,
    side: THREE.BackSide, // render the inside of the cylinder
    transparent: false
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // Small rotation for dynamic motion
  mesh.rotation.z = 0.0;

  // -----------------------
  // Resize handling
  // -----------------------
  function onResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    renderer.setSize(w, h, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    uniforms.u_resolution.value.set(w, h);
  }
  window.addEventListener('resize', onResize, { passive: true });
  onResize();

  // -----------------------
  // GSAP ScrollTrigger: map scroll to u_scroll and camera.z
  // -----------------------
  gsap.registerPlugin(ScrollTrigger);

  // Proxy object so we can scrub with smoothing
  const proxy = { t: 0 };

  gsap.to(proxy, {
    t: 1,
    ease: "none",
    scrollTrigger: {
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5,
      // markers: true // enable while debugging
    },
    onUpdate: () => {
      const t = proxy.t;
      uniforms.u_scroll.value = t;

      // Map t -> camera.z. Entrance near z=5 to deep ~ -TUNNEL_LENGTH+offset
      const zStart = 5;
      const zEnd = - (TUNNEL_LENGTH - 10);
      camera.position.z = THREE.MathUtils.lerp(zStart, zEnd, t);

      // Slight FOV change for immersion
      camera.fov = THREE.MathUtils.lerp(60, 72, Math.min(1.0, t * 1.2));
      camera.updateProjectionMatrix();

      // small subtle rotation of the tunnel during descent
      mesh.rotation.z = Math.sin(uniforms.u_time.value * 0.02) * 0.02 * (0.5 + t*0.8);
    }
  });

  // -----------------------
  // Render loop
  // -----------------------
  const clock = new THREE.Clock();
  function render() {
    const dt = clock.getDelta();
    uniforms.u_time.value += dt;

    // subtle breathing of tunnel radius (optional visual)
    mesh.scale.setScalar(1.0 + Math.sin(uniforms.u_time.value * 0.2) * 0.002);

    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
  render();

  // -----------------------
  // DOM scroll animations for .animate-in elements
  // -----------------------
  // Use ScrollTrigger.batch for performant handling of many elements:
  const animatedEls = document.querySelectorAll('.animate-in');

  ScrollTrigger.batch(animatedEls, {
    onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, x: 0, stagger: 0.06, duration: 0.7, ease: "power3.out", overwrite: true, onStart() { batch.forEach(e=>e.classList.add('active')); } }),
    onLeave: batch => gsap.to(batch, { opacity: 0, y: 50, duration: 0.45, stagger: 0.02, overwrite: true, onComplete() { batch.forEach(e=>e.classList.remove('active')); } }),
    onEnterBack: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.06, duration: 0.7, ease: "power3.out", overwrite: true, onStart() { batch.forEach(e=>e.classList.add('active')); } }),
    onLeaveBack: batch => gsap.to(batch, { opacity: 0, y: 50, duration: 0.45, stagger: 0.02, overwrite: true, onComplete() { batch.forEach(e=>e.classList.remove('active')); } }),
    start: "top 80%",
    end: "bottom 20%"
  });

  // Additional: handle directional slide from data-dir attr
  document.querySelectorAll('.animate-in[data-dir]').forEach(el => {
    const dir = el.getAttribute('data-dir');
    // set initial transform (if not set in CSS)
    if (dir === 'left') el.style.transform = 'translateX(-80px) translateY(20px)';
    if (dir === 'right') el.style.transform = 'translateX(80px) translateY(20px)';
    if (dir === 'bottom') el.style.transform = 'translateY(80px)';
  });

  // -----------------------
  // Pin: Cloud Architecture panel (node-3) pinned halfway
  // -----------------------
  const pin = document.querySelector('#node-3');
  if (pin) {
    ScrollTrigger.create({
      trigger: pin,
      start: "top top",
      end: "+=100%",
      pin: pin,
      pinSpacing: false
    });
  }

  // -----------------------
  // Progress bar animations (DevOps panel)
  // -----------------------
  document.querySelectorAll('.fill').forEach((fillEl) => {
    const parentPanel = fillEl.closest('.panel');
    ScrollTrigger.create({
      trigger: parentPanel,
      start: "top 80%",
      onEnter: () => {
        const target = parseInt(fillEl.getAttribute('data-target') || '80', 10);
        gsap.to(fillEl, { width: target + "%", duration: 1.1, ease: "power2.out" });
      },
      once: true
    });
  });

  // -----------------------
  // SVG path draw for blockchain net-path
  // -----------------------
  document.querySelectorAll('.net-path').forEach(pathEl => {
    const length = pathEl.getTotalLength();
    pathEl.style.strokeDasharray = length;
    pathEl.style.strokeDashoffset = length;
    ScrollTrigger.create({
      trigger: pathEl.closest('.panel'),
      start: "top 80%",
      onEnter: () => gsap.to(pathEl.style, { strokeDashoffset: 0, duration: 1.6, ease: "power2.out" }),
      onLeaveBack: () => gsap.to(pathEl.style, { strokeDashoffset: length, duration: 0.8, ease: "power2.in" })
    });
  });

  // -----------------------
  // IoT reveal masks
  // -----------------------
  document.querySelectorAll('.iot-card').forEach(card => {
    ScrollTrigger.create({
      trigger: card,
      start: "top 85%",
      onEnter: () => card.classList.add('revealed'),
      onLeaveBack: () => card.classList.remove('revealed')
    });
  });

  // -----------------------
  // Safety: expose simple API for debug / tuning
  // -----------------------
  window.RabbitHoleDebug = {
    uniforms,
    setTunnelLength: (len) => {
      console.warn('Changing tunnel length at runtime is not fully supported in this demo. Edit TUNNEL_LENGTH constant and reload.');
    }
  };

  // End of IIFE
})();
