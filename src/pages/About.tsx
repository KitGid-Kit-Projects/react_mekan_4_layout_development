import React from 'react';
import { Divider } from 'antd';
import AboutHeader from '@/components/About/AboutHeader';
import FeaturesSection from '@/components/About/FeaturesSection';
import TechAndTimelineSection from '@/components/About/TechAndTimelineSection';
import ArchitectureSection from '@/components/About/ArchitectureSection';


const About: React.FC = () => {
  return (
    <div>
      <AboutHeader />
      <Divider />
      <FeaturesSection />
      <TechAndTimelineSection />
      <Divider />
      <ArchitectureSection />
    </div>
  );
};

export default About;