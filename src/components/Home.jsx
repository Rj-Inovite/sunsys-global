import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './home.css';
import image1 from '../assets/images/1.jpg';
import image2 from '../assets/images/2.jpg';
import image3 from '../assets/images/4.jpg';

// --- Data Structures ---

// Moved these into the component file for easier maintenance
const whySunsysFeatures = [
  { title: 'Hire in 7–14 Days', description: 'Pre-vetted engineers, ready to deploy.' },
  { title: '100% Legal & Compliance Ready', description: 'POSH, payroll, contracts, local labor laws.' },
  { title: 'Global Time-Zone Alignment', description: 'Engineers aligned to US, EU, APAC hours.' },
  { title: '40–60% Cost Savings', description: 'Compared to local hiring.' },
];

const talentStats = [
  { count: '500+', label: 'Engineers Deployed' },
  { count: '20+', label: 'Technologies' },
  { count: '10+', label: 'Countries Served' },
];

const techStack = {
  backend: [],
  frontend: [],
  cloudDevOps: [],
  dataAI: [],
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
  { name: 'Logistics Provider', region: 'Canada' },
  { name: 'Gaming Studio', region: 'APAC' },
];

const certificates = [
    {
        id: 1,
        image: image1,
        title: 'RQC Certified',
        description: 'Demonstrates our commitment to Quality Control in recruitment, ensuring only highly vetted and qualified candidates are presented.'
    },
    {
        id: 2,
        image: image2,
        title: 'ISO 9001: Certified',
        description: 'Certification for Quality Management Systems, proving our dedication to consistent quality in service delivery and client satisfaction.'
    },
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

// Typing text animation data for the new hero
const typingTextLines = [
  " sunsys Global ",
    "Elite Remote Engineers .",
    "GlobalTalent Local Compliance.",
    "Scale Your Tech Team in Days, Not Months."
];

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


// --- New Dynamic Hero Component ---
const DynamicHero = () => {
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLineIndex(prevIndex => (prevIndex + 1) % typingTextLines.length);
        }, 4000); // Change line every 4 seconds

        return () => clearInterval(interval);
    }, []);

    // Framer Motion variants for the typing effect
    const lineVariants = {
        key: currentLineIndex, // Key change triggers re-animation
        hidden: { width: "0%", opacity: 0 },
        visible: {
            width: "100%",
            opacity: 1,
            transition: {
                duration: 1.5,
                ease: "easeInOut",
                delay: 0.2,
            }
        },
    };

    const handleSeeProcess = () => {
        const element = document.querySelector('.how-it-works-section');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="dynamic-hero-section">
            {/* Background Particles/Dots Overlay - Pure CSS for performance */}
            <div className="background-dots-grid"></div>

            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.h1
                    className="hero-title"
                    key={currentLineIndex} // Important: Forces re-render/re-animation
                    variants={lineVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {typingTextLines[currentLineIndex]}
                </motion.h1>

                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8, duration: 0.8 }}
                >
                    Access a pool of pre-vetted, compliant, and timezone-aligned global software engineers within two weeks.
                </motion.p>

                <motion.div
                    className="hero-actions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.2, duration: 0.6 }}
                >
                    <button className="btn primary-btn" onClick={() => navigate('/contact')}>Hire Now</button>
                    <button className="btn secondary-btn" onClick={handleSeeProcess}>See Our Process</button>
                </motion.div>
            </motion.div>
        </section>
    );
};


// --- New Certifications Section Component ---
const CertificationsSection = () => {
    const navigate = useNavigate();

    const handleLearnMore = () => {
        navigate('/about');
        setTimeout(() => {
            const element = document.querySelector('.value-proposition');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <section className="certifications-section section-padding">
            <AnimatedSection variants={fadeIn}>
                <h2 className="section-title">🏆 Verified Quality & Compliance</h2>
                <p className="section-subtitle">Our commitment to excellence is certified by global standards.</p>
            </AnimatedSection>

            <div className="certifications-grid">
                {certificates.map((cert, index) => (
                    <motion.div
                        key={cert.id}
                        className="certificate-card"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        whileHover={{ scale: 1.03, borderColor: 'var(--color-highlight)' }}
                    >
                        <div className="certificate-image-wrapper">
                            <motion.img
                                src={cert.image}
                                alt={cert.title}
                                className="certificate-img"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            />
                        </div>
                        <div className="certificate-text-content">
                            <h3 className="certificate-title highlight-text">{cert.title}</h3>
                            <p className="certificate-description">{cert.description}</p>
                            <button className="btn secondary-btn" style={{marginTop: '1rem'}} onClick={handleLearnMore}>Learn More</button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};


// --- Main Home Component ---

const Home = () => {
  // Use a map function for the talentQualities to make it dynamic
  const talentQualities = [
    ];

  return (
    <div className="home-container">
      {/* 1. Dynamic Hero Section (New Animated Banner) */}
      <DynamicHero />

      {/* 2. "Why Global Companies Choose SUNSYS" (Differentiation Section) */}
      <section className="why-sunsys-section section-padding">
        <AnimatedSection variants={slideInFromLeft}>
          <h2 className="section-title">Why Global Companies Choose SUNSYS</h2>
          <p className="section-subtitle">Discover the SUNSYS advantage that sets us apart.</p>
        </AnimatedSection>
        <div className="why-sunsys-grid">
          {whySunsysFeatures.map((feature, index) => (
            <AnimatedSection key={index} variants={fadeIn}>
              <motion.div 
                  className="feature-card why-sunsys-card"
                  whileHover={{ 
                      y: -5, 
                      boxShadow: "0 10px 30px rgba(255, 215, 0, 0.2)",
                      border: "1px solid var(--color-highlight)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="feature-icon">✨</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>
      
      {/* 3. Certifications & Quality Section (NEW SECTION) */}
      <CertificationsSection />

      {/* 4. Talent Quality Proof */}
      <section className="talent-quality-section section-padding">
        <div className="talent-quality-content">
          <AnimatedSection variants={slideInFromLeft}>
            <h2 className="section-title">Elite Engineering Talent You Can Trust</h2>
            <p className="section-subtitle">Our commitment to quality ensures you get the best engineers, every time.</p>
          </AnimatedSection>
          <AnimatedSection variants={fadeIn} amount={0.5}>
            <div className="talent-proof-details">
              <div className="talent-tags">
                {talentQualities.map((item, index) => (
                  <motion.span
                    key={index}
                    className="talent-tag"
                    variants={fadeIn}
                    whileHover={{ scale: 1.05, backgroundColor: 'var(--color-highlight)', color: 'var(--color-surface)' }}
                    transition={{ duration: 0.3 }}
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
            <img src={image3} alt="Talent Quality" width="100%" height="400px" style={{objectFit: 'cover'}} />
            <div className="talent-quality-image-overlay"></div>
          </div>
        </AnimatedSection>
      </section>

      {/* 5. Technology Stack Section */}
      <section className="tech-stack-section section-padding">
        <AnimatedSection variants={fadeIn}>
          <h2 className="section-title">Technologies We Specialize In</h2>
          <p className="section-subtitle">Our expertise covers a wide array of modern technologies to power your innovation.</p>
        </AnimatedSection>
        <div className="tech-stack-grid">
          {/* Backend */}
          <AnimatedSection variants={slideInFromLeft} amount={0.3}>
            <motion.div className="tech-category-card" whileHover={{ scale: 1.03, borderColor: 'var(--color-highlight)' }}>
              <h3>Backend</h3>
              <div className="tech-icons">
                {techStack.backend.map((tech, index) => (
                  <span key={index} className="tech-icon-tag">{tech}</span>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
          {/* Frontend */}
          <AnimatedSection variants={fadeIn} amount={0.3}>
            <motion.div className="tech-category-card" whileHover={{ scale: 1.03, borderColor: 'var(--color-highlight)' }}>
              <h3>Frontend</h3>
              <div className="tech-icons">
                {techStack.frontend.map((tech, index) => (
                  <span key={index} className="tech-icon-tag">{tech}</span>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
          {/* Cloud & DevOps */}
          <AnimatedSection variants={fadeIn} amount={0.3}>
            <motion.div className="tech-category-card" whileHover={{ scale: 1.03, borderColor: 'var(--color-highlight)' }}>
              <h3>Cloud & DevOps</h3>
              <div className="tech-icons">
                {techStack.cloudDevOps.map((tech, index) => (
                  <span key={index} className="tech-icon-tag">{tech}</span>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
          {/* Data & AI */}
          <AnimatedSection variants={slideInFromRight} amount={0.3}>
            <motion.div className="tech-category-card" whileHover={{ scale: 1.03, borderColor: 'var(--color-highlight)' }}>
              <h3>Data & AI</h3>
              <div className="tech-icons">
                {techStack.dataAI.map((tech, index) => (
                  <span key={index} className="tech-icon-tag">{tech}</span>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* 6. "How It Works" (Simple Process Flow) */}
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
                whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(255, 215, 0, 0.1)" }}
              >
                <div className="step-number">{step.step}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 7. Client Logos / Social Proof */}
      <section className="client-logos-section section-padding">
        <AnimatedSection variants={fadeIn}>
          <h2 className="section-title">Trusted By Innovative Companies Worldwide</h2>
          <p className="section-subtitle">Empowering startups and enterprises across US, UK, Europe & APAC.</p>
        </AnimatedSection>
        <div className="client-logos-grid">
          {clientLogos.map((client, index) => (
            <AnimatedSection key={index} variants={fadeIn} amount={0.7}>
              <motion.div
                className="client-logo-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, borderColor: 'var(--color-highlight)' }}
              >
                <span className="client-name">{client.name}</span>
                <span className="client-region">({client.region})</span>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 8. Final CTA Section (Added for completeness) */}
      <section className="cta-section">
        <AnimatedSection variants={fadeIn}>
          <h2 className="cta-title highlight-text">Ready to Scale Your Team?</h2>
          <p className="cta-subtitle">Book a free consultation to find your perfect engineer within 48 hours.</p>
    <motion.button
      className="btn primary-btn"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate('/contact')}
    >
      Start Hiring Today
    </motion.button>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Home;