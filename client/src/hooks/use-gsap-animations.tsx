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
          trigger: '#hero',
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

      // Web3/FinTech specific animations for new content
      gsap.utils.toArray('.liquid-card').forEach((card: any, index: number) => {
        gsap.fromTo(card,
          { y: 80, opacity: 0, scale: 0.9, rotationY: -15 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationY: 0,
            duration: 1.2,
            delay: index * 0.15,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      });

      gsap.utils.toArray('.liquid-feature').forEach((feature: any, index: number) => {
        gsap.fromTo(feature,
          { y: 60, opacity: 0, scale: 0.8 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: feature,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      });

      gsap.utils.toArray('.liquid-stat').forEach((stat: any, index: number) => {
        gsap.fromTo(stat,
          { y: 40, opacity: 0, scale: 0.7 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'bounce.out',
            scrollTrigger: {
              trigger: stat,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      });

      // Enhanced slide-in-up animation for headers
      gsap.utils.toArray('.slide-in-up').forEach((elem: any) => {
        gsap.fromTo(elem,
          { y: 100, opacity: 0, rotationX: 45 },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: elem,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      });

      // Web3 section animations
      gsap.utils.toArray('.liquid-section').forEach((section: any, index: number) => {
        gsap.fromTo(section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            }
          }
        );
      });

      // MetaMask button pulse effect
      gsap.to('[data-metamask-button]', {
        scale: 1.05,
        duration: 2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1
      });

      console.log('✅ Web3 GSAP animations loaded successfully!');

      return () => {
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      };
    }
  }, []);
}
