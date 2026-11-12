import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { TESTIMONIAL } from '../data/websiteData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="relative py-14 sm:py-20 lg:py-28 bg-[#080F35] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="flex items-center justify-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#E9B52E]">
            <span className="w-6 h-0.5 bg-[#E9B52E]" />
            <span>CLIENT FEEDBACK</span>
            <span className="w-6 h-0.5 bg-[#E9B52E]" />
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading [text-wrap:balance]">
            Trusted Through the Experience of Our Clients.
          </h2>

          <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Direct feedback from property owners and clients who have engaged Daqen Construction for building development and civil engineering projects.
          </p>
        </div>

        {/* Featured Genuine Google Review Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-10 bg-[#050A24] border border-[#E9B52E]/30 shadow-2xl">
            <div className="relative z-10 space-y-5 sm:space-y-6">
              
              {/* Star Rating & Source Header */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center space-x-1">
                  {[...Array(TESTIMONIAL.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#E9B52E] text-[#E9B52E]" />
                  ))}
                  <span className="text-xs font-bold text-white ml-2 font-mono">
                    5.0 / 5.0
                  </span>
                </div>

                <div className="flex items-center space-x-2 text-[11px] sm:text-xs text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Google Business Review</span>
                </div>
              </div>

              {/* Genuine Review Quote */}
              <blockquote className="text-lg sm:text-2xl md:text-3xl font-medium text-white font-heading leading-relaxed italic">
                “{TESTIMONIAL.quote}”
              </blockquote>

              {/* Author & Verification Metadata */}
              <div className="pt-5 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#101F79] border border-[#E9B52E]/40 flex items-center justify-center font-bold text-white text-sm sm:text-base shrink-0">
                    {TESTIMONIAL.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white font-heading">
                      {TESTIMONIAL.author}
                    </h3>
                    <p className="text-xs text-slate-400">
                      Verified Client · Construction Project
                    </p>
                  </div>
                </div>

                <a
                  href={TESTIMONIAL.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold text-[#E9B52E] hover:underline min-h-[40px]"
                >
                  <span>Verify Review on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                </a>
              </div>

            </div>
          </div>

          {/* Transparent Notice */}
          <div className="mt-6 sm:mt-8 text-center px-4">
            <p className="text-xs text-slate-400 max-w-xl mx-auto">
              We present only authentic, verified reviews. Additional client project feedback will be displayed as ongoing developments reach handover.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
