import React from 'react';
import bgImage from '../assets/healthcare-workers-ai.png';
import SearchBar from '../Components/SearchBar';

export default function HeroSection() {
  return (
     <section
      className="relative mt-15 overflow-hidden bg-cover bg-center h-[100vh] ">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
        <div className="absolute inset-0 bg-black/15" />

    
        {/* <div className="absolute inset-0  pointer-events-none" /> */}
      {/* Overlay for extra darkening 
      <div className="absolute inset-0 bg-black bg-opacity-40 pointer-events-none" /> 
      */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 pt-16 flex items-center justify-center h-full ">
        <div className="w-full max-w-3xl text-center">
          <h1 className="text-3xl  md:text-4xl font-extrabold text-black drop-shadow-lg">
            Empower Doctors with AI-Driven Lab Insights
          </h1>
          
          <p className="mt-4 mb-6 font-light text-white text-opacity-90 md:text-lg">
            Upload PDFs of medical test reports, automatically detect out-of-range values,
            and receive clear explanations in seconds—all powered by watsonx.
          </p>
          <SearchBar />
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/upload"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
            >
              Get Started
            </a>
            <a
              href="/docs"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 focus:ring-4 focus:ring-white"
            >
              Documentation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
