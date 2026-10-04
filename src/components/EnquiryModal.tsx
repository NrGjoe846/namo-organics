import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  ShieldCheck,
  Sprout,
  ChevronDown,
  Loader2,
  Check,
} from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultProduct = 'NAMO Panchakavya Bio-Fertilizers & Pesticides',
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState(defaultProduct);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Sync defaultProduct when prop changes or modal opens
  useEffect(() => {
    if (defaultProduct) {
      setInterest(defaultProduct);
    }
  }, [defaultProduct, isOpen]);

  // Handle body scroll lock & Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);

      // Auto-focus first input on desktop after mount animation
      const timer = setTimeout(() => {
        if (nameInputRef.current && window.innerWidth >= 768) {
          nameInputRef.current.focus();
        }
      }, 150);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable API / email dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 650);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setIsSubmitting(false);
    setFullName('');
    setPhone('');
    setEmail('');
    setMessage('');
    onClose();
  };

  const handleSendAnother = () => {
    setSubmitted(false);
    setFullName('');
    setPhone('');
    setEmail('');
    setMessage('');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
      className="enquiry-modal-backdrop"
      onClick={onClose}
    >
      {/* Modal Surface Card */}
      <div
        ref={modalRef}
        className="enquiry-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Close Button */}
        <button
          onClick={onClose}
          className="enquiry-modal-close-btn"
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        {submitted ? (
          /* ===================================================================
             SUCCESS STATE PANEL
             =================================================================== */
          <div className="enquiry-modal-success">
            <div className="enquiry-success-icon-wrap">
              <CheckCircle2 size={44} color="#1B5E20" strokeWidth={2.2} />
            </div>

            <span className="enquiry-eyebrow">ENQUIRY TRANSMITTED</span>
            <h3 id="enquiry-modal-title" className="enquiry-success-title font-display">
              Thank You for Connecting
            </h3>

            <p className="enquiry-success-desc">
              Your agricultural enquiry has been securely received. Our agronomist team will review your requirements and reach out to you within 24 hours.
            </p>

            <div className="enquiry-summary-box">
              <div className="enquiry-summary-header">
                <Sprout size={15} color="#2E7D32" />
                <span>Enquiry Summary</span>
              </div>
              <div className="enquiry-summary-row">
                <span className="enquiry-summary-label">Name:</span>
                <span className="enquiry-summary-val">{fullName || 'Valued Partner'}</span>
              </div>
              <div className="enquiry-summary-row">
                <span className="enquiry-summary-label">Requirement:</span>
                <span className="enquiry-summary-val">{interest}</span>
              </div>
              <div className="enquiry-summary-row">
                <span className="enquiry-summary-label">Contact:</span>
                <span className="enquiry-summary-val">{phone} • {email}</span>
              </div>
              {message && (
                <div className="enquiry-summary-row" style={{ alignItems: 'flex-start' }}>
                  <span className="enquiry-summary-label">Notes:</span>
                  <span className="enquiry-summary-val" style={{ fontStyle: 'italic' }}>
                    "{message.length > 80 ? message.slice(0, 80) + '...' : message}"
                  </span>
                </div>
              )}
            </div>

            <div className="enquiry-success-actions">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="enquiry-submit-btn"
                style={{ flex: 1 }}
              >
                <span>Done</span>
                <Check size={16} />
              </button>
              <button
                type="button"
                onClick={handleSendAnother}
                className="enquiry-secondary-btn"
              >
                Send Another
              </button>
            </div>
          </div>
        ) : (
          /* ===================================================================
             TWO-COLUMN DESKTOP / STRUCTURED MOBILE POPUP
             =================================================================== */
          <div className="enquiry-modal-grid">
            {/* Left Column: Brand Agricultural Story & Trust Panel (Desktop/Tablet) */}
            <aside className="enquiry-brand-panel">
              {/* Agricultural Background Image & Lush Gradient */}
              <div className="enquiry-brand-bg-wrap">
                <img
                  src="/assets/sunset-farm.jpg"
                  alt="NAMO Organic Agriculture"
                  className="enquiry-brand-bg-img"
                />
                <div className="enquiry-brand-bg-gradient" />
              </div>

              {/* Brand Content Container */}
              <div className="enquiry-brand-content">
                {/* Logo & Identity */}
                <div className="enquiry-brand-header">
                  <img
                    src="/assets/namo-logo.png"
                    alt="NAMO Organic Logo"
                    className="enquiry-brand-logo"
                  />
                  <div>
                    <div className="enquiry-brand-name">NAMO ORGANIC</div>
                    <div className="enquiry-brand-sub">Natural Agriculture &amp; Modern Organic</div>
                  </div>
                </div>

                {/* Brand Vision Statement */}
                <div className="enquiry-brand-statement">
                  <h4 className="font-display">Growing better.<br />Building naturally.</h4>
                  <p>
                    Connect directly with our agricultural specialists for bio-inputs, organic supply, dealership inquiries, and farm partnerships.
                  </p>
                </div>

                {/* Trust & Category Pillars */}
                <div className="enquiry-brand-pillars">
                  <div className="enquiry-pillar-item">
                    <span className="enquiry-pillar-dot" />
                    <span>Bio-Fertilizers &amp; Panchakavya</span>
                  </div>
                  <div className="enquiry-pillar-item">
                    <span className="enquiry-pillar-dot" />
                    <span>Botanical Crop Protection</span>
                  </div>
                  <div className="enquiry-pillar-item">
                    <span className="enquiry-pillar-dot" />
                    <span>Cattle Wellness &amp; Algae Extract</span>
                  </div>
                  <div className="enquiry-pillar-item">
                    <span className="enquiry-pillar-dot" />
                    <span>FPO &amp; Bulk Procurement Supply</span>
                  </div>
                </div>

                {/* Direct Contact & Support Badge */}
                <div className="enquiry-brand-footer">
                  <div className="enquiry-contact-item">
                    <Phone size={14} color="#93C639" />
                    <span>+91 95008 29886 / +91 95001 64786</span>
                  </div>
                  <div className="enquiry-contact-item">
                    <Mail size={14} color="#93C639" />
                    <span>namoorganicpvtltd@gmail.com</span>
                  </div>
                  <div className="enquiry-timing-note">
                    Official Support: Mon–Sat 9:00 AM – 7:00 PM IST
                  </div>
                </div>
              </div>
            </aside>

            {/* Right Column: High-Conversion Form Experience */}
            <main className="enquiry-form-panel">
              {/* Form Header */}
              <div className="enquiry-form-header">
                <div className="enquiry-badge">
                  <Sprout size={13} color="#2E7D32" />
                  <span>DIRECT ENQUIRY</span>
                </div>
                <h2 id="enquiry-modal-title" className="enquiry-form-title font-display">
                  Connect with NAMO Organic
                </h2>
                <p className="enquiry-form-subtitle">
                  Share what you need and our team will help you find the right solution.
                </p>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="enquiry-form-body">
                {/* Field Group 1: Identity & Contact Details */}
                <div className="enquiry-form-section">
                  <div className="enquiry-section-label">01. YOUR CONTACT DETAILS</div>

                  {/* Full Name */}
                  <div className="enquiry-field">
                    <label htmlFor="enquiry-fullname" className="enquiry-label">
                      Full Name <span className="req">*</span>
                    </label>
                    <input
                      id="enquiry-fullname"
                      ref={nameInputRef}
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="enquiry-input"
                    />
                  </div>

                  {/* Two Columns: Phone & Email on Desktop */}
                  <div className="enquiry-field-row">
                    {/* Phone Number with India Code */}
                    <div className="enquiry-field">
                      <label htmlFor="enquiry-phone" className="enquiry-label">
                        Phone Number <span className="req">*</span>
                      </label>
                      <div className="enquiry-phone-wrapper">
                        <span className="enquiry-phone-prefix">+91</span>
                        <input
                          id="enquiry-phone"
                          type="tel"
                          required
                          placeholder="98765 43210"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="enquiry-input enquiry-input-phone"
                        />
                      </div>
                    </div>

                    {/* Email Address */}
                    <div className="enquiry-field">
                      <label htmlFor="enquiry-email" className="enquiry-label">
                        Email Address <span className="req">*</span>
                      </label>
                      <input
                        id="enquiry-email"
                        type="email"
                        required
                        placeholder="name@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="enquiry-input"
                      />
                    </div>
                  </div>
                </div>

                {/* Field Group 2: Product Requirement & Notes */}
                <div className="enquiry-form-section">
                  <div className="enquiry-section-label">02. YOUR REQUIREMENT</div>

                  {/* Interested In Dropdown */}
                  <div className="enquiry-field">
                    <label htmlFor="enquiry-interest" className="enquiry-label">
                      I Am Interested In <span className="req">*</span>
                    </label>
                    <div className="enquiry-select-wrapper">
                      <select
                        id="enquiry-interest"
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        className="enquiry-select"
                        required
                      >
                        <optgroup label="Bio-Fertilizers & Crop Inputs">
                          <option value="NAMO Panchakavya Bio-Fertilizers & Pesticides">
                            NAMO Panchakavya Bio-Fertilizers &amp; Pesticides
                          </option>
                          <option value="NAMO Algae Extract Liquid">
                            NAMO Algae Extract Liquid (Cattle Feed &amp; Foliar)
                          </option>
                        </optgroup>
                        <optgroup label="Direct Organic Harvest Products">
                          <option value="NAMO Cold-Pressed Native Edible Oils">
                            NAMO Cold-Pressed Native Edible Oils
                          </option>
                          <option value="NAMO Desi Cow Ghee">
                            NAMO Desi Cow Ghee (A2 Bilona)
                          </option>
                          <option value="NAMO Pure Wild Honey">
                            NAMO Pure Wild Honey (Raw &amp; Unprocessed)
                          </option>
                          <option value="NAMO Organic Jaggery Powder">
                            NAMO Organic Jaggery Powder (Iron-Rich)
                          </option>
                          <option value="NAMO Organic Pulses & Dals">
                            NAMO Organic Pulses &amp; Dals (Chemical-Free)
                          </option>
                          <option value="NAMO Heritage Rice & Whole Wheat Grains">
                            NAMO Heritage Rice &amp; Whole Wheat Grains
                          </option>
                          <option value="NAMO Organic Whole Spices & Powders">
                            NAMO Organic Whole Spices &amp; Powders
                          </option>
                          <option value="NAMO Premium Dry Fruits & Nuts">
                            NAMO Premium Dry Fruits &amp; Nuts
                          </option>
                        </optgroup>
                        <optgroup label="Organic Pet Care & Veterinary Nutrition">
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
                        </optgroup>
                        <optgroup label="Institutional & Partnerships">
                          <option value="Dealership & Distribution">
                            Dealership &amp; Regional Distribution
                          </option>
                          <option value="FPO Institutional Procurement">
                            FPO Institutional Supply &amp; Procurement
                          </option>
                          <option value="E-commerce / Merchant Trading">
                            E-commerce / Merchant Export Trading
                          </option>
                          <option value="Other Agricultural Enquiries">
                            Other Agricultural Enquiries
                          </option>
                        </optgroup>
                      </select>
                      <ChevronDown size={16} className="enquiry-select-chevron" />
                    </div>
                  </div>

                  {/* Requirements Textarea */}
                  <div className="enquiry-field">
                    <label htmlFor="enquiry-message" className="enquiry-label">
                      Message / Requirements <span className="opt">(Optional)</span>
                    </label>
                    <textarea
                      id="enquiry-message"
                      rows={3}
                      placeholder="Tell us about your farm, crop type, quantity, location, or specific enquiry..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="enquiry-textarea"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="enquiry-action-wrap">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="enquiry-submit-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={17} className="animate-spin" />
                        <span>Sending Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>

                  <div className="enquiry-privacy-note">
                    <ShieldCheck size={13} color="#2E7D32" />
                    <span>Your information is confidential and used only to respond to your enquiry.</span>
                  </div>
                </div>
              </form>
            </main>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnquiryModal;
