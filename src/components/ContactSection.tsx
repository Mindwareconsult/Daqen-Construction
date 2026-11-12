import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Clock,
} from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/websiteData';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  prefilledService?: string;
  prefilledLocation?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledService = '',
  prefilledLocation = '',
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    service: prefilledService || '',
    location: prefilledLocation || '',
    message: '',
  });

  const [projectStage, setProjectStage] = useState<string>('Ready to Build');
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState('');

  useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, service: prefilledService }));
    }
  }, [prefilledService]);

  useEffect(() => {
    if (prefilledLocation) {
      setFormData((prev) => ({ ...prev, location: prefilledLocation }));
    }
  }, [prefilledLocation]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number.';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 9) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service category.';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Please state your project location (e.g., Port Harcourt, Owerri).';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide brief details about your project (min 10 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Build structured message for WhatsApp
    const messageLines = [
      `*NEW PROJECT ENQUIRY — DAQEN CONSTRUCTION*`,
      ``,
      `*Client Name:* ${formData.fullName.trim()}`,
      `*Phone Number:* ${formData.phone.trim()}`,
      formData.email.trim() ? `*Email:* ${formData.email.trim()}` : null,
      `*Service Required:* ${formData.service}`,
      `*Project Location:* ${formData.location.trim()}`,
      `*Project Stage:* ${projectStage}`,
      ``,
      `*Project Scope & Details:*`,
      `${formData.message.trim()}`,
      ``,
      `_Sent via daqenconstruction.ng website enquiry desk_`,
    ].filter(Boolean);

    const fullMessage = messageLines.join('\n');
    const waUrl = `https://wa.me/${COMPANY_INFO.whatsApps[0].raw}?text=${encodeURIComponent(fullMessage)}`;

    setSubmittedWhatsAppUrl(waUrl);
    setIsSubmitted(true);

    // Open WhatsApp in new tab for direct client engagement
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      service: '',
      location: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="relative py-14 sm:py-20 lg:py-28 bg-[#050A24] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="flex items-center justify-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#E9B52E]">
            <span className="w-6 h-0.5 bg-[#E9B52E]" />
            <span>LET'S BUILD SOMETHING GREAT</span>
            <span className="w-6 h-0.5 bg-[#E9B52E]" />
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading [text-wrap:balance]">
            Have a Project in Mind? Let's Talk.
          </h2>

          <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Whether you are planning a residential development, need technical drawings, require structural consultation, or have an ongoing construction project, Daqen Construction is ready to discuss your requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            
            <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#080F35] border border-white/10 shadow-2xl space-y-5 sm:space-y-6">
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#E9B52E] block">
                  DIRECT CONSULTATION
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                  Reach Our Project Desk
                </h3>
                <p className="text-xs text-slate-300">
                  Connect with our civil engineering and project management team via direct phone call, WhatsApp, or email.
                </p>
              </div>

              {/* Telephone Links */}
              <div className="space-y-2.5 pt-1 sm:pt-2">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">
                  Telephone Calls
                </span>
                {COMPANY_INFO.phones.map((phone) => (
                  <a
                    key={phone.number}
                    href={`tel:${phone.raw}`}
                    className="flex items-center justify-between p-3 sm:p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#E9B52E]/30 text-white transition-all group min-h-[48px]"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-[#101F79] flex items-center justify-center text-[#E9B52E] shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] sm:text-xs text-slate-400 block">{phone.label}</span>
                        <span className="text-xs sm:text-sm font-semibold font-mono text-white group-hover:text-[#E9B52E] transition-colors">
                          {phone.number}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs text-slate-400 group-hover:text-white font-medium shrink-0">Call</span>
                  </a>
                ))}
              </div>

              {/* WhatsApp Channels */}
              <div className="space-y-2.5 pt-1 sm:pt-2">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">
                  WhatsApp Messaging
                </span>
                {COMPANY_INFO.whatsApps.map((wa) => (
                  <a
                    key={wa.number}
                    href={`https://wa.me/${wa.raw}?text=${encodeURIComponent('Hello Daqen Construction, I would like to inquire about your construction and engineering services.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 sm:p-3.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 text-white transition-all group min-h-[48px]"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white shrink-0">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] sm:text-xs text-emerald-300 block">{wa.label}</span>
                        <span className="text-xs sm:text-sm font-semibold font-mono text-white group-hover:text-emerald-300 transition-colors">
                          {wa.number}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs text-emerald-400 font-semibold shrink-0">Chat</span>
                  </a>
                ))}
              </div>

              {/* Email Address */}
              <div className="space-y-2 pt-1 sm:pt-2">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">
                  Official Email
                </span>
                <a
                  href={`mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent('Project Enquiry - Daqen Construction')}`}
                  className="flex items-center space-x-3 p-3 sm:p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-white transition-all group min-h-[48px]"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#101F79] flex items-center justify-center text-[#E9B52E] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] sm:text-xs text-slate-400 block">Email Address</span>
                    <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#E9B52E] truncate block">
                      {COMPANY_INFO.email}
                    </span>
                  </div>
                </a>
              </div>

              {/* Profiles */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2 text-xs">
                <a
                  href={COMPANY_INFO.socials.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center space-x-1.5 transition-colors min-h-[44px]"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#E9B52E]" />
                  <span>Google Business</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href={COMPANY_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center space-x-1.5 transition-colors min-h-[44px]"
                >
                  <span>Facebook Page</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>

            </div>

            <div className="p-4 rounded-2xl bg-[#080F35]/70 border border-white/10 text-xs text-slate-400 flex items-center space-x-3">
              <Clock className="w-4 h-4 text-[#E9B52E] shrink-0" />
              <span>
                <strong>Response Window:</strong> Enquiries received through WhatsApp and phone are addressed promptly Monday – Saturday (8:00 AM – 6:00 PM WAT).
              </span>
            </div>

          </div>

          {/* Right Column: Project Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-10 rounded-2xl sm:rounded-3xl bg-[#080F35] border border-white/10 shadow-2xl relative">
              
              {isSubmitted ? (
                /* Success State */
                <div className="py-6 sm:py-8 space-y-5 sm:space-y-6 text-center animate-in fade-in duration-300">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                      Enquiry Form Generated!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                      Your project specifications have been formatted and prepared for immediate delivery to the Daqen Construction WhatsApp consultation desk.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#050A24] border border-white/10 text-left text-xs space-y-2 max-w-md mx-auto">
                    <div className="flex justify-between border-b border-white/5 pb-1.5">
                      <span className="text-slate-400">Client:</span>
                      <span className="text-white font-medium">{formData.fullName}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1.5">
                      <span className="text-slate-400">Phone:</span>
                      <span className="text-white font-mono">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1.5">
                      <span className="text-slate-400">Service:</span>
                      <span className="text-[#E9B52E] font-medium truncate ml-2">{formData.service}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/5 pb-1.5">
                      <span className="text-slate-400">Project Stage:</span>
                      <span className="text-white truncate ml-2">{projectStage}</span>
                    </div>
                    <div className="flex justify-between pb-1">
                      <span className="text-slate-400">Location:</span>
                      <span className="text-white truncate ml-2">{formData.location}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                    <a
                      href={submittedWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg min-h-[48px]"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Open WhatsApp Enquiry</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs tracking-wider transition-colors cursor-pointer min-h-[48px]"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Actual Working Form - text-base on mobile avoids Safari auto-zoom! */
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white font-heading">
                      Project Specification Form
                    </h3>
                    <p className="text-xs text-slate-300">
                      Submit your project parameters below to initiate direct consultation with our engineering team.
                    </p>
                  </div>

                  {/* Full Name & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Full Name <span className="text-[#E9B52E]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Winner Okeahialam"
                        className={`w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#050A24] border text-white text-base sm:text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#E9B52E] transition-all min-h-[48px] ${
                          errors.fullName ? 'border-rose-500' : 'border-white/15'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1 shrink-0" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone Number <span className="text-[#E9B52E]">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 0706 074 1211"
                        className={`w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#050A24] border text-white text-base sm:text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#E9B52E] transition-all min-h-[48px] ${
                          errors.phone ? 'border-rose-500' : 'border-white/15'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email & Service Required */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address <span className="text-slate-500">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. yourname@domain.com"
                        className={`w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#050A24] border text-white text-base sm:text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#E9B52E] transition-all min-h-[48px] ${
                          errors.email ? 'border-rose-500' : 'border-white/15'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Service Required <span className="text-[#E9B52E]">*</span>
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className={`w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#050A24] border text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#E9B52E] transition-all min-h-[48px] ${
                          errors.service ? 'border-rose-500' : 'border-white/15'
                        }`}
                      >
                        <option value="" disabled>Select a Service</option>
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1 shrink-0" />
                          <span>{errors.service}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Project Location & Current Stage */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Project Location (State &amp; City) <span className="text-[#E9B52E]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. Port Harcourt, Rivers / Owerri, Imo"
                        className={`w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#050A24] border text-white text-base sm:text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#E9B52E] transition-all min-h-[48px] ${
                          errors.location ? 'border-rose-500' : 'border-white/15'
                        }`}
                      />
                      {errors.location && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1 shrink-0" />
                          <span>{errors.location}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Current Project Stage
                      </label>
                      <select
                        value={projectStage}
                        onChange={(e) => setProjectStage(e.target.value)}
                        className="w-full px-4 py-3 sm:py-3.5 rounded-xl bg-[#050A24] border border-white/15 text-white text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#E9B52E] transition-all min-h-[48px]"
                      >
                        <option value="Preliminary Planning & Idea">Preliminary Planning &amp; Idea</option>
                        <option value="Need Architectural / Structural Drawings">Need Architectural / Structural Drawings</option>
                        <option value="Ready to Mobilize / Build">Ready to Mobilize / Build</option>
                        <option value="Ongoing Build / Structural Consultation">Ongoing Build / Structural Consultation</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Scope / Description */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Project Description &amp; Scope <span className="text-[#E9B52E]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your construction project: residential duplex, structural analysis, foundation footing, number of rooms, current site state..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#050A24] border text-white text-base sm:text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#E9B52E] transition-all resize-y min-h-[100px] ${
                        errors.message ? 'border-rose-500' : 'border-white/15'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center">
                        <AlertCircle className="w-3 h-3 mr-1 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submission Action */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#E9B52E] hover:bg-[#D6A122] text-[#080F35] font-extrabold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center space-x-2 shadow-xl shadow-[#E9B52E]/20 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer min-h-[50px]"
                    >
                      <Send className="w-4 h-4 shrink-0" />
                      <span>SUBMIT ENQUIRY &amp; CONNECT ON WHATSAPP</span>
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2.5">
                      Transmitted directly to our official WhatsApp consultation desk (+234 706 074 1211).
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
