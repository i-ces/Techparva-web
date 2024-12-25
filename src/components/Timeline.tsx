import React from "react";
import { MapPin, User } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ScheduleEvent } from "../data/schedule";
// import { getEventTypeStyles } from "../utils/eventStyles";

interface MergedScheduleEvent extends ScheduleEvent {
  dayTitle: string; // Include day title
  date: string; // Include date
}

interface TimelineProps {
  events: MergedScheduleEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <VerticalTimeline animate={true} lineColor="#dddf">
      {events.map((event, index) => (
        <VerticalTimelineElement
          key={index}
          date={event.time}
          contentStyle={{ background: "#f9f9f9", color: "#333" }}
          contentArrowStyle={{ borderRight: "7px solid #f9f9f9" }}
          //   iconStyle={getEventTypeStyles(event.type)}
        >
          <a
            href={event.isEvent ? `/events/${event.id}` : ""}
            className="text-gray-600 text-sm"
          >
            <h3 className="text-lg font-semibold">{event.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{event.dayTitle}</p>
            <p className="text-gray-600 mb-4">{event.description}</p>
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
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
