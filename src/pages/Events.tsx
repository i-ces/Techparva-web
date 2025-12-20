import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { events } from "../data/events";
import EventCard from "../components/EventCard";
import AnimateOnScroll from "../components/AnimateOnScroll";

const Events = () => {
  const location = useLocation();

  // Define explicit categories: main events (specific titles), workshops, pre-events
  const mainTitles = [
    "Capture the Flag",
    "Design Incubation",
    "Datathon",
    "Code with Coffee",
  ];

  const categoryKeys = ["main", "workshop", "pre-event"];
  const categoryLabels: Record<string, string> = {
    "pre-event": "Pre-Events",
    "workshop": "Workshops",
    "main": "Main Events",
  };

  const queryType = new URLSearchParams(location.search).get("type") ?? "main";
  const initialType = categoryKeys.includes(queryType) ? queryType : "main";

  const [selectedType, setSelectedType] = useState<string>(initialType);

  const filteredEvents =
    selectedType === "main"
      ? events.filter((e) => mainTitles.includes(e.title))
      : selectedType === "workshop"
      ? events.filter((e) => e.type === "workshop" && !mainTitles.includes(e.title))
      : // pre-event: anything that's not a main event and not a workshop
        events.filter((e) => !mainTitles.includes(e.title) && e.type !== "workshop");

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimateOnScroll animation="slideUp">
          <h1 className="text-4xl font-bold mb-4 text-center">Events</h1>
          <p className="text-gray-600 text-center mb-8">
            Explore our exciting lineup of workshops, talks, and competitions
          </p>
        </AnimateOnScroll>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            {categoryKeys.map((key, idx) => (
              <button
                key={key}
                onClick={() => setSelectedType(key)}
                className={`
                  px-4 py-2 text-sm font-medium
                  ${
                    key === selectedType
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }
                  ${idx === 0 ? "rounded-l-md" : ""}
                  ${idx === categoryKeys.length - 1 ? "rounded-r-md" : ""}
                  border border-gray-200
                `}
              >
                {categoryLabels[key]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
