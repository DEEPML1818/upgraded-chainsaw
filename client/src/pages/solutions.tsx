import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { SolutionsAutomationBackground } from '@/components/solutions-automation-background';
import { useGSAPInit } from '@/hooks/use-gsap-init';
import { useGSAPAnimations } from '@/hooks/use-gsap-animations';
import { useGSAPScrollSmoother } from '@/hooks/use-gsap-scroll-smoother';
import { Search, Shield, Monitor, Cloud, Zap, Users, FileText, Bot, CheckCircle, Lock, Bell, Database, Server, Smartphone, HardDrive, Wifi } from 'lucide-react';
import { useState } from 'react';

export default function Solutions() {
  useGSAPInit();
  useGSAPAnimations();
  useGSAPScrollSmoother();

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'All',
    'Business Automation',
    'Security Automation',
    'Cloud & Workflow',
    'Monitoring & Reporting',
    'Endpoint Management',
    'Network & IoT',
    'Customer Service'
  ];

  const automationSolutions = [
    {
      icon: Zap,
      name: "Business Process Automation",
      description: "Automate repetitive office tasks like report generation, invoice processing, and leave applications using tools like Power Automate and Zapier.",
      category: "Business Automation",
      tags: ["Power Automate", "Zapier", "Workflow"]
    },
    {
      icon: Users,
      name: "IT Helpdesk Automation",
      description: "AI-driven ticket assignment, automated email confirmations, and self-service knowledge base with chatbot support.",
      category: "Business Automation",
      tags: ["AI", "Ticketing", "Chatbot"]
    },
    {
      icon: Monitor,
      name: "Endpoint Management",
      description: "Automatic OS patching, software updates, and policy-based deployment across all devices in your organization.",
      category: "Endpoint Management",
      tags: ["Patching", "Deployment", "Policy"]
    },
    {
      icon: Shield,
      name: "Security Automation",
      description: "Automated alerts for failed logins, endpoint quarantine scripts, and password expiry reminders.",
      category: "Security Automation",
      tags: ["Threat Detection", "Quarantine", "Alerts"]
    },
    {
      icon: HardDrive,
      name: "Backup & Recovery",
      description: "Scheduled endpoint and server backups with auto-notifications and one-click restore capabilities.",
      category: "Monitoring & Reporting",
      tags: ["Backup", "Recovery", "Automation"]
    },
    {
      icon: Cloud,
      name: "Cloud Workflow Automation",
      description: "Microsoft 365 and Google Workspace automation for user provisioning, email setup, and access management.",
      category: "Cloud & Workflow",
      tags: ["Microsoft 365", "Google Workspace", "Provisioning"]
    },
    {
      icon: Database,
      name: "Monitoring & Reporting",
      description: "24/7 device health monitoring with automated monthly IT reports and SLA compliance dashboards.",
      category: "Monitoring & Reporting",
      tags: ["24/7 Monitoring", "Reports", "SLA"]
    },
    {
      icon: FileText,
      name: "Office Integration",
      description: "CRM, email, and WhatsApp integration with automated timesheets and inventory management systems.",
      category: "Business Automation",
      tags: ["CRM", "Integration", "Inventory"]
    },
    {
      icon: Wifi,
      name: "Network & IoT Automation",
      description: "Scheduled Wi-Fi access codes, automated PC power management, and IoT sensor integration.",
      category: "Network & IoT",
      tags: ["Wi-Fi", "IoT", "Power Management"]
    },
    {
      icon: Smartphone,
      name: "Customer Service Automation",
      description: "Website chatbots, automated appointment scheduling, and follow-up email campaigns.",
      category: "Customer Service",
      tags: ["Chatbot", "Scheduling", "Email Marketing"]
    },
    {
      icon: Lock,
      name: "Advanced Threat Protection",
      description: "Real-time threat detection with automated incident response and compliance reporting.",
      category: "Security Automation",
      tags: ["EDR", "Incident Response", "Compliance"]
    },
    {
      icon: Server,
      name: "Infrastructure Monitoring",
      description: "Automated server health checks, performance optimization, and predictive maintenance alerts.",
      category: "Monitoring & Reporting",
      tags: ["Server Monitoring", "Performance", "Predictive"]
    }
  ];

  // Assuming additionalServices should be defined and populated.
  // For now, we'll keep it as an empty array to avoid further errors,
  // but it needs to be defined based on the actual requirements.
  const additionalServices = []; // Placeholder, needs actual definition

  const filteredSolutions = automationSolutions.filter(solution => {
    const matchesCategory = selectedCategory === 'All' || solution.category === selectedCategory;
    const matchesSearch = solution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         solution.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         solution.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div id="smooth-wrapper" className="min-h-screen bg-slate-950 flex flex-col relative">
      <SolutionsAutomationBackground />
      <Navigation />

      <div id="smooth-content" className="flex-1">
        <main className="pt-20">
          {/* Hero Section */}
          <section className="liquid-section min-h-screen flex items-center relative overflow-hidden pt-20 hero">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/60 to-purple-950/40"></div>

            <div className="max-w-7xl mx-auto text-center relative z-10 hero-content">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white slide-in-up">
                Smart IT & <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Automation Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto fade-in">
                Save time. Reduce errors. Let IT work for you automatically.
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
                    <h3 className="text-lg font-semibold text-white mb-4">Filter</h3>

                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-400 mb-3">Categories</h4>
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                            selectedCategory === category
                              ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                              : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                          }`}
                          data-testid={`filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
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
                        placeholder="Search for a solution..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-slate-900/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 backdrop-blur-sm"
                        data-testid="search-input"
                      />
                    </div>
                    <div className="text-gray-400 text-sm ml-4">
                      Show <span className="text-white font-medium">{filteredSolutions.length}</span> of {automationSolutions.length} results
                    </div>
                  </div>

                  {/* Solutions Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 solutions-grid">
                    {filteredSolutions.map((solution, index) => {
                      const IconComponent = solution.icon;
                      return (
                        <div
                          key={index}
                          className="liquid-card bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 group"
                          data-testid={`solution-${solution.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {/* Solution Header */}
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center border border-blue-500/30 flex-shrink-0">
                              <IconComponent className="w-6 h-6 text-blue-400" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors">
                                {solution.name}
                              </h3>
                              <div className="text-sm text-blue-400 font-medium">
                                {solution.category}
                              </div>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-gray-300 text-sm leading-relaxed mb-4">
                            {solution.description}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {solution.tags.slice(0, 3).map((tag, tagIndex) => (
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
                            <button className="w-full px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 text-sm font-medium rounded-lg border border-blue-500/30 transition-colors" data-testid={`button-${solution.name.toLowerCase().replace(/\s+/g, '-')}`}>
                              Learn More
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* No Results */}
                  {filteredSolutions.length === 0 && (
                    <div className="text-center py-16">
                      <div className="text-gray-400 text-lg mb-2">No solutions found</div>
                      <div className="text-gray-500 text-sm">Try adjusting your search or filter criteria</div>
                    </div>
                  )}

                  {/* Call to Action */}
                  <div className="mt-16 text-center fade-in">
                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-purple-500/20 backdrop-blur-sm max-w-2xl mx-auto">
                      <h3 className="text-2xl font-bold text-white mb-4">
                        Need Custom Automation?
                      </h3>
                      <p className="text-gray-300 mb-6">
                        Looking for specific automation solutions? We create custom workflows tailored to your unique business requirements.
                      </p>
                      <button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors" data-testid="button-custom-automation">
                        Discuss Your Needs
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