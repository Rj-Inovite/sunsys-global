import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './whyus.css';

// --- Data Structure for Benefits Grid ---
const benefits = [
    {
    
        title: 'Elite Talent Pool',
        description: 'Access top-tier engineers from IIT/NIT/IIIT and job-ready freshers, ensuring quality and innovation.',
    },
    {
        
        title: 'Fast Hiring Cycles',
        description: 'Streamlined process guarantees talent deployment within 72 hours to 7 days, minimizing project delays.',
    },
    {
        
        title: 'Structured Offshore Teams',
        description: 'Robust team structures and delivery oversight ensure smooth operation and integration with your global operations.',
    },
    {
        title: 'Continuous Professional Growth',
        description: 'Engineers are supported by comprehensive Learning & Development (L&D) programs to keep skills cutting-edge.',
    },
    {
       
        title: 'Safe & Compliant Workplace',
        description: 'Mandatory POSH (Prevention of Sexual Harassment) programs guarantee a safer, legally compliant, and respectful environment.',
    },
    {
       
        title: 'Significant Cost Advantage',
        description: 'Achieve up to 40% cost savings compared to traditional local hiring models without compromising quality.',
    },
];

// --- Data Structure for Process Flow ---
const processSteps = [
    { number: 1, title: 'Understand Your Needs', detail: 'We dive deep into your project requirements, tech stack, and team culture.' },
    { number: 2, title: 'Match Perfect Talent', detail: 'We handpick developers from our elite network who perfectly fit your needs.' },
    { number: 3, title: 'Seamless Integration', detail: 'Your new team members integrate smoothly with your existing workflows.' },
    { number: 4, title: 'Continuous Success', detail: 'Ongoing support and optimization to ensure long-term project success.' },
];

// --- Animation Variants ---
const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const slideInFromTop = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const processContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // Stagger effect for steps
        },
    },
};

const processItem = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } },
};

// --- Reusable Component for Scroll Animation ---
const AnimatedItem = ({ children, variants, delay = 0.1, amount = 0.2 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount });

    return (
        <motion.div
            ref={ref}
            variants={variants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ delay, duration: 0.6 }}
        >
            {children}
        </motion.div>
    );
};


const WhyUs = () => {
    // For the staggered process animation
    const processRef = useRef(null);
    const isProcessInView = useInView(processRef, { once: true, amount: 0.4 });

    return (
        <div className="why-us-page">
            <section className="header-section">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={slideInFromTop}
                >
                    <h1 className="page-title">
                        Why You Should Choose <span className="highlight-text">SUNSYS TECHSOL</span>
                    </h1>
                    <p className="page-subtitle">
                        The definitive edge in global engineering talent and compliance.
                    </p>
                </motion.div>
            </section>
            
            {/* 1. HOW WE WORK WITH YOU Section */}
            <section className="how-it-works-section">
                <AnimatedItem variants={slideInFromTop} amount={0.1}>
                    <h2 className="section-main-title">How We Work With You</h2>
                    <p className="section-tagline">A seamless partnership from start to success</p>
                </AnimatedItem>

                <motion.div 
                    className="process-flow-container"
                    ref={processRef}
                    variants={processContainer}
                    initial="hidden"
                    animate={isProcessInView ? 'visible' : 'hidden'}
                >
                    {processSteps.map((step, index) => (
                        <motion.div 
                            key={index} 
                            className="process-step-card"
                            variants={processItem}
                        >
                            <span className="step-number-glow">{step.number}</span>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-detail">{step.detail}</p>
                            {/* Connector line, hidden on the last step */}
                            {index < processSteps.length - 1 && <div className="step-connector"></div>}
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* 2. WHY CHOOSE SUNSYS GLOBAL Section (Benefits Grid) */}
            <section className="benefits-section">
                <h2 className="section-main-title">
                    <span className="highlight-text">⭐</span> Why Choose SUNSYS GLOBAL
                </h2>
                <div className="benefits-grid">
                    {benefits.map((benefit, index) => (
                        <AnimatedItem key={index} variants={fadeIn} delay={index * 0.1} amount={0.3}>
                            <div className="benefit-card">
                                <div className="benefit-icon">{benefit.icon}</div>
                                <h2 className="benefit-title">{benefit.title}</h2>
                                <p className="benefit-description">{benefit.description}</p>
                            </div>
                        </AnimatedItem>
                    ))}
                </div>
            </section>

            <section className="cta-section">
                <AnimatedItem variants={fadeIn} delay={0.2}>
                    <h3 className="cta-text">
                        Ready to scale your team with world-class engineers?
                    </h3>
                    <motion.button 
                        className="cta-button"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255, 215, 0, 0.7)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contact Our Global Talent Team
                    </motion.button>
                </AnimatedItem>
            </section>
        </div>
    );
};

export default WhyUs;