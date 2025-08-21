import { useEffect } from 'react';

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
    ScrollSmoother: any;
  }
}

export function useScrollSmoother() {
  useEffect(() => {
    // Load ScrollSmoother plugin
    const loadScrollSmoother = async () => {
      if (typeof window !== 'undefined' && window.gsap) {
        // Register ScrollTrigger and ScrollSmoother
        const { gsap } = window;
        
        // Check if ScrollSmoother is available
        if (window.ScrollSmoother) {
          gsap.registerPlugin(window.ScrollTrigger, window.ScrollSmoother);
          
          // Create ScrollSmoother instance
          const smoother = window.ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 2,
            normalizeScroll: true,
            ignoreMobileResize: true,
            effects: true,
            preventDefault: true,
          });

          // Enhanced scroll-triggered animations that work with ScrollSmoother
          gsap.utils.toArray('.liquid-section').forEach((section: any, index: number) => {
            // Scale and fade animation
            gsap.fromTo(section, 
              { 
                scale: 0.8,
                opacity: 0,
                rotationX: -15,
                filter: 'blur(10px)'
              },
              { 
                scale: 1,
                opacity: 1,
                rotationX: 0,
                filter: 'blur(0px)',
                duration: 1.5,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: section,
                  start: 'top 85%',
                  end: 'bottom 15%',
                  toggleActions: 'play none none reverse',
                  refreshPriority: -1,
                }
              }
            );

            // Parallax effect for backgrounds
            if (section.querySelector('.bg-parallax')) {
              gsap.to(section.querySelector('.bg-parallax'), {
                yPercent: -50,
                ease: 'none',
                scrollTrigger: {
                  trigger: section,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: true,
                }
              });
            }
          });

          // Liquid cards stagger animation
          gsap.utils.toArray('.liquid-card').forEach((card: any, index: number) => {
            gsap.fromTo(card,
              {
                y: 100,
                opacity: 0,
                scale: 0.8,
                rotationY: -45
              },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                rotationY: 0,
                duration: 1,
                delay: index * 0.1,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                  trigger: card,
                  start: 'top 90%',
                  toggleActions: 'play none none reverse',
                }
              }
            );
          });

          // Text reveal animations
          gsap.utils.toArray('.liquid-text').forEach((text: any) => {
            const chars = text.textContent.split('');
            text.innerHTML = chars.map((char: string) => 
              char === ' ' ? '&nbsp;' : `<span class="char">${char}</span>`
            ).join('');
            
            gsap.fromTo(text.querySelectorAll('.char'),
              { 
                y: 100,
                opacity: 0,
                rotationX: -90
              },
              {
                y: 0,
                opacity: 1,
                rotationX: 0,
                duration: 0.6,
                stagger: 0.02,
                ease: 'back.out(2)',
                scrollTrigger: {
                  trigger: text,
                  start: 'top 80%',
                  toggleActions: 'play none none reverse',
                }
              }
            );
          });

          // Navigation background animation
          const nav = document.querySelector('.liquid-nav');
          if (nav) {
            gsap.to(nav, {
              backgroundColor: 'rgba(15, 23, 42, 0.95)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(99, 102, 241, 0.2)',
              scrollTrigger: {
                trigger: 'body',
                start: 'top -100',
                end: 'bottom bottom',
                toggleActions: 'play none none reverse',
              }
            });
          }

          return smoother;
        }
      }
    };

    const timer = setTimeout(loadScrollSmoother, 1000);
    
    return () => {
      clearTimeout(timer);
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      }
    };
  }, []);
}