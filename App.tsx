import React from 'react';
import Header from './src/components/layout/Header';
import Footer from './src/components/layout/Footer';
import Hero from './src/components/sections/Hero';
import Philosophy from './src/components/sections/Philosophy';
import Problems from './src/components/sections/Problems';
import Process from './src/components/sections/Process';
import Stats from './src/components/sections/Stats';
import Solutions from './src/components/sections/Solutions';
import CaseStudies from './src/components/sections/CaseStudies';
import Testimonials from './src/components/sections/Testimonials';
import Partners from './src/components/sections/Partners';
import FAQ from './src/components/sections/FAQ';
import CTA from './src/components/sections/CTA';
import CookieConsent from './src/components/ui/CookieConsent';

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-accent selection:text-white overflow-hidden">
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Problems />
        <Stats />
        <Process />
        <Solutions />
        <CaseStudies />
        <Testimonials />
        <Partners />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}