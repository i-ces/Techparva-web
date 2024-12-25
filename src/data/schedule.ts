export interface ScheduleEvent {
  time: string;
  title: string;
  description: string;
  speaker?: string;
  location?: string;
  type?: 'talk' | 'workshop' | 'panel' | 'break' | 'competition';
}

export interface DaySchedule {
  date: string;
  dayTitle: string;
  events: ScheduleEvent[];
}

export const scheduleData: DaySchedule[] = [
  {
    date: "March 15, 2024",
    dayTitle: "Day 1 - Innovation Day",
    events: [
      {
        time: "09:00 AM",
        title: "Opening Ceremony",
        description: "Welcome address and keynote speech",
        location: "Main Auditorium",
        type: "talk"
      },
      {
        time: "10:30 AM",
        title: "Future of AI",
        description: "Keynote presentation on AI trends",
        speaker: "Sarah Johnson",
        location: "Main Auditorium",
        type: "talk"
      },
      {
        time: "12:00 PM",
        title: "Networking Lunch",
        description: "Connect with fellow attendees",
        type: "break"
      },
      {
        time: "01:30 PM",
        title: "AI Workshop",
        description: "Hands-on Machine Learning workshop",
        speaker: "Michael Chen",
        location: "Workshop Hall A",
        type: "workshop"
      },
      {
        time: "04:00 PM",
        title: "Innovation Panel",
        description: "Industry leaders discuss tech innovation",
        location: "Main Auditorium",
        type: "panel"
      }
    ]
  },
  {
    date: "March 16, 2024",
    dayTitle: "Day 2 - Development Day",
    events: [
      {
        time: "09:00 AM",
        title: "Web3 Fundamentals",
        description: "Introduction to blockchain technology",
        speaker: "Emily Rodriguez",
        location: "Main Auditorium",
        type: "talk"
      },
      {
        time: "10:30 AM",
        title: "Cloud Computing Workshop",
        description: "Hands-on cloud deployment session",
        location: "Workshop Hall B",
        type: "workshop"
      },
      {
        time: "12:00 PM",
        title: "Lunch Break",
        description: "Networking lunch",
        type: "break"
      },
      {
        time: "01:30 PM",
        title: "Hackathon Kickoff",
        description: "24-hour coding competition begins",
        location: "Hackathon Zone",
        type: "competition"
      },
      {
        time: "03:00 PM",
        title: "Developer Tools Workshop",
        description: "Modern development workflow",
        location: "Workshop Hall A",
        type: "workshop"
      }
    ]
  },
  {
    date: "March 17, 2024",
    dayTitle: "Day 3 - Future Tech Day",
    events: [
      {
        time: "09:00 AM",
        title: "Hackathon Continues",
        description: "Ongoing development and mentoring",
        location: "Hackathon Zone",
        type: "competition"
      },
      {
        time: "12:00 PM",
        title: "Lunch Break",
        description: "Final networking lunch",
        type: "break"
      },
      {
        time: "01:30 PM",
        title: "Hackathon Presentations",
        description: "Teams present their projects",
        location: "Main Auditorium",
        type: "competition"
      },
      {
        time: "03:30 PM",
        title: "Awards Ceremony",
        description: "Recognition of hackathon winners",
        location: "Main Auditorium",
        type: "talk"
      },
      {
        time: "04:30 PM",
        title: "Closing Ceremony",
        description: "Event wrap-up and farewell",
        location: "Main Auditorium",
        type: "talk"
      }
    ]
  }
];