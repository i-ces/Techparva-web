import React, { useState } from 'react';
import { events } from '../data/events';
import EventCard from '../components/EventCard';
import AnimateOnScroll from '../components/AnimateOnScroll';

const Events = () => {
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredEvents = selectedType === 'all'
    ? events
    : events.filter(event => event.type === selectedType);

  const types = ['all', ...new Set(events.map(event => event.type))];

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimateOnScroll animation="slideUp">
          <h1 className="text-4xl font-bold mb-4 text-center">Events</h1>
          <p className="text-gray-600 text-center mb-8">
            Explore our exciting lineup of workshops, talks, and competitions
          </p>
        </AnimateOnScroll>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`
                  px-4 py-2 text-sm font-medium
                  ${type === selectedType
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'}
                  ${type === types[0] ? 'rounded-l-md' : ''}
                  ${type === types[types.length - 1] ? 'rounded-r-md' : ''}
                  border border-gray-200
                `}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;