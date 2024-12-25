import React, { useState } from 'react';
import { scheduleData } from '../data/schedule';
import DaySchedule from '../components/DaySchedule';
import AnimateOnScroll from '../components/AnimateOnScroll';

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimateOnScroll animation="slideUp">
          <h1 className="text-4xl font-bold mb-4 text-center">Event Schedule</h1>
          <p className="text-gray-600 text-center mb-12">
            Plan your TechFest 2024 experience with our detailed schedule
          </p>
        </AnimateOnScroll>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            {scheduleData.map((day, index) => (
              <button
                key={index}
                onClick={() => setActiveDay(index)}
                className={`
                  px-6 py-3 text-sm font-medium
                  ${activeDay === index
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'}
                  ${index === 0 ? 'rounded-l-md' : ''}
                  ${index === scheduleData.length - 1 ? 'rounded-r-md' : ''}
                  border border-gray-200
                `}
              >
                Day {index + 1}
              </button>
            ))}
          </div>
        </div>

        {scheduleData.map((day, index) => (
          <DaySchedule
            key={index}
            day={day}
            isActive={activeDay === index}
          />
        ))}
      </div>
    </div>
  );
};

export default Schedule;