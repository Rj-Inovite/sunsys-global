// File: App.jsx (Final and Complete)

import { useState, useEffect } from 'react';
import "./About.css";
import { motion } from "framer-motion";
import {
  FiZap, FiTarget, FiStar, FiGlobe, FiCheckCircle, FiShield,
  FiUsers, FiTrendingUp, FiArrowRight, FiClock, FiDollarSign,
  FiTool, FiRefreshCw, FiFeather, FiLayers, FiCode, FiBriefcase,
  FiTrello, FiTrendingUp as FiTrending, FiBookOpen, FiActivity,
  FiTruck, FiMapPin, FiAward, FiHeart, FiMonitor, FiUserCheck,
  FiZap as FiLightning
} from "react-icons/fi";
import { FaGlobeAmericas, FaBuilding, FaGraduationCap } from "react-icons/fa";

// --- Framer Motion Variants ---

// Parent container for staggered appearance
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Fade & Slide Up variant (reusable for scroll entry)
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.6, -0.05, 0.01, 0.99] // Custom spring-like easing
    } 
  },
};

// Keyframes for the sliding text in the Hero Section
const slidingTextVariants = {
  animate: {
    opacity: [0, 1, 1, 0], // Fade in, hold, fade out
    y: [20, 0, 0, -20],   // Slide up slightly
    transition: {
      duration: 3.5, 
      ease: "easeInOut",
      times: [0, 0.2, 0.8, 1],
      repeat: Infinity,
      repeatDelay: 0.5, 
    },
  },
};

// --- Data Sets ---

const metricsData = [
  { number: "500+", label: "Projects Delivered" },
  { number: "300+", label: "Elite Developers" },
  { number: "50+", label: "Global Clients" },
  { number: "98%", label: "Success & Retention" }
];

const valuesData = [
  { icon: <FiCheckCircle />, title: "Excellence First", description: "Only the top 5% of developers join our network." },
  { icon: <FiUsers />, title: "Partnership Mindset", description: "We work as a true extension of your team." },
  { icon: <FiGlobe />, title: "Global Perspective", description: "Diverse, multicultural, round-the-clock efficiency." },
  { icon: <FiShield />, title: "Trust & Transparency", description: "Clear communication and full accountability." }
];

const slidingTexts = [
  "World-Class Engineering Talent.",
  "The Top 5% Global Expertise.",
  "Future-Proof Software Solutions.",
  "Unmatched Remote Collaboration."
];

const rolesData = [
    { title: "Core Tech Talent", icon: <FiCode />, roles: ["Full-Stack Developers", "QA & Automation Engineers", "Data Scientists & AI Engineers", "Cloud & Infra Engineers", "UI/UX Designers", "Product Owners / Project Managers"] },
    { title: "Fresh Talent (Entry-Level)", icon: <FaGraduationCap />, roles: ["B.Tech/MCA Graduates", "Junior Developers", "QA Trainees", "Engineering Interns"] },
    { title: "Other & Upcoming Roles", icon: <FiTrello />, roles: ["No-Code Developers", "Customer Success Engineers", "Game Developers", "Technical Writers & Content Roles", "IT Support & Operations"] }
];

const engagementModels = [
    { model: "Contract", description: "Project-based or fixed-term resource deployment." },
    { model: "Contract-to-Hire", description: "Start on contract, transition to full-time seamlessly." },
    { model: "Full-Time Deployment", description: "Long-term integration with client teams." },
    { model: "Offshore Team Model", description: "Fully managed remote engineering pods in India." },
    { model: "Build-Operate-Transfer (BOT)", description: "We build the team and framework, then transfer ownership." }
];

const industryExpertise = [
    "SaaS", "FinTech", "EdTech", "Healthcare Tech", "E-commerce", "Enterprise IT"
];

// --- Helper Components ---

const TypingText = ({ text, delay = 0 }) => {
  const letters = text.split('');
  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.05,
            delay: delay,
          },
        },
      }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

const MetricCard = ({ number, label }) => (
  <motion.div className="metric-card" variants={fadeUp}>
    <motion.h2>{number}</motion.h2>
    <p>{label}</p>
  </motion.div>
);

const ValueCard = ({ icon, title, description }) => (
  <motion.div className="value-card" variants={fadeUp}>
    <div className="icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </motion.div>
);

const SpecialistCard = ({ name, role, photo, quote }) => (
  <motion.div className="specialist-card" variants={fadeUp}>
    <div className="photo-container">
      <div className={`photo-placeholder ${photo}`}></div> 
    </div>
    <div className="specialist-info">
        <h3>{name}</h3>
        <p className="role">{role}</p>
        <p className="quote">"{quote}"</p>
    </div>
  </motion.div>
);

const SectionListItem = ({ icon, text }) => (
    <motion.li variants={fadeUp} className="section-list-item">
        <span className="list-icon">{icon}</span> {text}
    </motion.li>
);

// --- Main App Component ---

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app-container">

      {/* 1. HERO SECTION */}
      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <TypingText text="Empowering Innovation Through Global Talent" delay={0.5} />
        </motion.div>
      </section>

      {/* 2. SHORT COMPANY INTRO (Overview) */}
      <motion.section 
        className="intro"
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.6 }} variants={fadeUp}
      >
        <p className="intro-text">
            Sunsys Global powered world-class technology talent and scalable engineering teams 
            to companies across the world. Backed by Sunsys Techsol Pvt. Ltd., we help companies reduce hiring time,
             improve delivery outcomes, strengthen compliance, and scale engineering capacity with up to 40% cost advantage.
        </p>
      </motion.section>

      {/* 3. METRICS / ACHIEVEMENTS SECTION */}
      <motion.section className="metrics-wrapper" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={container}>
        <motion.h2 className="section-title" variants={fadeUp}>📊 Our Global Impact</motion.h2>
        <motion.div className="metrics-grid" variants={container}>
          {metricsData.map((item, index) => (<MetricCard key={index} {...item} />))}
        </motion.div>
      </motion.section>

      {/* 4. VALUE PROPOSITION (New Section) */}
      <motion.section className="value-proposition" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={container}>
        <motion.h2 className="section-title" variants={fadeUp}>✅ Our Value Proposition</motion.h2>
        <div className="value-prop-grid">
            <ul className="value-list">
                <SectionListItem icon={<FiLayers />} text="Access to elite and emerging talent" />
                <SectionListItem icon={<FiClock />} text="Fast hiring cycles (72 hours–7 days)" />
                <SectionListItem icon={<FiMapPin />} text="PAN-India recruitment reach" />
                <SectionListItem icon={<FiUsers />} text="Offshore team management" />
                <SectionListItem icon={<FiTruck />} text="Global mobility support" />
                <SectionListItem icon={<FiAward />} text="POSH compliance & training" />
                <SectionListItem icon={<FiBookOpen />} text="Professional L&D programs" />
                <SectionListItem icon={<FiDollarSign />} text="Cost-effective workforce models" />
            </ul>
        </div>
      </motion.section>

      {/* 5. IT STAFFING & CONTRACT HIRING (Roles Provided - New Section) */}
      <motion.section className="staffing-roles" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={container}>
        <motion.h2 className="section-title" variants={fadeUp}>💼 IT Staffing & Roles We Provide</motion.h2>
        <div className="roles-grid">
            {rolesData.map((category, index) => (
                <motion.div key={index} className="role-category-card" variants={fadeUp}>
                    <div className="icon category-icon">{category.icon}</div>
                    <h3>{category.title}</h3>
                    <ul>
                        {category.roles.map((role, rIndex) => (
                            <li key={rIndex}><FiArrowRight className="role-arrow"/> {role}</li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </div>
      </motion.section>

      {/* 6. OFFSHORE ENGINEERING TEAMS (INDIA DELIVERY PODS - New Section) */}
      <motion.section className="offshore-teams" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={container}>
        <motion.h2 className="section-title" variants={fadeUp}>🇮🇳 Offshore Engineering Teams (Delivery Pods)</motion.h2>
        <div className="offshore-content">
            <motion.div className="offshore-text" variants={fadeUp}>
                <p>We build and run fully-managed remote engineering teams, leveraging our established infrastructure and expertise in India to ensure high productivity and quality control.</p>
            </motion.div>
            <ul className="offshore-list">
                <SectionListItem icon={<FiLightning />} text="Team setup & seamless onboarding" />
                <SectionListItem icon={<FiUserCheck />} text="Tech leadership oversight" />
                <SectionListItem icon={<FiMonitor />} text="Productivity & reporting frameworks" />
                <SectionListItem icon={<FiAward />} text="Continuous quality control" />
                <SectionListItem icon={<FiUsers />} text="Effective communication & coordination" />
            </ul>
        </div>
      </motion.section>

      {/* 7. GLOBAL TALENT MOBILITY (New Section) */}
      <motion.section className="mobility" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={container}>
        <motion.h2 className="section-title" variants={fadeUp}>🌍 Global Talent Mobility</motion.h2>
        <div className="mobility-content">
            <div className="mobility-destinations">
                <h3>Destination Support:</h3>
                <ul className="destinations-list">
                    <SectionListItem icon={<FiMapPin />} text="USA" />
                    <SectionListItem icon={<FiMapPin />} text="Europe" />
                    <SectionListItem icon={<FiMapPin />} text="Middle East" />
                    <SectionListItem icon={<FiMapPin />} text="Singapore" />
                    <SectionListItem icon={<FiMapPin />} text="Australia" />
                </ul>
            </div>
            <div className="mobility-opportunities">
                <h3>Opportunities Include:</h3>
                <ul className="opportunities-list">
                    <SectionListItem icon={<FiGlobe />} text="Remote international jobs" />
                    <SectionListItem icon={<FiTruck />} text="Relocation roles" />
                    <SectionListItem icon={<FaBuilding />} text="Client-site deployments" />
                </ul>
            </div>
        </div>
      </motion.section>

      {/* 8. POSH COMPLIANCE & L&D (Combined Section for density) */}
      <motion.section className="compliance-ld" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={container}>
        <motion.h2 className="section-title" variants={fadeUp}>🛡️ Compliance & Professional Development</motion.h2>
        <div className="compliance-ld-grid">
            <motion.div className="compliance-card" variants={fadeUp}>
                <h3>POSH Compliance Services</h3>
                <p className="outcome-text">Outcome: A safe, compliant, gender-sensitive workplace.</p>
                <ul>
                    <SectionListItem icon={<FiHeart />} text="External POSH Committee Member" />
                    <SectionListItem icon={<FiBookOpen />} text="Annual employee training & sensitization" />
                    <SectionListItem icon={<FiAward />} text="Case-handling advisory & documentation" />
                </ul>
            </motion.div>
            <motion.div className="ld-card" variants={fadeUp}>
                <h3>Learning & Development Programs</h3>
                <ul>
                    <SectionListItem icon={<FiActivity />} text="Communication skills & workplace etiquette" />
                    <SectionListItem icon={<FiTrending />} text="Leadership fundamentals & team collaboration" />
                    <SectionListItem icon={<FiCode />} text="Freshers job-readiness & productivity" />
                </ul>
            </motion.div>
        </div>
      </motion.section>



      {/* 10. INDUSTRY EXPERTISE */}
      <motion.section className="industry-expertise" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={container}>
        <motion.h2 className="section-title" variants={fadeUp}>🌐 Industry Expertise</motion.h2>
        <div className="industry-chips">
            {industryExpertise.map((industry, index) => (
                <motion.div key={index} className="chip" variants={fadeUp}>
                    {industry}
                </motion.div>
            ))}
        </div>
      </motion.section>

      {/* The following sections (Story, M/V, Values, Specialists) are from earlier steps, moved down the page */}



      <motion.section className="mv-section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={container}>
        <motion.div className="mv-card" variants={fadeUp}>
          <h3>🎯 Mission</h3>
          <p>To empower global organizations with elite engineering talent who drive innovation, excellence, and measurable business impact.</p>
        </motion.div>
        <motion.div className="mv-card" variants={fadeUp}>
          <h3>🌐 Vision</h3>
          <p>To become the world’s most trusted catalyst for engineering excellence—enabling companies to innovate boldly and scale confidently.</p>
        </motion.div>
      </motion.section>

      <motion.section className="values-section" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={container}>
        <motion.h2 className="section-title" variants={fadeUp}>💎 Our Core Values</motion.h2>
        <div className="values-grid">
          {valuesData.map((item, index) => (<ValueCard key={index} {...item} />))}
        </div>
      </motion.section>
      


      {/* FINAL CTA SECTION */}
      <section className="final-cta">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeUp}>
          Ready to Accelerate Your Innovation Pipeline?
        </motion.h2>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.2 }} variants={fadeUp}>
          <button className="primary-btn large-btn">Schedule a Consultation</button>
        </motion.div>
      </section>

    </div>
  );
}