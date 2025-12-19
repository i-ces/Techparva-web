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
       className="
         relative block
         transition-all duration-500
         hover:-translate-y-2
       "
    >
      <div
  className={`
    group relative flex flex-col h-full
    rounded-2xl overflow-hidden
    bg-white/80 backdrop-blur-md
    border border-indigo-600/40
    shadow-[0_10px_30px_rgba(99,102,241,0.18)]
    transition-all duration-800
    hover:shadow-[0_18px_55px_rgba(99,102,241,0.35)]
    ${isCompleted ? "ring-2 ring-green-400/60" : ""}
  `}
>

          {/* Badge for Completed Events */}
          {isCompleted && (
    <div className="
      absolute top-3 right-3 z-20
      bg-green-500/90 backdrop-blur-md
      text-white text-xs font-bold
      px-3 py-1 rounded-full
      flex items-center gap-1
      shadow-lg
    ">
                  <CheckCircle className="h-4 w-4" />
              Completed
            </div>
          )}

          {/* Image Section with hover swap */}
          <div className="relative h-48 overflow-hidden">
            {event.hoverImage ? (
              <>
                <img
                  src={event.image}
                  alt={event.title}
                  className={`
                    absolute inset-0 w-full h-full object-cover
                    transition-all duration-700
                    ${isCompleted ? "opacity-70 grayscale-[20%]" : "group-hover:opacity-0 group-hover:scale-110"}
                  `}
                />
                <img
                  src={event.hoverImage}
                  alt={`${event.title} hover`}
                  className={`
                    absolute inset-0 w-full h-full object-cover
                    opacity-0 scale-105
                    transition-all duration-700
                    ${isCompleted ? "opacity-60 grayscale-[20%]" : "group-hover:opacity-100 group-hover:scale-110"}
                  `}
                />
              </>
            ) : (
              <img
                src={event.image}
                alt={event.title}
                className={`
                  w-full h-full object-cover
                  transition-transform duration-700
                  ${isCompleted ? "opacity-70 grayscale-[20%]" : "group-hover:scale-110"}
                `}
              />
            )}
            {/* Hover:Dive In */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <span className="px-2 py-1 rounded-full bg-indigo-600/20 text-white font-semibold shadow-md backdrop-blur-sm">
                Dive in
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-700/40 via-indigo-500/10 to-transparent"></div>
          </div>

          {/* Content Section */}
          <div className="p-4 flex flex-col flex-grow">
            {/* Title and Event Type */}
            <div className="flex justify-between items-start mb-3">
             <h3
               className={`
                 text-lg font-bold
                 text-indigo-600
                 transition-colors duration-300
                 ${isCompleted ? "line-through text-gray-400" : "group-hover:text-purple-600"}
               `}
             >
             
                {event.title}
              </h3>
             <span
               className={`
                 px-3 py-1 rounded-full text-xs font-semibold
                 backdrop-blur-md border
                 ${
                   event.type === "workshop"
                     ? "bg-green-200/60 text-green-900 border-green-300"
                     : event.type === "talk"
                     ? "bg-blue-200/60 text-blue-700 border-blue-300"
                     : event.type === "competition"
                     ? "bg-purple-200/60 text-purple-700 border-purple-300"
                     : "bg-orange-200/60 text-orange-800 border-orange-300"
                 }
               `}
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
                <span>Registration Fee: {event.Registration_Fee}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {event.tags.map((tag, index) => (
               <span
                key={index}
                className="
                  bg-white/70 backdrop-blur-md
                  border border-indigo-200
                  text-gray-700
                  px-3 py-1 rounded-full text-xs
                  transition-all duration-300
                  hover:bg-indigo-500 hover:text-white hover:border-indigo-500
                "
              >
                  {tag}
                </span>
              ))}
            </div>
          </div>
           <div className="
             absolute inset-0 rounded-2xl
             opacity-0 hover:opacity-100
             bg-gradient-to-r from-indigo-400/10 via-purple-400/10 to-pink-400/10
             blur-2xl transition-opacity duration-500
           "></div>
           
        </div>
      </a>
    </AnimateOnScroll>
  );
};

export default EventCard;
