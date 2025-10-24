import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Compass, Lightbulb, Users, Settings } from 'lucide-react';
import { useLocation } from 'wouter';

export default function About() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center relative">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                  About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">KlangIT</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-cyan-400 mb-6 font-semibold">
                  Powered by Expert Engineers
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Behind every innovation is a team of certified experts dedicated to solving your toughest IT challenges.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8"
                    onClick={() => setLocation('/contact')}
                  >
                    Work With Us
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8"
                  >
                    Meet Our Team
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-12 rounded-3xl border border-cyan-500/30 backdrop-blur-sm flex items-center justify-center h-96">
                  <div className="text-8xl">👥</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Who We Are</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed">
                  At <span className="text-cyan-400 font-semibold">KlangIT</span>, we believe technology should empower, not complicate.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our engineers combine deep expertise with a passion for innovation, helping businesses modernize, scale, and thrive in the digital age.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-cyan-500/20 backdrop-blur-sm">
                <h3 className="text-2xl font-bold text-white mb-6">Our Commitment</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span><strong className="text-cyan-400">Expert-Driven:</strong> Every project led by certified professionals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span><strong className="text-cyan-400">Security-First:</strong> Enterprise-grade protection built into every solution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span><strong className="text-cyan-400">Future-Ready:</strong> Cutting-edge technologies that scale with your business</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Engineers Section */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Meet the Engineers Driving Innovation</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-16">
              Our team brings decades of combined experience across cloud, security, networking, and AI technologies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: 'Dr. Sarah Chen',
                  title: 'Lead Cloud Architect',
                  bio: 'Over 15 years of experience in enterprise cloud architecture. AWS Certified Solutions Architect Professional.',
                  avatar: '👩‍💻',
                  color: 'from-cyan-500 to-blue-500'
                },
                {
                  name: 'Marcus Rodriguez',
                  title: 'Chief Security Officer',
                  bio: 'Former cybersecurity consultant for Fortune 500 companies. CISSP certified with specialization in penetration testing.',
                  avatar: '👨‍💼',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  name: 'Aisha Patel',
                  title: 'Senior Network Engineer',
                  bio: '12+ years designing complex network infrastructures. Cisco certified expert in SD-WAN and network security.',
                  avatar: '👩‍🔬',
                  color: 'from-orange-500 to-yellow-500'
                },
                {
                  name: 'James O\'Connor',
                  title: 'Data & AI Specialist',
                  bio: 'Machine learning engineer with expertise in AI-powered analytics and automation. Published researcher.',
                  avatar: '👨‍🔬',
                  color: 'from-green-500 to-emerald-500'
                }
              ].map((engineer, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300">
                  <div className={`w-24 h-24 bg-gradient-to-br ${engineer.color} rounded-full mx-auto mb-6 flex items-center justify-center text-4xl shadow-lg`}>
                    {engineer.avatar}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 text-center">{engineer.name}</h3>
                  <p className="text-cyan-400 mb-4 text-center font-medium">{engineer.title}</p>
                  <p className="text-gray-300 text-sm leading-relaxed text-center">{engineer.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Proven Expertise — Certified Across Leading Technologies</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-16">
              Our team holds industry-recognized certifications from the world's top technology providers.
            </p>

            <div className="space-y-6">
              {/* First Row - Scrolls Left */}
              <div className="relative overflow-hidden">
                <motion.div 
                  className="flex gap-6"
                  animate={{
                    x: ['0%', '-50%'],
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  {[...Array(4)].map((_, repeatIndex) => (
                    <div key={repeatIndex} className="flex gap-6 flex-shrink-0">
                      {[
                        { name: 'AWS Solutions Architect', category: 'cloud', logo: '☁️' },
                        { name: 'Azure Administrator', category: 'cloud', logo: '☁️' },
                        { name: 'Google Cloud Professional', category: 'cloud', logo: '☁️' },
                        { name: 'CISSP', category: 'security', logo: '🔒' },
                        { name: 'CEH', category: 'security', logo: '🔒' },
                        { name: 'CompTIA Security+', category: 'security', logo: '🔒' },
                        { name: 'Cisco CCNA', category: 'network', logo: '🌐' },
                      ].map((cert, index) => (
                        <div
                          key={`${repeatIndex}-${index}`}
                          className="flex-shrink-0 w-72 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group"
                        >
                          <div className="flex items-center gap-4">
                            <div className="text-4xl group-hover:scale-110 transition-transform">{cert.logo}</div>
                            <div>
                              <div className="font-semibold text-white text-sm group-hover:text-cyan-400 transition-colors">{cert.name}</div>
                              <div className="text-xs text-gray-400 capitalize mt-1">{cert.category}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Second Row - Scrolls Right */}
              <div className="relative overflow-hidden">
                <motion.div 
                  className="flex gap-6"
                  animate={{
                    x: ['-50%', '0%'],
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  {[...Array(4)].map((_, repeatIndex) => (
                    <div key={repeatIndex} className="flex gap-6 flex-shrink-0">
                      {[
                        { name: 'Cisco CCNP', category: 'network', logo: '🌐' },
                        { name: 'CompTIA Network+', category: 'network', logo: '🌐' },
                        { name: 'Microsoft Data Scientist', category: 'data', logo: '📊' },
                        { name: 'TensorFlow Developer', category: 'data', logo: '📊' },
                        { name: 'Red Hat Engineer', category: 'cloud', logo: '☁️' },
                        { name: 'ITIL Foundation', category: 'network', logo: '🌐' },
                        { name: 'PMP', category: 'data', logo: '📊' },
                      ].map((cert, index) => (
                        <div
                          key={`${repeatIndex}-${index}`}
                          className="flex-shrink-0 w-72 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group"
                        >
                          <div className="flex items-center gap-4">
                            <div className="text-4xl group-hover:scale-110 transition-transform">{cert.logo}</div>
                            <div>
                              <div className="font-semibold text-white text-sm group-hover:text-purple-400 transition-colors">{cert.name}</div>
                              <div className="text-xs text-gray-400 capitalize mt-1">{cert.category}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            <p className="text-center text-gray-500 text-sm mt-8">
              🎯 Auto-scrolling carousel - Hover to interact
            </p>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-32">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Our Values</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Compass,
                  title: 'Integrity',
                  description: 'We uphold transparency and ethical standards in every project.',
                  color: 'from-cyan-500 to-blue-500'
                },
                {
                  icon: Lightbulb,
                  title: 'Innovation',
                  description: 'We embrace creativity and cutting-edge technologies.',
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  icon: Users,
                  title: 'Collaboration',
                  description: 'We work as one team — with our clients and within our organization.',
                  color: 'from-orange-500 to-yellow-500'
                },
                {
                  icon: Settings,
                  title: 'Reliability',
                  description: 'Consistency and performance are our top priorities.',
                  color: 'from-green-500 to-emerald-500'
                }
              ].map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-3xl border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/50 hover:shadow-xl transition-all text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-full mx-auto mb-6 flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Ready to Work With <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">World-Class Engineers?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Let our certified experts transform your IT challenges into growth opportunities.
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-12 py-8 text-xl"
                onClick={() => setLocation('/contact')}
              >
                Start Your Project
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-12 py-8 text-xl"
                onClick={() => setLocation('/it-services')}
              >
                Explore Our Services
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
