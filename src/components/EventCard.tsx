import React from "react";
import { Clock, MapPin, Users } from "lucide-react";
import { Event } from "../data/events";
import AnimateOnScroll from "./AnimateOnScroll";

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <AnimateOnScroll animation="slideUp">
      <a href={`/events/${event.id}`} className="block">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">{event.title}</h3>
              <span
                className={`
              px-3 py-1 rounded-full text-sm font-medium
              ${
                event.type === "workshop"
                  ? "bg-green-100 text-green-800"
                  : event.type === "talk"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-orange-100 text-orange-800"
              }
            `}
              >
                {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{event.description}</p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-gray-600">
                <Clock className="h-4 w-4 mr-2" />
                <span>
                  {event.date} at {event.time} ({event.duration})
                </span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="h-4 w-4 mr-2" />
                <span>Capacity: {event.capacity} attendees</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {event.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
    </AnimateOnScroll>
  );
};

export default EventCard;
