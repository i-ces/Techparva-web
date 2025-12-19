import React from "react";
import { MapPin, PartyPopper, User } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ScheduleEvent } from "../data/schedule";
import { events as allEvents } from "../data/events";

interface MergedScheduleEvent extends ScheduleEvent {
  dayTitle: string; 
  date: string; 
}

interface TimelineProps {
  events: MergedScheduleEvent[];
}

const currentDate = new Date();

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <VerticalTimeline animate={true} lineColor="#dddddd">
      {events.map((event, index) => {
        const eventDate = new Date(event.date);
        const isCompleted = eventDate.toLocaleDateString() < currentDate.toLocaleDateString();

        const isToday = eventDate.toLocaleDateString() === currentDate.toLocaleDateString();

        const resolvedImg = (() => {
          const found = allEvents.find((e) => e.id === event.id);
          const img = found?.hoverImage || found?.image || event.icon;
          if (!img) return null;
          return img.startsWith("/") ? img : `/${img}`;
        })();

        return (
          <VerticalTimelineElement
            key={index}
            date={event.time}
            contentStyle={{
              background: isToday? "#EFDDD1": isCompleted ? "#E3E8F8" : "#f9f9f9",
              color: isCompleted ? "#8468F6" : "#333",
              borderLeft:  isToday? "4px solid orange":  isCompleted ? "4px solid #6544E8" : "4px solid #4CAF50",
            }}
            contentArrowStyle={{
              borderRight: isCompleted
                ? "7px solid #e0e0e0"
                : "7px solid #f9f9f9",
            }}
            iconStyle={{
              background: isCompleted ? "#E6E3F2" : "#f9f9f9",
              color: isCompleted ? "#888" : "#333",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            icon={
              event.icon ? (
                <img src={event.icon} alt={event.title} />
              ) : (
                <PartyPopper className="bg-white bg-opacity-100" />
              )
            }
          >
            <div className="relative group">
              <a
                href={event.isEvent ? `/events/${event.id}` : ""}
                className={`text-sm ${
                  isCompleted ? "text-gray-400" : "text-gray-600"
                }
                `
              }
              >
                <h3

                  className={`
                    
                    text-lg font-semibold ${
                    isCompleted ? "line-through" : ""
                  }`}
                >
                  {event.title}
                </h3>
                <p className="text-sm mb-2">{event.dayTitle}</p>
                <p className="mb-4">{event.description}</p>
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
              </a>

              {resolvedImg && (
                <img
                  src={resolvedImg}
                  alt={event.title}
                  className={`hidden group-hover:block absolute top-1/2 transform -translate-y-1/2 w-48 max-w-xs rounded-lg shadow-lg transition-all duration-200 ${
                    index % 2 === 0 ? "left-full ml-6" : "right-full mr-6"
                  }`}
                />
              )}
            </div>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};

export default Timeline;
