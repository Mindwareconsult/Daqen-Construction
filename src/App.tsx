/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsGallery } from './components/ProjectsGallery';
import { AdvantageSection } from './components/AdvantageSection';
import { ProcessSection } from './components/ProcessSection';
import { CredibilitySection } from './components/CredibilitySection';
import { ServiceAreasSection } from './components/ServiceAreasSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { CertificateModal } from './components/CertificateModal';

export default function App() {
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState('');
  const [prefilledLocation, setPrefilledLocation] = useState('');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const topOffset = 85;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const topOffset = 85;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToProcess = () => {
    const el = document.getElementById('process');
    if (el) {
      const topOffset = 85;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    scrollToContact();
  };

  const handleSelectArea = (areaName: string) => {
    setPrefilledLocation(areaName);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#080F35] text-slate-100 flex flex-col selection:bg-[#E9B52E] selection:text-[#080F35]">
      {/* Sticky Navigation */}
      <Navbar onStartProject={scrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 2: Hero */}
        <Hero
          onDiscussProject={scrollToContact}
          onExploreWork={scrollToProjects}
          onOpenCertificate={() => setIsCertificateOpen(true)}
        />

        {/* Section 3: About Us */}
        <AboutSection
          onLearnApproach={scrollToProcess}
          onOpenCertificate={() => setIsCertificateOpen(true)}
        />

        {/* Section 4: Our Services */}
        <ServicesSection
          onSelectService={handleSelectService}
          onContactClick={scrollToContact}
        />

        {/* Section 5: Projects Portfolio Gallery */}
        <ProjectsGallery />

        {/* Section 6: The Daqen Advantage */}
        <AdvantageSection />

        {/* Section 7: Process & Approach Timeline */}
        <ProcessSection onStartProject={scrollToContact} />

        {/* Section 8: Corporate Credibility & CAC Registration */}
        <CredibilitySection onOpenCertificate={() => setIsCertificateOpen(true)} />

        {/* Section 9: Regional Service Areas */}
        <ServiceAreasSection onSelectArea={handleSelectArea} />

        {/* Section 10: Verified Client Testimonials */}
        <TestimonialsSection />

        {/* Section 11: Contact & Project Enquiry */}
        <ContactSection
          prefilledService={prefilledService}
          prefilledLocation={prefilledLocation}
        />
      </main>

      {/* Section 12: Footer */}
      <Footer onOpenCertificate={() => setIsCertificateOpen(true)} />

      {/* Floating Quick Action Buttons */}
      <FloatingActions />

      {/* CAC Certificate High-Resolution Lightbox Modal */}
      <CertificateModal
        isOpen={isCertificateOpen}
        onClose={() => setIsCertificateOpen(false)}
      />
    </div>
  );
}
