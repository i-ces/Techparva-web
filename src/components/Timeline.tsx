import React from "react";
import { MapPin, PartyPopper, User } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ScheduleEvent } from "../data/schedule";

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
    <VerticalTimeline animate={true} lineColor="#cccccc">
      {events.map((event, index) => {
        const eventDate = new Date(event.date);
        const isCompleted = eventDate < currentDate; 
        return (
          <VerticalTimelineElement
            key={index}
            date={event.time}
            contentStyle={{
<<<<<<< HEAD
              background: isCompleted ? "#FFCFCF" : "#F3F4FF", 
              color: isCompleted ? "#4C4B7E" : "#333",
              borderLeft: isCompleted
                ? "4px solid #F73C3C" // Dark purple 
                : "4px solid #3B82F6", // Blue 
=======
              background: isCompleted ? "#DCD8EA" : "#f9f9f9", // Gray background for completed events
              color: isCompleted ? "#8468F6" : "#333",
              borderLeft: isCompleted ? "4px solid #6544E8" : "4px solid #4CAF50", // Line color based on status
>>>>>>> master
            }}
            contentArrowStyle={{
              borderRight: isCompleted
                ? "7px solid #E0E7FF" // Purple shade 
                : "7px solid #F3F4FF", // Lighter 
            }}
            iconStyle={{
<<<<<<< HEAD
              background: isCompleted ? "#FAF4F4" : "#ffffff", // Purple for completed, Orange for upcoming
              color: "#fff", // White icon color
=======
              background: isCompleted ? "#E6E3F2" : "#f9f9f9", // Dimmed icon background for completed events
              color: isCompleted ? "#888" : "#333",
>>>>>>> master
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            icon={
              event.icon ? (
                <img
                  src={event.icon}
                  alt={event.title}
                  className="rounded-full h-8 w-8"
                />
              ) : (
                <PartyPopper className="h-6 w-6" />
              )
            }
          >
            <a
              href={event.isEvent ? `/events/${event.id}` : ""}
              className={`text-sm ${
                isCompleted ? "text-gray-500" : "text-gray-700"
              }`}
            >
              <h3
                className={`text-lg font-semibold ${
                  isCompleted ? "line-through" : ""
                }`}
              >
                {event.title}
              </h3>
              <p className="text-sm text-purple-600 font-medium mb-2">
                {event.dayTitle}
              </p>
              <p className="mb-4">{event.description}</p>
              {event.location && (
                <div className="flex items-center text-sm text-gray-600">
                  <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                  <span>{event.location}</span>
                </div>
              )}
              {event.speaker && (
                <div className="flex items-center text-sm text-gray-600">
                  <User className="h-4 w-4 mr-2 text-orange-500" />
                  <span>{event.speaker}</span>
                </div>
              )}
            </a>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};

export default Timeline;
