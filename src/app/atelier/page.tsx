import AtelierBento from '@/components/sections/atelier-bento-section'
import CertificateSection from '@/components/sections/certificate-section';
import GithubCalendarSection from '@/components/sections/github-calendar-section';
import LatestProjectSection from '@/components/sections/latest-project-section'
import React from 'react'

export default function page() {
  return (
    <div>
      <AtelierBento />
      <LatestProjectSection />
      <GithubCalendarSection />
      <CertificateSection />
    </div>
  );
}
