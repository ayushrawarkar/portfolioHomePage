"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  Palette,
  Code,
  ArrowRight,
  Layout,
  Smartphone,
  Briefcase,
  Globe,
  Sparkles,
} from 'lucide-react';

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const { scrollY } = useScroll();
  const yShift = useTransform(scrollY, [0, 400], [0, 30]);
  const containerRef = useRef(null);

  const rotatingTexts = [
    "Professional Portfolio",
    "Stunning Website",
    "Creative Showcase",
    "Impressive Profile"
  ];

  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  useEffect(() => {
    const updateMouse = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', updateMouse);
    
    // Typewriter effect
    let timer;
    const handleType = () => {
      const current = currentTextIndex % rotatingTexts.length;
      const fullText = rotatingTexts[current];
      
      setCurrentText(isDeleting 
        ? fullText.substring(0, currentText.length - 1)
        : fullText.substring(0, currentText.length + 1)
      );
      
      setTypingSpeed(isDeleting ? 75 : 150);
      
      if (!isDeleting && currentText === fullText) {
        // Pause at end of typing
        timer = setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((current + 1) % rotatingTexts.length);
      }
    };
    
    timer = setTimeout(handleType, typingSpeed);
    
    return () => {
      window.removeEventListener('mousemove', updateMouse);
      clearTimeout(timer);
    };
  }, [currentText, isDeleting, currentTextIndex, typingSpeed, rotatingTexts]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 28, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 14 } },
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const rotateAnimation = {
    rotate: [0, 5, 0, -5, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const services = [
    {
      title: 'Personal Portfolio',
      description:
        'Elegant personal portfolio websites designed to showcase your work, skills, and experience in a visually compelling way.',
      icon: Briefcase,
      price: 'Starting at $1,299',
      features: ['Responsive Design', 'Project Gallery', 'About Section', 'Contact Form'],
    },
    {
      title: 'Creative Portfolio',
      description:
        'Artistic and visually striking portfolios for designers, artists, and creatives to display their work with maximum impact.',
      icon: Palette,
      price: 'Starting at $1,899',
      features: ['Custom Animations', 'Image Galleries', 'Interactive Elements', 'Visual Storytelling'],
    },
    {
      title: 'Developer Portfolio',
      description:
        'Clean, technical portfolios for developers to showcase projects, code samples, and technical skills effectively.',
      icon: Code,
      price: 'Starting at $1,599',
      features: ['Code Display', 'Project Showcases', 'Skills Visualization', 'GitHub Integration'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden" ref={containerRef}>
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute top-24 left-12 w-72 h-72 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"
          style={{ x: mousePosition.x * 0.02, y: mousePosition.y * 0.02 }}
          animate={floatingAnimation}
        />

        <motion.div
          className="absolute top-1/3 right-16 w-96 h-96 bg-gradient-to-r from-pink-200/20 to-yellow-200/20 rounded-full blur-3xl"
          style={{ x: mousePosition.x * -0.015, y: mousePosition.y * -0.015 }}
          animate={{
            y: [0, -20, 0],
            transition: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }
          }}
        />

        <motion.div
          className="absolute bottom-24 left-1/3 w-80 h-80 bg-gradient-to-r from-green-200/25 to-blue-200/25 rounded-3xl blur-3xl"
          style={{ x: mousePosition.x * 0.01, y: mousePosition.y * 0.01 }}
          animate={{
            y: [0, 15, 0],
            transition: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }
          }}
        />

        {/* Floating elements */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-6 h-6 bg-blue-400/30 rounded-full"
          animate={floatingAnimation}
        />
        <motion.div 
          className="absolute top-2/3 left-1/5 w-4 h-4 bg-purple-400/30 rounded-full"
          animate={{
            y: [0, -10, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-5 h-5 bg-pink-400/30 rounded-full"
          animate={{
            y: [0, -12, 0],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }
          }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        className="relative z-50 p-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" 
            whileHover={{ scale: 1.05 }}
            animate={pulseAnimation}
          >
            PortfolioCraft
          </motion.div>

          <div className="flex items-center space-x-6">
            <motion.button 
              onClick={() => scrollToSection('work')} 
              className="text-slate-600 hover:text-blue-600 transition-colors duration-300" 
              whileHover={{ y: -2 }}
            >
              Templates
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('about')} 
              className="text-slate-600 hover:text-blue-600 transition-colors duration-300" 
              whileHover={{ y: -2 }}
            >
              Features
            </motion.button>
            <motion.button 
              onClick={() => scrollToSection('contact')} 
              className="text-slate-600 hover:text-blue-600 transition-colors duration-300" 
              whileHover={{ y: -2 }}
            >
              Contact
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.header className="relative z-10 max-w-4xl mx-auto px-6 pt-12 pb-12 text-center" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={itemVariants} className="space-y-6">
          <motion.h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="block"
            >
              Stand Out With A{' '}
            </motion.span>

            <motion.div 
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent inline-block h-20 lg:h-24 overflow-hidden"
              initial={{ backgroundPosition: '200% 0' }}
              animate={{ backgroundPosition: '0% 0' }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
            >
              <span className="block">
                {currentText}
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-1 inline-block w-1 h-16 bg-current align-middle"
                >
                  |
                </motion.span>
              </span>
            </motion.div>
          </motion.h1>

          <motion.p 
            className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto" 
            initial={{ opacity: 0, y: 16 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.45 }}
          >
            Get noticed with a stunning portfolio that showcases your best work. Our templates are designed to impress clients and employers while highlighting your unique talents and personality.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mt-2" 
            variants={itemVariants}
          >
            <motion.button
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('work')}
            >
              <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <Palette className="w-5 h-5 mr-2 relative z-10" />
              <span className="relative z-10">Create Your Portfolio</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
            </motion.button>

            <motion.button
              className="group inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 font-semibold rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('contact')}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
              <Code className="w-5 h-5 mr-2 relative z-10" />
              <span className="relative z-10">View All Templates</span>
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.header>

      {/* Services / Cards Section */}
      <main id="work" className="relative z-10 max-w-7xl mx-auto px-6 pb-12" style={{ paddingBottom: 48 }}>
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-120px' }}>
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Portfolio <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Template Gallery</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Choose from our professionally designed templates to create a portfolio that truly represents you and your work.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.article
                key={idx}
                className="group p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -8, boxShadow: '0 25px 50px rgba(0,0,0,0.12)' }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
                
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-3 mb-6">
                  {service.features.map((f, i) => (
                    <motion.div 
                      key={i} 
                      className="flex items-center text-sm text-slate-700"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div 
                        className="w-2 h-2 bg-blue-500 rounded-full mr-3"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      />
                      {f}
                    </motion.div>
                  ))}
                </div>

                <div className="border-t border-slate-200 pt-6">
                  <div className="text-2xl font-bold text-slate-900 mb-4">{service.price}</div>
                  <motion.button 
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                    <span className="relative z-10">Get This Template</span>
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </main>

      {/* Features Section */}
      <section id="about" className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-120px' }}>
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Templates</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Our portfolio templates are designed with both aesthetics and functionality in mind.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Layout, title: "Fully Responsive", desc: "Looks perfect on all devices from mobile to desktop.", color: "blue" },
              { icon: Smartphone, title: "Easy to Customize", desc: "Change colors, fonts, and layouts with simple configuration.", color: "purple" },
              { icon: Globe, title: "SEO Optimized", desc: "Built with best practices to help you rank higher in search results.", color: "pink" },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                className="p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>
                
                <motion.div 
                  className={`w-12 h-12 bg-${feature.color}-100 rounded-xl flex items-center justify-center mb-4`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className={`w-6 h-6 text-${feature.color}-600`} />
                </motion.div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative z-10 max-w-4xl mx-auto px-6 py-16 text-center">
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Animated sparkles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-300 rounded-full"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + i * 20}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
          
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold mb-4"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Ready to Create Your Portfolio?
          </motion.h2>
          
          <motion.p 
            className="text-blue-100 text-xl mb-8"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Get started today and showcase your work with a professional portfolio.
          </motion.p>
          
          <motion.button 
            className="group inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="absolute inset-0 bg-blue-600/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            <span className="relative z-10">Get Started Now</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 max-w-7xl mx-auto px-6 py-8 text-center">
        <motion.p 
          className="text-slate-600"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          © {new Date().getFullYear()} PortfolioCraft. All rights reserved.
        </motion.p>
      </footer>
    </div>
  );
}