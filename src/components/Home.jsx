import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import './home.css';
import homeVideo from '../assets/images/home.mp4';

// --- Data Structures (for cleaner component code) ---

const whySunsysFeatures = [
  { icon: '⚡', title: 'Hire in 7–14 Days', description: 'Pre-vetted engineers, ready to deploy.' },
  { icon: '🛡', title: '100% Legal & Compliance Ready', description: 'POSH, payroll, contracts, local labor laws.' },
  { icon: '🌐', title: 'Global Time-Zone Alignment', description: 'Engineers aligned to US, EU, APAC hours.' },
  { icon: '💸', title: '40–60% Cost Savings', description: 'Compared to local hiring.' },
];

const talentQualities = [
  { icon: '🎓', text: 'IIT / NIT / Tier-1 Universities' },
  { icon: '💼', text: '5+ years average experience' },
  { icon: '🗣️', text: 'English-proficient, remote-ready' },
];

const talentStats = [
  { count: '500+', label: 'Engineers Deployed' },
  { count: '20+', label: 'Technologies' },
  { count: '10+', label: 'Countries Served' },
];

const techStack = {
  backend: ['Python', 'Java', 'Node.js', 'Django', 'Spring'],
  frontend: ['React', 'Angular', 'Next.js'],
  cloudDevOps: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
  dataAI: ['ML', 'Data Engineering', 'AI Tools'],
};

const hiringProcessSteps = [
  { step: '1', title: 'Tell Us Your Requirement', description: 'Share your project details and talent needs.' },
  { step: '2', title: 'Get Curated Talent Profiles', description: 'Receive profiles of pre-vetted, matching engineers.' },
  { step: '3', title: 'Interview & Select', description: 'Conduct interviews and choose your ideal candidates.' },
  { step: '4', title: 'Onboard in Days', description: 'Integrate new talent seamlessly into your team.' },
];

const clientLogos = [
  { name: 'FinTech Startup', region: 'USA' },
  { name: 'SaaS Company', region: 'UK' },
  { name: 'E-Commerce Brand', region: 'India' },
  { name: 'Healthcare Innovator', region: 'Europe' },
];

// --- Animation Variants ---

const slideInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const typingText = {
  hidden: {
    width: "0%",
    opacity: 0,
  },
  visible: {
    width: "100%",
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      delay: 0.5,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

// --- Reusable Component for Scroll Animation ---

const AnimatedSection = ({ children, variants, amount = 0.2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
};

// --- Main Home Component ---

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(error => {
        console.log('Autoplay failed:', error);
      });
    }
  }, []);

  return (
    <div className="home-container">
      {/* 1. Hero Section */}
      <section className="hero-section">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={homeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="hero-title"
            initial="hidden"
            animate="visible"
            variants={typingText}
          ></motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
             </motion.p>
          <motion.div
            className="hero-services"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6, staggerChildren: 0.1 }}
          >
          </motion.div>
          <div className="hero-actions">
          
          </div>

        </motion.div>
      </section>

      {/* 2. "Why Global Companies Choose SUNSYS" (Differentiation Section) */}
      <section className="why-sunsys-section section-padding">
        <AnimatedSection variants={slideInFromLeft}>
          <h2 className="section-title">Why Global Companies Choose SUNSYS</h2>
          <p className="section-subtitle">Discover the SUNSYS advantage that sets us apart.</p>
        </AnimatedSection>
        <div className="why-sunsys-grid">
          {whySunsysFeatures.map((feature, index) => (
            <AnimatedSection key={index} variants={fadeIn}>
              <div className="feature-card why-sunsys-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
      
      {/* 3. Talent Quality Proof (Very Important) */}
      <section className="talent-quality-section section-padding">
        <div className="talent-quality-content">
          <AnimatedSection variants={slideInFromLeft}>
            <h2 className="section-title">Elite Engineering Talent You Can Trust</h2>
            <p className="section-subtitle">Our commitment to quality ensures you get the best.</p>
          </AnimatedSection>
          <AnimatedSection variants={fadeIn} amount={0.5}>
            <div className="talent-proof-details">
              <div className="talent-tags">
                {talentQualities.map((item, index) => (
                  <motion.span
                    key={index}
                    className="talent-tag"
                    variants={listItemVariants}
                  >
                    {item.icon} {item.text}
                  </motion.span>
                ))}
              </div>
              <div className="talent-stats-strip">
                {talentStats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <span className="stat-count highlight-text">{stat.count}</span>
                    <p className="stat-label">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
        <AnimatedSection variants={slideInFromRight}>
          <div className="talent-quality-image-container">
            {" "}
            <div className="talent-quality-image-overlay"></div>
          </div>
        </AnimatedSection>
      </section>

      {/* 4. Technology Stack Section */}
      <section className="tech-stack-section section-padding">
        <AnimatedSection variants={fadeIn}>
          <h2 className="section-title">Technologies We Specialize In</h2>
          <p className="section-subtitle">Our expertise covers a wide array of modern technologies.</p>
        </AnimatedSection>
        <div className="tech-stack-grid">
          <AnimatedSection variants={slideInFromLeft} amount={0.3}>
            <div className="tech-category-card">
              <h3>Backend</h3>
              <div className="tech-icons">
                {techStack.backend.map((tech, index) => (
                  <span key={index} className="tech-icon-tag">{tech}</span>
                ))}
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection variants={fadeIn} amount={0.3}>
            <div className="tech-category-card">
              <h3>Frontend</h3>
              <div className="tech-icons">
                {techStack.frontend.map((tech, index) => (
                  <span key={index} className="tech-icon-tag">{tech}</span>
                ))}
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection variants={fadeIn} amount={0.3}>
            <div className="tech-category-card">
              <h3>Cloud & DevOps</h3>
              <div className="tech-icons">
                {techStack.cloudDevOps.map((tech, index) => (
                  <span key={index} className="tech-icon-tag">{tech}</span>
                ))}
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection variants={slideInFromRight} amount={0.3}>
            <div className="tech-category-card">
              <h3>Data & AI</h3>
              <div className="tech-icons">
                {techStack.dataAI.map((tech, index) => (
                  <span key={index} className="tech-icon-tag">{tech}</span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 5. "How It Works" (Simple Process Flow) */}
      <section className="how-it-works-section section-padding">
        <AnimatedSection variants={fadeIn}>
          <h2 className="section-title">Our Hiring Process — Simple & Transparent</h2>
          <p className="section-subtitle">Experience a seamless journey to find your next great hire.</p>
        </AnimatedSection>
        <div className="process-flow-grid">
          {hiringProcessSteps.map((step, index) => (
            <AnimatedSection key={index} variants={fadeIn} amount={0.5}>
              <motion.div
                className="process-step-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="step-number">{step.step}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 6. Client Logos / Social Proof */}
      <section className="client-logos-section section-padding">
        <AnimatedSection variants={fadeIn}>
          <h2 className="section-title">Trusted By Innovative Companies Worldwide</h2>
          <p className="section-subtitle">Empowering startups across US, UK, Europe & APAC.</p>
        </AnimatedSection>
        <div className="client-logos-grid">
          {clientLogos.map((client, index) => (
            <AnimatedSection key={index} variants={fadeIn} amount={0.7}>
              <motion.div
                className="client-logo-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <span className="client-name">{client.name}</span>
                <span className="client-region">({client.region})</span>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="cta-section section-padding">
        <AnimatedSection variants={fadeIn}>
          <h2 className="cta-title">Ready to Accelerate Your Innovation Pipeline?</h2>
          <p className="cta-subtitle">
            Join hundreds of companies worldwide who trust Sunsys Global to deliver exceptional engineering talent and innovative solutions.
          </p>
          <div className="cta-actions">
            <motion.button
              className="btn primary-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.button>
            <motion.button
              className="btn secondary-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Talk to an Expert
            </motion.button>
          </div>
        </AnimatedSection>
      </section>

      <footer className="footer-note">
        <p>Stay Updated</p>
      </footer>
    </div>
  );
};

export default Home;