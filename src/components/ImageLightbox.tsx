import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../types';

interface ImageLightboxProps {
  project: ProjectItem | null;
  projects: ProjectItem[];
  onClose: () => void;
  onNavigate: (direction: 'next' | 'prev') => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  project,
  projects,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate('prev');
      if (e.key === 'ArrowRight') onNavigate('next');
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, onNavigate]);

  if (!project) return null;

  const currentIndex = projects.findIndex((p) => p.id === project.id);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md p-3 sm:p-6 lg:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Close Button - Minimum 44x44px touch target */}
      <button
        onClick={onClose}
        aria-label="Close Lightbox"
        className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50 p-3 rounded-full bg-black/60 hover:bg-white/20 text-white transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center border border-white/20"
      >
        <X className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Navigation Buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate('prev');
        }}
        aria-label="Previous Image"
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer min-h-[44px] min-w-[44px] items-center justify-center"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate('next');
        }}
        aria-label="Next Image"
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer min-h-[44px] min-w-[44px] items-center justify-center"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Lightbox Dialog Container */}
      <div
        className="relative max-w-5xl w-full max-h-[94vh] flex flex-col rounded-2xl overflow-hidden bg-[#080F35] border border-white/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Main Image Display */}
        <div className="relative flex-1 bg-black/95 flex items-center justify-center overflow-hidden min-h-[260px] sm:min-h-[350px] max-h-[50vh] sm:max-h-[66vh]">
          <img
            src={project.imageSrc}
            alt={project.title}
            className="w-full h-full max-h-[50vh] sm:max-h-[66vh] object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Details Footer Bar */}
        <div className="p-4 sm:p-6 bg-[#050A24] border-t border-white/10 text-left space-y-2.5 sm:space-y-3 overflow-y-auto max-h-[38vh]">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center space-x-2 text-xs">
              <span className="font-bold text-[#E9B52E] uppercase tracking-wider">
                {project.categoryLabel}
              </span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="text-slate-400 font-mono">
                {currentIndex + 1} of {projects.length}
              </span>
            </div>

            {project.location && (
              <span className="flex items-center text-xs text-emerald-400 font-medium">
                <MapPin className="w-3.5 h-3.5 mr-1" />
                <span>{project.location}</span>
              </span>
            )}
          </div>

          <div>
            <h3 className="text-base sm:text-xl font-bold text-white font-heading">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/5 text-xs">
            <div className="flex items-center space-x-1.5 text-slate-400">
              <span className="font-semibold text-slate-300">Milestone:</span>
              <span className="text-slate-200">{project.stage}</span>
            </div>

            {/* Mobile Prev / Next Controls */}
            <div className="flex items-center space-x-2 sm:hidden w-full pt-1 justify-between">
              <button
                type="button"
                onClick={() => onNavigate('prev')}
                className="flex-1 py-2 rounded-lg bg-white/10 text-xs font-semibold text-white flex items-center justify-center space-x-1 min-h-[40px]"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('next')}
                className="flex-1 py-2 rounded-lg bg-[#E9B52E] text-xs font-bold text-[#080F35] flex items-center justify-center space-x-1 min-h-[40px]"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
