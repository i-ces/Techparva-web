import React from "react";
import { MapPin, PartyPopper, User } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ScheduleEvent } from "../data/schedule";

interface MergedScheduleEvent extends ScheduleEvent {
  dayTitle: string; // Include day title
  date: string; // Include date
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
        const isCompleted = eventDate < currentDate; // Check if the event date is in the past

        return (
          <VerticalTimelineElement
            key={index}
            date={event.time}
            contentStyle={{
              background: isCompleted ? "#e0e0e0" : "#f9f9f9", // Gray background for completed events
              color: isCompleted ? "#555" : "#333",
              borderLeft: isCompleted ? "4px solid #888" : "4px solid #4CAF50", // Line color based on status
            }}
            contentArrowStyle={{
              borderRight: isCompleted
                ? "7px solid #e0e0e0"
                : "7px solid #f9f9f9",
            }}
            iconStyle={{
              background: isCompleted ? "#ddd" : "#f9f9f9", // Dimmed icon background for completed events
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
            <a
              href={event.isEvent ? `/events/${event.id}` : ""}
              className={`text-sm ${
                isCompleted ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <h3
                className={`text-lg font-semibold ${
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
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};

export default Timeline;
