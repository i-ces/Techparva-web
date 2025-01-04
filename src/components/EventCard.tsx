import React from "react";
import { Clock, MapPin, Users, CheckCircle } from "lucide-react";
import { Event } from "../data/events";
import AnimateOnScroll from "./AnimateOnScroll";

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const currentDate = new Date();
  const eventDate = new Date(event.date);
  const isCompleted = eventDate < currentDate;

  return (
    <AnimateOnScroll animation="slideUp">
      <a
        href={`/events/${event.id}`}
        className="block transition-transform transform hover:scale-105 hover:shadow-lg"
      >
        <div
          className={`flex flex-col h-full bg-white rounded-xl shadow-md overflow-hidden ${
            isCompleted ? "border-2 border-green-500" : ""
          }`}
        >
          {/* Badge for Completed Events */}
          {isCompleted && (
            <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl flex items-center gap-1">
              <CheckCircle className="h-4 w-4" />
              Completed
            </div>
          )}

          {/* Image Section */}
          <div className="relative">
            <img
              src={event.image}
              alt={event.title}
              className={`w-full h-48 object-cover ${
                isCompleted ? "opacity-70" : ""
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-200/50 to-transparent"></div>
          </div>

          {/* Content Section */}
          <div className="p-4 flex flex-col flex-grow">
            {/* Title and Event Type */}
            <div className="flex justify-between items-start mb-3">
              <h3
                className={`text-lg font-bold text-indigo-600 ${
                  isCompleted ? "line-through" : ""
                }`}
              >
                {event.title}
              </h3>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  event.type === "workshop"
                    ? "bg-green-100 text-green-800"
                    : event.type === "talk"
                    ? "bg-blue-100 text-blue-500"
                    : event.type === "competition"
                    ? "bg-purple-100 text-purple-600"
                    : "bg-orange-100 text-orange-800"
                }`}
              >
                {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
              </span>
            </div>

            {/* Event Description */}
            <p
              className={`text-gray-600 text-sm ${
                isCompleted ? "text-gray-400" : ""
              }`}
            >
              {event.description}
            </p>

            {/* Event Details */}
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-indigo-500" />
                <span>
                  {event.nepalidate} at {event.time} ({event.duration})
                </span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-indigo-500" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-indigo-500" />
<<<<<<< HEAD
                <span>Participants: {event.capacity}</span>
=======
                <span>Registration Fee: {event.Registration_Fee}</span>
>>>>>>> master
              </div>
            </div>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {event.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs hover:bg-indigo-500 hover:text-white transition"
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
