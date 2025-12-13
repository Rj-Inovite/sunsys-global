import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './contact.css';

// --- Data Structure for Global Offices ---
const offices = [
    { country: 'Global Headquarters', address: '123 Tech Tower, Silicon Valley, USA', email: 'hello@sunsysglobal.com', phone: '+1 (555) 123-4567' },
    { country: 'APAC Operations', address: '404 Innovation Hub, Bangalore, India', email: 'apac@sunsysglobal.com', phone: '+91 98765 43210' },
    { country: 'Europe Liaison', address: '55 Fleet Street, London, UK', email: 'eu@sunsysglobal.com', phone: '+44 20 7946 0123' },
];

// --- Animation Variants ---
const slideInFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const slideInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert('Thank you for your inquiry! We will be in touch soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="contact-us-page">

            {/* 1. Banner Section (Image Placeholder) */}
            <section className="contact-banner">
                {/* Replace this div with your actual <img> tag or background image styling */}
                <div className="banner-image-placeholder">
                    <motion.h1
                        className="banner-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        Global Reach, Personal Touch
                    </motion.h1>
                </div>
            </section>

            <motion.div 
                className="contact-content-wrapper"
                ref={sectionRef}
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                {/* 2. Contact Form Section */}
                <motion.section 
                    className="contact-form-section" 
                    variants={slideInFromLeft}
                >
                    <h2 className="section-title">Send Us a Direct Message</h2>
                    <p className="section-subtitle">
                        Let's discuss your global talent needs and how we can support your growth.
                    </p>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group-row">
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Your Name / Company" 
                                value={formData.name}
                                onChange={handleChange} 
                                required 
                            />
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Business Email" 
                                value={formData.email}
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                name="subject" 
                                placeholder="Subject" 
                                value={formData.subject}
                                onChange={handleChange} 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <textarea 
                                name="message" 
                                rows="5" 
                                placeholder="Your Inquiry..." 
                                value={formData.message}
                                onChange={handleChange} 
                                required
                            ></textarea>
                        </div>
                        <motion.button 
                            type="submit" 
                            className="submit-btn"
                            whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(255, 215, 0, 0.7)" }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Send Inquiry
                        </motion.button>
                    </form>
                </motion.section>

                {/* 3. Global Office Information */}
                <motion.section 
                    className="office-info-section" 
                    variants={slideInFromBottom}
                >
                    <h2 className="section-title">Our Global Offices</h2>
                    <p className="section-subtitle">
                        Connect with our nearest liaison team for immediate assistance.
                    </p>
                    <motion.div 
                        className="office-cards-grid"
                        variants={staggerContainer}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                    >
                        {offices.map((office, index) => (
                            <motion.div 
                                key={index} 
                                className="office-card"
                                variants={slideInFromBottom}
                                transition={{ delay: index * 0.2 }}
                            >
                                <h3>{office.country}</h3>
                                <p>📍 {office.address}</p>
                                <p>📧 <a href={`mailto:${office.email}`}>{office.email}</a></p>
                                <p>📞 <a href={`tel:${office.phone}`}>{office.phone}</a></p>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.section>
            </motion.div>
        </div>
    );
};

export default ContactUs;