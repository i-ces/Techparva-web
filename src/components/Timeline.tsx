import React from 'react';
import { MapPin, User } from 'lucide-react';
import { ScheduleEvent } from '../data/schedule';
import AnimateOnScroll from './AnimateOnScroll';
import { getEventTypeStyles } from '../utils/eventStyles';

interface TimelineProps {
  events: ScheduleEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="relative pl-8 space-y-8">
      <div className="absolute left-0 inset-y-0 w-0.5 bg-gray-200"></div>
      {events.map((event, index) => (
        <AnimateOnScroll
          key={index}
          animation="slideRight"
          delay={index * 0.1}
        >
          <div className="relative">
            <div className={getEventTypeStyles(event.type)}></div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <span className="text-sm text-gray-600">{event.time}</span>
              </div>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <div className="space-y-2">
                {event.location && (
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                )}
                {event.speaker && (
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-2" />
                    <span>{event.speaker}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      ))}
    </div>
  );
};

export default Timeline;