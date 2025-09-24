import { useEffect } from 'react';

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

export function useGSAPAnimations() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      
      gsap.registerPlugin(ScrollTrigger);

      // Navbar blur effect
      gsap.to('.nav', {
        backdropFilter: 'blur(20px)',
        background: 'rgba(15, 23, 42, 0.95)',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top -80px',
          toggleActions: 'play none none reverse'
        }
      });

      // Fade in animations
      gsap.utils.toArray('.fade-in').forEach((elem: any) => {
        gsap.fromTo(elem, 
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: elem,
              start: 'top 85%',
              end: 'bottom 15%',
            }
          }
        );
      });

      // Slide in left animations
      gsap.utils.toArray('.slide-in-left').forEach((elem: any) => {
        gsap.fromTo(elem,
          { x: -60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: elem,
              start: 'top 85%',
            }
          }
        );
      });

      // Slide in right animations
      gsap.utils.toArray('.slide-in-right').forEach((elem: any) => {
        gsap.fromTo(elem,
          { x: 60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: elem,
              start: 'top 85%',
            }
          }
        );
      });

      // Scale in animations
      gsap.utils.toArray('.scale-in').forEach((elem: any) => {
        gsap.fromTo(elem,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: elem,
              start: 'top 85%',
            }
          }
        );
      });

      // Staggered animations for cards
      gsap.utils.toArray('.services-grid .glass-card').forEach((card: any, index: number) => {
        gsap.fromTo(card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
            }
          }
        );
      });

      gsap.utils.toArray('.tech-cards .tech-card').forEach((card: any, index: number) => {
        gsap.fromTo(card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
            }
          }
        );
      });

      // Floating orbs continuous animation (only if elements exist)
      if (document.querySelector('.orb-1')) {
        gsap.to('.orb-1', {
          x: 50,
          y: -30,
          duration: 8,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1
        });
      }

      if (document.querySelector('.orb-2')) {
        gsap.to('.orb-2', {
          x: -40,
          y: 40,
          duration: 6,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1
        });
      }

      if (document.querySelector('.orb-3')) {
        gsap.to('.orb-3', {
          x: -30,
          y: -50,
          duration: 10,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1
        });
      }

      // Initial loading animation (only if element exists)
      if (document.querySelector('.hero-content')) {
        gsap.fromTo('.hero-content', 
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: 'power2.out', delay: 0.3 }
        );
      }

      return () => {
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      };
    }
  }, []);
}
