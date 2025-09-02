import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SolutionsAutomationBackground } from "@/components/solutions-automation-background";
import { useGSAPInit } from "@/hooks/use-gsap-init";
import { useGSAPAnimations } from "@/hooks/use-gsap-animations";
import { useGSAPScrollSmoother } from "@/hooks/use-gsap-scroll-smoother";
import {
  Search,
  Shield,
  Monitor,
  Cloud,
  HelpCircle,
  Settings,
  Printer,
  Wifi,
  Database,
  Lock,
  Server,
  Smartphone,
} from "lucide-react";
import { useState } from "react";

export default function ITServices() {
  useGSAPInit();
  useGSAPAnimations();
  useGSAPScrollSmoother();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All",
    "Support & Helpdesk",
    "Network & Hardware",
    "Security Services",
    "Cloud & Backup",
    "Asset Management",
    "Monitoring Services",
  ];

  const itServices = [
    {
      icon: HelpCircle,
      name: "IT Support & Helpdesk",
      description:
        "24/7 technical support and helpdesk services for all your IT-related issues, from software troubleshooting to hardware problems.",
      category: "Support & Helpdesk",
      tags: ["24/7 Support", "Helpdesk", "Troubleshooting"],
    },
    {
      icon: Wifi,
      name: "Network Setup & Maintenance",
      description:
        "Professional network infrastructure setup, configuration, and ongoing maintenance to ensure reliable connectivity.",
      category: "Network & Hardware",
      tags: ["Network Setup", "Wi-Fi", "Infrastructure"],
    },
    {
      icon: Monitor,
      name: "Hardware & Software Support",
      description:
        "Comprehensive support for all hardware components and software applications across your organization.",
      category: "Support & Helpdesk",
      tags: ["Hardware", "Software", "Maintenance"],
    },
    {
      icon: Shield,
      name: "Cybersecurity Essentials",
      description:
        "Essential cybersecurity services including antivirus, firewall management, and basic threat protection.",
      category: "Security Services",
      tags: ["Antivirus", "Firewall", "Threat Protection"],
    },
    {
      icon: Cloud,
      name: "Cloud & Backup Services",
      description:
        "Cloud migration, setup, and automated backup solutions to protect your critical business data.",
      category: "Cloud & Backup",
      tags: ["Cloud Migration", "Backup", "Data Protection"],
    },
    {
      icon: Settings,
      name: "IT Asset & License Management",
      description:
        "Track and manage all IT assets, software licenses, and hardware inventory with comprehensive reporting.",
      category: "Asset Management",
      tags: ["Asset Tracking", "Licenses", "Inventory"],
    },
    {
      icon: Printer,
      name: "Printer & Peripheral Setup",
      description:
        "Professional setup and configuration of printers, scanners, and other peripheral devices.",
      category: "Network & Hardware",
      tags: ["Printers", "Peripherals", "Setup"],
    },
    {
      icon: Server,
      name: "Remote Monitoring & Maintenance",
      description:
        "Proactive remote monitoring of your IT infrastructure with preventive maintenance and issue resolution.",
      category: "Monitoring Services",
      tags: ["Remote Monitoring", "Maintenance", "Proactive"],
    },
  ];

  const filteredServices = itServices.filter((service) => {
    const matchesCategory =
      selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div
      id="smooth-wrapper"
      className="min-h-screen bg-slate-950 flex flex-col relative"
    >
      <SolutionsAutomationBackground />
      <Navigation />

      <div id="smooth-content" className="flex-1">
        <main className="pt-20">
          {/* Hero Section */}
          <section
            className="
              liquid-section
              w-full
              h-auto                  /* mobile: wrap to content */
              sm:h-[25vh]             /* ≥640px: 25vh */
              md:h-[30vh]             /* ≥768px: 30vh */
              lg:h-[40vh]             /* ≥1024px: 40vh */
              flex items-center justify-center
              relative overflow-hidden
              pt-16 sm:pt-20 md:pt-24  /* progressive top padding */
            "
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-blue-950/40" />

            <div
              className="
                relative z-10 text-center
                px-4
                max-w-xs               /* mobile */
                sm:max-w-md            /* ≥640px */
                md:max-w-2xl           /* ≥768px */
                lg:max-w-4xl           /* ≥1024px */
              "
            >
              <h1
                className="
                  text-3xl               /* mobile */
                  sm:text-4xl            /* ≥640px */
                  md:text-5xl            /* ≥768px */
                  lg:text-7xl            /* ≥1024px */
                  font-bold
                  mb-4 sm:mb-6 md:mb-8
                  text-white
                  slide-in-up
                "
              >
                Our{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  IT Services
                </span>
              </h1>

              <p
                className="
                  text-base              /* mobile */
                  sm:text-lg             /* ≥640px */
                  md:text-xl             /* ≥768px */
                  lg:text-2xl            /* ≥1024px */
                  text-gray-300
                  mb-6 sm:mb-8
                  max-w-xs sm:max-w-sm md:max-w-lg mx-auto
                  fade-in
                "
              >
                Reliable, affordable, and tailored IT services for SMEs &
                enterprises.
              </p>
            </div>
          </section>

          {/* Main Content Area */}
          <section className="liquid-section px-4 pb-20">
            <div className="max-w-7xl mx-auto">
              <div className="flex gap-8">
                {/* Left Sidebar - Filters */}
                <div className="w-64 flex-shrink-0">
                  <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 sticky top-24 fade-in">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Filter
                    </h3>

                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-400 mb-3">
                        Categories
                      </h4>
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                            selectedCategory === category
                              ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                              : "text-gray-300 hover:text-white hover:bg-slate-800/50"
                          }`}
                          data-testid={`filter-${category.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Content Area */}
                <div className="flex-1">
                  {/* Search Bar */}
                  <div className="flex items-center justify-between mb-8 fade-in">
                    <div className="relative flex-1 max-w-md">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Search for a service..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 backdrop-blur-sm"
                        data-testid="search-input"
                      />
                    </div>
                    <div className="text-gray-400 text-sm ml-4">
                      Show{" "}
                      <span className="text-white font-medium">
                        {filteredServices.length}
                      </span>{" "}
                      of {itServices.length} results
                    </div>
                  </div>

                  {/* Services Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 solutions-grid">
                    {filteredServices.map((service, index) => {
                      const IconComponent = service.icon;
                      return (
                        <div
                          key={index}
                          className="liquid-card bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 group"
                          data-testid={`service-${service.name.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          {/* Service Header */}
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-blue-500/30 flex-shrink-0">
                              <IconComponent className="w-6 h-6 text-blue-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors">
                                {service.name}
                              </h3>
                              <div className="text-sm text-blue-400 font-medium">
                                {service.category}
                              </div>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-gray-300 text-sm leading-relaxed mb-4">
                            {service.description}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {service.tags.slice(0, 3).map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-2 py-1 text-xs bg-slate-800/80 text-gray-300 rounded-md border border-gray-600/30"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* CTA */}
                          <div className="pt-4 border-t border-gray-700/50">
                            <button
                              className="w-full px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 text-sm font-medium rounded-lg border border-blue-500/30 transition-colors"
                              data-testid={`button-${service.name.toLowerCase().replace(/\s+/g, "-")}`}
                            >
                              Get This Service
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* No Results */}
                  {filteredServices.length === 0 && (
                    <div className="text-center py-16">
                      <div className="text-gray-400 text-lg mb-2">
                        No services found
                      </div>
                      <div className="text-gray-500 text-sm">
                        Try adjusting your search or filter criteria
                      </div>
                    </div>
                  )}

                  {/* Call to Action */}
                  <div className="mt-16 text-center fade-in">
                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-blue-500/20 backdrop-blur-sm max-w-2xl mx-auto">
                      <h3 className="text-2xl font-bold text-white mb-4">
                        Need Custom IT Support?
                      </h3>
                      <p className="text-gray-300 mb-6">
                        Looking for specific IT services? We provide customized
                        IT support solutions tailored to your unique business
                        requirements.
                      </p>
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                        data-testid="button-custom-support"
                      >
                        Contact Our Team
                      </button>
                    </div>
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
