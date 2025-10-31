"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Star, Users, Briefcase, Code, MessageCircle, ChevronLeft, Home, Settings, Zap, Crown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function TemplatesPage() {
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // Template data with actual image paths
  const templates = [
    {
      id: 1,
      title: 'Portfolio Template 1',
      description: 'Clean and professional portfolio template perfect for developers, engineers, and tech professionals.',
      category: 'Developer',
      icon: Code,
      image: '/images/templates/templateimage1.jpg',
      liveUrl: 'https://academic-portfolio-ivory-theta.vercel.app/',
      features: ['Code Display', 'Project Showcase', 'Skills Section'],
      rating: 5,
    },
    {
      id: 2,
      title: 'Portfolio Template 2',
      description: 'Elegant portfolio template designed for designers, artists, and creative professionals.',
      category: 'Creative',
      icon: Users,
      image: '/images/templates/template2.jpg',
      liveUrl: 'https://profile-template-iota.vercel.app/',
      features: ['Gallery Layout', 'Animation Ready', 'Client Testimonials', 'Contact Form'],
      rating: 4,
    },
    {
      id: 3,
      title: 'Portfolio Template 3',
      description: 'Professional template suitable for consultants, freelancers, and business professionals.',
      category: 'Business',
      icon: Briefcase,
      image: '/images/templates/template3.jpg',
      liveUrl: 'https://example.com', // FIXED: Added live URL
      features: ['Service Sections', 'Case Studies', 'Team Members', 'Pricing Tables'],
      rating: 5,
    }
  ];

  // Custom development packages
  const customPackages = [
    {
      id: 1,
      title: 'Basic Customization',
      description: 'Perfect if you like one of our templates but need minor adjustments and personalization.',
      icon: Settings,
      price: '$499',
      features: [
        'Choose any template as base',
        'Color scheme customization',
        'Content integration',
        'Basic layout adjustments',
        'Contact form setup',
        '1 round of revisions'
      ],
      delivery: '3-5 days',
      popular: false
    },
    {
      id: 2,
      title: 'Advanced Custom',
      description: 'For those who want significant modifications and unique features added to their portfolio.',
      icon: Zap,
      price: '$899',
      features: [
        'Template modification',
        'Custom animations',
        'Advanced functionality',
        'Multiple page layouts',
        'SEO optimization',
        '3 rounds of revisions',
        'Priority support'
      ],
      delivery: '7-10 days',
      popular: true
    },
    {
      id: 3,
      title: 'Fully Custom Design',
      description: 'Complete bespoke portfolio designed from scratch according to your exact specifications.',
      icon: Crown,
      price: '$1,499',
      features: [
        'Complete custom design',
        'Wireframing & prototyping',
        'Unique animations',
        'Advanced integrations',
        'E-commerce ready',
        'Unlimited revisions',
        'Dedicated project manager',
        'Lifetime support'
      ],
      delivery: '14-21 days',
      popular: false
    }
  ];

  const handleTemplateClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleBackClick = () => {
    router.back();
  };

  const handleHomeClick = () => {
    router.push('/');
  };

  const handleContactClick = () => {
    router.push('/#contact');
  };

  const handleCustomContact = (pkg) => {
    router.push('/#contact');
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      }
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Header */}
      <motion.header
        className="relative z-50 p-6 bg-white/60 backdrop-blur-lg border-b border-white/30 shadow-sm"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* FIXED: Added back button */}
           

            <motion.button
              onClick={handleHomeClick}
              className="group flex items-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-xl shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              <Home className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Home</span>
            </motion.button>
          </div>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Portfolio Templates
            </h1>
          </motion.div>
        </div>
      </motion.header>

      {/* Templates Grid */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Choose Your Perfect Template
          </h2>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Browse our collection of professionally designed portfolio templates. Each template is fully customizable and ready to use.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {templates.map((template, index) => (
              <motion.div
                key={template.id}
                className="group"
                variants={itemVariants}
                custom={index}
                onHoverStart={() => setHoveredCard(template.id)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <motion.div
                  className="bg-white/70 backdrop-blur-lg rounded-3xl border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer relative"
                  whileHover={{ scale: 1.03, y: -8 }}
                >
                  {/* Template Image */}
                  <div className="relative h-48 bg-gray-100 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                    
                    <div className="w-full h-full relative">
                      <Image
                        src={template.image}
                        alt={template.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <motion.div
                      className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg z-20"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: hoveredCard === template.id ? 1 : 0,
                        opacity: hoveredCard === template.id ? 1 : 0
                      }}
                    >
                      <ExternalLink className="w-3 h-3 text-blue-600" />
                    </motion.div>
                  </div>

                  {/* Template Content */}
                  <div className="p-6 relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1.5 bg-blue-100 text-blue-600 text-sm font-medium rounded-full border border-blue-200/50">
                        {template.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-slate-600 font-medium">{template.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {template.title}
                    </h3>

                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {template.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2.5 mb-6">
                      {template.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 relative overflow-hidden group/btn"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleTemplateClick(template.liveUrl)}
                    >
                      <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                      <span className="relative z-10 flex items-center justify-center">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live Demo
                      </span>
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Contact Button Section */}
        <motion.div
          className="text-center mt-20 mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-12 border border-white/40 shadow-xl relative overflow-hidden">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Found a template you like? Contact us to get your portfolio set up and customized to your needs.
            </p>
            <motion.button
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleContactClick}
            >
              <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <MessageCircle className="w-5 h-5 mr-3 relative z-10" />
              <span className="relative z-10 text-lg">Contact Us to Get Started</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Custom Development Section */}
        <motion.section
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Want Something <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Completely Custom?</span>
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Don't see exactly what you're looking for? We'll create a bespoke portfolio tailored to your unique style and requirements.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {customPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                className="group relative"
                variants={itemVariants}
                custom={index}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold rounded-full shadow-lg">
                      MOST POPULAR
                    </div>
                  </div>
                )}
                
                <motion.div
                  className={`bg-white/70 backdrop-blur-lg rounded-3xl border-2 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 relative ${
                    pkg.popular ? 'border-orange-400 scale-105' : 'border-white/40'
                  }`}
                  whileHover={{ y: -5, scale: pkg.popular ? 1.08 : 1.02 }}
                >
                  {/* Package Header */}
                  <div className={`p-8 text-center ${
                    pkg.popular ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-gradient-to-r from-blue-600 to-purple-600'
                  }`}>
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <pkg.icon className={`w-8 h-8 ${pkg.popular ? 'text-orange-100' : 'text-blue-100'}`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.title}</h3>
                    <div className="text-3xl font-bold text-white mb-2">{pkg.price}</div>
                    <p className={`text-sm ${pkg.popular ? 'text-orange-100' : 'text-blue-100'}`}>
                      Delivery: {pkg.delivery}
                    </p>
                  </div>

                  {/* Package Features */}
                  <div className="p-6">
                    <p className="text-slate-600 mb-6 text-center leading-relaxed">
                      {pkg.description}
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-slate-700">
                          <div className={`w-2 h-2 rounded-full mr-3 ${
                            pkg.popular ? 'bg-gradient-to-r from-orange-500 to-red-500' : 'bg-gradient-to-r from-blue-500 to-purple-500'
                          }`} />
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      className={`w-full py-4 font-semibold rounded-xl hover:shadow-lg transition-all duration-300 relative overflow-hidden group/btn ${
                        pkg.popular
                          ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white'
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleCustomContact(pkg)}
                    >
                      <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                      <span className="relative z-10 flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Get This Package
                      </span>
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Custom Quote CTA */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-slate-900 to-slate-700 rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                Have Specific Requirements?
              </h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Need something beyond our standard packages? Contact us for a personalized quote tailored to your exact needs.
              </p>
              <motion.button
                className="inline-flex items-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleContactClick('custom-quote')}
              >
                <span className="absolute inset-0 bg-slate-900/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Settings className="w-5 h-5 mr-3 relative z-10" />
                <span className="relative z-10">Get Custom Quote</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
}