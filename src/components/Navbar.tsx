import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

interface NavbarProps {
  onStartProject: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProject }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Lock body scroll on mobile when menu drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'services', 'projects', 'advantage', 'process', 'credibility', 'service-areas', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Advantage', href: '#advantage', id: 'advantage' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Credibility', href: '#credibility', id: 'credibility' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080F35]/95 backdrop-blur-md shadow-2xl shadow-black/50 border-b border-white/10 py-2 sm:py-3'
          : 'bg-[#080F35]/90 backdrop-blur-md border-b border-white/10 py-2 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-6 min-h-[38px] sm:min-h-[44px]">
          
          {/* Brand Wordmark & Original Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center space-x-1.5 sm:space-x-3 group shrink min-w-0"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#080F35] p-1 border border-[#E9B52E]/50 flex items-center justify-center shadow-md group-hover:border-[#E9B52E] transition-colors shrink-0">
              <img
                src={COMPANY_INFO.logoUrl}
                alt="Daqen Construction Logo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="font-heading font-extrabold text-xs sm:text-lg lg:text-xl tracking-tight text-white flex items-center whitespace-nowrap truncate">
              <span>DAQEN</span>
              <span className="text-[#E9B52E] ml-1 sm:ml-1.5">CONSTRUCTION</span>
            </div>
          </a>

          {/* Desktop Navigation Links (Unchanged - desktop/tablet is already okay) */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-6 text-xs xl:text-sm font-medium text-slate-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors ${
                    isActive
                      ? 'text-[#E9B52E] font-semibold'
                      : 'hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#E9B52E] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Zone: Adjusted on Mobile so CTA & Menu Toggle Both Fit Without Overlapping */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Phone link on very large screens */}
            <a
              href={`tel:${COMPANY_INFO.phones[0].raw}`}
              className="hidden 2xl:flex items-center space-x-1.5 text-xs text-slate-300 hover:text-[#E9B52E] transition-colors whitespace-nowrap mr-1"
            >
              <Phone className="w-3.5 h-3.5 text-[#E9B52E]" />
              <span className="font-mono">{COMPANY_INFO.phones[0].number}</span>
            </a>

            {/* "Start a Project" Button - Responsively Sized on Mobile */}
            <button
              onClick={onStartProject}
              className="px-2.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase bg-[#E9B52E] hover:bg-[#D6A122] text-[#080F35] shadow-md shadow-[#E9B52E]/25 transition-all hover:scale-105 active:scale-95 whitespace-nowrap cursor-pointer flex items-center justify-center space-x-1 h-8 sm:h-10 shrink-0"
            >
              <span>Start<span className="hidden min-[400px]:inline"> a</span> Project</span>
              <ArrowRight className="w-3 h-3 hidden sm:inline" />
            </button>

            {/* Mobile Menu Toggle Button - Always Visible and Safely Inside the Header */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="lg:hidden p-1.5 sm:p-2 rounded-lg sm:rounded-xl text-white bg-white/10 hover:bg-white/15 active:bg-white/20 transition-colors h-8 w-8 sm:h-10 sm:w-10 flex items-center justify-center cursor-pointer border border-white/15 shrink-0"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu & Backdrop */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Tap Target */}
          <div
            className="lg:hidden fixed inset-0 top-[50px] sm:top-[60px] bg-black/65 backdrop-blur-sm z-40 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Menu Content */}
          <div className="lg:hidden fixed inset-x-0 top-[50px] sm:top-[60px] bg-[#080F35] border-b border-white/15 shadow-2xl z-50 transition-all max-h-[calc(100vh-50px)] overflow-y-auto">
            <div className="px-5 pt-3 pb-8 space-y-1">
              
              <div className="py-2 px-1 text-[11px] uppercase tracking-wider text-slate-400 font-semibold border-b border-white/10 mb-2 flex items-center justify-between">
                <span>Navigation Menu</span>
                <span className="text-[#E9B52E] font-mono">RC 9397794</span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold transition-colors min-h-[44px] ${
                    activeSection === link.id
                      ? 'bg-[#E9B52E] text-[#080F35]'
                      : 'text-slate-200 hover:bg-white/10 active:bg-white/15'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-70" />
                </a>
              ))}

              <div className="pt-4 mt-2 border-t border-white/10 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onStartProject();
                  }}
                  className="w-full py-4 rounded-xl bg-[#E9B52E] text-[#080F35] font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg min-h-[48px] active:scale-98 transition-transform cursor-pointer"
                >
                  <span>Start a Project Today</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <a
                    href={`tel:${COMPANY_INFO.phones[0].raw}`}
                    className="flex items-center justify-center space-x-2 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-white min-h-[44px] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#E9B52E]" />
                    <span>Call Desk</span>
                  </a>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsApps[0].raw}?text=${encodeURIComponent('Hello Daqen Construction, I would like to make an enquiry.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 py-3 rounded-xl bg-emerald-600/30 border border-emerald-500/40 text-xs font-semibold text-emerald-300 min-h-[44px] transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </>
      )}
    </header>
  );
};
