
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import VoiceIntegration from '@/components/home/VoiceIntegration';
import AIModels from '@/components/home/AIModels';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <AIModels />
      <VoiceIntegration />
    </Layout>
  );
};

export default Index;
