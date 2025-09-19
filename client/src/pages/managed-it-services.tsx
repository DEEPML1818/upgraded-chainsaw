import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ServicesCyberBackground } from "@/components/services-cyber-background";
import { useGSAPInit } from "@/hooks/use-gsap-init";
import { useGSAPAnimations } from "@/hooks/use-gsap-animations";
import { useGSAPScrollSmoother } from "@/hooks/use-gsap-scroll-smoother";
import { useState } from "react";
import {
  MapPin,
  Search,
  Phone,
  Clock,
  Shield,
  CheckCircle,
  XCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function ManagedITServices() {
  useGSAPInit();
  useGSAPAnimations();
  useGSAPScrollSmoother();

  const [searchLocation, setSearchLocation] = useState("");
  const [mapCenter, setMapCenter] = useState("KL"); // Default to Kuala Lumpur
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // FAQ data
  const faqs = [
    {
      question: 'What does "per device" mean?',
      answer:
        "Per device means each workstation, laptop, or endpoint covered by the plan. Servers are billed separately as add-on services.",
    },
    {
      question: "Do you provide hardware replacements?",
      answer:
        "Hardware is not included in our managed services. We can supply and install hardware at additional cost with transparent pricing.",
    },
    {
      question: "Is support unlimited?",
      answer:
        "Remote support is unlimited within your plan limits. Onsite visits depend on your package tier - RM80 is chargeable, RM120 includes 2 visits/month, RM180 has unlimited visits.",
    },
    {
      question: "How fast will you respond to issues?",
      answer:
        "SLA depends on your plan: RM80 = next business day, RM120 = 4 hours (business hours), RM180 = 1 hour (24/7). Enterprise plans have custom SLAs.",
    },
    {
      question: "What areas do you cover?",
      answer:
        "Onsite support is within 30km of our HQ in Klang. Virtual support covers all of West Malaysia. Outside West Malaysia is available by enquiry.",
    },
    {
      question: "Do you provide weekend or after-hours support?",
      answer:
        "RM180 plan includes 24/7 support. RM80 and RM120 plans can request after-hours support as a billable add-on service.",
    },
    {
      question: "How does the Klang AI free tier work?",
      answer:
        "Klang AI is a free GPT-powered assistant for troubleshooting guidance and FAQs. It provides self-service support but does not replace human engineers.",
    },
    {
      question: "What's included in backup support?",
      answer:
        "RM180 includes endpoint backup services. RM120 can add backup as an optional service. RM80 does not include backup - available as add-on.",
    },
    {
      question: "Do you support servers as well as PCs?",
      answer:
        "Yes, we support servers. Server support is available as an add-on service or included in Enterprise packages with custom pricing.",
    },
    {
      question: "Can services be customized for my business?",
      answer:
        "Absolutely! We can tailor services and create custom SLAs for your specific business needs. Contact us for Enterprise solutions and custom arrangements.",
    },
  ];

  const handleLocationSearch = (location: string) => {
    setSearchLocation(location);
    // Mock distance calculation - in real implementation this would use Google Maps API
    const distances: { [key: string]: number } = {
      "kuala lumpur": 35,
      "petaling jaya": 15,
      "subang jaya": 10,
      "shah alam": 8,
      klang: 0,
      penang: 350,
      "johor bahru": 400,
      "kota kinabalu": 1500,
    };

    const searchKey = location.toLowerCase();
    if (distances[searchKey] !== undefined) {
      setMapCenter(searchKey);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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
              h-auto              /* mobile: wrap content */
              sm:h-[30vh]         /* ≥640px: 30vh */
              md:h-[35vh]         /* ≥768px: 35vh */
              lg:h-[45vh]         /* ≥1024px: 45vh */
              xl:h-[55vh]         /* ≥1280px: 55vh */
              flex items-center
              relative overflow-hidden
              pt-16                /* slightly less top padding */
            "
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-blue-950/40" />

            <div
              className="
                relative z-10 mx-auto text-center
                max-w-xs            /* mobile */
                sm:max-w-md         /* ≥640px */
                md:max-w-2xl        /* ≥768px */
                lg:max-w-4xl        /* ≥1024px */
                px-4
              "
            >
              <h1
                className="
                  text-2xl            /* mobile */
                  sm:text-3xl         /* ≥640px */
                  md:text-5xl         /* ≥768px */
                  lg:text-7xl         /* ≥1024px */
                  font-bold mb-4 text-white slide-in-up
                "
              >
                Managed IT Services{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  for Every Business
                </span>
              </h1>

              <p
                className="
                  text-sm             /* mobile */
                  sm:text-base        /* ≥640px */
                  md:text-lg          /* ≥768px */
                  lg:text-xl          /* ≥1024px */
                  text-gray-300 mb-6 leading-relaxed font-light
                "
              >
                Choose the plan that fits your needs – from free AI support to
                enterprise-level IT management.
              </p>

              <button
                className="
                  bg-gradient-to-r from-blue-500 to-cyan-500
                  hover:from-blue-600 hover:to-cyan-600
                  text-white px-4 py-2 rounded-lg font-semibold text-base
                  transition transform hover:scale-105 shadow-lg
                "
              >
                Talk to Us Today
              </button>
            </div>
          </section>

          {/* IT Packages - Wider Layout */}
          <section className="liquid-section py-32 relative overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-8 relative z-10">
              <div className="text-center mb-20 fade-in">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white slide-in-up">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    IT Support Packages
                  </span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Choose the perfect IT support level for your business needs
                </p>
                {/* ↓ Pointing Arrow using inline SVG */}
                <div className="flex justify-center mt-8">
                  <svg
                    className="w-8 h-8 text-cyan-400 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 services-grid mb-20">
                {/* FREE Plan - Klang AI */}
                <div className="liquid-card transform transition-transform hover:scale-105">
                  <div className="glass-card bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-3xl border border-green-500/20 backdrop-blur-sm h-full relative">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                        FREE TIER
                      </span>
                    </div>

                    <div className="text-center mb-6 pt-4">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        FREE
                      </h3>
                      <p className="text-gray-400 mb-4 text-sm">
                        Klang AI (ChatGPT Store)
                      </p>
                      <div className="text-4xl font-bold text-green-400 mb-2">
                        FREE
                      </div>
                      <p className="text-gray-500 text-sm">
                        Individuals & micro-businesses
                      </p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">
                          AI-powered IT assistant (24/7)
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">
                          Troubleshooting guides & FAQs
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">
                          Best practices recommendations
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-500 text-sm">
                          No human support included
                        </span>
                      </div>
                    </div>

                    <div className="border-t border-gray-700 pt-4 mb-4">
                      <h4 className="font-semibold text-white mb-2 text-sm">
                        Access:
                      </h4>
                      <div className="space-y-1 text-xs text-gray-400">
                        <div>• ChatGPT Store access</div>
                        <div>• Self-service only</div>
                        <div>• Community support</div>
                      </div>
                    </div>

                    <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold text-sm transition-colors">
                      Get Started Free
                    </button>
                  </div>
                </div>

                {/* Essential Plan - RM 80 */}
                <div className="liquid-card transform transition-transform hover:scale-105">
                  <div className="glass-card bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-3xl border border-cyan-500/20 backdrop-blur-sm h-full relative">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                        BASIC CARE
                      </span>
                    </div>

                    <div className="text-center mb-6 pt-4">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Essential Care
                      </h3>
                      <p className="text-gray-400 mb-4 text-sm">
                        Basic IT Support
                      </p>
                      <div className="text-4xl font-bold text-cyan-400 mb-2">
                        RM 80<span className="text-2xl">/device</span>
                      </div>
                      <p className="text-gray-500 text-sm">
                        Small businesses with basic IT needs
                      </p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">
                          Basic IT support (office hours)
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">
                          OS troubleshooting (Win/Mac/Linux)
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">
                          Email & printer support
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">
                          Monthly device health checks
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">
                          Limited endpoint patching
                        </span>
                      </div>
                    </div>

                    <div className="border-t border-gray-700 pt-4 mb-4">
                      <h4 className="font-semibold text-white mb-2 text-sm">
                        SLA:
                      </h4>
                      <div className="space-y-1 text-xs text-gray-400">
                        <div>• Next Business Day response</div>
                        <div>• 9 AM - 6 PM, Mon-Fri</div>
                        <div>• Onsite support chargeable</div>
                      </div>
                    </div>

                    <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-semibold text-sm transition-colors">
                      Choose Essential
                    </button>
                  </div>
                </div>

                {/* Standard Plan - RM 120 */}
                <div className="liquid-card transform transition-transform hover:scale-105">
                  <div className="glass-card bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-3xl border-2 border-purple-500/40 backdrop-blur-sm h-full relative">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                        POPULAR CHOICE
                      </span>
                    </div>

                    <div className="text-center mb-6 pt-4">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Standard Care
                      </h3>
                      <p className="text-gray-400 mb-4 text-sm">
                        SME IT Support
                      </p>
                      <div className="text-4xl font-bold text-purple-400 mb-2">
                        RM 120<span className="text-2xl">/device</span>
                      </div>
                      <p className="text-gray-500 text-sm">
                        SMEs needing proactive monitoring
                      </p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">
                          Everything in Essential, plus:
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">
                          Unlimited remote support
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">
                          Endpoint patching & updates
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">
                          Asset & license management
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">
                          Faster SLA response
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">
                          Extended support hours
                        </span>
                      </div>
                    </div>

                    <div className="border-t border-gray-700 pt-4 mb-4">
                      <h4 className="font-semibold text-white mb-2 text-sm">
                        SLA:
                      </h4>
                      <div className="space-y-1 text-xs text-gray-400">
                        <div>• 4-hour response time</div>
                        <div>• Extended hours support</div>
                        <div>• Quarterly detailed reports</div>
                      </div>
                    </div>

                    <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg font-semibold text-sm transition-colors">
                      Choose Standard
                    </button>
                  </div>
                </div>

                {/* Premium Plan - RM 180 */}
                <div className="liquid-card transform transition-transform hover:scale-105">
                  <div className="glass-card bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-3xl border border-orange-500/20 backdrop-blur-sm h-full">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Premium Care
                      </h3>
                      <p className="text-gray-400 mb-4 text-sm">
                        Enterprise IT Support
                      </p>
                      <div className="text-4xl font-bold text-orange-400 mb-2">
                        RM 180<span className="text-2xl">/device</span>
                      </div>
                      <p className="text-gray-500 text-sm">
                        High availability & compliance
                      </p>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">
                          Everything in Standard, plus:
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">
                          24/7 support coverage
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">
                          Proactive monitoring & incident response
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">
                          Security management (endpoint + firewall)
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">
                          Backup & disaster recovery support
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">
                          Quarterly IT strategy review
                        </span>
                      </div>
                    </div>

                    <div className="border-t border-gray-700 pt-4 mb-4">
                      <h4 className="font-semibold text-white mb-2 text-sm">
                        SLA:
                      </h4>
                      <div className="space-y-1 text-xs text-gray-400">
                        <div>• 1-hour response (24/7)</div>
                        <div>• Priority support queue</div>
                        <div>• Compliance-grade reporting</div>
                      </div>
                    </div>

                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold text-sm transition-colors">
                      Choose Premium
                    </button>
                  </div>
                </div>

                {/* Enterprise Plan - Custom Pricing */}
                <div className="liquid-card transform transition-transform hover:scale-105">
                  <div className="glass-card bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-3xl border-2 border-yellow-500/40 backdrop-blur-sm h-full relative">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg whitespace-nowrap">
                        ENTERPRISE 🚀
                      </span>
                    </div>

                    <div className="text-center mb-6 pt-4">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Enterprise Services
                      </h3>
                      <p className="text-gray-400 mb-4 text-sm">
                        Custom Pricing
                      </p>
                      <div className="text-3xl font-bold text-yellow-400 mb-2">
                        Custom Quote
                      </div>
                      <p className="text-gray-500 text-sm">
                        Medium-to-large companies with complex IT needs
                      </p>
                    </div>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-xs">
                          Domain & Hosting Management (DNS, SSL, renewals)
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-xs">
                          Corporate Email Solutions (Microsoft 365, Google
                          Workspace)
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-xs">
                          Cloud Infrastructure (AWS, Azure, Google Cloud)
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-xs">
                          Server & Virtualization Support (VMware, Hyper-V,
                          Linux)
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-xs">
                          Automation & Workflow Optimization (RPA, AI-driven
                          processes)
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-xs">
                          Network Architecture (LAN/WAN design, VPNs, SD-WAN)
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-xs">
                          Enterprise Security (SIEM, SOC integration,
                          compliance)
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-xs">
                          Scalable Backup & Disaster Recovery (offsite,
                          cloud-based)
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-xs">
                          Custom SLA & Dedicated Account Manager
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-xs">
                          On-site Engineers & Priority Field Support
                        </span>
                      </div>
                    </div>

                    <div className="border-t border-gray-700 pt-4 mb-4">
                      <h4 className="font-semibold text-white mb-2 text-sm">
                        Pricing:
                      </h4>
                      <div className="space-y-1 text-xs text-gray-400">
                        <div>• Quoted per project/device/infrastructure</div>
                        <div>• Custom contract depending on scale</div>
                        <div>• Flexible billing arrangements</div>
                      </div>
                    </div>

                    <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-3 rounded-lg font-semibold text-sm transition-colors">
                      Get Custom Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Feature Comparison Table - Full Width */}
          <section className="liquid-section py-32 relative overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-8 relative z-10">
              <div className="text-center mb-20 fade-in">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white slide-in-up">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Feature Comparison
                  </span>
                </h2>
              </div>

              <div className="liquid-card transform transition-transform hover:scale-[1.01]">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl border border-gray-600/20 backdrop-blur-sm overflow-x-auto">
                  <table
                    className="w-full text-left text-sm"
                    data-testid="comparison-table"
                  >
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="p-3 text-white font-semibold">
                          Feature
                        </th>
                        <th className="p-3 text-green-400 font-semibold text-center">
                          FREE
                          <br />
                          <span className="text-xs font-normal">Klang AI</span>
                        </th>
                        <th className="p-3 text-cyan-400 font-semibold text-center">
                          RM 80
                          <br />
                          <span className="text-xs font-normal">Essential</span>
                        </th>
                        <th className="p-3 text-purple-400 font-semibold text-center">
                          RM 120
                          <br />
                          <span className="text-xs font-normal">Standard</span>
                        </th>
                        <th className="p-3 text-orange-400 font-semibold text-center">
                          RM 180
                          <br />
                          <span className="text-xs font-normal">Premium</span>
                        </th>
                        <th className="p-3 text-yellow-400 font-semibold text-center">
                          Custom
                          <br />
                          <span className="text-xs font-normal">
                            Enterprise
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300 text-xs">
                      <tr className="border-b border-gray-700/50">
                        <td className="p-3 font-medium">Support Type</td>
                        <td className="p-3 text-center">AI Assistant Only</td>
                        <td className="p-3 text-center">Office Hours</td>
                        <td className="p-3 text-center">Extended Hours</td>
                        <td className="p-3 text-center text-green-400">
                          24/7 Remote
                        </td>
                        <td className="p-3 text-center text-green-400">
                          24/7 + Onsite
                        </td>
                      </tr>
                      <tr className="border-b border-gray-700/50">
                        <td className="p-3 font-medium">Human Support</td>
                        <td className="p-3 text-center text-red-400">❌</td>
                        <td className="p-3 text-center text-green-400">✅</td>
                        <td className="p-3 text-center text-green-400">✅</td>
                        <td className="p-3 text-center text-green-400">✅</td>
                        <td className="p-3 text-center text-green-400">✅</td>
                      </tr>
                      <tr className="border-b border-gray-700/50">
                        <td className="p-3 font-medium">SLA Response</td>
                        <td className="p-3 text-center">Instant AI</td>
                        <td className="p-3 text-center">Next Business Day</td>
                        <td className="p-3 text-center">4 hours</td>
                        <td className="p-3 text-center text-green-400">
                          1 hour (24/7)
                        </td>
                        <td className="p-3 text-center text-green-400">
                          Custom SLA
                        </td>
                      </tr>
                      <tr className="border-b border-gray-700/50">
                        <td className="p-3 font-medium">Onsite Support</td>
                        <td className="p-3 text-center text-red-400">❌</td>
                        <td className="p-3 text-center text-red-400">
                          Chargeable
                        </td>
                        <td className="p-3 text-center">2 visits/month</td>
                        <td className="p-3 text-center text-green-400">
                          Unlimited
                        </td>
                        <td className="p-3 text-center text-green-400">
                          Priority Field
                        </td>
                      </tr>
                      <tr className="border-b border-gray-700/50">
                        <td className="p-3 font-medium">Security</td>
                        <td className="p-3 text-center">Self-guidance</td>
                        <td className="p-3 text-center">Basic Antivirus</td>
                        <td className="p-3 text-center">Advanced Suite</td>
                        <td className="p-3 text-center text-green-400">
                          Advanced + EDR
                        </td>
                        <td className="p-3 text-center text-green-400">
                          Enterprise SIEM
                        </td>
                      </tr>
                      <tr className="border-b border-gray-700/50">
                        <td className="p-3 font-medium">Monitoring</td>
                        <td className="p-3 text-center text-red-400">❌</td>
                        <td className="p-3 text-center">Monthly Health</td>
                        <td className="p-3 text-center">Endpoint RMM</td>
                        <td className="p-3 text-center text-green-400">
                          Proactive + Network
                        </td>
                        <td className="p-3 text-center text-green-400">
                          Enterprise SOC
                        </td>
                      </tr>
                      <tr className="border-b border-gray-700/50">
                        <td className="p-3 font-medium">Backup & DR</td>
                        <td className="p-3 text-center text-red-400">❌</td>
                        <td className="p-3 text-center text-red-400">❌</td>
                        <td className="p-3 text-center text-yellow-400">
                          Add-on
                        </td>
                        <td className="p-3 text-center text-green-400">
                          ✅ Included
                        </td>
                        <td className="p-3 text-center text-green-400">
                          Scalable Cloud
                        </td>
                      </tr>
                      <tr className="border-b border-gray-700/50">
                        <td className="p-3 font-medium">Infrastructure</td>
                        <td className="p-3 text-center text-red-400">❌</td>
                        <td className="p-3 text-center text-red-400">❌</td>
                        <td className="p-3 text-center text-red-400">❌</td>
                        <td className="p-3 text-center text-red-400">❌</td>
                        <td className="p-3 text-center text-green-400">
                          Cloud + Servers
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Account Management</td>
                        <td className="p-3 text-center">Community</td>
                        <td className="p-3 text-center">Email Support</td>
                        <td className="p-3 text-center">Quarterly Reports</td>
                        <td className="p-3 text-center text-green-400">
                          Monthly Reviews
                        </td>
                        <td className="p-3 text-center text-green-400">
                          Dedicated Manager
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Extra Billable Services Table */}
          <section className="liquid-section py-32 relative overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-8 relative z-10">
              <div className="text-center mb-20 fade-in">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white slide-in-up">
                  <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                    Extra Billable Services
                  </span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  After Quota / Out of Scope Services
                </p>
              </div>

              <div className="liquid-card">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl border border-gray-600/20 backdrop-blur-sm overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="p-4 text-white font-semibold">
                          Service
                        </th>
                        <th className="p-4 text-white font-semibold">
                          Description
                        </th>
                        <th className="p-4 text-white font-semibold text-center">
                          Rate (RM)
                        </th>
                        <th className="p-4 text-white font-semibold text-center">
                          Location Coverage
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      <tr className="border-b border-gray-700/50">
                        <td className="p-4 font-medium">
                          Extra Remote Support Hours
                        </td>
                        <td className="p-4">
                          Additional remote troubleshooting beyond plan limits
                        </td>
                        <td className="p-4 text-center text-yellow-400">
                          100/hr
                        </td>
                        <td className="p-4 text-center">Anywhere (remote)</td>
                      </tr>
                      <tr className="border-b border-gray-700/50">
                        <td className="p-4 font-medium">
                          Onsite Troubleshooting Beyond Limit
                        </td>
                        <td className="p-4">
                          Engineer dispatched for issues outside plan coverage
                        </td>
                        <td className="p-4 text-center text-yellow-400">
                          150/hr
                        </td>
                        <td className="p-4 text-center">Within 30km HQ</td>
                      </tr>
                      <tr className="border-b border-gray-700/50">
                        <td className="p-4 font-medium">
                          After-Hours Incident Response
                        </td>
                        <td className="p-4">
                          Support outside standard SLA (nights/weekends)
                        </td>
                        <td className="p-4 text-center text-yellow-400">
                          300/case
                        </td>
                        <td className="p-4 text-center">West Malaysia</td>
                      </tr>
                      <tr className="border-b border-gray-700/50">
                        <td className="p-4 font-medium">
                          Break-Fix Hardware Replacement
                        </td>
                        <td className="p-4">
                          Replace/repair failed hardware (labour only)
                        </td>
                        <td className="p-4 text-center text-yellow-400">
                          Quoted
                        </td>
                        <td className="p-4 text-center">Onsite</td>
                      </tr>
                      <tr className="border-b border-gray-700/50">
                        <td className="p-4 font-medium">
                          Special Project Requests
                        </td>
                        <td className="p-4">
                          Ad-hoc IT projects outside scope
                        </td>
                        <td className="p-4 text-center text-yellow-400">
                          Quoted
                        </td>
                        <td className="p-4 text-center">Case by case</td>
                      </tr>
                      <tr className="border-b border-gray-700/50">
                        <td className="p-4 font-medium">
                          Server Support (Add-On)
                        </td>
                        <td className="p-4">
                          Windows/Linux server maintenance not in package
                        </td>
                        <td className="p-4 text-center text-yellow-400">
                          300/server/month
                        </td>
                        <td className="p-4 text-center">Anywhere</td>
                      </tr>
                      <tr className="border-b border-gray-700/50">
                        <td className="p-4 font-medium">
                          Backup & Disaster Recovery (Add-On)
                        </td>
                        <td className="p-4">
                          Endpoint/server backup solutions
                        </td>
                        <td className="p-4 text-center text-yellow-400">
                          30–50/device/month
                        </td>
                        <td className="p-4 text-center">Anywhere</td>
                      </tr>
                      <tr className="border-b border-gray-700/50">
                        <td className="p-4 font-medium">
                          Software Deployment Projects
                        </td>
                        <td className="p-4">
                          Large-scale rollout of apps (e.g., Office, ERP)
                        </td>
                        <td className="p-4 text-center text-yellow-400">
                          Quoted
                        </td>
                        <td className="p-4 text-center">Anywhere</td>
                      </tr>
                      <tr className="border-b border-gray-700/50">
                        <td className="p-4 font-medium">
                          IT Relocation Services
                        </td>
                        <td className="p-4">
                          Moving IT infrastructure to new site
                        </td>
                        <td className="p-4 text-center text-yellow-400">
                          From 1,500/project
                        </td>
                        <td className="p-4 text-center">Onsite</td>
                      </tr>
                      <tr className="border-b border-gray-700/50">
                        <td className="p-4 font-medium">Cybersecurity Audit</td>
                        <td className="p-4">
                          Security assessment & compliance check
                        </td>
                        <td className="p-4 text-center text-yellow-400">
                          From 3,000/project
                        </td>
                        <td className="p-4 text-center">Anywhere</td>
                      </tr>
                      <tr className="border-b border-gray-700/50">
                        <td className="p-4 font-medium">
                          Training & Workshops
                        </td>
                        <td className="p-4">
                          Employee IT or cybersecurity training
                        </td>
                        <td className="p-4 text-center text-yellow-400">
                          1,000/session
                        </td>
                        <td className="p-4 text-center">Onsite/Virtual</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium">
                          Procurement Services
                        </td>
                        <td className="p-4">
                          Sourcing & installing new hardware/software
                        </td>
                        <td className="p-4 text-center text-yellow-400">
                          5–10% procurement fee
                        </td>
                        <td className="p-4 text-center">Anywhere</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Map - Supported Areas */}
          <section className="liquid-section py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-8 relative z-10">
              <div className="text-center mb-20 fade-in">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white slide-in-up">
                  <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    Supported Areas
                  </span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Check our service coverage in your area
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Map Area */}
                <div className="liquid-card">
                  <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl border border-gray-600/20 backdrop-blur-sm p-8">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">
                      Service Coverage Map
                    </h3>

                    {/* Search Bar */}
                    <div className="relative mb-8">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Enter your location (e.g., Kuala Lumpur, Petaling Jaya)"
                        value={searchLocation}
                        onChange={(e) => setSearchLocation(e.target.value)}
                        onKeyPress={(e) =>
                          e.key === "Enter" &&
                          handleLocationSearch(searchLocation)
                        }
                        className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 backdrop-blur-sm"
                      />
                      <button
                        onClick={() => handleLocationSearch(searchLocation)}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white text-sm font-medium transition-colors"
                      >
                        Search
                      </button>
                    </div>

                    {/* Mock Map Display */}
                    <div className="bg-slate-900/80 rounded-2xl p-8 text-center min-h-[400px] flex flex-col justify-center relative border border-gray-700/30">
                      <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                      <h4 className="text-xl font-semibold text-white mb-2">
                        {mapCenter === "klang"
                          ? "HQ Location - Klang"
                          : mapCenter === "kuala lumpur"
                            ? "Kuala Lumpur (35km from HQ)"
                            : mapCenter === "petaling jaya"
                              ? "Petaling Jaya (15km from HQ)"
                              : mapCenter === "subang jaya"
                                ? "Subang Jaya (10km from HQ)"
                                : mapCenter === "shah alam"
                                  ? "Shah Alam (8km from HQ)"
                                  : "Interactive Map - Klang HQ"}
                      </h4>
                      <p className="text-gray-400 mb-6">
                        {mapCenter === "penang" || mapCenter === "johor bahru"
                          ? "Virtual support area - Remote support available"
                          : mapCenter === "kota kinabalu"
                            ? "Out of coverage - Please call for enquiry"
                            : "Onsite support available - Within coverage area"}
                      </p>

                      {/* Coverage Indicators */}
                      <div className="grid grid-cols-3 gap-4 mt-auto">
                        <div
                          className={`p-3 rounded-lg ${mapCenter === "klang" || (mapCenter !== "penang" && mapCenter !== "johor bahru" && mapCenter !== "kota kinabalu") ? "bg-green-500/20 border border-green-500/30" : "bg-gray-700/20 border border-gray-700/30"}`}
                        >
                          <div className="w-3 h-3 bg-green-400 rounded-full mx-auto mb-2"></div>
                          <div className="text-xs text-gray-300">
                            Onsite (≤30km)
                          </div>
                        </div>
                        <div
                          className={`p-3 rounded-lg ${mapCenter === "penang" || mapCenter === "johor bahru" ? "bg-yellow-500/20 border border-yellow-500/30" : "bg-gray-700/20 border border-gray-700/30"}`}
                        >
                          <div className="w-3 h-3 bg-yellow-400 rounded-full mx-auto mb-2"></div>
                          <div className="text-xs text-gray-300">
                            Virtual Only
                          </div>
                        </div>
                        <div
                          className={`p-3 rounded-lg ${mapCenter === "kota kinabalu" ? "bg-red-500/20 border border-red-500/30" : "bg-gray-700/20 border border-gray-700/30"}`}
                        >
                          <div className="w-3 h-3 bg-red-400 rounded-full mx-auto mb-2"></div>
                          <div className="text-xs text-gray-300">
                            Call Enquiry
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Area Details */}
                <div className="space-y-6">
                  <div className="liquid-card">
                    <div className="bg-gradient-to-br from-green-800/50 to-green-900/50 p-6 rounded-2xl border border-green-500/30">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                        <h4 className="text-xl font-bold text-white">
                          Onsite Supported Areas
                        </h4>
                      </div>
                      <p className="text-gray-300 mb-4">
                        Within 30km radius from our HQ in Klang
                      </p>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li>• Klang, Shah Alam, Subang Jaya</li>
                        <li>• Petaling Jaya, Seri Kembangan</li>
                        <li>• Port Klang, Kapar, Meru</li>
                        <li>• Parts of KL (depending on traffic)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="liquid-card">
                    <div className="bg-gradient-to-br from-yellow-800/50 to-yellow-900/50 p-6 rounded-2xl border border-yellow-500/30">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                        <h4 className="text-xl font-bold text-white">
                          Virtual Supported Areas
                        </h4>
                      </div>
                      <p className="text-gray-300 mb-4">
                        Anywhere after 30km radius within West Malaysia
                      </p>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li>• Kuala Lumpur, Selangor (outer areas)</li>
                        <li>• Penang, Ipoh, Johor Bahru</li>
                        <li>• Malacca, Negeri Sembilan</li>
                        <li>• Remote support & virtual troubleshooting</li>
                      </ul>
                    </div>
                  </div>

                  <div className="liquid-card">
                    <div className="bg-gradient-to-br from-red-800/50 to-red-900/50 p-6 rounded-2xl border border-red-500/30">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                        <h4 className="text-xl font-bold text-white">
                          Call for Enquiry
                        </h4>
                      </div>
                      <p className="text-gray-300 mb-4">Out of West Malaysia</p>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li>• East Malaysia (Sabah, Sarawak)</li>
                        <li>• Special arrangements may be possible</li>
                        <li>• Partner network referrals available</li>
                      </ul>
                      <div className="mt-4 pt-4 border-t border-red-600/30">
                        <a
                          href="tel:+603-1234-5678"
                          className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          <span className="text-sm font-medium">
                            +603-1234-5678
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Detailed Services Breakdown */}
          <section className="liquid-section py-32 relative overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-8 relative z-10">
              <div className="text-center mb-20 fade-in">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white slide-in-up">
                  <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    Comprehensive IT Services Breakdown
                  </span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Detailed breakdown of what's included in each package and how
                  we deliver world-class IT support
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                {/* Essential Care Deep Dive */}
                <div className="liquid-card">
                  <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-3xl border border-cyan-500/20 backdrop-blur-sm p-8 h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                        <Shield className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          Essential Care Details
                        </h3>
                        <p className="text-cyan-400">
                          RM 80/device - Perfect for small businesses
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-white mb-3">
                          What's Included:
                        </h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                          <li>
                            • Basic remote IT support during office hours (9 AM
                            - 6 PM, Monday-Friday)
                          </li>
                          <li>
                            • Operating system troubleshooting for Windows,
                            macOS, and Linux environments
                          </li>
                          <li>
                            • Email configuration and troubleshooting for
                            Outlook, Gmail, and other mail clients
                          </li>
                          <li>
                            • Printer setup, driver installation, and
                            connectivity issues resolution
                          </li>
                          <li>
                            • Monthly device health checks to identify potential
                            issues before they become problems
                          </li>
                          <li>
                            • Limited endpoint security patching for critical
                            vulnerabilities
                          </li>
                          <li>
                            • Basic software installation and configuration
                            assistance
                          </li>
                          <li>
                            • Password reset and user account management support
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-white mb-3">
                          Service Limitations:
                        </h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                          <li>• No 24/7 support - business hours only</li>
                          <li>• Onsite visits are chargeable at RM 100/hour</li>
                          <li>
                            • Basic antivirus only - no advanced threat
                            protection
                          </li>
                          <li>• Next business day response time</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-white mb-3">
                          Ideal For:
                        </h4>
                        <p className="text-gray-300 text-sm">
                          Small businesses with 1-10 devices, basic IT needs,
                          and limited budget for IT support. Perfect for retail
                          shops, small offices, and freelancers who need
                          reliable but cost-effective IT assistance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Standard Care Deep Dive */}
                <div className="liquid-card">
                  <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-3xl border border-purple-500/20 backdrop-blur-sm p-8 h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          Standard Care Details
                        </h3>
                        <p className="text-purple-400">
                          RM 120/device - SME popular choice
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-white mb-3">
                          Everything in Essential, Plus:
                        </h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                          <li>
                            • Unlimited remote support during extended hours (7
                            AM - 10 PM, Monday-Saturday)
                          </li>
                          <li>
                            • Proactive endpoint monitoring and management (RMM)
                            with automated alerts
                          </li>
                          <li>
                            • Comprehensive endpoint patching and
                            Windows/software updates management
                          </li>
                          <li>
                            • Advanced antivirus suite with real-time threat
                            detection and removal
                          </li>
                          <li>
                            • Asset and license management tracking for software
                            compliance
                          </li>
                          <li>
                            • Network connectivity troubleshooting and
                            optimization
                          </li>
                          <li>
                            • 2 free onsite visits per device per month within
                            30km radius
                          </li>
                          <li>
                            • Faster 4-hour response time during business hours
                          </li>
                          <li>
                            • Quarterly detailed IT health and security reports
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-white mb-3">
                          Advanced Features:
                        </h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                          <li>
                            • Remote desktop access for faster troubleshooting
                          </li>
                          <li>• Automated patch deployment during off-hours</li>
                          <li>
                            • Performance monitoring and optimization
                            recommendations
                          </li>
                          <li>• Basic backup configuration guidance</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-white mb-3">
                          Ideal For:
                        </h4>
                        <p className="text-gray-300 text-sm">
                          Growing SMEs with 10-50 devices that need proactive IT
                          management. Perfect for businesses that can't afford
                          downtime and require consistent, reliable IT
                          operations with predictable costs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Premium Care Deep Dive */}
                <div className="liquid-card">
                  <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-3xl border border-orange-500/20 backdrop-blur-sm p-8 h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-orange-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          Premium Care Details
                        </h3>
                        <p className="text-orange-400">
                          RM 180/device - Enterprise-grade support
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-white mb-3">
                          Everything in Standard, Plus:
                        </h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                          <li>
                            • 24/7 remote support coverage including weekends
                            and holidays
                          </li>
                          <li>
                            • Proactive monitoring with immediate incident
                            response and alerting
                          </li>
                          <li>
                            • Advanced endpoint detection and response (EDR)
                            with threat hunting
                          </li>
                          <li>
                            • Comprehensive security management including
                            firewall configuration
                          </li>
                          <li>
                            • Unlimited onsite support visits within 30km radius
                            from our HQ in Klang
                          </li>
                          <li>
                            • Managed backup and disaster recovery planning and
                            testing
                          </li>
                          <li>
                            • 1-hour response time guarantee 24/7 with priority
                            support queue
                          </li>
                          <li>
                            • Quarterly strategic IT planning and optimization
                            reviews
                          </li>
                          <li>
                            • Compliance-grade monthly reporting for auditing
                            purposes
                          </li>
                          <li>
                            • Dedicated technical account manager for
                            escalations
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-white mb-3">
                          Enterprise Features:
                        </h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                          <li>
                            • Advanced threat intelligence and security incident
                            response
                          </li>
                          <li>
                            • Network infrastructure monitoring and management
                          </li>
                          <li>
                            • Business continuity planning and disaster recovery
                            testing
                          </li>
                          <li>
                            • Integration with business applications and systems
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-white mb-3">
                          Ideal For:
                        </h4>
                        <p className="text-gray-300 text-sm">
                          Established businesses with 50+ devices requiring
                          maximum uptime, security, and compliance. Perfect for
                          companies in regulated industries or those handling
                          sensitive data requiring enterprise-grade IT
                          infrastructure.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enterprise Services Deep Dive */}
                <div className="liquid-card">
                  <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 rounded-3xl border border-yellow-500/20 backdrop-blur-sm p-8 h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          Enterprise Services Details
                        </h3>
                        <p className="text-yellow-400">
                          Custom pricing - Tailored solutions
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-white mb-3">
                          Comprehensive Enterprise Solutions:
                        </h4>
                        <ul className="space-y-2 text-gray-300 text-sm">
                          <li>
                            • <strong>Cloud Infrastructure:</strong> AWS, Azure,
                            Google Cloud design, migration, and management
                          </li>
                          <li>
                            • <strong>Server & Virtualization:</strong> VMware,
                            Hyper-V, Docker, Kubernetes support
                          </li>
                          <li>
                            • <strong>Corporate Email:</strong> Microsoft 365,
                            Google Workspace enterprise deployment
                          </li>
                          <li>
                            • <strong>Network Architecture:</strong> LAN/WAN
                            design, VPN setup, SD-WAN implementation
                          </li>
                          <li>
                            ss� <strong>Automation & AI:</strong> RPA
                            implementation, workflow optimization, AI-driven
                            processes
                          </li>
                          <li>
                            • <strong>Enterprise Security:</strong> SIEM
                            deployment, SOC integration, compliance frameworks
                          </li>
                          <li>
                            • <strong>Domain & Hosting:</strong> DNS management,
                            SSL certificates, website hosting
                          </li>
                          <li>
                            • <strong>Disaster Recovery:</strong> Offsite
                            backup, cloud-based DR solutions, business
                            continuity
                          </li>
                          <li>
                            • <strong>Dedicated Support:</strong> On-site
                            engineers, priority field support, custom SLAs
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-white mb-3">
                          Custom Services Available:
                        </h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                          <li>
                            • Digital transformation consulting and
                            implementation
                          </li>
                          <li>• Custom software development and integration</li>
                          <li>
                            • Cybersecurity audits and compliance assistance
                          </li>
                          <li>• IT infrastructure scaling and modernization</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-white mb-3">
                          Ideal For:
                        </h4>
                        <p className="text-gray-300 text-sm">
                          Large enterprises, government agencies, and
                          organizations with complex IT requirements. Perfect
                          for businesses requiring custom solutions, high
                          scalability, strict compliance, or specialized
                          technical expertise that goes beyond standard managed
                          services.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Our Managed IT Services */}
              <div className="liquid-card mb-20">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl border border-gray-600/20 backdrop-blur-sm p-12">
                  <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-white mb-4">
                      Why Choose FlowTech Managed IT Services?
                    </h3>
                    <p className="text-xl text-gray-400">
                      We deliver more than just IT support - we're your
                      strategic technology partner
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="w-8 h-8 text-blue-400" />
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-3">
                        Proactive Approach
                      </h4>
                      <p className="text-gray-400 text-sm">
                        We prevent problems before they happen with continuous
                        monitoring, automated alerts, and regular maintenance.
                        Our proactive methodology reduces downtime by up to 80%
                        compared to reactive support models.
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-400" />
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-3">
                        Local Expertise
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Based in Klang with deep understanding of Malaysian
                        business needs. Our team speaks your language,
                        understands local regulations, and provides onsite
                        support within 30km radius for hands-on assistance when
                        needed.
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Clock className="w-8 h-8 text-purple-400" />
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-3">
                        Predictable Costs
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Fixed monthly pricing with no hidden fees or surprise
                        charges. Budget confidently knowing exactly what your IT
                        costs will be each month, with optional billable
                        services clearly outlined and pre-approved.
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MapPin className="w-8 h-8 text-cyan-400" />
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-3">
                        Scalable Solutions
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Start with what you need today and scale up as your
                        business grows. Easily upgrade packages, add devices, or
                        expand services without contracts lock-in or migration
                        headaches.
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Phone className="w-8 h-8 text-orange-400" />
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-3">
                        Human-First Support
                      </h4>
                      <p className="text-gray-400 text-sm">
                        While we love technology, we believe in human
                        connections. Get direct access to experienced
                        technicians who know your business, not outsourced call
                        centers or chatbots that don't understand your specific
                        needs.
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <HelpCircle className="w-8 h-8 text-red-400" />
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-3">
                        Strategic Partnership
                      </h4>
                      <p className="text-gray-400 text-sm">
                        We're not just fixing problems - we're helping you
                        leverage technology for competitive advantage. Regular
                        strategy sessions, technology roadmaps, and optimization
                        recommendations to drive business growth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="liquid-section py-32 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-8 relative z-10">
              <div className="text-center mb-20 fade-in">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white slide-in-up">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Frequently Asked Questions
                  </span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Common questions about our managed IT services
                </p>
              </div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="liquid-card">
                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-gray-600/20 backdrop-blur-sm overflow-hidden">
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <HelpCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                          <h3 className="text-lg font-semibold text-white">
                            {faq.question}
                          </h3>
                        </div>
                        {openFaq === index ? (
                          <ChevronUp className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </button>

                      {openFaq === index && (
                        <div className="px-6 pb-6 border-t border-gray-700/50">
                          <div className="pt-4 pl-9">
                            <p className="text-gray-300 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}
