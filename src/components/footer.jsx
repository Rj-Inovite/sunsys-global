
import React from 'react';
import { Link } from 'react-router-dom';

// --- Inline SVG Icon Definitions (Lucide/Standard style) ---

// WhatsApp Icon (Solid fill)
const WhatsAppIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.03 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.77.46 3.48 1.35 4.96l-1.42 5.2 5.3-1.39c1.47.85 3.16 1.3 4.67 1.3 5.46 0 9.9-4.44 9.9-9.9.01-5.46-4.43-9.9-9.89-9.9zm3.89 13.57s-.18-.08-.45-.22c-.28-.13-.74-.36-1.07-.49-.33-.13-.57-.14-.81.12-.24.27-.95 1.14-1.16 1.38-.2 2.22-.19-.46-3.83-2.35-2.83-1.4-3.53-4.32-.47-5.59-.11-.2-.11-.47-.11-.63 0-.17.12-.39.26-.59.41-.09.18-.32.42-.48.6-.17.19-.3.35-.44.51-.15.17-.3.32-.5.5-.2.2-.4.4-.62.63-.2.24-.46.52-.46.86 0 .34.46.99.64 1.18.17.18 1.05 1.74 2.5 2.45 1.45.7 1.45.48 1.7.46.25-.01.8-.09 1.45-.63.66-.54.91-.94 1.16-1.09.25-.15.48-.11.83.07.35.19 2.24 1.25 2.59 1.44.35.19.6.28.81.28.2 0 .4-.07.57-.16.16-.09.28-.27.38-.43.09-.17.19-.34.28-.51s.16-.32.22-.44c.05-.12.1-.22.1-.22z"/>
  </svg>
);

// Scroll Up Arrow Icon
const ArrowUpIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="12" y1="19" x2="12" y2="5"></line>
    <polyline points="5 12 12 5 19 12"></polyline>
  </svg>
);

// Instagram Icon
const InstagramIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

// Facebook Icon
const FacebookIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
);

// Email Icon
const EmailIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
    </svg>
);


const Footer = () => {
  // --- Theme Variables ---
  const NAVY_BLUE = '#000080';
  const WHITE = '#FFFFFF';
  const LIGHT_GRAY = 'rgba(255, 255, 255, 0.7)';
  const WHATSAPP_GREEN = '#25D366';

  /**
   * Function to smoothly scroll the window to the top of the page.
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Placeholder links - REPLACE THESE WITH YOUR ACTUAL URLS
  const SOCIAL_LINKS = {
      whatsapp: 'https://wa.me/1234567890?text=Hello%20sunsys%20techsol', // Replace with your number
      instagram: 'https://www.instagram.com/sunsystechnol/', // Replace with your Instagram URL
      facebook: 'https://www.facebook.com/sunsystechnol/', // Replace with your Facebook URL
      email: 'mailto:info@sunsystechsol.com', // Replace with your email address
  };

  // --- Inline Styles for Structure (Static properties) ---
  const footerStyle = {
    backgroundColor: WHITE,
    color: NAVY_BLUE,
    padding: '30px 40px',
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    position: 'relative', // Necessary for absolute positioning of internal elements if needed
  };

  const utilityContainerStyle = {
    display: 'flex',
    justifyContent: 'flex-end', // Push buttons to the right
    alignItems: 'center',
    width: '100%',
    maxWidth: '1200px',
    marginBottom: '20px',
    padding: '0 10px',
  };

  const utilityButtonStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
    transition: 'opacity 0.2s ease, transform 0.2s ease',
    fontSize: '20px',
    textDecoration: 'none',
    marginLeft: '10px',
  };

  return (
    <>
      {/* Embedded CSS for hover effects and responsiveness */}
      <style>
        {`
          /* General Link and Icon Hover Effects */
          .footer-icon-link {
            display: inline-block;
            color: ${LIGHT_GRAY};
            transition: transform 0.3s ease, color 0.3s ease;
            font-size: 24px;
            margin-right: 15px;
          }

          .footer-icon-link:hover {
            color: ${WHITE};
            transform: scale(1.1);
          }
          
          /* Footer Content Styles */
          .footer-content {
            max-width: 1200px;
            width: 100%;
            display: flex;
            justify-content: space-around;
            text-align: left;
            padding-top: 20px;
            padding-bottom: 20px;
          }

          .footer-section {
            padding: 10px;
            min-width: 180px;
          }

          /* Ensure headers are NAVY_BLUE */
          .footer-section h4 {
            font-size: 1.1em;
            margin-bottom: 15px;
            color: ${NAVY_BLUE};
            border-bottom: 2px solid ${NAVY_BLUE};
            padding-bottom: 5px;
            display: inline-block;
          }

          /* Ensure all text/links are navy blue */
          .footer-section p, .footer-section a {
            font-size: 0.9em;
            color: ${NAVY_BLUE};
            text-decoration: none;
            line-height: 1.8;
            display: block;
          }

          .footer-section a:hover {
            color: ${NAVY_BLUE};
          }
          
          /* Responsive adjustments for mobile */
          @media (max-width: 768px) {
            .footer-content {
              flex-direction: column;
              align-items: center;
              text-align: center;
            }
            .footer-section {
              margin-bottom: 20px;
            }
            .footer-section h4 {
                text-align: center;
            }
            .footer-section:last-child > div {
                justify-content: center; /* Center icons on mobile */
                align-items: center;
            }
          }
        `}
      </style>

      <footer style={footerStyle}>
        
        {/* TOP UTILITY ROW: WhatsApp and Scroll-Up Button */}
        <div style={utilityContainerStyle}>
            {/* WhatsApp Button (Top Right Corner of Footer) */}
            <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    ...utilityButtonStyle,
                    backgroundColor: WHATSAPP_GREEN,
                    color: WHITE,
                }}
                aria-label="Chat with us on WhatsApp"
                title="WhatsApp Chat"
            >
                <WhatsAppIcon />
            </a>
            
            {/* Scroll Up Button (Next to WhatsApp) */}
            <button 
                style={{
                    ...utilityButtonStyle,
                    backgroundColor: WHITE,
                    color: NAVY_BLUE,
                }} 
                onClick={scrollToTop}
                aria-label="Scroll to Top"
                title="Scroll to Top"
            >
                <ArrowUpIcon />
            </button>
        </div>


        {/* MAIN CONTENT SECTIONS */}
        <div className="footer-content">
            <div className="footer-section">
                <h4>sunsys techsol</h4>
                <p>Delivering modern technology solutions tailored for your business success.</p>
                <p>123 Tech Park, Innovation City, 10001</p>
            </div>
            <div className="footer-section">
                <h4>Quick Links</h4>
                <Link to="/about">About Us</Link>
                <Link to="/services">Our Services</Link>
                <Link to="/why-us">Why sunsys techsol</Link>
                <Link to="/privacy">Privacy Policy</Link>
            </div>
            <div className="footer-section">
                <h4>Connect & Follow</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <a href={SOCIAL_LINKS.email} title="Email Us">
                        <EmailIcon style={{ marginRight: '5px' }} /> info@sunsystechsol.com
                    </a>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', paddingTop: '5px' }}>
                        <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="footer-icon-link" title="Instagram">
                            <InstagramIcon />
                        </a>
                        <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="footer-icon-link" title="Facebook">
                            <FacebookIcon />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        {/* COPYRIGHT */}
        <p style={{ margin: '20px 0 0', fontSize: '0.8em', color: LIGHT_GRAY, borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '10px', width: '100%', maxWidth: '1200px' }}>
          &copy; {new Date().getFullYear()} sunsys techsol. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
