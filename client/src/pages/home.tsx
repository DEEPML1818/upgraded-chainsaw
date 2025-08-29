import { useEffect, useState, lazy, Suspense } from "react";
import { ErrorBoundary } from "@/components/error-boundary";
import { FramerCodingBackground } from "@/components/framer-coding-background";
import { FramerHeroSection } from "@/components/framer-hero-section";
import { SecurityFeatures } from "@/components/security-features";
import { ServicesCybersec } from "@/components/services-cybersec";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { LiquidSolutions } from "@/components/liquid-solutions";
import { LiquidTechnology } from "@/components/liquid-technology";
import { LiquidCTA } from "@/components/liquid-cta";
import { useGSAPInit } from "@/hooks/use-gsap-init";
import { useGSAPAnimations } from "@/hooks/use-gsap-animations";
import { useGSAPScrollSmoother } from "@/hooks/use-gsap-scroll-smoother";
import { useLenis } from "@/hooks/use-lenis";
import { useLiquidAnimations } from "@/hooks/use-liquid-animations";
import { useJetonAnimations } from "@/hooks/use-jeton-animations";

// Lazy load heavy components only for desktop
const LazyFramerCodingBackground = lazy(() =>
  import("@/components/framer-coding-background").then((module) => ({
    default: module.FramerCodingBackground,
  })),
);

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device with debouncing
    let timeoutId: NodeJS.Timeout;

    const checkMobile = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const mobile =
          window.innerWidth <= 768 ||
          /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent,
          );
        setIsMobile(mobile);
      }, 100);
    };

    // Initial check
    const initialMobile =
      window.innerWidth <= 768 ||
      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      );
    setIsMobile(initialMobile);

    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
      clearTimeout(timeoutId);
    };
  }, []);

  // Initialize GSAP with scroll triggers
  useGSAPInit();
  useGSAPAnimations();
  useGSAPScrollSmoother();

  // Simplified animations for better performance

  useEffect(() => {
    // Performance monitoring for liquid animations
    let lastTime = performance.now();
    let frameCount = 0;

    const monitorPerformance = () => {
      frameCount++;
      const currentTime = performance.now();

      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        if (fps < 30) {
          // Reduce animation quality if performance is poor
          document.body.classList.add("reduced-motion");
        }
        frameCount = 0;
        lastTime = currentTime;
      }

      requestAnimationFrame(monitorPerformance);
    };

    monitorPerformance();

    // Error handling for external libraries
    const handleError = (e: ErrorEvent) => {
      if (
        e.filename &&
        (e.filename.includes("lenis") || e.filename.includes("gsap"))
      ) {
        // Fallback to CSS animations if libraries fail
        document.body.classList.add("fallback-animations");
        console.warn("Animation libraries failed to load, using CSS fallbacks");
      }
    };

    window.addEventListener("error", handleError);

    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <div
      id="smooth-wrapper"
      className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 relative overflow-hidden flex flex-col"
    >
      {/* Framer Motion coding background */}
      {!isMobile ? (
        <Suspense fallback={<div className="fixed inset-0 bg-slate-950"></div>}>
          <LazyFramerCodingBackground />
        </Suspense>
      ) : (
        <FramerCodingBackground />
      )}

      {/* Floating GSAP Orbs */}
      <div className="orb-1 floating-orb"></div>
      <div className="orb-2 floating-orb"></div>
      <div className="orb-3 floating-orb"></div>

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <ErrorBoundary>
        <div id="smooth-content" className="relative z-20 flex-1">
          <div className="liquid-section hero">
            <FramerHeroSection />
          </div>
          <div className="liquid-section fade-in">
            <SecurityFeatures />
          </div>
          <div className="liquid-section fade-in">
            <ServicesCybersec />
          </div>
          <div className="liquid-section scale-in">
            <LiquidSolutions />
          </div>
          <div className="liquid-section slide-in-right">
            <LiquidTechnology />
          </div>
          <div className="liquid-section fade-in">
            <LiquidCTA />
          </div>
        </div>
      </ErrorBoundary>

      <Footer />
    </div>
  );
}
