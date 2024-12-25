import React from 'react';
import { speakers } from '../data/speakers';
import SpeakerCard from '../components/SpeakerCard';
import AnimateOnScroll from '../components/AnimateOnScroll';

const Speakers = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimateOnScroll animation="slideUp">
          <h1 className="text-4xl font-bold mb-4 text-center">Our Speakers</h1>
          <p className="text-gray-600 text-center mb-12">
            Learn from industry experts and thought leaders in technology
          </p>
        </AnimateOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;