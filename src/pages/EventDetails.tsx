import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { events } from "../data/events";
import { Event } from "../data/events";

const EventDetails = () => {
  const [event, setEvent] = useState<Event | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    setEvent(events.find((event) => event.id === id) || null);
  }, [id]);

  if (!event) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-800 text-white">
        <h2 className="text-xl font-bold">Event not found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${event.image})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold">{event.title}</h1>
          <div className="mt-4 flex flex-col md:flex-row md:justify-center md:items-center gap-4">
            <span className="bg-gray-800 bg-opacity-80 px-4 py-2 rounded-lg text-lg font-medium">
              {event.nepalidate}
            </span>
            <span className="bg-gray-800 bg-opacity-80 px-4 py-2 rounded-lg text-lg font-medium">
              {event.time}
            </span>
            <span className="bg-gray-800 bg-opacity-80 px-4 py-2 rounded-lg text-lg font-medium">
              {event.location}
            </span>
          </div>
          <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition">
            Register Now
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="flex-1 bg-gray-100 px-6 md:px-16 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            About the event
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {event.description}
          </p>

          {event.rules && event.rules.length > 0 && (
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Rules</h3>
              <ul className="list-disc list-inside text-gray-700">
                {event.rules.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </div>
          )}

          {event.speakers.length > 0 && (
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Speakers
              </h3>
              <ul className="list-disc list-inside text-gray-700">
                {event.speakers.map((speaker, index) => (
                  <li key={index}>{speaker}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
