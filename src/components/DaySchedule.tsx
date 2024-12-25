import React from "react";
import { DaySchedule as DayScheduleType } from "../data/schedule";
// import Timeline from "./Timeline";
import AnimateOnScroll from "./AnimateOnScroll";

interface DayScheduleProps {
  day: DayScheduleType;
  isActive: boolean;
}

const DaySchedule: React.FC<DayScheduleProps> = ({ day, isActive }) => {
  if (!isActive) return null;

  return (
    <AnimateOnScroll animation="slideUp">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">{day.dayTitle}</h2>
        <p className="text-gray-600 mb-6">{day.date}</p>
        {/* <Timeline events={day.events} /> */}
      </div>
    </AnimateOnScroll>
  );
};

export default DaySchedule;
