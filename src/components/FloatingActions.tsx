import React, { useState, useEffect } from 'react';
import { MessageSquare, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/websiteData';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3 pointer-events-none">
      
      {/* Back to Top Floating Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="pointer-events-auto p-3 rounded-full bg-[#080F35]/95 border border-white/20 text-white hover:text-[#E9B52E] hover:border-[#E9B52E] shadow-xl backdrop-blur-md transition-all duration-200 hover:scale-110 cursor-pointer"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating WhatsApp Quick Action */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsApps[0].raw}?text=${encodeURIComponent('Hello Daqen Construction, I would like to consult on a building project.')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="pointer-events-auto group relative flex items-center px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-950/60 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
      >
        <MessageSquare className="w-4 h-4 shrink-0" />
        <span className="hidden sm:inline-block ml-2 text-xs font-bold uppercase tracking-wider">
          Chat on WhatsApp
        </span>
      </a>

    </div>
  );
};
