import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { events } from "../data/events";
import { Event } from "../data/events";

const EventDetails = () => {
  const [event, setEvent] = useState<Event | null>(null);
  const [timeLeft, setTimeLeft] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const eventData = events.find((event) => event.id === id) || null;
    setEvent(eventData);

    if (eventData) {
      const calculateTimeLeft = () => {
        const eventTime = new Date(eventData.date).getTime(); // Get event time in milliseconds
        const now = new Date().getTime(); // Get current time in milliseconds
        const diff = eventTime - now;

        if (diff <= 0) {
          setTimeLeft("Event Closed");
          return;
        }

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(diff / (1000 * 60 * 60 * 24)); // Days
        const hours = Math.floor(
          (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ); // Hours
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)); // Minutes
        const seconds = Math.floor((diff % (1000 * 60)) / 1000); // Seconds
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
        // Construct the countdown string
        const countdownString = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        setTimeLeft(countdownString);
      };

      calculateTimeLeft();
      const timer = setInterval(calculateTimeLeft, 1000);

      return () => clearInterval(timer); // Clean up the interval on component unmount
    }
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
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative z-10 text-center text-white px-4">
          {timeLeft === "Event Closed" ? (
            <h1 className="text-4xl md:text-6xl font-extrabold">
              Event Closed
            </h1>
          ) : (
            <div className="flex gap-4 justify-center items-center">
              {/* Countdown Box */}
              <div className="flex gap-4 items-center">
                <div className="flex flex-col items-center p-4 bg-gray-800 bg-opacity-80 rounded-lg w-24">
                  <span className="text-4xl font-extrabold text-white">
                    {days}
                  </span>
                  <span className="text-lg text-gray-200">Days</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-800 bg-opacity-80 rounded-lg w-24">
                  <span className="text-4xl font-extrabold text-white">
                    {hours}
                  </span>
                  <span className="text-lg text-gray-200">Hours</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-800 bg-opacity-80 rounded-lg w-24">
                  <span className="text-4xl font-extrabold text-white">
                    {minutes}
                  </span>
                  <span className="text-lg text-gray-200">Minutes</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-gray-800 bg-opacity-80 rounded-lg w-24">
                  <span className="text-4xl font-extrabold text-white">
                    {seconds}
                  </span>
                  <span className="text-lg text-gray-200">Seconds</span>
                </div>
              </div>
            </div>
          )}
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
          {timeLeft !== "Event Closed" && (
            <button className="mt-6 px-6 py-3 bg-[#F05924] hover:bg-[#D04E20] rounded-full text-lg font-semibold transition">
              <a href={event.formlink} target="_blank" rel="noreferrer">
                Register Now
              </a>
            </button>
          )}
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
