import React, { useState } from 'react';
import { ZoomIn, MapPin, CheckCircle, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/websiteData';
import { ProjectItem } from '../types';
import { ImageLightbox } from './ImageLightbox';

export const ProjectsGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects', count: PROJECTS.length },
    {
      id: 'building',
      label: 'Building Construction',
      count: PROJECTS.filter((p) => p.category === 'building').length,
    },
    {
      id: 'foundation',
      label: 'Foundation & Substructure',
      count: PROJECTS.filter((p) => p.category === 'foundation').length,
    },
    {
      id: 'structural',
      label: 'Structural & Masonry',
      count: PROJECTS.filter((p) => p.category === 'structural').length,
    },
    {
      id: 'completed',
      label: 'Completed Structures',
      count: PROJECTS.filter((p) => p.category === 'completed').length,
    },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const handleNavigateLightbox = (direction: 'next' | 'prev') => {
    if (!selectedProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProject.id);
    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % filteredProjects.length;
      setSelectedProject(filteredProjects[nextIndex]);
    } else {
      const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
      setSelectedProject(filteredProjects[prevIndex]);
    }
  };

  return (
    <section id="projects" className="relative py-14 sm:py-20 lg:py-28 bg-[#060B24] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          <div className="flex items-center justify-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#E9B52E]">
            <span className="w-6 h-0.5 bg-[#E9B52E]" />
            <span>OUR PROJECTS</span>
            <span className="w-6 h-0.5 bg-[#E9B52E]" />
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-heading [text-wrap:balance]">
            Real Work. Practical Solutions. Lasting Structures.
          </h2>

          <p className="text-xs sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Explore selected construction activities, site progress, and building development projects undertaken by Daqen Construction. All photographs depict authentic company site operations.
          </p>
        </div>

        {/* Clean Segmented Control Filter Tabs with Smooth Mobile Horizontal Swipe */}
        <div className="w-full mb-8 sm:mb-12 flex justify-start sm:justify-center overflow-x-auto no-scrollbar py-1">
          <div className="inline-flex items-center p-1 sm:p-1.5 rounded-2xl bg-[#080F35] border border-white/10 shadow-lg shrink-0 gap-1">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center space-x-1.5 sm:space-x-2 whitespace-nowrap shrink-0 min-h-[40px] sm:min-h-[44px] ${
                    isActive
                      ? 'bg-[#E9B52E] text-[#080F35] font-bold shadow-md'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] sm:text-[11px] font-mono ${
                      isActive ? 'text-[#080F35]' : 'text-slate-400'
                    }`}
                  >
                    ({cat.count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 11 Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl overflow-hidden bg-[#080F35] border border-white/10 hover:border-[#E9B52E]/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#101F79]/40 cursor-pointer flex flex-col"
            >
              {/* Image Frame with Styled Fallback */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#050A24]">
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-108 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.classList.add('flex', 'items-center', 'justify-center');
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080F35] via-transparent to-black/25 opacity-70 group-hover:opacity-50 transition-opacity" />

                {/* Top Clean Unboxed Metadata Label */}
                <div className="absolute top-2.5 left-2.5 right-2.5 sm:top-3 sm:left-3 sm:right-3 flex items-center justify-between text-[10px] sm:text-[11px] text-white/90">
                  <span className="font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-[#080F35]/90 backdrop-blur-md border border-white/10">
                    {project.categoryLabel}
                  </span>

                  {project.location && (
                    <span className="font-medium text-emerald-300 flex items-center px-2 py-0.5 sm:py-1 rounded bg-black/70 backdrop-blur-md">
                      <MapPin className="w-3 h-3 mr-1" />
                      <span>{project.location}</span>
                    </span>
                  )}
                </div>

                {/* Hover Quick Action Indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="px-4 py-2 rounded-full bg-[#E9B52E] text-[#080F35] text-xs font-bold flex items-center space-x-1.5 shadow-xl transform scale-95 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-4 h-4" />
                    <span>Inspect Photo</span>
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-2.5 sm:space-y-3 bg-[#080F35]">
                <div className="space-y-1 sm:space-y-1.5">
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#E9B52E] block uppercase tracking-wider">
                    {project.stage}
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-[#E9B52E] transition-colors font-heading leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="pt-2.5 sm:pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                  <span className="truncate max-w-[200px] text-[11px]">
                    {project.highlight || 'Actual Daqen Site Photo'}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#E9B52E] transition-colors shrink-0" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Authenticity Assurance Notice */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-xs text-slate-400 inline-flex items-center space-x-1.5 px-4">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>All portfolio images depict authentic ongoing and completed building developments by Daqen Construction.</span>
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <ImageLightbox
          project={selectedProject}
          projects={filteredProjects}
          onClose={() => setSelectedProject(null)}
          onNavigate={handleNavigateLightbox}
        />
      )}
    </section>
  );
};
