import { scheduleData } from "../data/schedule";
import AnimateOnScroll from "../components/AnimateOnScroll";
import Timeline from "../components/Timeline";

const Schedule = () => {
  // Merge all events from all days into a single array with added context
  const mergedEvents = scheduleData.flatMap((day) =>
    day.events.map((event) => ({
      ...event,
      dayTitle: day.nepalidate, // Include the day title for reference
      date: day.date, // Include the date for reference
    }))
  );

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AnimateOnScroll animation="slideUp">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Event Schedule
          </h1>
          <p className="text-gray-600 text-center mb-12">
            Plan your TechFest 2024 experience with our unified schedule
          </p>
        </AnimateOnScroll>

        <Timeline events={mergedEvents} />
      </div>
    </div>
  );
};

export default Schedule;
