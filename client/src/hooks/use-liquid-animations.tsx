import { useEffect } from 'react';

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

export function useLiquidAnimations() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      
      gsap.registerPlugin(ScrollTrigger);

      // Liquid morphing effects for sections
      gsap.utils.toArray('.liquid-section').forEach((section: any) => {
        gsap.fromTo(section, 
          { 
            scale: 0.8,
            opacity: 0,
            filter: 'blur(20px)',
            rotationX: -15
          },
          { 
            scale: 1,
            opacity: 1,
            filter: 'blur(0px)',
            rotationX: 0,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              end: 'bottom 15%',
            }
          }
        );
      });

      // Flowing text animations
      gsap.utils.toArray('.liquid-text').forEach((text: any) => {
        const chars = text.textContent.split('');
        text.innerHTML = chars.map((char: string) => `<span class="char">${char}</span>`).join('');
        
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
            duration: 0.8,
            stagger: 0.03,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: text,
              start: 'top 80%',
            }
          }
        );
      });

      // Liquid cards with morphing effect
      gsap.utils.toArray('.liquid-card').forEach((card: any, index: number) => {
        gsap.fromTo(card,
          {
            scale: 0,
            rotation: -180,
            opacity: 0,
            filter: 'hue-rotate(180deg)'
          },
          {
            scale: 1,
            rotation: 0,
            opacity: 1,
            filter: 'hue-rotate(0deg)',
            duration: 1.2,
            delay: index * 0.1,
            ease: 'elastic.out(1, 0.8)',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            }
          }
        );
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      };
    }
  }, []);
}