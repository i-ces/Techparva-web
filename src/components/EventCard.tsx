import React from "react";
import { Clock, MapPin, Users, CheckCircle } from "lucide-react";
import { Event } from "../data/events";
import AnimateOnScroll from "./AnimateOnScroll";

interface EventCardProps {
  event: Event;
}

const currentDate = new Date();

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const eventDate = new Date(event.date); // Convert event.date to a Date object
  const isCompleted = eventDate < currentDate; // Check if the event date has passed

  return (
    <AnimateOnScroll animation="slideUp">
      <a href={`/events/${event.id}`} className="block relative">
        <div
          className={`bg-white rounded-lg shadow-lg overflow-hidden ${
            isCompleted ? "border-2 border-green-500" : ""
          }`}
        >
          {isCompleted && (
            <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1">
              <CheckCircle className="h-4 w-4" />
              Completed
            </div>
          )}
          <img
            src={event.image}
            alt={event.title}
            className={`w-full h-48 object-cover ${
              isCompleted ? "opacity-70" : ""
            }`}
          />
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h3
                className={`text-xl font-bold ${
                  isCompleted ? "line-through" : ""
                }`}
              >
                {event.title}
              </h3>
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
            <p
              className={`text-gray-600 mb-4 ${
                isCompleted ? "text-gray-400" : ""
              }`}
            >
              {event.description}
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-gray-600">
                <Clock className="h-4 w-4 mr-2" />
                <span>
                  {event.nepalidate} at {event.time} ({event.duration})
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
