import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('Organic Fertilizers (Panchakavya-Based)');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: '#FFFFFF',
        paddingTop: '6rem',
        paddingBottom: '6.5rem',
        position: 'relative',
        borderTop: '1px solid rgba(23, 63, 43, 0.08)',
      }}
    >
      <div className="container-custom">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 1fr',
            gap: '3.5rem',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left Column: Official Contact & Company Information */}
          <div>
            <div style={{ marginBottom: '2.5rem' }}>
              <div className="aeline-tag" style={{ marginBottom: '1.25rem' }}>
                <Sparkles size={13} color="#3B7E48" />
                <span>GET IN TOUCH</span>
              </div>

              <h2
                className="font-display"
                style={{
                  fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                  color: '#121E15',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  fontWeight: 800,
                }}
              >
                Let's Grow a <span style={{ color: '#3B7E48' }}>Greener Future</span> Together
              </h2>

              <p style={{ color: '#556557', fontSize: '1.05rem', lineHeight: 1.7, marginTop: '1.25rem' }}>
                Whether you are a farmer, distributor, FPO, agricultural stakeholder, or conscious
                consumer, connect with NAMO Organic to learn more about our products and solutions.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {/* Phone & Email Dual Grid */}
              <div
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}
                className="contact-quick-cards-grid"
              >
                {/* Phone */}
                <a
                  href="tel:+919500829886"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    textDecoration: 'none',
                    color: 'inherit',
                    padding: '1.5rem',
                    borderRadius: '20px',
                    backgroundColor: '#F7F5EF',
                    border: '1px solid rgba(23, 63, 43, 0.08)',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      backgroundColor: '#0C291B',
                      color: '#93C639',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Phone size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#3B7E48', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      DIRECT PHONE / WHATSAPP
                    </div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#121E15', marginTop: '0.2rem' }}>
                      +91 95008 29886
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:namoorganicpvtltd@gmail.com"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    textDecoration: 'none',
                    color: 'inherit',
                    padding: '1.5rem',
                    borderRadius: '20px',
                    backgroundColor: '#F7F5EF',
                    border: '1px solid rgba(23, 63, 43, 0.08)',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      backgroundColor: '#0C291B',
                      color: '#93C639',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#3B7E48', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      OFFICIAL INBOX
                    </div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#121E15', marginTop: '0.2rem', wordBreak: 'break-all' }}>
                      namoorganicpvtltd@gmail.com
                    </div>
                  </div>
                </a>
              </div>

              {/* Registered Office */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.25rem',
                  padding: '1.5rem',
                  borderRadius: '20px',
                  backgroundColor: '#F7F5EF',
                  border: '1px solid rgba(23, 63, 43, 0.08)',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    backgroundColor: '#0C291B',
                    color: '#93C639',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#3B7E48', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    REGISTERED OFFICE
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#121E15', marginTop: '0.35rem', lineHeight: 1.5 }}>
                    5B, Jain's La Gardenia, Kothari Road,<br />
                    Nungambakkam, Chennai - 600034, Tamil Nadu, India.
                  </div>
                </div>
              </div>
            </div>

            {/* Official Web Portals */}
            <div
              style={{
                padding: '1.5rem',
                borderRadius: '20px',
                backgroundColor: '#0C291B',
                color: '#FFFFFF',
              }}
            >
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#93C639', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.65rem' }}>
                OFFICIAL WEB PORTAL
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <a
                  href="https://www.namohydrogen.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#FFFFFF', textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  www.namohydrogen.com
                  <ExternalLink size={14} color="#93C639" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Direct Enquiry Form */}
          <div
            style={{
              backgroundColor: '#F7F5EF',
              borderRadius: '32px',
              border: '1px solid rgba(23, 63, 43, 0.1)',
              padding: 'clamp(1.5rem, 4vw, 2.75rem) clamp(1.25rem, 3.5vw, 2.5rem)',
              boxShadow: '0 20px 45px -15px rgba(23, 63, 43, 0.08)',
            }}
          >
            <div style={{ marginBottom: '1.75rem' }}>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#3B7E48',
                  marginBottom: '0.35rem',
                }}
              >
                DIRECT ENQUIRY FORM
              </div>
              <h3 className="font-display" style={{ fontSize: '1.8rem', color: '#121E15', fontWeight: 800 }}>
                Start a Conversation
              </h3>
              <p style={{ color: '#556557', fontSize: '0.9rem', marginTop: '0.35rem' }}>
                Fill out the details below to request supply terms, product catalogs or distribution partnerships.
              </p>
            </div>

            {isSubmitted ? (
              <div
                style={{
                  padding: '2.5rem 1.5rem',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  textAlign: 'center',
                  border: '1px solid rgba(59, 126, 72, 0.2)',
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(59, 126, 72, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                  }}
                >
                  <CheckCircle size={30} color="#3B7E48" />
                </div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0C291B', marginBottom: '0.5rem' }}>
                  Enquiry Received
                </h4>
                <p style={{ color: '#556557', fontSize: '0.92rem', lineHeight: 1.6, maxWidth: '360px', margin: '0 auto 1.5rem' }}>
                  Thank you for reaching out, <strong>{fullName}</strong>. Our Chennai team will connect with you promptly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFullName('');
                    setPhone('');
                    setEmail('');
                    setMessage('');
                  }}
                  className="aeline-btn-lime"
                  style={{ fontSize: '0.85rem', padding: '0.65rem 1.4rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#121E15', marginBottom: '0.4rem' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.15rem',
                      borderRadius: '14px',
                      border: '1px solid rgba(23, 63, 43, 0.15)',
                      backgroundColor: '#FFFFFF',
                      fontSize: '0.92rem',
                      outline: 'none',
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#121E15', marginBottom: '0.4rem' }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1.15rem',
                        borderRadius: '14px',
                        border: '1px solid rgba(23, 63, 43, 0.15)',
                        backgroundColor: '#FFFFFF',
                        fontSize: '0.92rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#121E15', marginBottom: '0.4rem' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ramesh@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1.15rem',
                        borderRadius: '14px',
                        border: '1px solid rgba(23, 63, 43, 0.15)',
                        backgroundColor: '#FFFFFF',
                        fontSize: '0.92rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#121E15', marginBottom: '0.4rem' }}>
                    I am interested in *
                  </label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.15rem',
                      borderRadius: '14px',
                      border: '1px solid rgba(23, 63, 43, 0.15)',
                      backgroundColor: '#FFFFFF',
                      fontSize: '0.92rem',
                      outline: 'none',
                    }}
                  >
                    <option value="NAMO Panchakavya Bio-Fertilizers & Pesticides">NAMO Panchakavya Bio-Fertilizers &amp; Pesticides</option>
                    <option value="NAMO Algae Extract Liquid (Cattle Feed & Foliar)">NAMO Algae Extract Liquid (Cattle Feed &amp; Foliar)</option>
                    <option value="NAMO Cold-Pressed Native Edible Oils">NAMO Cold-Pressed Native Edible Oils</option>
                    <option value="NAMO Desi Cow Ghee (A2 Bilona)">NAMO Desi Cow Ghee (A2 Bilona)</option>
                    <option value="NAMO Pure Wild Honey (Raw & Unprocessed)">NAMO Pure Wild Honey (Raw &amp; Unprocessed)</option>
                    <option value="NAMO Organic Jaggery Powder (Iron-Rich)">NAMO Organic Jaggery Powder (Iron-Rich)</option>
                    <option value="NAMO Organic Pulses & Dals (Chemical-Free)">NAMO Organic Pulses &amp; Dals (Chemical-Free)</option>
                    <option value="NAMO Heritage Rice & Whole Wheat Grains">NAMO Heritage Rice &amp; Whole Wheat Grains</option>
                    <option value="NAMO Organic Whole Spices & Powders">NAMO Organic Whole Spices &amp; Powders</option>
                    <option value="NAMO Premium Dry Fruits & Nuts">NAMO Premium Dry Fruits &amp; Nuts</option>
                    <option value="NAMO Elite for Adult Dogs">NAMO Elite for Adult Dogs</option>
                    <option value="NAMO Elite for Cats">NAMO Elite for Cats (Grain-Free)</option>
                    <option value="NAMO Elite for Mother & Baby">NAMO Elite for Mother &amp; Baby</option>
                    <option value="NAMO Xcite for Stud Dogs">NAMO Xcite for Stud Dogs</option>
                    <option value="NAMO Xcite for Lactating Females">NAMO Xcite for Lactating Females</option>
                    <option value="NAMO Pets Addon for Healthy Cats">NAMO Pets Addon for Healthy Cats</option>
                    <option value="NAMO Pets Addon for Weight Gain">NAMO Pets Addon for Weight Gain</option>
                    <option value="NAMO Fish Oil">NAMO Fish Oil (Pure Omega 3-6-9)</option>
                    <option value="NAMO Fish Bone Chew">NAMO Fish Bone Chew (Dental Care)</option>
                    <option value="NAMO Fish Tail Chew">NAMO Fish Tail Chew (Collagen Rich)</option>
                    <option value="Dealership & Distribution">Dealership &amp; Regional Distribution</option>
                    <option value="FPO Partnership / Institutional Procurement">FPO Partnership / Institutional Procurement</option>
                    <option value="E-commerce / Merchant Trading">E-commerce / Merchant Export Trading</option>
                    <option value="Other Agricultural Requirements">Other Agricultural Requirements</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#121E15', marginBottom: '0.4rem' }}>
                    Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your crops, acreage, supply volume or partnership interest..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.85rem 1.15rem',
                      borderRadius: '14px',
                      border: '1px solid rgba(23, 63, 43, 0.15)',
                      backgroundColor: '#FFFFFF',
                      fontSize: '0.92rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="aeline-btn-lime"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '0.95rem',
                    marginTop: '0.5rem',
                  }}
                >
                  <span>Send Enquiry</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
