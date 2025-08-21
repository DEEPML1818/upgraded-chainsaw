import { useEffect } from 'react';

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

export function useJetonAnimations() {
  useEffect(() => {
    if (typeof window === 'undefined' || !window.gsap) return;
    
    const { gsap } = window;
    
    if (!window.ScrollTrigger) {
      console.warn('ScrollTrigger not loaded');
      return;
    }
    
    gsap.registerPlugin(window.ScrollTrigger);

    // Jeton-style flowing text animations
    const animateText = (selector: string, delay = 0) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element, index) => {
        const text = element.textContent || '';
        const chars = text.split('');
        
        element.innerHTML = chars.map(char => 
          char === ' ' ? '&nbsp;' : `<span class="char" style="display: inline-block;">${char}</span>`
        ).join('');
        
        const charElements = element.querySelectorAll('.char');
        
        gsap.fromTo(charElements, 
          {
            y: 100,
            opacity: 0,
            rotation: 15,
            scale: 0.3
          },
          {
            y: 0,
            opacity: 1,
            rotation: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.03,
            delay: delay + (index * 0.1),
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    };

    // Flowing card animations like Jeton
    const animateCards = () => {
      const cards = document.querySelectorAll('.flow-card');
      cards.forEach((card, index) => {
        gsap.fromTo(card,
          {
            y: 150,
            opacity: 0,
            scale: 0.8,
            rotationY: -25,
            z: -100
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            rotationY: 0,
            z: 0,
            duration: 1.2,
            ease: "power3.out",
            delay: index * 0.15,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Hover effects
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            rotationY: 5,
            z: 50,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            rotationY: 0,
            z: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });
    };

    // Flowing section transitions
    const animateSections = () => {
      const sections = document.querySelectorAll('.flow-section');
      sections.forEach((section, index) => {
        const direction = index % 2 === 0 ? -100 : 100;
        
        gsap.fromTo(section,
          {
            x: direction,
            opacity: 0,
            scale: 0.95,
            rotation: direction > 0 ? 2 : -2
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
              end: "bottom 30%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    };

    // Liquid hero animation
    const animateHero = () => {
      const hero = document.querySelector('.liquid-hero');
      if (!hero) return;

      gsap.fromTo('.hero-title', 
        {
          y: 100,
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.3
        }
      );

      gsap.fromTo('.hero-subtitle', 
        {
          y: 80,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.6
        }
      );

      gsap.fromTo('.hero-cta', 
        {
          y: 60,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          delay: 0.9
        }
      );
    };

    // Parallax background elements
    const animateParallax = () => {
      const parallaxElements = document.querySelectorAll('.parallax-bg');
      parallaxElements.forEach((element) => {
        gsap.to(element, {
          yPercent: -30,
          ease: "none",
          scrollTrigger: {
            trigger: element.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      });
    };

    // Floating particles animation
    const animateParticles = () => {
      const particles = document.querySelectorAll('.floating-particle');
      particles.forEach((particle, index) => {
        gsap.to(particle, {
          y: "random(-100, 100)",
          x: "random(-50, 50)",
          rotation: "random(-180, 180)",
          duration: "random(8, 15)",
          ease: "none",
          repeat: -1,
          yoyo: true,
          delay: index * 0.5
        });
      });
    };

    // Initialize all animations
    setTimeout(() => {
      animateText('.flow-text');
      animateCards();
      animateSections();
      animateHero();
      animateParallax();
      animateParticles();
    }, 100);

    // Cleanup
    return () => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
      }
    };
  }, []);
}