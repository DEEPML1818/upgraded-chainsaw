import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ServicesCyberBackground } from "@/components/services-cyber-background";
import { useGSAPInit } from "@/hooks/use-gsap-init";
import { useGSAPAnimations } from "@/hooks/use-gsap-animations";
import { useGSAPScrollSmoother } from "@/hooks/use-gsap-scroll-smoother";
import {
  Users,
  Cloud,
  Shield,
  Zap,
  Settings,
  CheckCircle2,
  ArrowRight,
  Target,
  Lightbulb,
  Cog,
  TrendingUp,
  Calendar,
} from "lucide-react";

export default function Consulting() {
  useGSAPInit();
  useGSAPAnimations();
  useGSAPScrollSmoother();

  const consultingServices = [
    {
      icon: Target,
      title: "IT Strategy & Planning",
      description:
        "Comprehensive IT roadmaps aligned with your business goals, technology assessments, and digital transformation strategies.",
    },
    {
      icon: Cloud,
      title: "Cloud Migration & Optimization",
      description:
        "Expert guidance for cloud adoption, migration strategies, cost optimization, and hybrid cloud architectures.",
    },
    {
      icon: Shield,
      title: "Cybersecurity Consulting",
      description:
        "Security assessments, compliance audits, risk management frameworks, and incident response planning.",
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description:
        "Process automation, workflow optimization, technology modernization, and change management support.",
    },
    {
      icon: Settings,
      title: "System Integration",
      description:
        "API development, third-party integrations, legacy system modernization, and data migration projects.",
    },
    {
      icon: TrendingUp,
      title: "IT Governance & Compliance",
      description:
        "Policy development, compliance frameworks, audit preparation, and governance best practices implementation.",
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Discovery",
      description:
        "We analyze your current IT infrastructure, business processes, and identify pain points and opportunities for improvement.",
    },
    {
      step: "02",
      title: "Planning",
      description:
        "Develop a comprehensive strategy with clear timelines, budgets, and success metrics tailored to your specific needs.",
    },
    {
      step: "03",
      title: "Implementation",
      description:
        "Execute the plan with minimal disruption to your operations, providing regular updates and adjustments as needed.",
    },
    {
      step: "04",
      title: "Optimization",
      description:
        "Monitor performance, gather feedback, and continuously optimize solutions to ensure long-term success and ROI.",
    },
  ];

  const differentiators = [
    {
      icon: Users,
      title: "Deep Expertise",
      description:
        "Our certified consultants bring years of experience across various industries and technologies.",
    },
    {
      icon: Lightbulb,
      title: "Tailored Solutions",
      description:
        "We don't believe in one-size-fits-all. Every solution is customized to your unique business requirements.",
    },
    {
      icon: Cog,
      title: "End-to-End Support",
      description:
        "From initial assessment to post-implementation support, we're with you every step of the way.",
    },
  ];

  return (
    <div
      id="smooth-wrapper"
      className="min-h-screen bg-slate-950 flex flex-col relative"
    >
      <ServicesCyberBackground />
      <Navigation />

      <div id="smooth-content" className="flex-1">
        <main className="container mx-auto px-4">
          {/* Hero Section */}
          <section
            className="
              liquid-section
              w-full
              h-auto                /* mobile: wrap to content */
              sm:h-[30vh]           /* ≥640px: 30vh */
              md:h-[35vh]           /* ≥768px: 35vh */
              lg:h-[45vh]           /* ≥1024px: 45vh */
              xl:h-[55vh]           /* ≥1280px: 55vh */
              flex items-center justify-center
              relative overflow-hidden
              pt-16 sm:pt-20
            "
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-indigo-950/40" />

            <div
              className="
                relative z-10 text-center
                px-4
                max-w-xs              /* mobile */
                sm:max-w-md           /* ≥640px */
                md:max-w-2xl          /* ≥768px */
                lg:max-w-4xl          /* ≥1024px */
              "
            >
              <h1
                className="
                  text-3xl              /* mobile */
                  sm:text-4xl           /* ≥640px */
                  md:text-6xl           /* ≥768px */
                  lg:text-7xl           /* ≥1024px */
                  font-bold
                  mb-4 sm:mb-6 md:mb-8
                  text-white
                  slide-in-up
                "
              >
                IT{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Consulting
                </span>
              </h1>

              <p
                className="
                  text-sm               /* mobile */
                  sm:text-base          /* ≥640px */
                  md:text-lg            /* ≥768px */
                  lg:text-xl            /* ≥1024px */
                  text-gray-300
                  mb-4 sm:mb-6
                  leading-relaxed
                  font-light
                  max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl
                  mx-auto
                  fade-in
                "
              >
                Strategic technology guidance to transform your business and
                accelerate growth through smart IT decisions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <button
                  className="
                    bg-indigo-500 hover:bg-indigo-600
                    text-white
                    px-6 sm:px-8
                    py-2 sm:py-3
                    rounded-lg
                    font-semibold
                    text-sm sm:text-base
                    transition-colors
                    flex items-center gap-1 sm:gap-2
                  "
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Schedule Free Consultation</span>
                </button>

                <button
                  className="
                    border border-indigo-400/30
                    text-indigo-400 hover:bg-indigo-500 hover:text-white
                    px-6 sm:px-8
                    py-2 sm:py-3
                    rounded-lg
                    font-semibold
                    text-sm sm:text-base
                    transition-colors
                  "
                >
                  View Case Studies
                </button>
              </div>
            </div>
          </section>

          {/* About Consulting */}
          <section className="liquid-section py-32 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="fade-in">
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                    Navigate{" "}
                    <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                      Complex
                    </span>{" "}
                    IT Challenges
                  </h2>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    In today's rapidly evolving digital landscape, businesses
                    face increasing pressure to innovate while maintaining
                    operational efficiency. Our IT consulting services bridge
                    the gap between technology potential and business reality.
                  </p>
                  <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                    Whether you're struggling with legacy systems, planning a
                    digital transformation, or need strategic technology
                    guidance, our experienced consultants provide the expertise
                    and objectivity needed to make informed decisions.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        Proven Track Record
                      </h4>
                      <p className="text-gray-400 text-sm">
                        200+ successful consulting engagements
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative fade-in">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl border border-indigo-500/20 backdrop-blur-sm p-8">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-indigo-400 mb-2">
                          200+
                        </div>
                        <div className="text-gray-300 text-sm">
                          Projects Completed
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-400 mb-2">
                          95%
                        </div>
                        <div className="text-gray-300 text-sm">
                          Client Satisfaction
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">
                          15+
                        </div>
                        <div className="text-gray-300 text-sm">
                          Years Experience
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-400 mb-2">
                          50+
                        </div>
                        <div className="text-gray-300 text-sm">
                          Industries Served
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Consulting Services */}
          <section className="liquid-section py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-8 relative z-10">
              <div className="text-center mb-20 fade-in">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white slide-in-up">
                  Our{" "}
                  <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    Consulting Services
                  </span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Comprehensive IT consulting services designed to address your
                  unique business challenges
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {consultingServices.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div
                      key={index}
                      className="liquid-card transform transition-transform hover:scale-105"
                    >
                      <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-indigo-500/20 backdrop-blur-sm h-full group hover:border-indigo-400/40 transition-all duration-300">
                        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6 border border-indigo-500/30 group-hover:border-indigo-400/50 transition-all duration-300">
                          <IconComponent className="w-8 h-8 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <button className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium group-hover:gap-3 transition-all duration-200">
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* How We Work */}
          <section className="liquid-section py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-8 relative z-10">
              <div className="text-center mb-20 fade-in">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white slide-in-up">
                  How{" "}
                  <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    We Work
                  </span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Our proven 4-step methodology ensures successful project
                  delivery and lasting business value
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {workflowSteps.map((step, index) => (
                  <div
                    key={index}
                    className="liquid-card transform transition-transform hover:scale-105 relative"
                  >
                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-gray-600/20 backdrop-blur-sm h-full text-center">
                      <div className="text-6xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    {index < workflowSteps.length - 1 && (
                      <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                        <ArrowRight className="w-8 h-8 text-indigo-400/50" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="liquid-section py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-8 relative z-10">
              <div className="text-center mb-20 fade-in">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white slide-in-up">
                  Why Choose{" "}
                  <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    Our Team
                  </span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  What sets our consulting approach apart from the rest
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {differentiators.map((diff, index) => {
                  const IconComponent = diff.icon;
                  return (
                    <div key={index} className="text-center fade-in">
                      <div className="w-20 h-20 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-indigo-500/30">
                        <IconComponent className="w-10 h-10 text-indigo-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {diff.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {diff.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Certifications & Partners */}
              <div className="mt-20 text-center">
                <h3 className="text-2xl font-bold text-white mb-8">
                  Certified Professionals & Trusted Partners
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                  <div className="bg-slate-800/30 rounded-xl p-4 border border-gray-700/30">
                    <div className="text-indigo-400 font-semibold text-sm">
                      Microsoft Certified
                    </div>
                  </div>
                  <div className="bg-slate-800/30 rounded-xl p-4 border border-gray-700/30">
                    <div className="text-indigo-400 font-semibold text-sm">
                      AWS Partner
                    </div>
                  </div>
                  <div className="bg-slate-800/30 rounded-xl p-4 border border-gray-700/30">
                    <div className="text-indigo-400 font-semibold text-sm">
                      Google Cloud
                    </div>
                  </div>
                  <div className="bg-slate-800/30 rounded-xl p-4 border border-gray-700/30">
                    <div className="text-indigo-400 font-semibold text-sm">
                      CompTIA
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="liquid-section py-32 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-8 relative z-10 text-center">
              <div className="bg-gradient-to-br from-indigo-800/50 to-purple-900/50 rounded-3xl border border-indigo-500/20 backdrop-blur-sm p-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                  Ready to Transform Your{" "}
                  <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    IT Strategy?
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
                  Schedule a free consultation with our IT experts and discover
                  how we can help accelerate your business growth through
                  strategic technology decisions.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                  <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-10 py-4 rounded-lg font-semibold text-xl transition-colors flex items-center gap-3">
                    <Calendar className="w-6 h-6" />
                    Schedule a Free Consultation
                  </button>
                  <button className="border border-indigo-400/30 text-indigo-400 hover:text-white hover:border-indigo-400 px-10 py-4 rounded-lg font-semibold text-xl transition-colors">
                    Download Our Brochure
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-indigo-500/20">
                  <div>
                    <div className="text-2xl font-bold text-indigo-400 mb-2">
                      Free
                    </div>
                    <div className="text-gray-300">Initial Consultation</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400 mb-2">
                      24-48hrs
                    </div>
                    <div className="text-gray-300">Response Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-cyan-400 mb-2">
                      No Obligation
                    </div>
                    <div className="text-gray-300">Assessment & Quote</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}
